import React, { createContext, useState, useContext, useEffect } from 'react';
import apiClient from '../api/apiClient';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        try {
          const response = await apiClient.get('/user/profile/me');
          // VALIDATION: Check if the response data and user ID exist
          if (response.data && response.data.id) {
            setUser(response.data);
          } else {
            // If data is incomplete, treat it as an error
            throw new Error('Incomplete user data received from server.');
          }
        } catch (error) {
          console.error('Auth verification failed, clearing tokens.', error);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          setUser(null); // Explicitly set user to null on failure
        }
      }
      setLoading(false);
    };

    verifyAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      
      if (response.data.access_token) {
        const { access_token, refresh_token } = response.data;
        localStorage.setItem('accessToken', access_token);
        localStorage.setItem('refreshToken', refresh_token);
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        
        const profileResponse = await apiClient.get('/user/profile/me');
        
        // VALIDATION: Check if the response data and user ID exist
        if (profileResponse.data && profileResponse.data.id) {
          setUser(profileResponse.data);
          return { success: true };
        } else {
          // If data is incomplete, treat it as an error
          throw new Error('Incomplete user data received after login.');
        }
      }
      return { success: false, message: response.data.error || 'Login failed.' };
    } catch (error) {
      console.error('Login API call failed:', error);
      // Clear tokens on a failed login attempt to be safe
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setUser(null);
      return { success: false, message: error.response?.data?.error || 'An error occurred.' };
    }
  };

  const logout = async () => {
    try {
        await apiClient.post('/auth/logout');
    } catch(error) {
        console.error("Server logout failed, logging out on client anyway.", error);
    } finally {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setUser(null);
    }
  };

  const authContextValue = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};