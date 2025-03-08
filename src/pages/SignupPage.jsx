import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import CustomButton from '../components/Buttons';
import CustomInputField from '../components/InputFields';
import { signUp, googleLogin, facebookLogin } from '../services/authService';
import { validateEmail, validatePassword, validateConfirmPassword, validateUsername, validateUniqueUsername } from '../utils/validators';
import GoogleImage from '../assets/images/google.png';
import FacebookImage from '../assets/images/facebook.png';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Clear error states when the user starts typing
    setEmailError('');
    setUsernameError('');
    setPasswordError('');
    setConfirmPasswordError('');
  }, [email, username, password, confirmPassword]);

  // Real-time validation for email, username, password, and confirm password
  const isEmailValid = validateEmail(email);
  const isUsernameValid = validateUsername(username);
  const isPasswordValid = validatePassword(password);
  const isConfirmPasswordValid = validateConfirmPassword(password, confirmPassword);

  const handleSignup = async () => {
    // Perform validations before submitting
    if (!isEmailValid) setEmailError('Invalid email format');
    if (!isUsernameValid) setUsernameError('Username must be at least 8 characters');
    if (!isPasswordValid) setPasswordError('Password must contain at least one lowercase letter, one uppercase letter, and one special character');
    if (!isConfirmPasswordValid) setConfirmPasswordError('Passwords do not match');

    if (isEmailValid && isUsernameValid && isPasswordValid && isConfirmPasswordValid) {
      try {
        await signUp(email, password, username);
        alert('Signup Successful! Redirecting...');
        navigate('/login');
      } catch (error) {
        setError(error.message);
      }
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
          onChange={(e) => setEmail(e.target.value)}
          isValid={isEmailValid}
          errorMessage={emailError}
        />


        {/* Password Input Field */}
        <div className="relative">
          <CustomInputField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isValid={isPasswordValid}
            errorMessage={passwordError}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-2/3 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>

        {/* Confirm Password Input Field */}
        <div className="relative">
          <CustomInputField
            label="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirm-password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            isValid={isConfirmPasswordValid}
            errorMessage={confirmPasswordError}
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-4 top-2/3 transform -translate-y-1/2 text-gray-500"
          >
            {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
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
