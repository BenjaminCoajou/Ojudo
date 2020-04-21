export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const SUBMIT_ARTICLE = 'SUBMIT_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const DELETE_ARTICLE_SUBMIT = 'DELETE_ARTICLE_SUBMIT';
export const MODIFY_ARTICLE = 'MODIFY_ARTICLE';
export const MODIFY_ARTICLE_SUBMIT = 'MODIFY_ARTICLE_SUBMIT';
export const MODIFY_ARTICLE_CHANGE = 'MODIFY_ARTICLE_CHANGE';

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
});
export const deleteArticle = (payload) => ({
    type: DELETE_ARTICLE,
    payload,
});
export const deleteArticleSubmit = () => ({
    type: DELETE_ARTICLE_SUBMIT,
});
export const modifyArticle = (payload) => ({
    type: MODIFY_ARTICLE,
    payload,
});
export const modifyArticleSubmit = () => ({
    type: MODIFY_ARTICLE_SUBMIT,
})

export const modifyArticleChange = (payload) => ({
    type: MODIFY_ARTICLE_CHANGE,
    payload,
})