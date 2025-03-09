# SecureConnect - ByteSeekers

Welcome to **SecureConnect**, a secure and user-friendly authentication system developed by **ByteSeekers** (Hiranya Semindi, Virul Nirmala, Tilakna Gunawardhane, Udeepa Gaallage). This project is part of the **SpiritX 2025** hackathon and is built using **Firebase Authentication** to provide a seamless and secure signup and login experience.

## Project Overview

SecureConnect is a secure authentication system that allows users to:
- **Sign up** with a unique username and strong password.
- **Log in** and be greeted with a personalized message.

The project is built using **React** for the frontend and **Firebase** for authentication and backend services. The system enforces validation rules, manages errors effectively, and provides a polished user experience.

## Getting Started

To run this project locally, follow the steps below:

### Prerequisites

1. **Enable Firebase Authentication**:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project or use an existing one.
   - Enable the **Email/Password** authentication method in the **Authentication** section.

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/iamvirul/SpiritX_ByteSeekers_1.git
   cd SpiritX_ByteSeekers_1
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**:
   Create a `.env` file in the root directory of the project and add the following Firebase configuration:

   ```plaintext
   REACT_APP_FIREBASE_API_KEY=
   REACT_APP_FIREBASE_AUTH_DOMAIN=
   REACT_APP_FIREBASE_PROJECT_ID=
   REACT_APP_FIREBASE_STORAGE_BUCKET=
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
   REACT_APP_FIREBASE_APP_ID=
   ```

5. **Run the Project**:
   ```bash
   npm start
   ```

   The application will start running on `http://localhost:3000`.

## Features

### Signup Page
- **Input Fields**: Username, Password, Confirm Password.
- **Validation**: Real-time validation for username length, password strength, and password match.
- **Error Handling**: Display errors under each input field if validation fails.
- **Password Strength Indicator**: Dynamically updates based on password complexity.
- **Success Handling**: After successful signup, show a confirmation dialog and redirect to the login page after 2 seconds.

### Login Page
- **Input Fields**: Username and Password.
- **Validation**: Real-time validation for empty fields and incorrect credentials.
- **Error Handling**: Display errors under each field if validation fails.
- **Success Handling**: Upon successful login, navigate to a landing page with a personalized message: "Hello, <username>!".
- **Session Management**: Keep the user logged in until they click the "Logout" button.

## Project Structure

- **Frontend**: Built using React, handles the user interface and user experience.
- **Backend**: Firebase Authentication handles user authentication and session management.
- **Database**: Firebase Firestore (optional) can be used to store additional user data.

## Dependencies

- **React**: Frontend library for building user interfaces.
- **Firebase**: Backend service for authentication and database.
- **React Router**: For navigation between pages.
- **React Hook Form**: For form handling and validation.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. We welcome any improvements or new features!

## Team Members

- **Hiranya Semindi**
- **Virul Nirmala**
- **Tilakna Gunawardhane**
- **Udeepa Gaallage**

## Contact

If you have any questions or need further assistance, feel free to reach out to us:

- **Virul Nirmala**: [GitHub](https://github.com/iamvirul)
- **Hiranya Semindi**: [GitHub](https://github.com/hiranyasemindi)

**Happy Coding!** 🚀
