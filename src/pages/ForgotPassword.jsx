import React, { useState } from 'react';
import CustomButton from '../components/Buttons';
import CustomInputField from '../components/InputFields';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log('Password reset link sent to:', email);
    // You can add an API call here to send the reset password email
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
          onChange={(e) => setEmail(e.target.value)}
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
