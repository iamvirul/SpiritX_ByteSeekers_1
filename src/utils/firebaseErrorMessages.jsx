// utils/firebaseErrorMessages.js
export const getFirebaseErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'This email is already in use. Please use a different email.';
      case 'auth/invalid-email':
        return 'The email you entered is invalid. Please check and try again.';
      case 'auth/weak-password':
        return 'The password is too weak. Please choose a stronger password.';
      case 'auth/missing-email':
        return 'Email is required. Please enter your email.';
      default:
        return 'An unknown error occurred. Please try again later.';
    }
  };
  