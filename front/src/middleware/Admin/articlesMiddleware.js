import { FETCH_ARTICLE, fetchArticleSuccess } from '../../actions/Admin/articles';
import axios from 'axios';

export default (store) => (next) => (action) => {

    switch(action.type) {

        case FETCH_ARTICLE:
            axios.get('http://54.166.4.90/projet-judo/back/public/index.php/api/articles')
            .then((response) => {
                console.log('ok', response)
                store.dispatch(fetchArticleSuccess(response.data["hydra:member"]))
            })
            .catch((error) => {
                console.log(error, 'erreur avec api')
            })
            break;

        default:
            next(action);
    }


  };
  