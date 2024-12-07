import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/register', {
                email,
                password,
                role,
            });

            setMessage(response.data);
        } catch (err) {
            setMessage('Error registering user');
        }
    };

    return (
        <div className="register-container">
            <h2 className="register-title">Create an Account</h2>
            <form onSubmit={handleRegister} className="register-form">
                <input
                    type="email"
                    className="form-input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="form-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="text"
                    className="form-input"
                    placeholder="Role (optional)"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
                <button type="submit" className="register-button">Register</button>
            </form>
            {message && (
                <p className={`message ${message.includes('Error') ? 'message-error' : 'message-success'}`}>
                    {message}
                </p>
            )}
            <div className="login-link-container">
                <p>Already have an account? <Link to="/login" className="login-link">Login here</Link></p>
            </div>
        </div>
    );
};

export default Register;
