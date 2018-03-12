import * as authConstant from '../../constants/authConstants';
import axios from 'axios';

export function loginRequest(){
    return {
        type: authConstant.LOGIN_REQUEST,
    };
}

export function checkAuth(dataLocalStorage){
    return {
        type : authConstant.CHECK_AUTH,
        dataLocalStorage
    }
}

export function loginSuccess(user){
    return {
        type: authConstant.LOGIN_SUCCESS,
        user
    };
}

export function loginFailure(error){
    return {
        type: authConstant.LOGIN_FAILURE,
        error
    };
}

export function logoutRequest(){
    return {
        type: authConstant.LOGOUT_REQUEST,
    };
}

export function logoutSuccess(){
    return {
        type: authConstant.LOGOUT_REQUEST,
    };
}

export function logoutFailure(error){
    return {
        type: authConstant.LOGOUT_REQUEST,
        error
    };
}

export function login(username , password){
    return dispatch => {
        let user = {
            username : username,
            password : password,
        }
        return axios.post('http://....',{user}).then( res => {
            if(res.data.status === true){
                dispatch(loginSuccess(res.data));
            }else{
                dispatch(logoutFailure(res.data.text));
            }
        }).catch(error => {
            dispatch(loginFailure(error));
        });
    }
}

export function logout(accessToken){
    return dispatch => {
        return axios.post('http://....'+accessToken).then( res => {
            if(res.data.status === true){
                localStorage.removeItem("user");
                dispatch(logoutSuccess());
                 
            }else{
                dispatch(loginFailure(res.statusText));
            }
        }).catch(error => {
            dispatch(loginFailure(error));
        })
    }
}

export function checkAuthAction(isLoading){
    return function(dispatch){
        let user = localStorage.getItem("user");
        dispatch(checkAuth(user));
    }
  }