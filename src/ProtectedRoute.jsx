// src/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/Authcontext"; // Adjust the path as necessary

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/admin" replace />; // Redirect to login if not authenticated
  }

  return children; 
};

export default ProtectedRoute;