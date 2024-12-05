// src/pages/signup/services/validation.js
export const validateInputs = (formData) => {
    const { username, email, password } = formData;
  
    if (!username.trim()) return "Username cannot be empty or just spaces.";
    if (!email.trim()) return "Email cannot be empty or just spaces.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    if (!password.trim()) return "Password cannot be empty or just spaces.";
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
    if (!passwordRegex.test(password))
      return "Password must contain at least one letter and one number.";
    
    return null;
  };
  