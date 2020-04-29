import {MAIL_CHANGE} from '../actions/contact';

const initialState = {
    form: {
        email: '',
        title: '',
        content: '',
    },
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case MAIL_CHANGE:
            return {
                ...state,
                form: {
                    ...state.form,
                    ...action.payload,
                }
            }
            default:
                return state;
    }
};

