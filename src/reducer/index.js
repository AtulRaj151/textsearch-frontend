import { combineReducers } from "redux";
import question from "./questions";
import search from "./search";
export default combineReducers({
  question,
  search,
});
