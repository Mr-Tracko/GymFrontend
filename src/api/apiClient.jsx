import axios from 'axios';

const API_BASE_URL = 'https://fitness-tracker-v4.vercel.app/api';
const API_KEY = '2a0d2132-328c-4fb3-a01a-be569ec39c23'; // Replace with your actual API key

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
    },
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
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for token refresh logic
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        
        // Check if the error is a 401 and we haven't already retried the request
        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                // If a refresh is already in progress, queue the failed request
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then(token => {
                    originalRequest.headers['Authorization'] = `Bearer ${token}`;
                    return apiClient(originalRequest);
                }).catch(err => {
                    return Promise.reject(err);
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            const refreshToken = localStorage.getItem('refresh_token');

            if (!refreshToken) {
                // No refresh token, redirect to login
                console.error('No refresh token available. Redirecting to login.');
                window.location = '/auth';
                return Promise.reject(error);
            }

            try {
                // Call the refresh endpoint to get a new access token
                const response = await axios.post(`${API_BASE_URL}/auth/refresh`, { refresh_token: refreshToken });
                const { access_token, new_refresh_token } = response.data;
                
                // Update tokens in localStorage and the API client headers
                localStorage.setItem('access_token', access_token);
                if (new_refresh_token) {
                    localStorage.setItem('refresh_token', new_refresh_token);
                }

                apiClient.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
                processQueue(null, access_token);

                // Retry the original request with the new token
                originalRequest.headers['Authorization'] = `Bearer ${access_token}`;
                return apiClient(originalRequest);

            } catch (refreshError) {
                // Refresh failed, clear tokens and redirect to login
                processQueue(refreshError, null);
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                window.location = '/auth';
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default apiClient;
