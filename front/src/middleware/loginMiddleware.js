import axios from 'axios';
import { SUBMIT_LOGIN, loginSuccess, loginError } from '../actions/login';

const loginMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case SUBMIT_LOGIN:
            axios({
                url:'',
                method: 'post',
                withCredentials: true,
                data: {
                    email: store.getState().login.form.email,
                    password: store.getState().login.form.password,
                },
            })
            .then((response) => {
                console.log(response);
                store.dispatch(loginSuccess(response.data.info));
            })
            .catch((error) => {
                console.log(error);
                store.dispatch(loginError())
            });
            break;
        default: 
        return next(action);    
    }
};

export default loginMiddleware;