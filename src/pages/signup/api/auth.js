// src/pages/signup/api/auth.js
export const signUp = async (formData) => {
    const response = await fetch("http://localhost:3001/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      throw new Error("Failed to sign up");
    }
  
    return await response.json();
  };
  