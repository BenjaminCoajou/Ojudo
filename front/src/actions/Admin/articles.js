export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const SUBMIT_ARTICLE = 'SUBMIT_ARTICLE'; 

export const fetchArticle = () => ({
    type: FETCH_ARTICLE
});
export const fetchArticleSuccess = (payload) => ({
    type: FETCH_ARTICLE_SUCCESS,
    payload,
});
export const inputChange = (payload) => ({
    type: INPUT_CHANGE,
    payload,
});
export const submitArticle = () => ({
    type: SUBMIT_ARTICLE,
})