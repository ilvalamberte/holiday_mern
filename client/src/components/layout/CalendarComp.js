 /* eslint-disable */ 
import React, {useContext} from 'react';
import HolidayContext from '../../context/holidayContext/HolidayContext.js'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import CompNav from '../../components/layout/CompNav.js'
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);
const now = new Date();
const events = [
    {
    id: 0,
    title : 'Sandra',
    start: new Date(2021, 4, 3),
    end: new Date(2021, 4, 6)
    },
    {
        id: 0,
        title : 'John',
        start: new Date(2021, 5, 0),
        end: new Date(2021, 5, 1)
    },
    {
        id: 1,
        title : 'Lily',
        start: moment({ hours : 12}).toDate(),
        end: moment({hours: 13}).toDate()
    },
    {
        id: 2,
        title : 'Meeting',
        start: moment({ hours : 13}).toDate(),
        end: moment({hours: 15}).toDate()
    }
];

const CalendarComp = () => {
  const {toggleFilter} = useContext(HolidayContext)

    return (
      /* 
      <CompNav />
     */
    <div className="container">
      <CompNav />
      <div className="main">
     
        <header>

        <label class="label">
<div class="toggle">
  <input class="toggle-state" type="checkbox" name="check" value="check" onChange={()=> toggleFilter() }/>
  <div class="indicator"></div>
</div>
<div class="label-text">ACCEPTED</div>
</label>

        </header>

        <Calendar
        style={{height:700}}
        events={events}
        localizer={localizer}
        components={
          {
            eventWrapper: ({ event, children }) => (
              <div
                onContextMenu={
                  e => { 
                    alert(`${event.title} is clicked.`);
                    e.preventDefault();
                  }
                }
              >
                {children}
              </div>
            )
          }
        }
      />
      </div>
      </div>
    )
}

export default CalendarComp