import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import ResetPassword from "./components/Auth/ResetPassword";
import Register from "./components/Auth/Register";
import AdminPage from "./components/Admin/AdminPage";
import UserPage from "./components/User/UserPage";
import UserProfile from "./components/User/UserProfile";
import ApplyScholarship from "./components/User/ApplyScholarship";
import Status from "./components/User/Status";
import Home from "./components/Home";
import ScholarshipApplicationForm from "./components/User/ScholarshipApplicationForm";
import ExploreMorePage from "./components/User/ExploreMorePage";
import DashboardPage from "./components/Admin/Dashboard";  // Import the Dashboard
import UserDetailsPage from "./components/Admin/UserDetailsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />  {/* Home route */}
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin-page" element={<AdminPage />} />
      <Route path="/user-page" element={<UserPage />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/apply-scholarship" element={<ApplyScholarship />} />
      <Route path="/status" element={<Status />} />
      <Route path="/admin/dashboard" element={<DashboardPage />} />  {/* Corrected route */}
      <Route path="/explore-more" element={<ExploreMorePage />} />
      <Route path="/apply-scholarship/:scholarshipId" element={<ScholarshipApplicationForm />} />
      <Route path="/admin/user-details" element={<UserDetailsPage />} />
    </Routes>
  );
};

export default App;
