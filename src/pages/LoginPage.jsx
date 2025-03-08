import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/Buttons';
import CustomInputField from '../components/InputFields';
import { logIn, googleLogin, facebookLogin } from '../services/authService';
import { validateEmail, validatePassword } from '../utils/validators';
import GoogleImage from '../assets/images/google.png';
import FacebookImage from '../assets/images/facebook.png';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  // Real-time validation for email and password
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value) ? '' : 'Invalid email format');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value) ? '' : 'Password must contain at least one lowercase letter, one uppercase letter, and one special character');
  };

  const handleSignIn = async () => {
    if (emailError || passwordError) return;
    try {
      await logIn(email, password);
      toast.success('Login successful! Redirecting...');
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message || 'Login failed. Please try again.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success('Google login successful!');
      navigate('/home');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await facebookLogin();
      toast.success('Facebook login successful!');
      navigate('/home');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-boxColor p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-2">Sign in to your account</h1>
        <p className="text-sm text-textColor2 mb-6">Login to continue.</p>

        {/* Google Login Button */}
        <CustomButton
          onClick={handleGoogleLogin}
          icon={<img src={GoogleImage} alt="Google" className="w-10 h-10" />}
          className="bg-transparent text-textColor2 hover:bg-gray-900 mb-6"
        >
          Sign in with Google
        </CustomButton>

        {/* Facebook Login Button */}
        <CustomButton
          onClick={handleFacebookLogin}
          icon={<img src={FacebookImage} alt="Facebook" className="w-12 h-12" />}
          className="bg-transparent text-textColor2 hover:bg-gray-900 mb-6"
        >
          Sign in with Facebook
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

        {/* Sign In Button */}
        <CustomButton
          onClick={handleSignIn}
          className="bg-primary text-white hover:bg-primary/90 mb-4"
        >
          Sign In
        </CustomButton>

        {/* Signup Link */}
        <p className="text-sm text-textColor2 text-center">
          Don't have an account?{' '}
          <a href="" className="text-primary hover:text-primary/80" onClick={() => navigate('/signup')}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
