// import {axiosPrivate} from "../api/axios";
// import {useEffect} from "react";
// import useAuth from "./useAuth";
// import useRefreshToken from "./useRefreshToken";

// const useAxiosPrivate = () => {
//     const refresh = useRefreshToken();
//     const {auth} = useAuth();

//     useEffect(() => {

//         const requestIntercept = axiosPrivate.interceptors.request.use(
//             config=>{
//                 if(!config.headers['Authorization']){
//                     config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
//                 }
//                 return config;
//             }, (error) => Promise.reject(error)
//         )

//         const  responseIntercept = axiosPrivate.interceptors.response.use(
//             response => response,
//             async(error) => {
//                 const prevReqest = error?.config;
//                 if(error?.response?.status === 403 && !prevReqest?.sent){
//                     prevReqest.sent = true;
//                     const newAccessToken = await refresh();
//                     prevReqest.headers['Authorization'] = `Bearer ${newAccessToken}`;
//                     return axiosPrivate(prevReqest);
//                 }
//                 return Promise.reject(error);
//             }
//         );

//         return () => {
//             axiosPrivate.interceptors.request.eject(requestIntercept);
//             axiosPrivate.interceptors.response.eject(responseIntercept);
//         }
//     },[auth , refresh])

//     return axiosPrivate;
// }
// export default useAxiosPrivate;

import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import { useAuth } from "./useAuth"; // Make sure this matches your import
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, 
            (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    
                    try {
                        const newAccessToken = await refresh();
                        prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                        return axiosPrivate(prevRequest);
                    } catch (refreshError) {
                        console.error('Token refresh failed:', refreshError);
                        // Redirect to login or handle auth failure
                        window.location.href = '/';
                        return Promise.reject(refreshError);
                    }
                }
                
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;