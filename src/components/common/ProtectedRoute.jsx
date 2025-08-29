import React from 'react';
import { Navigate } from 'react-router-dom';
// The path should be '../../hooks/useAuth.js' if you renamed the file as instructed
// import { useAuth } from '../../hooks/useAuth.jsx';

const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;