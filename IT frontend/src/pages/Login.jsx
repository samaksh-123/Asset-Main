import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AuthForm.css'; // Make sure this CSS file exists

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Backend API call

      // const response = await axios.post('https://asset-main-backend.onrender.com/api/auth/login', form);

      const response = await axios.post('https://asset-main-2.onrender.com/api/auth/login', form);


      // ✅ Save login info in local storage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      alert('Login successful');

      // ✅ Navigate to dashboard using React Router
      navigate('/dashboard');
    } catch (error) {
      alert(error.response?.data?.msg || 'Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      {/* ✅ Animated Background Layer */}
      <div className="bg-image" />

      {/* ✅ Glassmorphism Form */}
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          placeholder="Enter your password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
