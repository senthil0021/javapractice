// src/component/AuthContext.js
import React, { createContext, useContext, useState } from "react";
import axios from "axios";

// Create Context
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null); 

  // Signup function
  const signup = async (username, email, password) => {
    try {
      const response = await axios.post("http://localhost:4000/api/auth/signup", {
        username,
        email,
        password,
      });
      setUser(response.data.newUser);
      console.log("User registered successfully:", response.data.newUser);
      return true;
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed. Please try again.");
      console.error("Signup Failed:", error);
      return false;
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:4000/api/auth/login", {
        email,
        password,
      });
      setUser(response.data.user);
      console.log("Login successful:", response.data.user);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please check your credentials.");
      console.error("Login Failed:", err);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ signup, login, user, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
