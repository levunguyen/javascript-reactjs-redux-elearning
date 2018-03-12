import * as AuthConstants from '../constants/authConstants';

const stateInitialize = {}

var authReducer = (state = stateInitialize, action) => {
    switch (action.type) {
        case AuthConstants.LOGIN_REQUEST:
            return {};
        case AuthConstants.LOGIN_SUCCESS:
            return action.user;
        case AuthConstants.LOGIN_FAILURE:
            return { ...state ,error: action.error };
        case AuthConstants.LOGOUT_REQUEST:
            return state;
        case AuthConstants.LOGOUT_SUCCESS:
            return {};
        case AuthConstants.LOGOUT_FAILURE:
            return {...state , error: action.error};
        case AuthConstants.CHECK_AUTH:
            return action.dataLocalStorage;
        default:
            return state;
    }
}

export default authReducer;
