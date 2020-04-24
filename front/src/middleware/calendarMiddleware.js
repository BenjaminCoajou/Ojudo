import axios from 'axios';
import { FETCH_EVENTS, DISPLAY_EVENT, fetchEventsSuccess, fetchRecipesError } from '../actions/calendar';

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
            case DISPLAY_EVENT:
                axios.get('https://api-adresse.data.gouv.fr/search/?q=33+avenue+du+maine+paris&postcode=75015')
                .then((response) => {
                    console.log('map', response.data.features[0].geometry.coordinates)
                })
                .catch((error) => {
                    console.log('erreur map', error)
                })
        default:
            next(action);
    }
};

export default calendarMiddleware;