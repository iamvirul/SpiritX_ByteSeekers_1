import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CustomButton from '../components/Buttons';
import CustomInputField from '../components/InputFields';
import { logIn, googleLogin } from '../services/authService';
import { validateEmail, validatePassword } from '../utils/validators';
import GoogleImage from '../assets/images/google.png';
import { toast } from 'react-hot-toast';
import { DotLoader } from 'react-spinners';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value) ? '' : 'Invalid email format');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(
      validatePassword(e.target.value)
        ? ''
        : 'Password must contain at least one lowercase letter, one uppercase letter, and one special character',
    );
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      if (!email) setEmailError('Please enter your email');
      if (!password) setPasswordError('Please enter your password');
      return;
    }

    if (emailError || passwordError) return;

    setLoading(true);

    try {
      await logIn(email, password);
      toast.success('Login successful! Redirecting...');
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false); // Hide spinner
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-boxColor p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-white mb-2">Sign in to your account</h1>
        <p className="text-sm text-textColor2 mb-6">Login to continue.</p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <CustomButton
            onClick={handleGoogleLogin}
            icon={<img src={GoogleImage} alt="Google" className="w-10 h-10" />}
            className="bg-transparent text-textColor2 hover:bg-gray-900 mb-6 relative overflow-hidden"
          >
            <span className="relative z-10">Sign in with Google</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
              style={{
                top: '50%',
                left: '-100%',
                width: '200%',
                height: '200%',
                transform: 'rotate(-45deg)',
              }}
              whileHover={{
                left: '100%',
                transition: { duration: 0.75, ease: 'linear' },
              }}
            />
          </CustomButton>
        </motion.div>
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-textColor2">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
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

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <CustomButton
            onClick={handleSignIn}
            className="bg-primary text-white hover:bg-primary/90 mb-4 relative overflow-hidden"
          >
            
            {loading ? (
              <DotLoader size={20} color="white" />
            ) : (
              <span className="relative z-10">Sign In</span>
            )}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
              style={{
                top: '50%',
                left: '-100%',
                width: '200%',
                height: '200%',
                transform: 'rotate(-45deg)',
              }}
              whileHover={{
                left: '100%',
                transition: { duration: 0.75, ease: 'linear' },
              }}
            />
          </CustomButton>
        </motion.div>
        <p className="text-sm text-textColor2 text-center mb-4">
          <a
            href="#"
            className="text-primary hover:text-primary/80"
            onClick={() => navigate('/forgot-password')}
          >
            Forgot your password?
          </a>
        </p>

        <p className="text-sm text-textColor2 text-center">
          Don't have an account?{' '}
          <a
            href="#"
            className="text-primary hover:text-primary/80"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;