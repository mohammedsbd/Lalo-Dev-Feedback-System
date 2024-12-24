import React, { useState } from "react";

const FeedbackForm = ({ onAddFeedback }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [firstHeard, setFirstHeard] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [improvements, setImprovements] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = {
      name,
      age,
      gender,
      firstHeard,
      thoughts,
      improvements,
      date: new Date().toLocaleString(),
    };
    onAddFeedback(feedback);
    setName("");
    setAge("");
    setGender("");
    setFirstHeard("");
    setThoughts("");
    setImprovements("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>When did you first hear about Lalo Dev?</label>
        <input
          type="text"
          value={firstHeard}
          onChange={(e) => setFirstHeard(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Your overall thoughts on Lalo Dev:</label>
        <textarea
          value={thoughts}
          onChange={(e) => setThoughts(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>What improvements do you suggest for Lalo Dev?</label>
        <textarea
          value={improvements}
          onChange={(e) => setImprovements(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
