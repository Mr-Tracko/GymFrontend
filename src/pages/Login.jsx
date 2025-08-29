// import { useRef, useState, useEffect } from 'react';
// import {useAuth} from '../hooks/useAuth.jsx';
// import { Link, useNavigate, useLocation } from 'react-router-dom';

// import axios from '../api/axios';
// const LOGIN_URL = '/auth';

// const Login = () => {
//     const { setAuth } = useAuth();

//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/";

//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [pwd, setPwd] = useState('');
//     const [errMsg, setErrMsg] = useState('');

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd])

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post(LOGIN_URL,
//                 JSON.stringify({ user, pwd }),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                     withCredentials: true
//                 }
//             );
//             console.log(JSON.stringify(response?.data));
//             //console.log(JSON.stringify(response));
//             const accessToken = response?.data?.accessToken;
//             const roles = response?.data?.roles;
//             setAuth({ user, pwd, roles, accessToken });
//             setUser('');
//             setPwd('');
//             navigate(from, { replace: true });
//         } catch (err) {
//             if (!err?.response) {
//                 setErrMsg('No Server Response');
//             } else if (err.response?.status === 400) {
//                 setErrMsg('Missing Username or Password');
//             } else if (err.response?.status === 401) {
//                 setErrMsg('Unauthorized');
//             } else {
//                 setErrMsg('Login Failed');
//             }
//             errRef.current.focus();
//         }
//     }

//     return (

//         <section>
//             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//             <h1>Sign In</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     ref={userRef}
//                     autoComplete="off"
//                     onChange={(e) => setUser(e.target.value)}
//                     value={user}
//                     required
//                 />

//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     onChange={(e) => setPwd(e.target.value)}
//                     value={pwd}
//                     required
//                 />
//                 <button>Sign In</button>
//             </form>
//             <p>
//                 Need an Account?<br />
//                 <span className="line">
//                     <Link to="/register">Sign Up</Link>
//                 </span>
//             </p>
//         </section>

//     )
// }

// export default Login

import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = ({ onLogin, isLoading }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";
    
    const userRef = useRef();
    const errRef = useRef();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    
    useEffect(() => {
        userRef.current.focus();
    }, [])
    
    useEffect(() => {
        setErrMsg('');
    }, [email, password])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            setErrMsg('Email and password are required');
            return;
        }
        
        try {
            const response = await onLogin(email, password);
            
            if (response.success) {
                setEmail('');
                setPassword('');
                navigate(from, { replace: true });
            } else {
                setErrMsg(response.message || 'Login failed');
                errRef.current?.focus();
            }
        } catch (err) {
            console.error('Login error:', err);
            setErrMsg('Login failed. Please try again.');
            errRef.current?.focus();
        }
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-black relative overflow-hidden">
            {/* Premium background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-black to-red-900/5"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/8 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
            <div className="w-96 h-auto relative z-10 bg-gray-950/95 backdrop-blur-xl border border-gray-800 shadow-2xl shadow-black/50 mx-auto rounded-lg">
                <div className="text-center pb-6 pt-6">
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Sign In
                    </h1>
                    <p className="text-gray-500 text-base">
                        Welcome back! Sign in to your account.
                    </p>
                </div>
                
                <div className="space-y-6 p-6">
                    {errMsg && (
                        <div className="border rounded-lg p-3 backdrop-blur-sm bg-red-600/10 border-red-600/25">
                            <p ref={errRef} className="text-center text-sm font-medium text-red-400" aria-live="assertive">
                                {errMsg}
                            </p>
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-4">
                            <div className="relative group">
                                <label htmlFor="email" className="sr-only">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    ref={userRef}
                                    autoComplete="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                    placeholder="Email"
                                    className="w-full bg-black/60 border border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70 focus:outline-none"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                            
                            <div className="relative group">
                                <label htmlFor="password" className="sr-only">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                    placeholder="Password"
                                    className="w-full bg-black/60 border border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70 focus:outline-none"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                        
                        <button 
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg shadow-red-900/30 hover:shadow-red-800/40 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-red-500/50"
                        >
                            <span className="relative z-10">
                                {isLoading ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Signing In...</span>
                                    </div>
                                ) : (
                                    'Sign In'
                                )}
                            </span>
                        </button>
                    </form>
                    
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-800"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-gray-950 px-4 text-gray-600">or</span>
                        </div>
                    </div>
                    
                    <div className="text-center text-gray-500">
                        <div className="flex items-center justify-center space-x-1">
                            <span>Need an Account?</span>
                            <Link 
                                to="/register"
                                className="px-2 py-0 h-auto text-red-400 hover:text-red-300 font-semibold hover:bg-black/30 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

// import { useRef, useState, useEffect } from 'react';
// import { useAuth } from '../hooks/useAuth.jsx';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import axios from '../api/axios';

// const LOGIN_URL = '/auth';

// const Login = () => {
//     const { setAuth } = useAuth();
    
//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/";
    
//     const userRef = useRef();
//     const errRef = useRef();
    
//     const [user, setUser] = useState('');
//     const [pwd, setPwd] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
    
//     useEffect(() => {
//         if (userRef.current) {
//             userRef.current.focus();
//         }
//     }, [])
    
//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd])
    
//     // Focus on error message when it appears
//     useEffect(() => {
//         if (errMsg && errRef.current) {
//             errRef.current.focus();
//         }
//     }, [errMsg]);
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
        
//         try {
//             const response = await axios.post(LOGIN_URL,
//                 JSON.stringify({ user, pwd }),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                     withCredentials: true
//                 }
//             );
//             console.log(JSON.stringify(response?.data));
//             const accessToken = response?.data?.accessToken;
//             const roles = response?.data?.roles;
//             setAuth({ user, pwd, roles, accessToken });
//             setUser('');
//             setPwd('');
//             navigate(from, { replace: true });
//         } catch (err) {
//             if (!err?.response) {
//                 setErrMsg('No Server Response');
//             } else if (err.response?.status === 400) {
//                 setErrMsg('Missing Username or Password');
//             } else if (err.response?.status === 401) {
//                 setErrMsg('Unauthorized');
//             } else {
//                 setErrMsg('Login Failed');
//             }
//             // Removed errRef.current.focus() from here - now handled in useEffect
//         } finally {
//             setIsLoading(false);
//         }
//     }
    
//     return (
//         <div className="flex items-center justify-center min-h-screen w-full bg-black relative overflow-hidden">
//             {/* Premium background effects */}
//             <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-black to-red-900/5"></div>
//             <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/8 rounded-full blur-3xl animate-pulse"></div>
//             <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
//             <div className="w-96 h-auto relative z-10 bg-gray-950/95 backdrop-blur-xl border border-gray-800 shadow-2xl shadow-black/50 mx-auto rounded-lg">
//                 <div className="text-center pb-6 pt-6">
//                     <h1 className="text-3xl font-bold text-white mb-2">
//                         Sign In
//                     </h1>
//                     <p className="text-gray-500 text-base">
//                         Welcome back! Sign in to your account.
//                     </p>
//                 </div>
                
//                 <div className="space-y-6 p-6">
//                     {errMsg && (
//                         <div className="border rounded-lg p-3 backdrop-blur-sm bg-red-600/10 border-red-600/25">
//                             <p ref={errRef} className="text-center text-sm font-medium text-red-400" aria-live="assertive" tabIndex="-1">
//                                 {errMsg}
//                             </p>
//                         </div>
//                     )}
                    
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div className="space-y-4">
//                             <div className="relative group">
//                                 <label htmlFor="username" className="sr-only">Username:</label>
//                                 <input
//                                     type="text"
//                                     id="username"
//                                     ref={userRef}
//                                     autoComplete="off"
//                                     onChange={(e) => setUser(e.target.value)}
//                                     value={user}
//                                     required
//                                     placeholder="Username"
//                                     className="w-full bg-black/60 border border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70 focus:outline-none"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                             </div>
                            
//                             <div className="relative group">
//                                 <label htmlFor="password" className="sr-only">Password:</label>
//                                 <input
//                                     type="password"
//                                     id="password"
//                                     onChange={(e) => setPwd(e.target.value)}
//                                     value={pwd}
//                                     required
//                                     placeholder="Password"
//                                     className="w-full bg-black/60 border border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70 focus:outline-none"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                             </div>
//                         </div>
                        
//                         <button 
//                             type="submit"
//                             disabled={isLoading}
//                             className="w-full h-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg shadow-red-900/30 hover:shadow-red-800/40 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-red-500/50"
//                         >
//                             <span className="relative z-10">
//                                 {isLoading ? (
//                                     <div className="flex items-center justify-center space-x-2">
//                                         <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                                         <span>Signing In...</span>
//                                     </div>
//                                 ) : (
//                                     'Sign In'
//                                 )}
//                             </span>
//                         </button>
//                     </form>
                    
//                     <div className="relative">
//                         <div className="absolute inset-0 flex items-center">
//                             <div className="w-full border-t border-gray-800"></div>
//                         </div>
//                         <div className="relative flex justify-center text-sm">
//                             <span className="bg-gray-950 px-4 text-gray-600">or</span>
//                         </div>
//                     </div>
                    
//                     <div className="text-center text-gray-500">
//                         <div className="flex items-center justify-center space-x-1">
//                             <span>Need an Account?</span>
//                             <Link 
//                                 to="/register"
//                                 className="px-2 py-0 h-auto text-red-400 hover:text-red-300 font-semibold hover:bg-black/30 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50"
//                             >
//                                 Sign Up
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;

// import { useRef, useState, useEffect } from 'react';
// import { useAuth } from '../hooks/useAuth.jsx';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import axios from '../api/axios';

// const LOGIN_URL = '/auth';

// const Login = () => {
//     const { setAuth } = useAuth();
    
//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/";
    
//     const userRef = useRef();
//     const errRef = useRef();
    
//     const [user, setUser] = useState('');
//     const [pwd, setPwd] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
    
//     useEffect(() => {
//         if (userRef.current) {
//             userRef.current.focus();
//         }
//     }, [])
    
//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd])
    
//     // Focus on error message when it appears
//     useEffect(() => {
//         if (errMsg && errRef.current) {
//             errRef.current.focus();
//         }
//     }, [errMsg]);
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
        
//         try {
//             const response = await axios.post(LOGIN_URL, { user, pwd });
            
//             console.log('Login Response:', JSON.stringify(response?.data));
            
//             // Check if we have the required data
//             if (response?.data?.accessToken) {
//                 const accessToken = response.data.accessToken;
//                 const roles = response.data.roles;
//                 const userData = response.data.user || { username: user }; // Fallback to form user
                
//                 setAuth({ user: userData, roles, accessToken });
//                 setUser('');
//                 setPwd('');
//                 navigate(from, { replace: true });
//             } else {
//                 setErrMsg('Invalid response from server');
//             }
//         } catch (err) {
//             console.error('Login Error Details:', {
//                 message: err.message,
//                 status: err.response?.status,
//                 statusText: err.response?.statusText,
//                 data: err.response?.data,
//                 headers: err.response?.headers,
//                 config: err.config
//             });
            
//             // More detailed error logging
//             if (err.response) {
//                 console.log('Full Error Response:', err.response);
//             }
            
//             if (!err?.response) {
//                 setErrMsg('No Server Response - Check network connection');
//             } else if (err.response?.status === 400) {
//                 setErrMsg('Missing Username or Password');
//             } else if (err.response?.status === 401) {
//                 setErrMsg('Unauthorized - Invalid credentials');
//             } else if (err.response?.status === 403) {
//                 setErrMsg('Access Forbidden - Check CORS settings');
//             } else if (err.response?.status === 500) {
//                 setErrMsg('Server Error - Please try again later');
//             } else {
//                 setErrMsg(`Login Failed - Error ${err.response?.status || 'Unknown'}`);
//             }
//         } finally {
//             setIsLoading(false);
//         }
//     }
    
//     return (
//         <div className="flex items-center justify-center min-h-screen w-full bg-black relative overflow-hidden">
//             {/* Premium background effects */}
//             <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-black to-red-900/5"></div>
//             <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/8 rounded-full blur-3xl animate-pulse"></div>
//             <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
//             <div className="w-96 h-auto relative z-10 bg-gray-950/95 backdrop-blur-xl border border-gray-800 shadow-2xl shadow-black/50 mx-auto rounded-lg">
//                 <div className="text-center pb-6 pt-6">
//                     <h1 className="text-3xl font-bold text-white mb-2">
//                         Sign In
//                     </h1>
//                     <p className="text-gray-500 text-base">
//                         Welcome back! Sign in to your account.
//                     </p>
//                 </div>
                
//                 <div className="space-y-6 p-6">
//                     {errMsg && (
//                         <div className="border rounded-lg p-3 backdrop-blur-sm bg-red-600/10 border-red-600/25">
//                             <p ref={errRef} className="text-center text-sm font-medium text-red-400" aria-live="assertive" tabIndex="-1">
//                                 {errMsg}
//                             </p>
//                         </div>
//                     )}
                    
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div className="space-y-4">
//                             <div className="relative group">
//                                 <label htmlFor="username" className="sr-only">Username:</label>
//                                 <input
//                                     type="text"
//                                     id="username"
//                                     ref={userRef}
//                                     autoComplete="off"
//                                     onChange={(e) => setUser(e.target.value)}
//                                     value={user}
//                                     required
//                                     placeholder="Username"
//                                     className="w-full bg-black/60 border border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70 focus:outline-none"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                             </div>
                            
//                             <div className="relative group">
//                                 <label htmlFor="password" className="sr-only">Password:</label>
//                                 <input
//                                     type="password"
//                                     id="password"
//                                     onChange={(e) => setPwd(e.target.value)}
//                                     value={pwd}
//                                     required
//                                     placeholder="Password"
//                                     className="w-full bg-black/60 border border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70 focus:outline-none"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                             </div>
//                         </div>
                        
//                         <button 
//                             type="submit"
//                             disabled={isLoading}
//                             className="w-full h-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg shadow-red-900/30 hover:shadow-red-800/40 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-red-500/50"
//                         >
//                             <span className="relative z-10">
//                                 {isLoading ? (
//                                     <div className="flex items-center justify-center space-x-2">
//                                         <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                                         <span>Signing In...</span>
//                                     </div>
//                                 ) : (
//                                     'Sign In'
//                                 )}
//                             </span>
//                         </button>
//                     </form>
                    
//                     <div className="relative">
//                         <div className="absolute inset-0 flex items-center">
//                             <div className="w-full border-t border-gray-800"></div>
//                         </div>
//                         <div className="relative flex justify-center text-sm">
//                             <span className="bg-gray-950 px-4 text-gray-600">or</span>
//                         </div>
//                     </div>
                    
//                     <div className="text-center text-gray-500">
//                         <div className="flex items-center justify-center space-x-1">
//                             <span>Need an Account?</span>
//                             <Link 
//                                 to="/register"
//                                 className="px-2 py-0 h-auto text-red-400 hover:text-red-300 font-semibold hover:bg-black/30 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50"
//                             >
//                                 Sign Up
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;

// import { useRef, useState, useEffect } from 'react';
// import { useAuth } from '../hooks/useAuth.jsx';
// import { Link, useNavigate, useLocation } from 'react-router-dom';

// const Login = () => {
//     const { login, isAuthenticated } = useAuth();
    
//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/dashboard";
    
//     const emailRef = useRef();
//     const errRef = useRef();
    
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState(''); // Changed from pwd to password for consistency
//     const [errMsg, setErrMsg] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
    
//     useEffect(() => {
//         if (emailRef.current) {
//             emailRef.current.focus();
//         }
//     }, [])
    
//     // Redirect if already authenticated
//     useEffect(() => {
//         if (isAuthenticated) {
//             navigate('/dashboard', { replace: true });
//         }
//     }, [isAuthenticated, navigate]);
    
//     useEffect(() => {
//         setErrMsg('');
//     }, [email, password])
    
//     // Focus on error message when it appears
//     useEffect(() => {
//         if (errMsg && errRef.current) {
//             errRef.current.focus();
//         }
//     }, [errMsg]);
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setErrMsg('');
        
//         console.log('🚀 Login form submitted');
//         console.log('📧 Email:', email);
//         console.log('🔐 Password length:', password.length);
        
//         try {
//             const result = await login(email, password);
            
//             console.log('📨 Login result:', result);
            
//             if (result.success) {
//                 console.log('✅ Login successful:', result.message);
                
//                 // Clear form
//                 setEmail('');
//                 setPassword('');
                
//                 // Navigate to dashboard
//                 navigate('/dashboard', { replace: true });
//             } else {
//                 console.error('❌ Login failed:', result.message);
//                 setErrMsg(result.message || 'Login failed');
//             }
//         } catch (error) {
//             console.error('💥 Login error caught:', error);
//             setErrMsg('An unexpected error occurred');
//         } finally {
//             setIsLoading(false);
//         }
//     }
    
//     return (
//         <div className="flex items-center justify-center min-h-screen w-full bg-black relative overflow-hidden">
//             {/* Premium background effects */}
//             <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-black to-red-900/5"></div>
//             <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/8 rounded-full blur-3xl animate-pulse"></div>
//             <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
//             <div className="w-96 h-auto relative z-10 bg-gray-950/95 backdrop-blur-xl border border-gray-800 shadow-2xl shadow-black/50 mx-auto rounded-lg">
//                 <div className="text-center pb-6 pt-6">
//                     <h1 className="text-3xl font-bold text-white mb-2">
//                         Sign In
//                     </h1>
//                     <p className="text-gray-500 text-base">
//                         Welcome back! Sign in to your account.
//                     </p>
//                 </div>
                
//                 <div className="space-y-6 p-6">
//                     {errMsg && (
//                         <div className="border rounded-lg p-3 backdrop-blur-sm bg-red-600/10 border-red-600/25">
//                             <p ref={errRef} className="text-center text-sm font-medium text-red-400" aria-live="assertive" tabIndex="-1">
//                                 {errMsg}
//                             </p>
//                         </div>
//                     )}
                    
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div className="space-y-4">
//                             <div className="relative group">
//                                 <label htmlFor="email" className="sr-only">Email:</label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     ref={emailRef}
//                                     autoComplete="email"
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     value={email}
//                                     required
//                                     placeholder="Email"
//                                     className="w-full bg-black/60 border border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70 focus:outline-none"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                             </div>
                            
//                             <div className="relative group">
//                                 <label htmlFor="password" className="sr-only">Password:</label>
//                                 <input
//                                     type="password"
//                                     id="password"
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     value={password}
//                                     required
//                                     placeholder="Password"
//                                     className="w-full bg-black/60 border border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70 focus:outline-none"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                             </div>
//                         </div>
                        
//                         <button 
//                             type="submit"
//                             disabled={isLoading}
//                             className="w-full h-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg shadow-red-900/30 hover:shadow-red-800/40 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-red-500/50"
//                         >
//                             <span className="relative z-10">
//                                 {isLoading ? (
//                                     <div className="flex items-center justify-center space-x-2">
//                                         <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                                         <span>Signing In...</span>
//                                     </div>
//                                 ) : (
//                                     'Sign In'
//                                 )}
//                             </span>
//                         </button>
//                     </form>
                    
//                     <div className="relative">
//                         <div className="absolute inset-0 flex items-center">
//                             <div className="w-full border-t border-gray-800"></div>
//                         </div>
//                         <div className="relative flex justify-center text-sm">
//                             <span className="bg-gray-950 px-4 text-gray-600">or</span>
//                         </div>
//                     </div>
                    
//                     <div className="text-center text-gray-500">
//                         <div className="flex items-center justify-center space-x-1">
//                             <span>Need an Account?</span>
//                             <Link 
//                                 to="/register"
//                                 className="px-2 py-0 h-auto text-red-400 hover:text-red-300 font-semibold hover:bg-black/30 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50"
//                             >
//                                 Sign Up
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;