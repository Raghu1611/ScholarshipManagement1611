import React from "react";

import './ExploreMorePage.css'; // Import the CSS file

const ExploreMorePage = () => {
  return (
    <div className="container explore-container">
      <h2>Contact Information</h2>
      <div className="contact-details">
        <div className="contact-item">
          <h3>Email:</h3>
          <p>contact@scholarshipplatform.gov</p>
        </div>
        <div className="contact-item">
          <h3>Phone Number:</h3>
          <p>+1 (800) 123-4567</p>
        </div>
        <div className="contact-item">
          <h3>Address:</h3>
          <p>123 Government Avenue, City Center, State, 12345</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreMorePage;
