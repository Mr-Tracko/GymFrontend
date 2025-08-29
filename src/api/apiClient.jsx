import axios from 'axios';

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://gymbackend-1-f1ep.onrender.com//api';
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://gymbackend-1-f1ep.onrender.com/api";


const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

// Request interceptor to add the Authorization header
apiClient.interceptors.request.use(
    (config) => {
        // Use 'authToken' to match your App.jsx
        const accessToken = localStorage.getItem('authToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for token refresh logic (simplified for now)
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        
        // Check if the error is a 401 and we haven't already retried the request
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            
            // For now, just redirect to login page
            // You can implement token refresh later if needed
            console.error('Authentication failed. Redirecting to login.');
            localStorage.removeItem('authToken');
            window.location = '/auth';
            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
);

export default apiClient;