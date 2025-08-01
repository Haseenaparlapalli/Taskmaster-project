import React, { useState } from "react";
import axios from "axios";
import "./CreateTask.css";

const CreateTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/tasks", task);
      setMessage("Task Created Successfully!");
      setTask({
        title: "",
        description: "",
        dueDate: "",
        priority: "Low",
      });
    } catch (error) {
      console.error("Error creating task:", error);
      setMessage("Failed to create task.");
    }
  };

  return (
    <div className="task-page-wrapper">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="background-video"
      >
        <source
          src="https://cdn.pixabay.com/video/2021/09/05/87592-602317646_tiny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Blurred Overlay */}
      <div className="form-overlay">
        <div className="task-form-container">
          <h2>Create a New Task</h2>
          {message && <p className="message">{message}</p>}

          <form onSubmit={handleSubmit} className="task-form">
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Task Title"
              required
            />
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Description"
            />
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
            />
            <select name="priority" value={task.priority} onChange={handleChange}>
              <option value="High">High Priority</option>
              <option value="Low">Low Priority</option>
            </select>
            <button type="submit">Create Task</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
