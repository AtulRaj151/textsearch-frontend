import { getFormBody } from "../helper/util";
import {
  UPDATE_QUESTION,
  UPDATE_SEARCH_QUESTION,
  SHOW_HOME_PAGE,
  SHOW_ADD_BUTTON,
} from "./actionTypes";
export function fetchQuestions() {
  return (dispatch) => {
    let url = "http://54.156.127.15/api/v1/questions";
    // let url = "https://rb.gy/o2x8iz";
    fetch(url, {
      mode: "cors",
    })
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
    let url = `http://54.156.127.15/api/v1/insert`;
    // let url = "https://rb.gy/o2x8iz";

    // fetch post request
    fetch(url, {
      method: "POST",
      mode: "cors",
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
// http://100.26.169.145/api/v1/questions
export function searchQuestions(tagsOrQuery) {
  console.log(tagsOrQuery);
  return (dispatch) => {
    let url = "http://54.156.127.15/api/v1/search/tags";

    fetch(url, {
      method: "POST",
      mode: "cors",
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
        console.log("search data", data.question);
        dispatch(updateSearchQuestions(data.question));
      });
  };
}
export function updateQuestions(question) {
  return {
    type: UPDATE_QUESTION,
    question,
  };
}

export function updateSearchQuestions(question) {
  return {
    type: UPDATE_SEARCH_QUESTION,
    question,
  };
}
// action creater to show home  page
export function showHomePage(val) {
  return {
    type: SHOW_HOME_PAGE,
    isVisibleHomePage: val,
  };
}

// action createer to show addQuestionButton
export function showAddQuestionPage(val) {
  return {
    type: SHOW_ADD_BUTTON,
    isVisibleAddButton: val,
  };
}