import { getFormBody } from "../helper/util";
import { UPDATE_QUESTION } from "./actionTypes";
export function fetchQuestions() {
  return (dispatch) => {
    let url = "http://localhost:8000/api/v1/questions";
    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        // disptach the fetched qustions
        dispatch(updateQuestions(data.questions));
      });
  };
}
// function to add question
export function addQuestions(question, topic, tags) {
  return (dispatch) => {
    let url = `http://localhost:8000/api/v1/insert`;

    // fetch post request
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: getFormBody({ question, topic, tags }), // convert in uricomponent like ?&q=q&r=r
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        // success
      });
  };
}
// action creater for search
export function searchQuestions(tagsOrQuery) {
  console.log(tagsOrQuery);
  return (dispatch) => {
    let url = "http://localhost:8000/api/v1/search/tags";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: getFormBody({ tags: tagsOrQuery }), // convert in uricomponent like ?&q=q&r=r
    })
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((data) => {
        console.log("search data", data);
      });
  };
}
export function updateQuestions(question) {
  return {
    type: UPDATE_QUESTION,
    question,
  };
}
