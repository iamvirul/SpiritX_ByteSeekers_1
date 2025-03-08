import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/Buttons';
import CustomInputField from '../components/InputFields';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleGoogleSignup = () => {
    console.log('Sign up with Google');
  };

  const handleFacebookSignup = () => {
    console.log('Sign up with Facebook');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-boxColor p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-2">Create an Account</h1>
        <p className="text-sm text-textColor2 mb-6">Sign up to get started.</p>

        {/* Google Signup Button */}
        <CustomButton
          onClick={handleGoogleSignup}
          icon={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-7 h-7"
            />
          }
          className="bg-transparent text-textColor2 hover:bg-gray-900 mb-6"
        >
          Sign up with Google
        </CustomButton>

        {/* Facebook Signup Button */}
        <CustomButton
          onClick={handleFacebookSignup}
          icon={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-7 h-7"
            />
          }
          className="bg-transparent text-textColor2 hover:bg-gray-900 mb-6"
        >
          Sign up with Facebook
        </CustomButton>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-textColor2">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Email Input Field */}
        <CustomInputField
          label="Email"
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Input Field */}
        <CustomInputField
          label="Password"
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Confirm Password Input Field */}
        <CustomInputField
          label="Confirm Password"
          type="password"
          id="confirm-password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Sign Up Button */}
        <CustomButton
          onClick={handleSignup}
          className="bg-primary text-white hover:bg-primary/90 mb-4"
        >
          Sign Up
        </CustomButton>

        {/* Login Link */}
        <p className="text-sm text-textColor2 text-center">
          Already have an account?{' '}
          <a href="#" className="text-primary hover:text-primary/80" onClick={() => navigate('/login')}>
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;