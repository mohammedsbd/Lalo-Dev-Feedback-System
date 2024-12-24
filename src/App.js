import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    heard_about: "",
    overall_thinking: "",
    improvements: "",
  });

  // Fetch feedback data when the component mounts
  useEffect(() => {
    fetch("http://localhost:5000/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbacks(data))
      .catch((error) => console.error("Error fetching feedbacks:", error));
  }, []); // Empty dependency array ensures this runs only once on component mount

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send POST request to submit feedback
    fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Feedback submitted successfully");

        // Clear form fields after submission
        setFormData({
          name: "",
          email: "",
          gender: "",
          heard_about: "",
          overall_thinking: "",
          improvements: "",
        });

        // Re-fetch feedback data after submitting
        fetch("http://localhost:5000/feedback")
          .then((response) => response.json())
          .then((data) => setFeedbacks(data));
      })
      .catch((error) => console.error("Error submitting feedback:", error));
  };

  return (
    <div className="App">
      <h1>Lalo Dev Feedback</h1>

      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        {/* Added options for how did you hear about Lalo Dev */}
        <select
          name="heard_about"
          value={formData.heard_about}
          onChange={handleChange}
        >
          <option value="">How did you hear about Lalo Dev?</option>
          <option value="Telegram">Telegram</option>
          <option value="TikTok">TikTok</option>
          <option value="Instagram">Instagram</option>
          <option value="Friend">Friend</option>
          <option value="School">School</option>
          <option value="Others">Others</option>
        </select>

        <textarea
          name="overall_thinking"
          value={formData.overall_thinking}
          onChange={handleChange}
          placeholder="What do you think about Lalo Dev?"
          required
        ></textarea>
        <textarea
          name="improvements"
          value={formData.improvements}
          onChange={handleChange}
          placeholder="What can be improved?"
          required
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>

      <div className="feedback-list">
        {feedbacks.map((feedback) => (
          <div className="feedback-card" key={feedback.id}>
            <h3>{feedback.name}</h3>
            <p>
              <strong>Email:</strong> {feedback.email}
            </p>
            <p>
              <strong>Gender:</strong> {feedback.gender}
            </p>
            <p>
              <strong>Heard About:</strong> {feedback.heard_about}
            </p>{" "}
            {/* Display how they heard about Lalo Dev */}
            <p>
              <strong>Overall Thinking:</strong> {feedback.overall_thinking}
            </p>
            <p>
              <strong>Improvements:</strong> {feedback.improvements}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
