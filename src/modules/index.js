import { combineReducers } from "redux";
import testOneFilter from "./testOneFilter";
import testTwoFilter from "./testTwoFilter";
import testIndex from "./testIndex";
import login from "./login";
import signup from "./signup";

const rootReducer = combineReducers({
  testIndex,
  testOneFilter,
  testTwoFilter,
  login,
  signup,
});

export default rootReducer;
