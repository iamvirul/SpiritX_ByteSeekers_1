import React, { useState } from 'react';
import CustomButton from '../components/Buttons';
import CustomInputField from '../components/InputFields';
import { toast } from 'react-hot-toast'; // Assuming you are using react-hot-toast for notifications
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'; // Firebase authentication

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Email validation using regex
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  // Handle real-time email validation
  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    if (!enteredEmail) {
      setEmailError('Please enter your email');
    } else if (!validateEmail(enteredEmail)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleResetPassword = async () => {
    // Validate email before attempting to send the reset link
    if (emailError || !email) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Firebase Password Reset
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset link sent to your email');
    } catch (error) {
      console.error('Error sending reset link:', error);
      toast.error(error.message || 'Failed to send reset link. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-boxColor p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-2">Forgot Password?</h1>
        <p className="text-sm text-textColor2 mb-6">
          Enter your email, and we will send you a password reset link.
        </p>

        {/* Email Input Field */}
        <CustomInputField
          label="Email"
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange} // Handle real-time validation
          errorMessage={emailError}
          isValid={!emailError} // Show error only if there is an error
        />

        {/* Reset Password Button */}
        <CustomButton
          onClick={handleResetPassword}
          className="bg-primary text-white hover:bg-primary/90 mt-4"
        >
          Send Reset Link
        </CustomButton>

        {/* Back to Login Link */}
        <p className="text-sm text-textColor2 text-center mt-4">
          <a href="/login" className="text-primary hover:text-primary/80">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
