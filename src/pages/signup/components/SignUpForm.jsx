// src/pages/signup/components/SignUpForm.jsx
import React from "react";

const SignUpForm = ({ formData, onInputChange, onSignUp, error, loading }) => (
  <div className="flex flex-col items-center justify-center h-screen space-y-6">
    <div className="space-y-4">
      {["username", "email", "password"].map((field, index) => (
        <div key={index} className="flex flex-col items-center space-y-2">
          <label htmlFor={`input-field-${index}`} className="text-sm font-medium text-gray-700">
            {`Your ${field}`}
          </label>
          <input
            id={`input-field-${index}`}
            type={field === "password" ? "password" : "text"}
            className="w-64 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData[field]}
            onChange={(e) => onInputChange(e, field)}
          />
        </div>
      ))}
    </div>

    {error && <div className="text-red-500 text-sm font-medium">{error}</div>}

    <button
      onClick={onSignUp}
      className={`px-6 py-2 rounded-md text-white ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
      disabled={loading}
    >
      {loading ? <div className="flex items-center space-x-2"><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div><span>Signing Up...</span></div> : "Sign Up"}
    </button>
  </div>
);

export default SignUpForm;
