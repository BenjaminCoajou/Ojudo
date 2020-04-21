import { FETCH_ARTICLE, fetchArticleSuccess, SUBMIT_ARTICLE, DELETE_ARTICLE_SUBMIT, MODIFY_ARTICLE_SUBMIT } from '../../actions/Admin/articles';
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
        case SUBMIT_ARTICLE:
            axios({
                url: 'http://54.166.4.90/projet-judo/back/public/index.php/api/articles',
                method: 'post',
                withCredentials: false,
                data:  {
                    title: store.getState().articles.newArticle.title,
                    content: store.getState().articles.newArticle.content,
                },
            })
            .then((response) => {
                console.log('nouveau article', response);
            })
            .catch((error) => {
                console.log('erreur de l\'envoie de l\'article',error )
            });
            break;
            case DELETE_ARTICLE_SUBMIT:
                axios({
                    url: `http://54.166.4.90/projet-judo/back/public/index.php/api/articles/${store.getState().articles.articleToDelete}`,
                    method: 'delete',
                    withCredentials: false,                    
                })
                .then((response) => {
                    console.log('article supprimé', response)
                })
                .catch((error) => {
                    console.log('erreur de la suppression')
                })
                break;
            case MODIFY_ARTICLE_SUBMIT:
                axios({
                    url: `http://54.166.4.90/projet-judo/back/public/index.php/api/articles/${store.getState().articles.articleToEdit.id}`,
                    method: 'put',
                    withCredentials: false,
                    data:  {
                        title: store.getState().articles.articleToEdit.title,
                        content: store.getState().articles.articleToEdit.content,
                    },                    
                })
                .then((response) => {
                    console.log('article modifié', response)
                })
                .catch((error) => {
                    console.log('erreur de la modification')
                })
                break;

        default:
            next(action);
    }


  };
  