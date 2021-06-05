import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext.js';
import authReducers from './authReducers.js'
import { FAIL_REGISTER, 
        SUCCESS_LOGIN,
        FAIL_LOGIN,
        SUCCESS_REGISTER
    } from '../types.js'

const AuthState = (props) => {
    const initialState = {
        userAuth:null,
        errors: null
    }
    const [state, dispatch] = useReducer(authReducers, initialState);


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

    return (
        <div>
            <AuthContext.Provider value={{
                userAuth: state.userAuth,
                registerUser,
                loginUser

                }}
            >{props.children}
            </AuthContext.Provider>

        </div>
    )
}


export default AuthState