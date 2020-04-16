import axios from 'axios';
import { SUBMIT_LOGIN, loginSuccess, loginError } from '../actions/login';

const loginMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case SUBMIT_LOGIN:
            axios({
                url:'http://localhost:8001/api/login_check',
                method: 'post',
                withCredentials: true,
                data: store.getState().login.form,
                
            })
            .then((response) => {
                console.log('coucou', response);
                //store.dispatch(loginSuccess(response.data.info));
            })
            .catch((error) => {
                console.log(store.getState().login.form.email);
                store.dispatch(loginError())
            });
            break;
        default: 
        return next(action);    
    }
};

export default loginMiddleware;