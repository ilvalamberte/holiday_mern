 /* eslint-disable */ 
import React, {useState, useContext, useEffect} from 'react';
import AuthContext from '../../context/authContext/authContext.js'
import {Link} from 'react-router-dom'


const Login = (props) => {

    const {loginUser, userAuth} = useContext(AuthContext);

    useEffect (() => {
        if (userAuth) {
            props.history.push('/members')
        }

    }, [userAuth, props.history]);

    console.log(userAuth);

    const [user, setUser] = useState({
        email:'',
        password: ''
    })

    const {email, password} = user

    const handleChange = (e) => {
       
        setUser({...user, 
        [e.target.name] : e.target.value})
    }
    const submit = (e) => {
        e.preventDefault();
        console.log(user);
        loginUser(user)
        setUser({
            email:'',
            password: ''
        }) 
    }
    return (
        <div className="register">
            <h1>Login</h1>
            <form onSubmit={submit} class="loginForm">
              
                <input type="email" name="email" type="email" placeholder="email" value={email} onChange={handleChange}></input>
                <input type="password" name="password" placeholder="password" value={password} onChange={handleChange}></input>
                <input type="submit" value="Sign Up" className="buttonSign"></input>
            </form>
            <div className="question">
                <p>Already have an account? <Link to="/register">Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login