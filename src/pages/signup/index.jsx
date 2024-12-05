// src/pages/signup/index.js
import React from "react";
import { useForm } from "./hooks/useForm";
import { useSignUp } from "./hooks/useSignUp";
import SignUpForm from "./components/SignUpForm";

const SignUpPage = () => {
  const [formData, handleInputChange] = useForm({ username: "", email: "", password: "" });
  const { handleSignUp, loading, error } = useSignUp();

  return (
    <SignUpForm
      formData={formData}
      onInputChange={handleInputChange}
      onSignUp={() => handleSignUp(formData)}
      error={error}
      loading={loading}
    />
  );
};

export default SignUpPage;
