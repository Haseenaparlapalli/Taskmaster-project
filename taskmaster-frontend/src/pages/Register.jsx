import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = form;

    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
      });

      setMessage("Registered Successfully!");
      setForm({ name: "", email: "", password: "" });

      // Optional: store name for greeting later
      localStorage.setItem("username", name);

      // Redirect to Create Task
      setTimeout(() => {
        navigate("/create-task");
      }, 1500);
    } catch (error) {
      console.error("Registration failed:", error);
      
      // ✅ Show backend message if available
      if (error.response?.data?.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Registration failed. Try again.");
      }
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <div className="register-image">
          <img
            src="https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg"
            alt="Register visual"
          />
        </div>

        <div className="auth-container">
          <h2>Register</h2>
          {message && (
            <p className={`message ${message.includes("Success") ? "success" : "error"}`}>
              {message}
              {message.includes("Success") && " Redirecting..."}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Register</button>
          </form>

          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
