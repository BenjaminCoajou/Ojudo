import { combineReducers } from 'redux';
import counter from './counter';
import calendar from './calendar';
import login from './login';

export default combineReducers({
  counter,
  calendar,
  login,
});
