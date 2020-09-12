import React, { Component } from "react";
import {
  searchQuestions,
  showHomePage,
  showAddQuestionPage,
} from "../action/questions";

class Navbar extends Component {
  handleSearchQuestion = (e) => {
    let tags = document.getElementById("search-box").value;
    this.props.dispatch(searchQuestions(tags));
  };
  // handle home button
  handleHomeButton = (val) => {
    this.props.dispatch(showHomePage(val));
  };

  handleAddQuestion = (val) => {
    this.props.dispatch(showAddQuestionPage(val));
  };
  render() {
    return (
      <div className="nav">
        <button
          id="add-btn"
          className="btn btn-light btn-outline-success btn-block "
          onClick={() => this.handleAddQuestion(true)}
        >
          Add Question
        </button>
        <button
          id="home-btn"
          className="btn btn-light btn-outline-dark btn-block "
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
