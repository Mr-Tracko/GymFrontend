// import axios from '../api/axios'
// import useAuth from './useAuth';

// const useRefreshToken = () => {
//     const {setAuth} = useAuth();

//     const refresh = async() => {
//         const response = await axios.get('/refresh', {
//             withCredentials: true
//         });
//         setAuth(prev => {
//             console.log(JSON.stringify(prev));
//             console.log(response.data.accessToken);
//             return {...prev , accessToken: response.data.accessToken}
//         });
//         return response.data.accessToken;
//     }
//     return refresh;
// }

// export default useRefreshToken;

import axios from '../api/axios'
import { useAuth } from './useAuth'; // Make sure this matches your import

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
            console.error('Refresh token error:', error);
            // Clear auth on refresh failure
            setAuth({});
            throw error;
        }
    }
    
    return refresh;
}

export default useRefreshToken;