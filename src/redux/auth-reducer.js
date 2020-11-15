import Cookies from 'js-cookie'
import { reset, stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';

const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAIL = 'LOAD_USER_FAIL';

const AUTHENTICATED_SUCCESS = 'AUTHENTICATED_SUCCESS';
const AUTHENTICATED_FAIL = 'AUTHENTICATED_FAIL';

const PASSWORD_RESET_CONFIRM_SUCCESS = 'PASSWORD_RESET_CONFIRM_SUCCESS';
const LOGOUT = 'LOGOUT';





let initialState = {
    access: Cookies.get('access'),
    isAuth: false,
    user: {},       

    confirmSuccess: false,
    isAdmin: 'Психолог',
    isSuperPsy: 'СуперПсихолог',
    isPsy: 'Администратор',
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                access: payload.access
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuth: true
            }
        case PASSWORD_RESET_CONFIRM_SUCCESS:
            return {
                ...state,
                confirmSuccess: action.confirmSuccess
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuth: false,
            }
        case LOAD_USER_FAIL:
            return {
                ...state,
                user: null
            }
        case LOGIN_FAIL:
        case LOGOUT:
            Cookies.remove('access');
            return {
                ...state,
                access: null,
                isAuth: false,
                user: null,
            }
        default:
            return state;
    }
}

const setConfirmSuccess = ( confirmSuccess ) => ({ type: PASSWORD_RESET_CONFIRM_SUCCESS, confirmSuccess });

export const checkAuthThunk = () => async (dispatch) => {
    if (Cookies.get('access')) {
        dispatch({ type: AUTHENTICATED_SUCCESS });
    }
    else {
        dispatch({ type: AUTHENTICATED_FAIL });
    }
}

export const loadUserThunk = () => async (dispatch) => {
    if (Cookies.get('access')) {
        try {
            let data = await authAPI.loadUser();
            console.log(data);
            dispatch({ type: LOAD_USER_SUCCESS, payload: data });
            
        } catch(err) {
            dispatch({ type: LOAD_USER_FAIL });
        }
    }else {
        dispatch({ type: LOAD_USER_FAIL });
    }
}


export const loginThunk = (email, password, remember_me) => async (dispatch) => {
    try {
        let data = await authAPI.login(email,password);
        let deedline = remember_me ? 7:1;
        Cookies.set('access', data.access, { expires: deedline });
        dispatch({ type: LOGIN_SUCCESS, payload: data });
        
        dispatch(loadUserThunk());

    } catch(err) {
        dispatch(stopSubmit("login", {_error: "Неправильный адрес электронной почты или пароль"}))
        dispatch({ type: LOGIN_FAIL });
    }
}

export const resetPasswordThunk = (email) => async (dispatch) => {
    try {
        await authAPI.resetPassword(email);
        dispatch(reset("email_recovery"));
    } catch (err) {
        console.log(err)
    }
}

export const resetConfirmThunk = (uid, token, new_password, re_new_password) => async (dispatch) => {
    if (new_password === re_new_password) {
        try {
            await authAPI.confirmPassword(uid, token, new_password);
            dispatch(setConfirmSuccess(true))
        } catch (err) {
            console.log(err);
        }   
    } 
    else {
        dispatch(stopSubmit("password_recovery", {_error: " Пароли не совпадают. Введите повторно пароль и подтверждение."}))
    }
}

export const logoutThunk = () => (dispatch) => {
    dispatch({ type: LOGOUT });
}


export default authReducer;