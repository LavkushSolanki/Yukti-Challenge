import React, { useState } from "react";
import bg2 from "../assets/bg2.jpg";

const TeamLeader = ({ formData, setFormData, setStep, setFormFilled }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.year) newErrors.year = "Year is required";
    if (!formData.branch) newErrors.branch = "Branch is required";
    if (!formData.teamSize) newErrors.teamSize = "Team size is required";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setFormFilled(true);
      setStep(3);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-auto bg-cover">
      <div className="bg-gray-800 flex flex-col bg-opacity-70 p-8 rounded-3xl text-center border-orange-500 border-2">
        <h2 className="text-3xl font-bold text-orange-400 mb-4">
          Details of TEAM LEADER
        </h2>
        <input
          className={`w-full p-2 mb-4 ${errors.name ? "border-red-500" : ""}`}
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
        <input
          className={`w-full p-2 mb-4 ${errors.email ? "border-red-500" : ""}`}
          name="email"
          placeholder="Enter your mail ID"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
        <select
          className={`w-full p-2 mb-4 ${errors.year ? "border-red-500" : ""}`}
          name="year"
          value={formData.year}
          onChange={handleChange}
        >
          <option value="">Select your year</option>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">4th</option>
        </select>
        {errors.year && <p className="text-red-500">{errors.year}</p>}
        <select
          className={`w-full p-2 mb-4 ${errors.branch ? "border-red-500" : ""}`}
          name="branch"
          value={formData.branch}
          onChange={handleChange}
        >
          <option value="">Select your branch</option>
          <option value="Computer Science and Engineering">
            Computer Science and Engineering
          </option>
          <option value="Electronics and Communication Engineering">
            Electronics and Communication Engineering
          </option>
          <option value="Computer Engineering">Computer Engineering</option>
          <option value="Computer Science and Technology">
            Computer Science and Technology
          </option>
          <option value="Electrical and Electronics Engineering">
            Electrical and Electronics Engineering
          </option>
          <option value="Electronics and Instrumentation Engineering">
            Electronics and Instrumentation Engineering
          </option>
          <option value="M. Tech.">M. Tech.</option>
          <option value="MCA (Computer Applications)">
            MCA (Computer Applications)
          </option>
          <option value="M.Sc. (Data Science)">M.Sc. (Data Science)</option>
        </select>
        {errors.branch && <p className="text-red-500">{errors.branch}</p>}
        <select
          className={`w-full p-2 mb-4 ${
            errors.teamSize ? "border-red-500" : ""
          }`}
          name="teamSize"
          value={formData.teamSize}
          onChange={handleChange}
        >
          <option value="">Select the number of members in your team</option>
          <option value="1">1 (Individual)</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        {errors.teamSize && <p className="text-red-500">{errors.teamSize}</p>}
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Next to
        </button>
      </div>
    </div>
  );
};

export default TeamLeader;
