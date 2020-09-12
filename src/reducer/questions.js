import { UPDATE_QUESTION } from "../action/actionTypes";

const initialQuestionState = {
  questions: [],
};

export default function question(state = initialQuestionState, action) {
  switch (action.type) {
    case UPDATE_QUESTION:
      return {
        ...state,
        questions: action.question,
      };
    default:
      return state;
  }
}
