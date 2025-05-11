// src/component/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

 
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Signup function
  const signup = async (username, email, password) => {
    try {
      const response = await axios.post("http://localhost:4000/api/auth/signup", {
        username,
        email,
        password,
      });
      setUser(response.data.newUser);
      return true;
    } catch (error) {
      console.error("Signup Failed:", error);
      return false;
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:4000/api/auth/login", {
        email, 
        password
      });
      setUser(response.data.user);
      localStorage.setItem("token", response.data.token); // Save token in localStorage
      return true;
    } catch (err) {
      console.error("Login Failed:", err);
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ signup, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
