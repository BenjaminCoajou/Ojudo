import axios from 'axios';
import { FETCH_EVENTS, fetchEventsSuccess, fetchRecipesError } from '../actions/calendar';

const calendarMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case FETCH_EVENTS:
            axios.get('http://54.166.4.90/projet-judo/back/public/index.php/api/events')
            .then((response) => {
                console.log('events', response.data['hydra:member']);
                store.dispatch(fetchEventsSuccess(response.data['hydra:member']));
            })
            .catch((error) => {
                console.log('erreur lors de la connexion à l\'api');
                store.dispatch(fetchRecipesError());
            })
            break;        
        default:
            next(action);
    }
};

export default calendarMiddleware;