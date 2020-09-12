import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuestions } from "../action/questions";
import AddQuestions from "./AddQuestions";
import Navbar from "./Navbar";

class App extends Component {
  componentDidMount() {
    //  fetch the all the qustions from api
    this.props.dispatch(fetchQuestions());
  }
  render() {
    console.log("This props", this.props.question);
    const { isVisibleHomePage, isVisibleAddButton } = this.props.question;
    return (
      <div>
        <Navbar dispatch={this.props.dispatch} />
        {isVisibleAddButton && <AddQuestions dispatch={this.props.dispatch} />}
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
