import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Importing AuthContext to check authentication status

const PrivateRoute = () => {
  const { user } = useAuth(); // Check if the user is logged in

  if (!user) {
    // If not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the child components (the page this route protects)
  return <Outlet />;
};

export default PrivateRoute;
