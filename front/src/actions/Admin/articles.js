export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';

export const fetchArticle = () => ({
    type: FETCH_ARTICLE
});
export const fetchArticleSuccess = (payload) => ({
    type: FETCH_ARTICLE_SUCCESS,
    payload,
});