 /* eslint-disable */ 
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AuthState from './context/authContext/authState.js'
import Home from './components/pages/Home.js'
import Request from './components/employee/Request.js'
import Holidays from './components/employee/Holidays.js'
import Holiday from './components/employee/Holiday.js'
import HolidayState from './context/holidayContext/HolidayState.js'
import Navbar from '../src/components/layout/Navbar.js'
import EditProfile from './components/employee/EditProfile.js'
import CalendarComp from './components/layout/CalendarComp.js'
import Register from './components/pages/Register.js'
import Login from './components/pages/Login.js'
import AdminPage from './components/layout/AdminPage';
import PrivateRoute from '../src/components/pages/routes/PrivateRoute.js'
import setToken from '../src/utils/setToken.js'


//if there is a token in local, assign it to setToken
if (localStorage.token) {
  setToken(localStorage.token)
}

function App() {

  return (

<div>
  <AuthState>
  <HolidayState>
  <Router>
    <Switch>
<Route path="/editpr" component={EditProfile} />  
<Route path="/request" component={Request} />  
<PrivateRoute path="/members" component={Home} />
<PrivateRoute path="/holidays" component={Holidays} />
<PrivateRoute path="/navbar" component={Navbar} />
<PrivateRoute path="/calendarcomp" component={CalendarComp} />
<PrivateRoute path="/holiday" component={Holiday} />
<Route path="/login" component={Login} />
<Route path="/register" component={Register} />
<Route path="/admin" component={AdminPage} />
  </Switch>
  </Router>
  </HolidayState>
  </AuthState>
  </div>
  );

}

export default App;
