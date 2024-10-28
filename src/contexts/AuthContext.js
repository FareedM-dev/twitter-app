import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const handleSignIn = async (credentials) => {
    try {
      const data = await signIn(credentials); // Use signin from api.js
      console.log("Logged in successfully:", data);

      // Redirect to dashboard on successful login
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSignUp = async (credentials) => {
    try {
      const data = await signUp(credentials);
      console.log("Signed up successfully:", data);
      navigate("/dashboard"); // Redirect to dashboard or welcome page
    } catch (error) {
      console.error("Sign-up failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ handleSignIn, handleSignUp }}>
      {children}
    </AuthContext.Provider>
  );
};
