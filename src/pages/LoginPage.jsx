import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/Buttons';
import CustomInputField from '../components/InputFields';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleGoogleLogin = () => {
    console.log('Sign in with Google');
  };

  const handleFacebookLogin = () => {
    console.log('Sign in with Facebook');
  };

  const handleSignIn = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Keep me signed in:', keepSignedIn);
  };

  const navigate = useNavigate();
  
  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/signup');
};

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-boxColor p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-2">Sign in to your account</h1>
        <p className="text-sm text-textColor2 mb-6">
          Login to your account for a faster checkout.
        </p>

        {/* Google Login Button */}
        <CustomButton
          onClick={handleGoogleLogin}
          icon={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-7 h-7"
            />
          }
          className="bg-transparent text-textColor2 hover:bg-gray-900 mb-6"
        >
          Sign in with Google
        </CustomButton>

        {/* Facebook Login Button */}
        <CustomButton
          onClick={handleFacebookLogin}
          icon={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-7 h-7"
            />
          }
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

        {/* Forgot Password Link - Aligned Right */}
        <div className="flex justify-end mb-6">
          <a href="/signup" className="text-sm text-primary hover:text-primary/80">
            Forgot password?
          </a>
        </div>

        {/* Sign In Button */}
        <CustomButton
          onClick={handleSignIn}
          className="bg-primary text-white hover:bg-primary/90 mb-4"
        >
          Sign In
        </CustomButton>

        {/* Sign Up Link */}
        <p className="text-sm text-textColor2 text-center">
          Don't have an account?{' '}
          <a href="#" className="text-primary hover:text-primary/80">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
