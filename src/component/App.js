import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuestions } from "../action/questions";
import AddQuestions from "./AddQuestions";
import Navbar from "./Navbar";

class App extends Component {
  componentDidMount() {
    console.log("component did Mount");
    this.props.dispatch(fetchQuestions());
  }
  render() {
    return (
      <div>
        <Navbar dispatch={this.props.dispatch} />
        <AddQuestions dispatch={this.props.dispatch} />
      </div>
    );
  }
}

function mapStatetoProp(state) {
  return {
    question: state.question,
  };
}
export default connect(mapStatetoProp)(App);
