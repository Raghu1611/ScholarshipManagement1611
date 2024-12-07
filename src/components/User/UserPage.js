import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Home, 
  User, 
  Award, 
  FileText, 
  LogOut, 
  Info, 
  Menu, 
  X 
} from "lucide-react";
import './UserPage.css';

const UserPage = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="user-dashboard">
      {/* Navbar with Horizontal Buttons */}
      <nav className="main-navbar">
        <div className="navbar-container">
          <div className="logo">Scholarship Platform</div>
          
          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <Link to="/explore-more" className="nav-link">Explore More</Link>
            <Link to="/user-profile" className="nav-link">Profile</Link>
            <Link to="/apply-scholarship" className="nav-link">Scholarships</Link>
            <Link to="/status" className="nav-link">Status</Link>
            <button onClick={handleLogout} className="logout-btn">
              <LogOut size={16} />
              Logout
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-dropdown-menu">
            <Link to="/explore-more" className="mobile-nav-link">
              <Home size={20} /> Explore More
            </Link>
            <Link to="/user-profile" className="mobile-nav-link">
              <User size={20} /> Profile
            </Link>
            <Link to="/apply-scholarship" className="mobile-nav-link">
              <Award size={20} /> Scholarships
            </Link>
            <Link to="/status" className="mobile-nav-link">
              <FileText size={20} /> Status
            </Link>
            <button onClick={handleLogout} className="mobile-logout-btn">
              <LogOut size={20} /> Logout
            </button>
          </div>
        )}
      </nav>

      {/* Main Dashboard Content */}
      <main className="dashboard-content">
        <h2>Welcome, User</h2>
        <p className="intro-text">Your pathway to educational opportunities starts here!</p>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <Award size={40} className="card-icon" />
            <h3>Scholarship Opportunities</h3>
            <p>Browse and apply for scholarships tailored to your profile.</p>
            <Link to="/apply-scholarship" className="card-action-btn">
              Explore Scholarships
            </Link>
          </div>

          <div className="dashboard-card">
            <FileText size={40} className="card-icon" />
            <h3>Application Process</h3>
            <p>Understand eligibility, requirements, and application steps.</p>
            <Link to="/scholarship-info" className="card-action-btn">
              View Process
            </Link>
          </div>

          <div className="dashboard-card">
            <Info size={40} className="card-icon" />
            <h3>Support & Resources</h3>
            <p>Access guides, FAQs, and support for your scholarship journey.</p>
            <Link to="/resources" className="card-action-btn">
              Get Support
            </Link>
          </div>

          <div className="dashboard-card">
            <User size={40} className="card-icon" />
            <h3>Profile Management</h3>
            <p>Update your profile, track applications, and manage preferences.</p>
            <Link to="/user-profile" className="card-action-btn">
              Manage Profile
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserPage;