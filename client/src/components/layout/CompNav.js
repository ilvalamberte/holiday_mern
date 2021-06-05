import React from 'react'

import {FcCalendar} from 'react-icons/fc'
import {FcBusinessman} from 'react-icons/fc'
import {FcTimeline} from 'react-icons/fc'
import {FcServices} from 'react-icons/fc'
import {FcPlus} from 'react-icons/fc'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Request from '../employee/Request.js'
import Navbar from './Navbar.js'

const CompNav = () => {

    return (
        <div className="aside">
        <div className="user">
          <div>
            <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="User photo" />
          </div>
          <div className="user__info">
            <h4>Chris Warner</h4>
            <p>Auckland, NZ</p>
          </div>
    
        </div>
     <Navbar />
     <div className="logoutBtn">
         Logout
     </div>
    
      </div>
    )


} 

export default CompNav