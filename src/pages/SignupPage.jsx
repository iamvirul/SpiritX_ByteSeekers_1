import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import CustomButton from '../components/Buttons';
import CustomInputField from '../components/InputFields';
import { signUp, googleLogin, facebookLogin } from '../services/authService';
import { validateEmail, validatePassword, validateConfirmPassword } from '../utils/validators';
import GoogleImage from '../assets/images/google.png';
import FacebookImage from '../assets/images/facebook.png';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate();

  // Real-time validation for email, password, and confirm password
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value) ? '' : 'Invalid email format');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value) ? '' : 'Password must contain at least one lowercase letter, one uppercase letter, and one special character');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError(validateConfirmPassword(password, e.target.value) ? '' : 'Passwords do not match');
  };

  const handleSignup = async () => {
    // Perform final validation before submitting
    if (emailError || passwordError || confirmPasswordError) return;

    try {
      await signUp(email, password);
      alert('Signup Successful! Redirecting...');
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await googleLogin();
      alert('Google Sign up Successful!');
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFacebookSignup = async () => {
    try {
      await facebookLogin();
      alert('Facebook Sign up Successful!');
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
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
              src={GoogleImage}
              alt="Google"
              className="w-10 h-10"
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
              src={FacebookImage}
              alt="Facebook"
              className="w-12 h-12"
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
          onChange={handleEmailChange}
          errorMessage={emailError}
          isValid={!emailError}
        />

        {/* Password Input Field */}
        <div className="relative">
          <CustomInputField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            errorMessage={passwordError}
            isValid={!passwordError}
          />

        </div>

        {/* Confirm Password Input Field */}
        <div className="relative">
          <CustomInputField
            label="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirm-password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            errorMessage={confirmPasswordError}
            isValid={!confirmPasswordError}
          />
          
        </div>

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
          <a href="" className="text-primary hover:text-primary/80" onClick={() => navigate('/login')}>
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
