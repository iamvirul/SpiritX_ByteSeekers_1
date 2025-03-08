import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext"; 
import LoadingSpinner from "./LoadingSpinner";

const PrivateRoute = () => {
  const { user, loading } = useAuth(); // Access user and loading state from AuthContext

  if (loading) {
    // If loading, return null or a loading spinner to prevent rendering
    return <div><LoadingSpinner /> </div>; // You can customize this to show a loading spinner
  }

  if (!user) {
    // If user is not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  // If user is authenticated, render the child components (protected page)
  return <Outlet />;
};

export default PrivateRoute;
