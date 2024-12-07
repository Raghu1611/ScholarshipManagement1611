import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginDetails = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginDetails),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        // Store the token in localStorage
        localStorage.setItem('authToken', result.token);

        if (result.role === 'ADMIN') {
          navigate('/admin-page');
        } else if (result.role === 'USER') {
          navigate('/user-page');
        }
      } else {
        alert(result);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 50 50" 
            className="logo"
            aria-label="ScholarConnect Logo"
          >
            <circle cx="25" cy="25" r="24" fill="#3498db"/>
            <path 
              d="M25 10 L35 25 L25 40 L15 25 Z" 
              fill="white"
            />
            <text 
              x="50%" 
              y="50%" 
              dominantBaseline="middle" 
              textAnchor="middle" 
              fill="white" 
              fontSize="12"
            >
              SC
            </text>
          </svg>
          <h1 className="brand-name">ScholarConnect</h1>
        </div>
        
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to access your scholarship portal</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
            <Link to="/reset-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
          
          <button type="submit" className="login-button">
            Login
          </button>
          
          <div className="register-section">
            <p className="register-text">
              Don't have an account? 
              <Link to="/register" className="register-link">
                {' '}Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
      
      <div className="background-overlay"></div>
    </div>
  );
};

export default Login;
