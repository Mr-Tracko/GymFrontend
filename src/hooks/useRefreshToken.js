import axios from '../api/axios'
import { useAuth } from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        try {
            const response = await axios.get('/refresh', {
                withCredentials: true
            });
            
            console.log('Refresh token response:', response.data);
            
            setAuth(prev => {
                console.log('Previous auth state:', JSON.stringify(prev));
                console.log('New access token:', response.data.accessToken);
                
                return {
                    ...prev, 
                    accessToken: response.data.accessToken,
                    user: response.data.user || prev.user,
                    roles: response.data.roles || prev.roles
                };
            });
            
            return response.data.accessToken;
        } catch (error) {
            setAuth({});
            throw error;
        }
    }
    
    return refresh;
}

export default useRefreshToken;