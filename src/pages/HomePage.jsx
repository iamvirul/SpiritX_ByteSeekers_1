import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/Buttons';
import { getAuth, signOut } from 'firebase/auth';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      localStorage.clear();  // Clear all stored user data
      sessionStorage.clear(); // Clear session storage if used
      console.log('User logged out');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  

  // Log when the page is loaded
  useEffect(() => {
    console.log('HomePage loaded');
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-boxColor p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Welcome to Your Dashboard</h1>
        <p className="text-lg text-textColor2 mb-6">You are successfully logged in.</p>

        {/* Logout Button */}
        <CustomButton
          onClick={handleLogout}
          className="bg-primary text-white hover:bg-primary/70"
        >
          Logout
        </CustomButton>
      </div>
    </div>
  );
};

export default HomePage;

