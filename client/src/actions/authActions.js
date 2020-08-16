import axios from 'axios';
import {returnErrors} from './errorActions';

import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    STUDENT_LOADED,
    STUDENT_LOADING,
    AUTH_ERROR,
    LOGOUT_SUCCESS
} from '../actions/Types';

export const loadStudent = () => (dispatch, getState) => {
    dispatch({ type: STUDENT_LOADING});
    
    const token = getState().auth.token;
    
    const config = {
        headers: {
            "Content-type" : "application/json"
        }
    }
    if(token) {
        config.headers['auth-token'] = token;
    }

    axios.get('/api/auth/student', config )
    .then(res => dispatch({
        type: STUDENT_LOADED,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        })
    });
}