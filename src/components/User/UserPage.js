import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook
import './UserPage.css'; // Import the CSS file

const UserPage = () => {
  const navigate = useNavigate(); // Initialize navigate for redirection

  // Logout function that redirects to the home page
  const handleLogout = () => {
    // You can also clear user authentication data here (e.g., localStorage or cookies)
    navigate("/"); // Redirect to the home page after logout
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/explore-more">Explore More</Link>
          </li>
          <li>
            <Link to="/user-profile">Profile</Link>
          </li>
          <li>
            <Link to="/apply-scholarship">Apply for Scholarship</Link>
          </li>
          <li>
            <Link to="/status">Status</Link>
          </li>
          <li>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </li>
        </ul>
      </nav>

      <h2>User Dashboard</h2>
      <p className="intro-text">Welcome to the Scholarship Platform! Here's how you can get involved:</p>

      <div className="dashboard">
        {/* Highlighting project-specific sections */}
        <div className="card">
          <h3>Scholarship Opportunities</h3>
          <p>Browse through available scholarships and apply for financial aid that best suits your needs.</p>
          <Link to="/apply-scholarship">
            <button>Explore Scholarships</button>
          </Link>
        </div>

        <div className="card">
          <h3>Application Process</h3>
          <p>Learn more about the scholarship application process, eligibility criteria, and deadlines.</p>
          <Link to="/scholarship-info">
            <button>Get Details</button>
          </Link>
        </div>

        <div className="card">
          <h3>Support & Resources</h3>
          <p>Access various resources and support to help you succeed in your scholarship applications.</p>
          <Link to="/resources">
            <button>View Resources</button>
          </Link>
        </div>

        {/* New Explore More Link */}
        <div className="card">
          <h3>Explore More</h3>
          <p>Get additional contact information, FAQs, and more to help with your scholarship journey.</p>
          <Link to="/explore-more">
            <button>Explore More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
