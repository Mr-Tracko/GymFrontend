import React from 'react';
import { Navigate } from 'react-router-dom';
// The path should be '../../hooks/useAuth.js' if you renamed the file as instructed
import { useAuth } from '../../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
    // 1. Get 'isAuthenticated' from our new hook
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    // 2. Check for 'isAuthenticated'
    if (!isAuthenticated) {
        return <Navigate to="/auth" replace />;
    }

    return children;
};

export default ProtectedRoute;