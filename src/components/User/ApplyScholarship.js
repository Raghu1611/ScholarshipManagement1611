import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import axios from "axios";
// Import the CSS file
import './Apply.css'
const ApplyScholarship = () => {
  const [scholarships, setScholarships] = useState([]);
  const [email, setEmail] = useState(""); // State for email input
  const navigate = useNavigate(); // Initialize navigate for redirection

  // Fetch all scholarships
  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/scholarships");
        setScholarships(response.data);
      } catch (error) {
        console.error("Failed to fetch scholarships", error);
      }
    };
    fetchScholarships();
  }, []);

  // Redirect to the Scholarship Application Form page
  const handleApplyClick = (scholarshipId) => {
    if (!email) {
      alert("Please provide your email address to proceed.");
      return;
    }

    // Save email in session storage (optional for persistence)
    sessionStorage.setItem("userEmail", email);

    // Navigate to the application form page with scholarshipId and email
    navigate(`/apply-scholarship/${scholarshipId}`, { state: { email } });
  };

  return (
    <div className="container">
      <h1>Apply for Scholarship</h1>

      {/* Email input field */}
      <div className="email-input">
        <label htmlFor="email">Enter Your Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@example.com"
          required
        />
      </div>

      {scholarships && scholarships.length > 0 ? (
        scholarships.map((scholarship) => (
          <div key={scholarship.id} className="scholarship-card">
            <h2>{scholarship.title}</h2>
            <p>{scholarship.description}</p>
            <p><strong>Amount:</strong> {scholarship.amount}</p>
            <p><strong>Eligibility:</strong> {scholarship.eligibilityCriteria}</p>
            <p><strong>Deadline:</strong> {scholarship.deadline}</p>

            {/* Button to apply for scholarship */}
            <button onClick={() => handleApplyClick(scholarship.id)}>
              Apply
            </button>
          </div>
        ))
      ) : (
        <p className="no-scholarships">No scholarships available.</p>
      )}
    </div>
  );
};

export default ApplyScholarship;
