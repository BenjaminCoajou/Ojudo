import { combineReducers } from 'redux';
import calendar from './calendar';
import login from './login';
import users from './Admin/users'

export default combineReducers({
  calendar,
  login,
  users,
});
