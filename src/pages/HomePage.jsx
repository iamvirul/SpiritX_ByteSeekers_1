import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/Buttons';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';

const HomePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    console.log('Auth object:', auth); // Debug log

    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('Auth state changed:', currentUser); // Debug log
      if (currentUser) {
        setUser(currentUser);
        console.log('User set:', currentUser);
      } else {
        console.log('No user found, redirecting to login');
        navigate('/login'); // Redirect if no user is logged in
      }
    });

    return () => {
      console.log('Cleaning up auth listener'); // Debug log
      unsubscribe();
    };
  }, [navigate]);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      console.log('Attempting logout...');
      await signOut(auth);
      console.log('User logged out successfully');
      localStorage.clear();
      sessionStorage.clear();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-boxColor p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Welcome to Your Dashboard</h1>

        {user ? (
          <div className="mb-6">
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-white"
              />
            )}
            <p className="text-lg text-white font-semibold">{user.displayName || 'User'}</p>
            <p className="text-textColor2">{user.email}</p>
          </div>
        ) : (
          <p className="text-lg text-textColor2">Loading user info...</p>
        )}

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
