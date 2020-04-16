import { LOGIN_SUCCESS, LOGIN_ERROR, SETTINGS_CHANGE, SUBMIT_LOGOUT } from '../actions/login';



const initialState = {
    isLogged: false,
    loggedMessage:'',
    error: '',
    form: {
        email: '',
        password: '',
    },
    tokken: '',
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedMessage: 'Vous êtes connecté',
                isLogged : true,
                error: '',
                tokken: action.payload,
            };
        
        case LOGIN_ERROR:
            return {
                ...state,
                isLogged: false,
                error: 'Identifiants incorrects',
            };
        
        case SETTINGS_CHANGE:
            return {
                ...state,
                form: {
                    ...state.form,
                    ...action.payload,
                }
            };
        case SUBMIT_LOGOUT: 
        return {
            ...state,
            form: {
                email: '',
                password: '',
            },
            tokken: '',
            isLogged: false,
            error: '',
            loggedMessage: '',
        };
        default:
            return state;
    }
};