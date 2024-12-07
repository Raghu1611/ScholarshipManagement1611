import React, { useState } from "react";
import axios from "axios";
import './ApplyScholarship.css'
const ScholarshipApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    qualification: "",
    tenthMarks: "",
    interMarks: "",
    phone: "",
    reason: "",
    bankDetails: "",
  });

  const [files, setFiles] = useState({
    tenthCertificate: null,
    interCertificate: null,
    casteCertificate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles({ ...files, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    Object.entries(files).forEach(([key, file]) => {
      if (file) form.append(key, file);
    });

    try {
      const response = await axios.post("http://localhost:8080/api/scholarship/apply", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 201) {
        alert("Application submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("There was an error submitting your application. Please try again.");
    }
  };

  const qualificationOptions = [
    "High School",
    "Intermediate",
    "Graduate",
    "Post Graduate",
    "Professional Degree"
  ];

  const gradeOptions = [
    { value: "33", label: "First Division (>60%)" },
    { value: "66", label: "Second Division (45-59%)" },
    { value: "33", label: "Third Division (33-44%)" }
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
          Scholarship Application Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                required
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Qualification Dropdown */}
          <div>
            <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">
              Qualification
            </label>
            <select
              name="qualification"
              id="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Qualification</option>
              {qualificationOptions.map((qual) => (
                <option key={qual} value={qual}>{qual}</option>
              ))}
            </select>
          </div>

          {/* Marks Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="tenthMarks" className="block text-sm font-medium text-gray-700">
                Tenth Marks (Out of 600)
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  name="tenthMarks"
                  id="tenthMarks"
                  min="0"
                  max="600"
                  required
                  value={formData.tenthMarks}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <span className="ml-2 text-gray-500">/ 600</span>
              </div>
            </div>

            <div>
              <label htmlFor="tenthGrade" className="block text-sm font-medium text-gray-700">
                Tenth Grade
              </label>
              <select
                name="tenthGrade"
                id="tenthGrade"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select Grade</option>
                {gradeOptions.map((grade) => (
                  <option key={grade.value} value={grade.value}>{grade.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Intermediate Marks */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="interMarks" className="block text-sm font-medium text-gray-700">
                Intermediate Marks
              </label>
              <input
                type="number"
                step="0.01"
                name="interMarks"
                id="interMarks"
                required
                value={formData.interMarks}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* File Uploads */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="tenthCertificate" className="block text-sm font-medium text-gray-700">
                Tenth Certificate
              </label>
              <input
                type="file"
                name="tenthCertificate"
                id="tenthCertificate"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
              />
            </div>

            <div>
              <label htmlFor="casteCertificate" className="block text-sm font-medium text-gray-700">
                Caste Certificate
              </label>
              <input
                type="file"
                name="casteCertificate"
                id="casteCertificate"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
              />
            </div>
          </div>

          {/* Reason and Bank Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                Reason for Scholarship
              </label>
              <textarea
                name="reason"
                id="reason"
                required
                value={formData.reason}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>

            <div>
              <label htmlFor="bankDetails" className="block text-sm font-medium text-gray-700">
                Bank Details
              </label>
              <textarea
                name="bankDetails"
                id="bankDetails"
                required
                value={formData.bankDetails}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScholarshipApplicationForm;