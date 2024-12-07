import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ScholarshipApplicationsList = () => {
  const [applications, setApplications] = useState([]);

  // Fetch all applications on component mount
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/scholarship/applications');
        setApplications(response.data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();
  }, []);

  // Handle approve action
  const handleApprove = async (id) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/scholarship/approve/${id}`);
      alert(response.data);  // Show success message

      // Update the application status in the local state
      setApplications(applications.map(app => 
        app.id === id ? { ...app, status: "Approved" } : app
      ));
    } catch (error) {
      console.error("Error approving application:", error);
      alert("There was an error approving the application.");
    }
  };

  // Handle reject action
  const handleReject = async (id) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/scholarship/reject/${id}`);
      alert(response.data);  // Show rejection message

      // Update the application status in the local state
      setApplications(applications.map(app => 
        app.id === id ? { ...app, status: "Rejected" } : app
      ));
    } catch (error) {
      console.error("Error rejecting application:", error);
      alert("There was an error rejecting the application.");
    }
  };

  return (
    <div>
      <h1>Scholarship Applications</h1>
      <table>
        <thead>
          <tr>
            <th>Application ID</th> {/* Column for ID */}
            <th>Name</th>
            <th>Qualification</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id}>
              <td>{application.id}</td> {/* Display the ID */}
              <td>{application.name}</td>
              <td>{application.qualification}</td>
              <td>{application.status || 'Pending'}</td>
              <td>
                <button onClick={() => handleApprove(application.id)}>Approve</button>
                <button onClick={() => handleReject(application.id)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScholarshipApplicationsList;
