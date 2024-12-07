import React, { useState, useEffect } from "react";
import axios from "axios";

import './AdminPage.css';

const DashboardPage = () => {
  const [scholarships, setScholarships] = useState([]);
  const [newScholarship, setNewScholarship] = useState({
    title: "",
    description: "",
    amount: "",
    eligibilityCriteria: "",
    deadline: "",
  });

  const [editingScholarship, setEditingScholarship] = useState(null);

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/scholarships");
        setScholarships(response.data);
      } catch (error) {
        console.error("Error fetching scholarships", error);
      }
    };
    fetchScholarships();
  }, []);

  const handleCreateScholarship = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/scholarships", newScholarship);
      setScholarships([...scholarships, response.data]);
      setNewScholarship({
        title: "",
        description: "",
        amount: "",
        eligibilityCriteria: "",
        deadline: "",
      });
    } catch (error) {
      console.error("Error creating scholarship", error);
    }
  };

  const handleDeleteScholarship = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/scholarships/${id}`);
      setScholarships(scholarships.filter((scholarship) => scholarship.id !== id));
    } catch (error) {
      console.error("Error deleting scholarship", error);
    }
  };

  const handleEditScholarship = (scholarship) => {
    setEditingScholarship(scholarship);
    setNewScholarship({
      title: scholarship.title,
      description: scholarship.description,
      amount: scholarship.amount,
      eligibilityCriteria: scholarship.eligibilityCriteria,
      deadline: scholarship.deadline,
    });
  };

  const handleUpdateScholarship = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/api/scholarships/${editingScholarship.id}`,
        newScholarship
      );
      setScholarships((prevScholarships) =>
        prevScholarships.map((scholarship) =>
          scholarship.id === editingScholarship.id ? response.data : scholarship
        )
      );
      setEditingScholarship(null);
      setNewScholarship({
        title: "",
        description: "",
        amount: "",
        eligibilityCriteria: "",
        deadline: "",
      });
    } catch (error) {
      console.error("Error updating scholarship", error);
    }
  };

  return (
    <div>
      <h2>Dashboard - Manage Scholarships</h2>

      {/* Link to Admin Page */}
     
      <h3>Scholarships</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Eligibility Criteria</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {scholarships.map((scholarship) => (
            <tr key={scholarship.id}>
              <td>{scholarship.title}</td>
              <td>{scholarship.description}</td>
              <td>{scholarship.amount}</td>
              <td>{scholarship.eligibilityCriteria}</td>
              <td>{scholarship.deadline}</td>
              <td>
                <button onClick={() => handleEditScholarship(scholarship)}>Edit</button>
                <button onClick={() => handleDeleteScholarship(scholarship.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>{editingScholarship ? "Update Scholarship" : "Create New Scholarship"}</h3>
      <form onSubmit={editingScholarship ? handleUpdateScholarship : handleCreateScholarship}>
        <label>
          Title:
          <input
            type="text"
            value={newScholarship.title}
            onChange={(e) => setNewScholarship({ ...newScholarship, title: e.target.value })}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={newScholarship.description}
            onChange={(e) => setNewScholarship({ ...newScholarship, description: e.target.value })}
            required
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={newScholarship.amount}
            onChange={(e) => setNewScholarship({ ...newScholarship, amount: e.target.value })}
            required
          />
        </label>
        <label>
          Eligibility Criteria:
          <input
            type="text"
            value={newScholarship.eligibilityCriteria}
            onChange={(e) => setNewScholarship({ ...newScholarship, eligibilityCriteria: e.target.value })}
            required
          />
        </label>
        <label>
          Deadline:
          <input
            type="date"
            value={newScholarship.deadline}
            onChange={(e) => setNewScholarship({ ...newScholarship, deadline: e.target.value })}
            required
          />
        </label>
        <button type="submit">{editingScholarship ? "Update Scholarship" : "Create Scholarship"}</button>
      </form>
    </div>
  );
};

export default DashboardPage;
