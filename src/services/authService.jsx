import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./FirebaseConfig";
import { toast } from 'react-hot-toast';  // Import react-hot-toast for toast notifications
import { getFirebaseErrorMessage } from '../utils/firebaseErrorMessages';

const auth = getAuth(app);

// Signup Function
export const signUp = async (email, password) => {
  console.log("Signup attempt with:", email);
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    const errorMessage = getFirebaseErrorMessage(error.code);  // Get user-friendly error message
    throw new Error(errorMessage);  // Propagate the error
  }
};

// Login Function
export const logIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    toast.success('Login successful!');
    return userCredential;
  } catch (error) {
    const errorMessage = getFirebaseErrorMessage(error.code);  // Get user-friendly error message
    console.error("Login error:", errorMessage);
    toast.error(errorMessage);  // Show error toast
    throw new Error(errorMessage);  // Propagate the error
  }
};

// Logout Function
export const logOut = async () => {
  try {
    await signOut(auth);
    toast.success('Logout successful!');
  } catch (error) {
    const errorMessage = getFirebaseErrorMessage(error.code);  // Get user-friendly error message
    console.error("Logout error:", errorMessage);
    toast.error(errorMessage);  // Show error toast
  }
};

// Google Login
export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    toast.success('Google Sign up/Login Successful!');
    return result;
  } catch (error) {
    const errorMessage = getFirebaseErrorMessage(error.code);  // Get user-friendly error message
    console.error("Google login error:", errorMessage);
    toast.error(errorMessage);  // Show error toast
    throw new Error(errorMessage);  // Propagate the error
  }
};

// Facebook Login
export const facebookLogin = async () => {
  const provider = new FacebookAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    toast.success('Facebook Sign up/Login Successful!');
    return result;
  } catch (error) {
    const errorMessage = getFirebaseErrorMessage(error.code);  // Get user-friendly error message
    console.error("Facebook login error:", errorMessage);
    toast.error(errorMessage);  // Show error toast
    throw new Error(errorMessage);  // Propagate the error
  }
};
