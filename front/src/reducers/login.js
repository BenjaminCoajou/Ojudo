import { LOGIN_SUCCESS, LOGIN_ERROR, SETTINGS_CHANGE } from '../actions/login';


const initialState = {
    isLogged: false,
    loggedMessage:'',
    error: '',
    form: {
        email: '',
        password: '',
    },
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedMessage: 'Vous êtes connecté',
                isLogged : true,
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

        default:
            return state;
    }
};