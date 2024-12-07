import React, { useState } from "react";
import axios from "axios";

const ScholarshipApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    qualification: "",
    tenthMarks: "",
    interMarks: "",
    graduationMarks: "",
    postGradMarks: "",
    phone: "",
    reason: "",
    bankDetails: "",
  });

  const [files, setFiles] = useState({
    tenthCertificate: null,
    interCertificate: null,
    graduationCertificate: null,
    postGradCertificate: null,
    incomeProof: null,
    casteCertificate: null,
    domicileCertificate: null,
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Qualification:</label>
        <input
          type="text"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Tenth Marks:</label>
        <input
          type="number"
          step="0.01"
          name="tenthMarks"
          value={formData.tenthMarks}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Intermediate Marks:</label>
        <input
          type="number"
          step="0.01"
          name="interMarks"
          value={formData.interMarks}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Graduation Marks:</label>
        <input
          type="number"
          step="0.01"
          name="graduationMarks"
          value={formData.graduationMarks}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Post Graduation Marks:</label>
        <input
          type="number"
          step="0.01"
          name="postGradMarks"
          value={formData.postGradMarks}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Reason for Scholarship:</label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label>Bank Details:</label>
        <textarea
          name="bankDetails"
          value={formData.bankDetails}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      {/* File Uploads */}
      <div>
        <label>Tenth Certificate:</label>
        <input type="file" name="tenthCertificate" onChange={handleFileChange} />
      </div>
      <div>
        <label>Intermediate Certificate:</label>
        <input type="file" name="interCertificate" onChange={handleFileChange} />
      </div>
      <div>
        <label>Graduation Certificate:</label>
        <input type="file" name="graduationCertificate" onChange={handleFileChange} />
      </div>
      <div>
        <label>Post Graduation Certificate:</label>
        <input type="file" name="postGradCertificate" onChange={handleFileChange} />
      </div>
      <div>
        <label>Income Proof:</label>
        <input type="file" name="incomeProof" onChange={handleFileChange} />
      </div>
      <div>
        <label>Caste Certificate:</label>
        <input type="file" name="casteCertificate" onChange={handleFileChange} />
      </div>
      <div>
        <label>Domicile Certificate:</label>
        <input type="file" name="domicileCertificate" onChange={handleFileChange} />
      </div>
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default ScholarshipApplicationForm;
