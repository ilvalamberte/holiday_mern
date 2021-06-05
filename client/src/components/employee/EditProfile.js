import React from 'react'
import CompNav from '../layout/CompNav.js'
import { FcCalendar } from 'react-icons/fc'


const EditProfile = () => {

    return (  

        <body>
   
        <div className="container">
        <CompNav />
        
          <div className="main">
            <header>
              <h4>Logo</h4>
 
            </header>
        
            <div className="section">
            <div className="mail-detail">
 
 <div className="mail-contents">
  <div className="mail-contents-subject">
   <input type="checkbox" name="msg" id="mail20" className="mail-choice" checked />
   <label for="mail20"></label>

  </div>
  <div className="mail">
   <div className="mail-time">

    
   </div>

   <div className="mail-checklist">
   <input type="text" title="username" placeholder="Date" />

   </div>
   <div className="mail-checklist">
   <input type="text" title="username" placeholder="Type of Holiday" />

   </div>
   <div className="mail-checklist">
   <input type="text" title="username" placeholder="Holiday Title" />

   </div>


   <div className="mail-checklist">
   <input type="text" title="username"  placeholder="Write a comment..." />

   </div>

   <div class="buttons">
<div class="button">Update</div>

</div>

  </div>
 </div>

 </div>
        
            </div>
          </div>
        </div>
        </body>

        
    )

}

export default EditProfile