import React, { Component } from "react";
import { addQuestions } from "../action/questions";

class AddQuestions extends Component {
  handleAddQuestion = (e) => {
    e.preventDefault();
    let question = document.getElementById("question").value;
    let topic = document.getElementById("topic").value;
    let tags = document.getElementById("tags").value;
    this.props.dispatch(addQuestions(question, topic, tags));
  };
  render() {
    return (
      <div id="question-card" className="card">
        <div className="card-body">
          <h2 className="text-center">Add Question</h2>
          <br />
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="question"
                placeholder="Enter Question"
                name="question"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="topic"
                placeholder="Enter topic"
                name="topic"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="tags"
                placeholder="Enter tags"
                name="tags"
              />
            </div>
            <button
              type="Add"
              id="button"
              className="btn btn-primary deep-purple btn-block "
              onClick={this.handleAddQuestion}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddQuestions;
