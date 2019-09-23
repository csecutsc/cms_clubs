import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import googleCalendar from '@fullcalendar/google-calendar'
import { Container } from '@components';
import '@styles/pages/Calendar.scss';
import '@styles/components/pages/Calendar/Calendar.scss'


export default class CalendarPage extends React.Component {
    calendarComponentRef = React.createRef()
    state = {
        calendarWeekends: true,
    }
    render() {
        return (
            <Container tag='main' block='gallery'>
                <h1 className='gallery__title'>Calendar</h1>
                <p className='gallery__text'>All the events that CMS clubs are hosting this year. Click the button below to add it your own calendar</p>
                <div className='demo-app'>
                    <div className='demo-app-top'>
                        <a className='events__link-button'
                            rel='noopener noreferrer' target='_blank'
                            href='https://calendar.google.com/calendar/b/2?cid=djJpYzQyb2tjbWZyZjk1NDY4bWd1MmhzOGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'
                        >
                            Add Google Calendar
                </a>
                    </div>
                    <div className='demo-app-calendar'>
                        <FullCalendar
                            defaultView="dayGridMonth"
                            header={{
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                            }}
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, googleCalendar]}
                            ref={this.calendarComponentRef}
                            weekends={this.state.calendarWeekends}
                            events='v2ic42okcmfrf95468mgu2hs8g@group.calendar.google.com'
                            googleCalendarApiKey='AIzaSyCb02sStRI4-i35sG2UMchOrs7pKDBrLq0'
                        />
                    </div>
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