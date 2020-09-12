import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuestions } from "../action/questions";
import AddQuestions from "./AddQuestions";
import Navbar from "./Navbar";
import QuestionCard from "./QuestionCard";

class App extends Component {
  componentDidMount() {
    //  fetch the all the qustions from api
    this.props.dispatch(fetchQuestions());
  }
  render() {
    const {
      isVisibleHomePage,
      isVisibleAddButton,
      questions,
    } = this.props.state.question;

    const { result, showSearchResults } = this.props.state.search;

    const displayItems = showSearchResults ? result : questions;
    return (
      <div>
        <Navbar
          dispatch={this.props.dispatch}
          isVisibleHomePage={isVisibleHomePage}
          isVisibleAddButton={isVisibleAddButton}
        />
        {isVisibleAddButton && <AddQuestions dispatch={this.props.dispatch} />}
        {showSearchResults ? <div>Search Results...</div> : null}
        {displayItems.length === 0 ? (
          <h3>Question Not Found: Please Enter Valid Query or Tags</h3>
        ) : null}
        {!isVisibleAddButton &&
          displayItems.map((question, index) => (
            <QuestionCard
              question={question}
              key={`question-${index}`}
              no={index}
              dispatch={this.props.dispatch}
            />
          ))}
      </div>
    );
  }
}

function mapStatetoProp(state) {
  return {
    state: state,
  };
}
export default connect(mapStatetoProp)(App);
