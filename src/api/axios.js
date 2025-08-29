// import axios from 'axios';
// const BASE_URL = 'http://localhost:5000';

// export default axios.create({
//     baseURL: BASE_URL
// });

// export const axiosPrivate = axios.create({
//     baseURL: BASE_URL,
//     headers: {'Content-Type': 'application/json'},
//     withCredentials: true
// });

import axios from 'axios';

// Base URL for your backend server
const BASE_URL = 'https://gym-backend-blush.vercel.app/'; // Fixed: Using port 5000

// Default axios instance
export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Private axios instance for authenticated requests
export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

// Add request interceptor for debugging
axiosPrivate.interceptors.request.use(
    (config) => {
        console.log('🚀 Axios Request:', {
            method: config.method?.toUpperCase(),
            url: `${config.baseURL}${config.url}`,
            headers: config.headers,
            data: config.data
        });
        return config;
    },
    (error) => {
        console.error('❌ Axios Request Error:', error);
        return Promise.reject(error);
    }
);

// Add response interceptor for debugging
axiosPrivate.interceptors.response.use(
    (response) => {
        console.log('✅ Axios Response:', {
            status: response.status,
            statusText: response.statusText,
            url: response.config.url,
            data: response.data
        });
        return response;
    },
    (error) => {
        console.error('❌ Axios Response Error:', {
            status: error.response?.status,
            statusText: error.response?.statusText,
            url: error.config?.url,
            message: error.message,
            data: error.response?.data
        });
        return Promise.reject(error);
    }
);