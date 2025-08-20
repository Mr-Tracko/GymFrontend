import apiClient from './apiClient';

const mockApiClient = {
    // --- Authentication ---
    register: async (username, password) => {
        try {
            const response = await apiClient.post('/auth/register', { username, password });
            return response.data;
        } catch (error) {
            console.error('Registration failed:', error);
            return { success: false, message: 'Registration failed.' };
        }
    },
    login: async (username, password) => {
        try {
            const response = await apiClient.post('/auth/login', { username, password });
            return response.data;
        } catch (error) {
            console.error('Login failed:', error);
            return { success: false, message: 'Login failed.' };
        }
    },

    // --- User Profile & Onboarding ---
    saveUserDetails: async (userId, details) => {
        try {
            const response = await apiClient.post(`/user/details`, { userId, ...details });
            return response.data;
        } catch (error) {
            console.error('Saving user details failed:', error);
            return { success: false, message: 'Failed to save user details.' };
        }
    },
    getProfile: async (userId) => {
        try {
            const response = await apiClient.get(`/user/profile/me`);
            return response.data;
        } catch (error) {
            console.error('Fetching profile failed:', error);
            return { success: false, message: 'Failed to fetch profile.' };
        }
    },

    // --- Diet ---
    generateDietPlan: async (userId, goal) => {
        try {
            const response = await apiClient.post('/diet/generate-plan', { userId, goal });
            return response.data;
        } catch (error) {
            console.error('Generating diet plan failed:', error);
            return { success: false, message: 'Failed to generate diet plan.' };
        }
    },
    logMeal: async (userId, mealDescription) => {
        try {
            const response = await apiClient.post('/diet/log', { userId, mealDescription });
            return response.data;
        } catch (error) {
            console.error('Logging meal failed:', error);
            return { success: false, message: 'Failed to log meal.' };
        }
    },
    getDietHistory: async (userId) => {
        try {
            const response = await apiClient.get('/diet/logs/me');
            return response.data;
        } catch (error) {
            console.error('Fetching diet history failed:', error);
            return { success: false, message: 'Failed to fetch diet history.' };
        }
    },
    getWeeklyDietSummary: async (userId) => {
        try {
            const response = await apiClient.get('/diet/weekly-summary');
            return response.data;
        } catch (error) {
            console.error('Fetching weekly diet summary failed:', error);
            return { success: false, message: 'Failed to fetch weekly diet summary.' };
        }
    },
    getLatestDietPlan: async (userId) => {
        try {
            const response = await apiClient.get('/diet/plan/latest/me');
            return response.data;
        } catch (error) {
            console.error('Fetching latest diet plan failed:', error);
            return { success: false, message: 'Failed to fetch latest diet plan.' };
        }
    }
};

export default mockApiClient;
