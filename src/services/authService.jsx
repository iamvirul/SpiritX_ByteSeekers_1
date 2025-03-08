import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./FirebaseConfig";

const auth = getAuth(app);

// Signup Function
export const signUp = async (email, password) => {
    console.log("Signup attempt with:", email);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup successful:", userCredential.user);
      return userCredential;
    } catch (error) {
      console.error("Signup error:", error.message);
      throw error;
    }
  };

// Login Function
export const logIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// Logout Function
export const logOut = async () => {
  return await signOut(auth);
};

// Google Login
export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

// Facebook Login
export const facebookLogin = async () => {
  const provider = new FacebookAuthProvider();
  return await signInWithPopup(auth, provider);
};
