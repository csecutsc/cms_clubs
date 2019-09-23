import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import googleCalendar from '@fullcalendar/google-calendar'
import '@styles/pages/Calendar.scss';
import '@styles/components/pages/Calendar/Calendar.scss'


export default class EventCalendar extends React.Component {
    calendarComponentRef = React.createRef()
    state = {
        calendarWeekends: true,
    }

    render() {
        return (
            
                <div className='demo-app'>
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
        );
    }
};