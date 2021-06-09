 /* eslint-disable */ 
import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext.js';
import authReducers from './authReducers.js';
import setToken from '../../utils/setToken.js'
import { FAIL_REGISTER, 
        SUCCESS_LOGIN,
        FAIL_LOGIN,
        SUCCESS_REGISTER,
        LOG_OUT,
        SET_USER
    } from '../types.js'

const AuthState = (props) => {
    const initialState = {
        user: null,
        userAuth:null,
        errors: null
    }
    const [state, dispatch] = useReducer(authReducers, initialState);

    //getUser

    const getUser = async () => {
if (localStorage.token) {
    setToken(localStorage.token)
}
try {
    const res = await axios.get('localhost:5000/auth');
    console.log(res.data)
    dispatch ({
        type: SET_USER,
        payload: res.data
    })
} catch (err) {
    console.log(err);

}
        
    }


    const registerUser = async user => {
        const config = {
            header: {
                'Content-Type': 'application/json',

            }
        }
        try {
            const res = await axios.post('http://localhost:5000/register', user, config);
            dispatch ({
                type: SUCCESS_REGISTER,
                payload: res.data

            })

        } catch (err) {
           console.error(err)
        }

    }

    const loginUser = async userData => {
        const config = {
            header : {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('http://localhost:5000/auth', userData, config)
            dispatch ({
                type: SUCCESS_LOGIN,
                payload: res.data
            })

        } catch (err) {
            dispatch ({
                type: FAIL_LOGIN,
                payload: err.response.data
            })

        }
    }

    const logout = () => {
        dispatch ({
            type: LOG_OUT
        })
    }

    return (
        <div>
            <AuthContext.Provider value={{
                user: state.user,
                userAuth: state.userAuth,
                registerUser,
                loginUser,
                logout,
                getUser
                }}
            >{props.children}
            </AuthContext.Provider>

        </div>
    )
}


export default AuthState