import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Importing AuthContext to check authentication status

const PrivateRoute = () => {
  const { user, loading } = useAuth(); // Check if the user is logged in

  if (loading) {
    return null; // Prevents rendering anything when loading spinner is shown in AuthProvider
  }

  if (!user) {
    // If not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the child components (the page this route protects)
  return <Outlet />;
};

export default PrivateRoute;
