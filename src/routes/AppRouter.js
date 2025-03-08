import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      
      {/* Protect the HomePage route with PrivateRoute */}
      <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
    </Routes>
  </Router>
);

export default AppRouter;
