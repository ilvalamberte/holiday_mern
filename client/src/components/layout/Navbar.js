import React from 'react'

import {FcCalendar} from 'react-icons/fc'
import {FcBusinessman} from 'react-icons/fc'
import {FcTimeline} from 'react-icons/fc'
import {FcServices} from 'react-icons/fc'
import {FcPlus} from 'react-icons/fc'
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import Request from '../employee/Request.js'

const Navbar = () => {

    return (
 
        <nav>
        <ul>
          <li>
           
             <FcCalendar />
             <NavLink to='/calendarcomp'>
            <span>Calendar</span>
            </NavLink>
          </li>
          <li>
            <FcBusinessman />
            <NavLink to='/members'>
            <span>Members</span>
            </NavLink>
          </li>
          <li>
        <FcTimeline />
        <NavLink to='/holidays'>
            <span>My Holidays</span>
            </NavLink>
          </li>
          
          <li>
        < FcPlus />
        <NavLink to='/request'>
            <span>Request</span>
        </NavLink>
          </li>
      
          <li>
        <FcServices />
        <span>Edit Profile</span>
  </li>
        </ul>
      </nav>
      
    )


} 

export default Navbar