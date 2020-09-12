import React, { Component } from "react";
import {
  searchQuestions,
  showHomePage,
  showAddQuestionPage,
  fetchQuestions,
  updateQuestions,
} from "../action/questions";

class Navbar extends Component {
  handleSearchQuestion = (e) => {
    let tags = document.getElementById("search-box").value;
    if (tags.length == 0) {
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
          <input id="search-box" />
          <button id="search-btn" onClick={this.handleSearchQuestion}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
