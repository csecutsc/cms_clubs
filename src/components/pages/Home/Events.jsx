import React, { useState, useEffect } from 'react';
import { Container } from '@components';
import '@styles/components/pages/Home/Events.scss';
import { FormatDate } from '@util';

// Assume we're gonna fetch from database or google calendar API anyways
const _events = [
    {
        name: 'UTSC Welcome Day',
        description: '',
        from: '2019-08-26T18:20:20.225Z',
        to: '2019-08-29T18:20:20.225Z',
        groups: [
            'DEPARTMENT OF STUDENT LIFE',
            'AMACSS'
        ]
    },
    {
        name: 'First Year Mix & Mingle',
        description: '',
        from: '2019-08-26T18:20:20.225Z',
        to: '2019-08-29T18:20:20.225Z',
        groups: [
            'AMACSS',
            'CSEC',
            'WiCSM'
        ]
    },
    {
        name: 'HubSpot Ice Cream Social',
        description: 'Start your year off by networking with HubSpot over some ice cream. Learn more about this software company and how you can land an internship or full time opportunity in the States!',
        from: '2019-08-26T18:20:20.225Z',
        to: '2019-08-29T18:20:20.225Z',
        groups: [
            'WiCSM',
            'HubSpot'
        ]
    },
    {
        name: 'WiCSM Mix and Mingle',
        description: 'Meet your fellow first year CMS students, participate in fun games and ice-breakers, and get involved with WiCSM with some free pizza!',
        from: '2019-08-26T18:20:20.225Z',
        to: '2019-08-29T18:20:20.225Z',
        groups: [
            'WiCSM',
            'HubSpot'
        ]
    },
    {
        name: 'CSEC Orientation',
        description: 'Learn about the Computer Science Enrichment Club and the upcoming projects and events to accelerate your career!',
        from: '2019-08-26T18:20:20.225Z',
        to: '2019-08-29T18:20:20.225Z',
        groups: [
            'CSEC'
        ]
    },
    {
        name: 'Gaming Night 1.0',
        description: '',
        from: '2019-08-26T18:20:20.225Z',
        to: '2019-08-29T18:20:20.225Z',
        groups: [
            'AMACSS'
        ]
    },
    {
        name: 'First Year Rep Elections',
        description: '',
        from: '2019-08-26T18:20:20.225Z',
        to: '2019-08-29T18:20:20.225Z',
        groups: [
            'AMACSS'
        ]
    }
];

const format = d => d.getWeek(false, ' ').getMonth(false, ' ').getDay().format();
const dateRange = (from, to) => {
    const f = new FormatDate(from);
    const t = new FormatDate(to);
    return `${format(f)} - ${format(t)}`;
};

export const Events = () => {
    // Mock fetch (placeholder)
    const [events, setEvents] = useState();
    useEffect(() => {
        const timer = window.setTimeout(() => {
            setEvents(_events);
        }, 1000);
        return () => window.clearTimeout(timer);
    }, []);

    return (
        <Container tag='section' block='events' className='home__section'>
            <div className='events__header'>
                <h2 className='events__title'>Events</h2>
                <a className='events__link-button'
                    rel='noopener noreferrer' target='_blank'
                    href='https://bongo.cat'
                >
                    More Events
                </a>
            </div>
            <ul className='events__list'>
                {
                    events ? (
                        events.map(({ name, description, from, to, groups }, i) => (
                            <li
                                className='events__item'
                                key={ i }
                            >
                                <div className='events__item-header'>
                                    <h3 className='events__item-title'>{ name }</h3>
                                    <span className='events__item-date'>
                                        { dateRange(from, to) }
                                    </span>
                                </div>
                                <ul className='events__groups'>
                                    {
                                        groups.map((group, j) => (
                                            <li key={ j } className='events__group'>
                                                { group }
                                            </li>
                                        ))
                                    }
                                </ul>
                                <p className='events__item-text'>{ description }</p>
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