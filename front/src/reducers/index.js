import { combineReducers } from 'redux';
import calendar from './calendar';
import login from './login';
import users from './Admin/users';
import articles from './Admin/articles';

export default combineReducers({
  calendar,
  login,
  users,
  articles,
});
