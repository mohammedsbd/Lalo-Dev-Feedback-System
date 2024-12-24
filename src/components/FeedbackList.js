import React from "react";

const FeedbackList = ({ feedbacks }) => {
  return (
    <div className="feedback-list">
      <h2>Recent Feedback</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        feedbacks.map((feedback, index) => (
          <div key={index} className="feedback-card">
            <h3>
              {feedback.name} ({feedback.age}, {feedback.gender})
            </h3>
            <p>
              <strong>First heard about Lalo Dev:</strong> {feedback.firstHeard}
            </p>
            <p>
              <strong>Thoughts:</strong> {feedback.thoughts}
            </p>
            <p>
              <strong>Suggestions:</strong> {feedback.improvements}
            </p>
            <p>
              <strong>Submitted on:</strong> {feedback.date}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default FeedbackList;
