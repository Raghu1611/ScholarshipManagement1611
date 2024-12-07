import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './AdminPage.css';

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout actions here (e.g., clear localStorage, sessionStorage)
    localStorage.clear(); // Clear user authentication info (if stored)
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/dashboard?section=manage-scholarships">Manage Scholarships</Link>
          </li>
          <li>
            <Link to="/admin/user-details">User Details</Link>
          </li>
          <li>
            <Link to="/admin/settings">Settings</Link>
          </li>
          <li>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>

      <div className="admin-content">
        <h2>Admin Page</h2>
        <p>Welcome to the Admin Page. Use the navigation bar to manage different sections.</p>
      </div>
    </div>
  );
};

export default AdminPage;
