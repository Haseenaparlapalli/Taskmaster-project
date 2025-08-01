import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      alert("Login Successful");
      navigate("/dashboard");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="login-wrapper">
       <div className="login-card">
      <div className="login-image">
         <img src="https://images.pexels.com/photos/27496670/pexels-photo-27496670.jpeg" alt="Login visual" />
      </div>

      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account? <Link to="/register">Register here</Link>

        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
