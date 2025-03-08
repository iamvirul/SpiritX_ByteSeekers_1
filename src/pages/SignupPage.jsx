import React from 'react';
import CustomButton from '../components/Buttons';
import CustomInputField from '../components/InputFields';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleGoogleSignup = () => {
    console.log('Sign up with Google');
  };

  const handleGithubSignup = () => {
    console.log('Sign up with Github');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Create an account</h1>
        <p className="text-sm text-gray-600 mb-6">
          Sign up to get started with our services.
        </p>

        {/* Google Signup Button */}
        <CustomButton
          onClick={handleGoogleSignup}
          icon={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-4 h-4"
            />
          }
          className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 mb-4"
        >
          Sign up with Google
        </CustomButton>

        {/* Github Signup Button */}
        <CustomButton
          onClick={handleGithubSignup}
          icon={
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="Github"
              className="w-4 h-4"
            />
          }
          className="bg-gray-800 text-white hover:bg-gray-900 mb-6"
        >
          Sign up with Github
        </CustomButton>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Name Input Field */}
        <CustomInputField
          label="Full Name"
          type="text"
          id="name"
          placeholder="Enter your full name"
          value=""
          onChange={(e) => console.log(e.target.value)}
        />

        {/* Email Input Field */}
        <CustomInputField
          label="Email"
          type="email"
          id="email"
          placeholder="Enter your email"
          value=""
          onChange={(e) => console.log(e.target.value)}
        />

        {/* Password Input Field */}
        <CustomInputField
          label="Password"
          type="password"
          id="password"
          placeholder="Enter your password"
          value=""
          onChange={(e) => console.log(e.target.value)}
        />

        {/* Terms and Conditions Checkbox */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 text-[#EB662B] focus:ring-[#EB662B] border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
            I agree to the Terms & Conditions
          </label>
        </div>

        {/* Sign Up Button */}
        <CustomButton
          onClick={() => console.log('Sign up clicked')}
          className="bg-[#EB662B] text-white hover:bg-[#EB662B]/90 mb-4"
        >
          Sign Up
        </CustomButton>

        {/* Already have an account? Login Link */}
        <p className="text-sm text-gray-600 text-center">
          Already have an account?{' '}
          <a href="#" onClick={handleLogin} className="text-[#EB662B] hover:text-[#EB662B]/80">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
