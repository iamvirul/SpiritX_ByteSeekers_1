// validators.js

// Function to validate email using regex
export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  
  // Function to validate password based on the given rules
  export const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  };
  
  // Function to validate confirm password
  export const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };
  
  // Function to validate username length (min 8 characters)
  export const validateUsername = (username) => {
    return username.length >= 8;
  };
  
