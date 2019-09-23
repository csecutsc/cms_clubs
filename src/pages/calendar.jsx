import React from 'react';
import { Container } from '@components';
import Loadable from 'react-loadable';
import '@styles/pages/Calendar.scss';
import '@styles/components/pages/Calendar/Calendar.scss'


export default class CalendarPage extends React.Component {
    calendarComponentRef = React.createRef()
    state = {
        calendarWeekends: true,
    }

    render() {
        const LoadableCallendar = Loadable({
            loader: () => import('../components/pages/Calendar/EventCalendar'),
            loading() {
                return <div>Loading...</div>
            }
        })
        return (

            <Container tag='main' block='calendar'>
                <h1 className='calendar__title'>Calendar</h1>
                <p className='calendar__text'>All the events that CMS clubs are hosting this year. Click the button below to add it your own calendar</p>
                <div className='demo-app'>
                    <div className='demo-app-top'>
                        <a className='events__link-button'
                            rel='noopener noreferrer' target='_blank'
                            href='https://calendar.google.com/calendar/b/2?cid=djJpYzQyb2tjbWZyZjk1NDY4bWd1MmhzOGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'
                        >
                            Add Google Calendar
                </a>
                    </div>
                    <LoadableCallendar />
                </div>
            </Container>
        );
    }
};

CalendarPage.meta = {
    seo: {
        title: 'Calendar'
    }
}