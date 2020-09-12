import React, { Component } from "react";

class QuestionCard extends Component {
  render() {
    const { question, no } = this.props;
    return (
      <div className="q-card">
        <div className="left">Question:-{no + 1}</div>
        <div className="right">
          <div className="topic">Topic: {question.topic}</div>
          <div className="question-description">{question.question}</div>
          <div className="footer">
            {question.tags.map((tag) => (
              <div className="tags"> {tag}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionCard;
