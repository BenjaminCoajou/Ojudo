import { FETCH_ARTICLE_SUCCESS } from '../../actions/Admin/articles';

const initialState = {
    list: [],
};

const articles = (state = initialState, action = {}) => {
  switch (action.type) {
     case FETCH_ARTICLE_SUCCESS:
     return {
         ...state,
         list: [...action.payload],
     }
    default:
      return state;
  }
};

export default articles;