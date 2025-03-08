import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CustomButton from '../components/Buttons';
import CustomInputField from '../components/InputFields';
import { signUp, googleLogin } from '../services/authService';
import { validateEmail, validatePassword, validateConfirmPassword } from '../utils/validators';
import GoogleImage from '../assets/images/google.png';
import { toast } from 'react-hot-toast';
import { FaExclamationCircle, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import { DotLoader } from 'react-spinners';


const ProgressBar = ({ strength, isVisible }) => {
  if (!isVisible) return null;

  const strengthText = ['Weak', 'Medium', 'Strong'][strength];
  const strengthColor = ['red', 'yellow', 'green'][strength];
  const strengthIcon = [
    <FaExclamationCircle className="text-red-500" />,
    <FaCheckCircle className="text-yellow-500" />,
    <FaShieldAlt className="text-green-500" />,
  ][strength];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-2"
    >
      <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden my-3">
        <div
          className={`h-full transition-all duration-300 ${
            strength === 0
              ? 'bg-red-500 w-1/3' 
              : strength === 1
              ? 'bg-yellow-500 w-2/3' 
              : 'bg-green-500 w-full'
          }`}
        ></div>
      </div>
      <div className={`text-sm mt-1 font-semibold flex items-center gap-2 my-3 text-${strengthColor}-500`}>
        {strengthIcon} Password Strength: <span>{strengthText}</span>
      </div>
    </motion.div>
  );
};

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate();

  const getPasswordStrength = (password) => {
    let strength = 0;

    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    if (strength <= 2) return 0; 
    if (strength <= 4) return 1;
    return 2;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value) ? '' : 'Invalid email format');
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(getPasswordStrength(newPassword)); 
    setPasswordError(validatePassword(newPassword) ? '' : 'Password must contain at least one lowercase letter, one uppercase letter, and one special character');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError(validateConfirmPassword(password, e.target.value) ? '' : 'Passwords do not match');
  };

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword || emailError || passwordError || confirmPasswordError) {
      if (!email) setEmailError('Email is required');
      if (!password) setPasswordError('Password is required');
      if (!confirmPassword) setConfirmPasswordError('Confirm Password is required');
      return;
    }

    setLoading(true);

    try {
      await signUp(email, password);
      toast.success('Signup successful! Redirecting...');
      navigate('/login');
    } catch (error) {
      console.error("Signup failed:", error);
      toast.error(error.message || 'Signup failed. Please try again.');
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await googleLogin();
      toast.success('Google Sign up Successful!');
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
    }finally {
      setLoading(false); // Hide spinner
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
        <h1 className="text-2xl font-bold text-white mb-2">Create an Account</h1>
        <p className="text-sm text-textColor2 mb-6">Sign up to get started.</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <CustomButton
            onClick={handleGoogleSignup}
            icon={
              <img
                src={GoogleImage}
                alt="Google"
                className="w-10 h-10"
              />
            }
            className="bg-transparent text-textColor2 hover:bg-gray-900 mb-6 relative overflow-hidden"
          >
            <span className="relative z-10">Sign up with Google</span>
            
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
        <div className="relative">
          <CustomInputField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            errorMessage={passwordError}
            isValid={!passwordError}
          />
          {isPasswordFocused && <ProgressBar strength={passwordStrength} isVisible={isPasswordFocused} />}
        </div>
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
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <CustomButton
            onClick={handleSignup}
            className="bg-primary text-white hover:bg-primary/90 mb-4 relative overflow-hidden"
          >
            {loading ? (
              <DotLoader size={20} color="white" />
            ) : (
              <span className="relative z-10">Sign Up</span>
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
        <p className="text-sm text-textColor2 text-center">
          Already have an account?{' '}
          <a href="" className="text-primary hover:text-primary/80" onClick={() => navigate('/login')}>
            Log in
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SignupPage;