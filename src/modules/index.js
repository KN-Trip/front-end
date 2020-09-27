import { combineReducers } from 'redux';
import testOneFilter from './testOneFilter';
import testTwoFilter from './testTwoFilter';
import testIndex from './testIndex';
import login from './login';
import signup from './signup';
import logout from './logout';
import testpost from './testpost';
import mypage from './mypage';
import tripinfo from './tripinfo';
import couple from './couple';

const rootReducer = combineReducers({
  testIndex,
  testOneFilter,
  testTwoFilter,
  login,
  signup,
  logout,
  testpost,
  mypage,
  tripinfo,
  couple,
});

export default rootReducer;
