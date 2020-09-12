import { UPDATE_QUESTION } from "./actionTypes";
export function fetchQuestions() {
  return (dispatch) => {
    const url = "http://localhost:8000/api/v1/questions";
    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data.questions);
        dispatch(updateQuestions(data.questions));
      });
  };
}

export function updateQuestions(question) {
  return {
    type: UPDATE_QUESTION,
    question,
  };
}
