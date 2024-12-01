import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (event, field) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const validateInputs = () => {
    const { username, email, password } = formData;
    if (!username.trim()) return "Username cannot be empty or just spaces.";
    if (!email.trim()) return "Email cannot be empty or just spaces.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    if (!password.trim())
      return "Password cannot be empty or just spaces.";
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
    if (!passwordRegex.test(password))
      return "Password must contain at least one letter and one number.";
    return null;
  };

  const handleSignUp = async () => {
    const errorMessage = validateInputs();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to sign up");
      }

      const data = await response.json();
      console.log("Sign Up Successful:", data);
      alert("Sign up successful!");
    } catch (error) {
      console.error("Error during sign up:", error.message);
      alert("Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <div className="space-y-4">
        {[
          { label: "Your username", field: "username" },
          { label: "Your email", field: "email" },
          { label: "Your password", field: "password" },
        ].map(({ label, field }, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <label
              htmlFor={`input-field-${index}`}
              className="text-sm font-medium text-gray-700"
            >
              {label}
            </label>
            <input
              id={`input-field-${index}`}
              type={field === "password" ? "password" : "text"}
              className="w-64 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData[field]}
              onChange={(e) => handleInputChange(e, field)}
            />
          </div>
        ))}
      </div>

      {error && (
        <div className="text-red-500 text-sm font-medium">{error}</div>
      )}

      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center">
          <button
            onClick={handleSignUp}
            className={`px-6 py-2 rounded-md text-white ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Signing Up...</span>
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;


