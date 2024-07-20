import React, { useState } from "react";
import bg2 from "../assets/bg2.jpg";

const YuktiChallenge = ({ formData, setFormData, formFilled }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.problemStatement)
      newErrors.problemStatement = "Problem statement is required";
    if (!formData.problemCategory)
      newErrors.problemCategory = "Problem category is required";
    if (!formData.solution) newErrors.solution = "Solution is required";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else if (!formFilled) {
      alert("Previous form not filled");
    } else {
      // Handle form submission (e.g., API call)
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-cover">
      <div className="bg-gray-800 flex flex-col bg-opacity-70 p-8 rounded-3xl text-center border-orange-500 border-2">
        <h2 className="text-3xl font-bold text-orange-400 mb-4">
          Details of YUKTI CHALLENGE
        </h2>
        <p className="text-white mb-4 border-dotted border-orange-500 border-2">
          Be careful while submitting the problem statement & its category.
        </p>
        <textarea
          className={`w-full p-2 mb-4 ${
            errors.problemStatement ? "border-red-500" : ""
          }`}
          name="problemStatement"
          placeholder="Problem statement (within 250 words)"
          value={formData.problemStatement}
          onChange={handleChange}
        />
        {errors.problemStatement && (
          <p className="text-red-500">{errors.problemStatement}</p>
        )}
        <select
          className={`w-full p-2 mb-4 ${
            errors.problemCategory ? "border-red-500" : ""
          }`}
          name="problemCategory"
          value={formData.problemCategory}
          onChange={handleChange}
        >
          <option value="">Select problem category</option>
          <option value="Space Technology">Space Technology</option>
          <option value="Smart Automation">Smart Automation</option>
          <option value="Clean & Green Technology">
            Clean & Green Technology
          </option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Transportation & Logistics">
            Transportation & Logistics
          </option>
          <option value="Disaster Management">Disaster Management</option>
        </select>
        {errors.problemCategory && (
          <p className="text-red-500">{errors.problemCategory}</p>
        )}
        <textarea
          className={`w-full p-2 mb-4 ${
            errors.solution ? "border-red-500" : ""
          }`}
          name="solution"
          placeholder="Solution for your problem statement (briefly explain)"
          value={formData.solution}
          onChange={handleChange}
        />
        {errors.solution && <p className="text-red-500">{errors.solution}</p>}
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Confirm to register
        </button>
      </div>
    </div>
  );
};

export default YuktiChallenge;
