import { FETCH_ARTICLE_SUCCESS, INPUT_CHANGE } from '../../actions/Admin/articles';

const initialState = {
    list: [],
    newArticle: {
      title:'',
      content: '',
    },
};

const articles = (state = initialState, action = {}) => {
  switch (action.type) {
     case FETCH_ARTICLE_SUCCESS:
     return {
         ...state,
         list: [...action.payload],
     }
     case INPUT_CHANGE:
       return {
         ...state,
         newArticle : {
           ...state.newArticle,
           ...action.payload,
         }
       }
    default:
      return state;
  }
};

export default articles;