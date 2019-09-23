import React, { useState, useEffect } from 'react';
import { Container } from '@components';
import '@styles/components/pages/Home/Events.scss';
import { FormatDate } from '@util';

const format = d => d.getWeek(false, ' ').getMonth(false, ' ').getDay().format();
const dateRange = (from, to) => {
    const f = new FormatDate(from);
    const t = new FormatDate(to);
    return `${format(f)} - ${format(t)}`;
};

export const Events = () => {
    //best hook ever
    async function _getEvents() {
        const mykey = 'AIzaSyCb02sStRI4-i35sG2UMchOrs7pKDBrLq0'; // typically like Gtg-rtZdsreUr_fLfhgPfgff
        const calendarid = 'v2ic42okcmfrf95468mgu2hs8g@group.calendar.google.com'; // will look somewhat like 3ruy234vodf6hf4sdf5sd84f@group.calendar.google.com
        const res = await fetch(encodeURI('https://www.googleapis.com/calendar/v3/calendars/' + calendarid + '/events?key=' + mykey), {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        return res.json().then(res => {
            // xd
            const filterDates = res.items.filter(({start}) => new Date(start.dateTime) > (Date.now() - 1));
            const data = filterDates.map(({ summary, description, location, start, end }, i) => {
                const lines = description.split('|');
                const groups = lines[0].split(',');
                const desc = (lines[1]) ? lines[1].replace(/<br>/g, " "): "" ;
                return ({
                    "name": summary,
                    "description": desc,
                    "location": location,
                    "from": start.dateTime,
                    "to": end.dateTime,
                    groups: groups
                })
            })
            setEvents(data)
        });
    };
    // Mock fetch (placeholder)
    const [events, setEvents] = useState();
    useEffect(() => {
        _getEvents();
    }, []);

    return (
        <Container tag='section' block='events' className='home__section'>
            <div className='events__header'>
                <h2 className='events__title'>Events</h2>
                <a className='events__link-button'
                    rel='noopener noreferrer'
                    href='/calendar'
                >
                    More Events
                </a>
            </div>
            <ul className='events__list'>
                {
                    events ? (
                        events.map(({ name, description, from, to, groups, location }, i) => (
                            <li
                                className='events__item'
                                key={i}
                            >
                                <div className='events__item-header'>
                                    <h3 className='events__item-title'>{name}</h3>
                                    <span className='events__item-date'>
                                        {dateRange(from, to)}
                                    </span>
                                </div>
                                <ul className='events__groups'>
                                    {
                                        groups.map((group, j) => (
                                            <li key={j} className='events__group'>
                                                {group}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <p className='events__item-text' dangerouslySetInnerHTML={{ __html: description }}></p>
                            </li>
                        ))
                    ) : (
                            <li className='events__loading'>Loading...</li>
                        )
                }
            </ul>
        </Container>
    );
};