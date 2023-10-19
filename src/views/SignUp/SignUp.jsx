import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

const SignUp = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    Userfname: "",
    Userlname: "",
    UserDateOfBirth: "",
    Gender: "",
    Weight: "",
    Height: "",
    UserEmail: "",
    UserPassword: "",
    UserRole: "",
  });

  // Event handler to update form data on input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Event handler to submit the form data
  const handleSubmit = async () => {
    try {
      // Make a POST request to save data to MongoDB
      const response = await axios.post(
        "https://keepfit-backend.onrender.com/user",
        formData
      );

      // Handle the response, e.g., show a success message
      console.log("Data saved successfully:", response.data);
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      {/* ... Your existing JSX code ... */}
      
      {/* Update input elements to include the 'name' attribute and 'onChange' handler */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-primary font-semibold text-[16px]">
            First Name
          </span>
        </label>
        <input
          type="text"
          name="Userfname"
          value={formData.Userfname}
          onChange={handleInputChange}
          placeholder="Enter Firstname"
          className="input input-bordered w-80 h-10"
        />
      </div>

      {/* ... Repeat similar changes for other input elements ... */}

      {/* Update the button to trigger the handleSubmit function */}
      <button
        onClick={handleSubmit}
        className="btn-primary w-80 rounded-md p-1 text-[24px] font-semibold text-white"
      >
        Sign Up
      </button>

      {/* ... Your existing JSX code ... */}
    </>
  );
};

export default SignUp;
