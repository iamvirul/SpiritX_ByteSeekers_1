import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import WelcomePage from './pages/WelcomePage';
import ForgotPassword from './pages/ForgotPassword';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
