// src/pages/signup/hooks/useSignUp.js
import { useState } from "react";
import { signUp } from "../api/auth";
import { validateInputs } from "../services/validation";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async (formData) => {
    const errorMessage = validateInputs(formData);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const data = await signUp(formData);
      console.log("Sign Up Successful:", data);
      alert("Sign up successful!");
    } catch (error) {
      console.error("Error during sign up:", error.message);
      alert("Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { handleSignUp, loading, error };
};
