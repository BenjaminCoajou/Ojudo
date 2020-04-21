import { FETCH_ARTICLE_SUCCESS, INPUT_CHANGE, DELETE_ARTICLE } from '../../actions/Admin/articles';

const initialState = {
    list: [],
    newArticle: {
      title:'',
      content: '',
    },
    articleToDelete: '',
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
    case DELETE_ARTICLE:
      return {
        ...state,
        articleToDelete: action.payload,
      }
    default:
      return state;
      
  }
};

export default articles;