import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";  // Import Link for navigation
import "./Resetpassword.css";  // Ensure this file exists and is styled properly

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isResetSuccessful, setIsResetSuccessful] = useState(false);  // Track reset success

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent page reload on form submit
        setMessage("");  // Clear previous message
        setError("");  // Clear previous error

        try {
            // Send the reset password request to the backend
            const response = await axios.post("http://localhost:8080/api/reset-password", null, {
                params: {
                    email: email,
                    newPassword: newPassword,
                },
            });

            // On successful response, set the success message
            if (response.data) {
                setMessage(response.data);  // Success message
                setIsResetSuccessful(true);  // Set reset as successful
            }
        } catch (err) {
            // Handle error response from backend
            if (err.response) {
                setError(err.response.data);  // Backend error message
            } else {
                setError("Something went wrong. Please try again.");
            }
        }
    };

    return (
        <div className="reset-password-container">
            <h2>Reset Your Password</h2>

            {/* Form for email and new password */}
            <form onSubmit={handleSubmit} className="reset-password-form">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <button type="submit" className="reset-password-button">
                    Reset Password
                </button>
            </form>

            {/* Display success or error messages */}
            {message && <div className="message success">{message}</div>}
            {error && <div className="message error">{error}</div>}

            {/* Show the login link after password reset */}
            {isResetSuccessful && (
                <div className="login-link">
                    <p>Your password has been reset successfully!</p>
                    <Link to="/login">Click here to log in</Link>
                </div>
            )}
        </div>
    );
};

export default ResetPassword;
