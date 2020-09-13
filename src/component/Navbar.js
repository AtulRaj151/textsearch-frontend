import React, { Component } from "react";
import {
  searchQuestions,
  showHomePage,
  showAddQuestionPage,
  fetchQuestions,
} from "../action/questions";
import { notifyw } from "./Notification";

class Navbar extends Component {
  //  handle search question
  handleSearchQuestion = (e) => {
    let tags = document.getElementById("search-box").value;
    if (tags.length === 0) {
      //  show notifications
      notifyw("tags or Query should not be Empty");

      return;
    }
    this.props.dispatch(searchQuestions(tags));
  };
  // handle home button
  handleHomeButton = (val) => {
    this.props.dispatch(showHomePage(val));
    this.props.dispatch(fetchQuestions());
  };

  handleAddQuestion = (val) => {
    this.props.dispatch(showAddQuestionPage(val));
  };
  render() {
    const { isVisibleHomePage, isVisibleAddButton } = this.props;
    return (
      <div className="nav">
        <button
          id="add-btn"
          className={`btn btn-light btn-outline-success btn-block ${
            isVisibleAddButton ? "active" : ""
          }`}
          onClick={() => this.handleAddQuestion(true)}
        >
          Add Question
        </button>
        <button
          id="home-btn"
          className={`btn btn-light btn-outline-dark btn-block ${
            isVisibleHomePage ? "active" : ""
          }`}
          onClick={() => this.handleHomeButton(true)}
        >
          Home
        </button>
        <div className="search-container">
          <input id="search-box" placeholder="Search Question or Tags..." />
          <button id="search-btn" onClick={this.handleSearchQuestion}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
