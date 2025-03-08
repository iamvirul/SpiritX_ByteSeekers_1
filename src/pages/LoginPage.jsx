import React from 'react';
import CustomButton from '../components/button';
import CustomInputField from '../components/inputField';

const LoginPage = () => {
  const handleGoogleLogin = () => {
    console.log('Sign in with Google');
  };

  const handleGithubLogin = () => {
    console.log('Sign in with Github');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Sign in to your account</h1>
        <p className="text-sm text-gray-600 mb-6">
          Login to your account for a faster checkout.
        </p>

        {/* Google Login Button */}
        <CustomButton
          onClick={handleGoogleLogin}
          icon={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-4 h-4"
            />
          }
          className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 mb-4"
        >
          Sign in with Google
        </CustomButton>

        {/* Github Login Button */}
        <CustomButton
          onClick={handleGithubLogin}
          icon={
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="Github"
              className="w-4 h-4"
            />
          }
          className="bg-gray-800 text-white hover:bg-gray-900 mb-6"
        >
          Sign in with Github
        </CustomButton>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

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

        {/* Keep Me Signed In Checkbox */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="keep-signed-in"
            className="h-4 w-4 text-[#EB662B] focus:ring-[#EB662B] border-gray-300 rounded"
          />
          <label htmlFor="keep-signed-in" className="ml-2 text-sm text-gray-700">
            Keep me signed in
          </label>
        </div>

        {/* Sign In Button */}
        <CustomButton
          onClick={() => console.log('Sign in clicked')}
          className="bg-[#EB662B] text-white hover:bg-[#EB662B]/90 mb-4"
        >
          Sign In
        </CustomButton>

        {/* Sign Up Link */}
        <p className="text-sm text-gray-600 text-center">
          Don't you have an account?{' '}
          <a href="#" className="text-[#EB662B] hover:text-[#EB662B]/80">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;