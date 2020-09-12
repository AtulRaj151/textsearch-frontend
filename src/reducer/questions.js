import {
  SHOW_ADD_BUTTON,
  SHOW_HOME_PAGE,
  UPDATE_QUESTION,
  UPDATE_SEARCH_QUESTION,
} from "../action/actionTypes";

const initialQuestionState = {
  questions: [],
  isVisibleHomePage: true,
  isVisibleAddButton: false,
};

export default function question(state = initialQuestionState, action) {
  switch (action.type) {
    case UPDATE_QUESTION:
      return {
        ...state,
        questions: action.question,
      };
    case SHOW_HOME_PAGE:
      return {
        ...state,
        isVisibleHomePage: action.isVisibleHomePage,
        isVisibleAddButton: false,
      };
    case UPDATE_SEARCH_QUESTION:
      return {
        ...state,
        isVisibleHomePage: false,
      };
    case SHOW_ADD_BUTTON:
      return {
        ...state,
        isVisibleAddButton: action.isVisibleAddButton,
        isVisibleHomePage: false,
      };
    default:
      return state;
  }
}
