import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [username, setUsername] = useState("User");

  useEffect(() => {
    fetchTasks();
    const storedName = localStorage.getItem("username");
    if (storedName) setUsername(storedName);
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const toggleComplete = async (id, currentStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, {
        completed: !currentStatus,
      });
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome back, {username}!</h2>

      <div className="dashboard-header">
        <h3>Your Tasks</h3>
        <Link to="/create-task" className="create-task-btn">+ Create Task</Link>
      </div>

      <div className="task-summary">
        <span>Total: {tasks.length}</span>
        <span>Completed: {tasks.filter(t => t.completed).length}</span>
        <span>Pending: {tasks.filter(t => !t.completed).length}</span>
      </div>

      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks available. Click “Create Task” to add one!</p>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <div key={task._id} className={`task-item ${task.completed ? "completed" : ""}`}>
              <div className="task-info">
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                <span className={`priority ${task.priority ? task.priority.toLowerCase() : "low"}`}>
                  {task.priority || "Low"}
                </span>
              </div>
              <div className="task-actions">
                <button onClick={() => toggleComplete(task._id, task.completed)}>
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <Link to={`/edit-task/${task._id}`}>Edit</Link>
                <button onClick={() => deleteTask(task._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
