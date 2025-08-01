import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to <span className="brand">TaskMaster</span></h1>
        <p>
          Organize beautifully. Prioritize smartly. Accomplish more with elegance and ease.
        </p>
        <div className="cta-buttons">
          <Link to="/register" className="btn">Get Started</Link>
          <Link to="/login" className="btn btn-outline">Login</Link>
        </div>
      </section>

      <section className="features">
        <h2>Why TaskMaster?</h2>
        <ul>
          <li>📝 Simple task creation & categories</li>
          <li>📅 Schedule tasks with due dates</li>
          <li>📈 Track your progress at a glance</li>
          <li>🔔 Reminders to keep you on time</li>
        </ul>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} TaskMaster • Designed for focus and flow
      </footer>
    </div>
  );
};

export default Home;
