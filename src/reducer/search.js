import {
  UPDATE_SEARCH_QUESTION,
  SHOW_HOME_PAGE,
  SHOW_ADD_BUTTON,
} from "../action/actionTypes";

// reducer for search results
const initialSearchState = {
  result: [],
  showSearchResults: false,
};
export default function search(state = initialSearchState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_QUESTION:
      return {
        ...state,
        result: action.question,
        showSearchResults: true,
      };
    case SHOW_HOME_PAGE:
      return {
        showSearchResults: false,
      };
    case SHOW_ADD_BUTTON:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
}
