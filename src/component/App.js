import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuestions } from "../action/questions";

class App extends Component {
  componentDidMount() {
    console.log("component did Mount");
    this.props.dispatch(fetchQuestions());
  }
  render() {
    console.log(this.props);
    return <div> App</div>;
  }
}

function mapStatetoProp(state) {
  return {
    question: state.question,
  };
}
export default connect(mapStatetoProp)(App);
