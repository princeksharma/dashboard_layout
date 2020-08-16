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

const initialState = {
    token :localStorage.getItem('token'),
    isAuthenticated : null,
    isLoading :false,
    student: null 
}

export default function(state = initialState, action) {
    switch(action.type) {
        case STUDENT_LOADING: 
        return {
            ...state,
            isLoading: true
        }
        case STUDENT_LOADED: 
        return {
            ...state,
            isAuthenticated: true,
            isLoading: false,
            student: action.payload
        }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        localStorage.setItem('token',action.payload.token)
        return{
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false,
        }
        case AUTH_ERROR:
        case LOGIN_FAIL: 
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS: 
        localStorage.removeItem('token');
        return {
            ...state,
            token: null,
            student: null,
            isAuthenticated: false,
            isLoading: false
        }
        default: 
        return state
    }
}