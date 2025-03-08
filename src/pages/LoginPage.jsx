import React from 'react';
import Button from '../components/button';
import InputField from '../components/inputField';

const LoginPage = () => {
  const handleLogin = () => {
    // Handle login logic here
    console.log('Login button clicked');
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Side - Image */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/800)' }}>
        {/* You can replace the placeholder image URL with your actual image */}
      </div>

      {/* Right Side - Login Box */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-[#EB662B]">Welcome to Vuexyl</h1>
            <p className="text-gray-400">Please sign-in to your account and start the adventure</p>
          </div>

          <InputField
            label="Email"
            type="email"
            id="email"
            placeholder="admin@vuexy.com"
            value=""
            onChange={(e) => console.log(e.target.value)}
          />

          <InputField
            label="Password"
            type="password"
            id="password"
            placeholder="********"
            value=""
            onChange={(e) => console.log(e.target.value)}
          />

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-[#EB662B] focus:ring-[#EB662B] border-gray-300 rounded"
                id="remember-me"
              />
              <label className="ml-2 block text-sm text-gray-400" htmlFor="remember-me">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-sm text-[#EB662B] hover:text-[#EB662B]/80">
              Forgot Password?
            </a>
          </div>

          <div className="flex items-center justify-between">
            <Button onClick={handleLogin}>Sign In</Button>
            <a href="#" className="text-sm text-[#EB662B] hover:text-[#EB662B]/80">
              New on our platform? Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;