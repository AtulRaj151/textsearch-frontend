import React, { Component } from "react";
import { addQuestions } from "../action/questions";
import { notify, notifyw } from "./Notification";

class AddQuestions extends Component {
  handleAddQuestion = (e) => {
    e.preventDefault();

    let question = document.getElementById("question").value;
    let topic = document.getElementById("topic").value;
    let tags = document.getElementById("tags").value;
    // handle empty case:
    if (
      question.trim().length === 0 ||
      topic.trim().length === 0 ||
      tags.length === 0
    ) {
      notifyw("Each Fields should be filled");
      return;
    }

    this.props.dispatch(addQuestions(question, topic, tags));
    notify("Question Added");
    document.getElementById("question").value = "";
    document.getElementById("topic").value = "";
    document.getElementById("tags").value = "";
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
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="topic"
                placeholder="Enter topic"
                name="topic"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="tags"
                placeholder="Enter tags"
                name="tags"
                required
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
