import {
    EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER
} from '../actions/types';

const initialState = {
    email: '',
    password: '',
    user: null,
    errorMessage: '',
    loading: false
};

export default (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        // State is reference, need to make a copy to return 
        // otherwise the hasChanged === will just compare two references to the same object
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...initialState, user: action.payload };
        case LOGIN_USER_FAILED:
            return { ...state, loading: false, error: 'Authentication Failed' };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
};
