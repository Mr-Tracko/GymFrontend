// import React, { useState } from 'react';
// import Button from '../components/ui/Button';
// import Input from '../components/ui/Input';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';

// const AuthPage = ({ onLogin, onRegister, isLoading, messages }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isRegistering, setIsRegistering] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (isRegistering) {
//             onRegister(email, password);
//         } else {
//             onLogin(email, password);
//         }
//     };

//     return (
//         <div className="flex items-center justify-center h-full">
//             <Card className="w-full max-w-md p-6">
//                 <CardHeader className="text-center">
//                     <CardTitle>{isRegistering ? 'Register' : 'Login'}</CardTitle>
//                     <CardDescription>
//                         {isRegistering ? 'Create your account to get started' : 'Welcome back! Please log in to your account.'}
//                     </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <Input
//                             type="text"
//                             placeholder="Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                         <Input
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         <Button type="submit" className="w-full" disabled={isLoading}>
//                             {isLoading ? 'Processing...' : (isRegistering ? 'Register' : 'Login')}
//                         </Button>
//                     </form>
//                     <div className="mt-4 text-center text-sm text-gray-400">
//                         {isRegistering ? (
//                             <>
//                                 Already have an account?{' '}
//                                 <Button variant="ghost" onClick={() => setIsRegistering(false)} className="px-0 py-0 h-auto text-red-400 hover:text-red-500">
//                                     Login
//                                 </Button>
//                             </>
//                         ) : (
//                             <>
//                                 Don't have an account?{' '}
//                                 <Button variant="ghost" onClick={() => setIsRegistering(true)} className="px-0 py-0 h-auto text-red-400 hover:text-red-500">
//                                     Register
//                                 </Button>
//                             </>
//                         )}
//                     </div>
//                     {messages.map((msg, index) => (
//                         <p key={index} className="text-center text-sm mt-2 text-red-400">{msg.text}</p>
//                     ))}
//                 </CardContent>
//             </Card>
//         </div>
//     );
// };

// export default AuthPage;

import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';

const AuthPage = ({ onLogin, onRegister, isLoading, messages }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegistering) {
            onRegister(email, password);
        } else {
            onLogin(email, password);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-black relative overflow-hidden">
            {/* Premium background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-black to-red-900/5"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/8 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
            <Card className="w-96 h-auto relative z-10 bg-gray-950/95 backdrop-blur-xl border border-gray-800 shadow-2xl shadow-black/50 mx-auto">
                <CardHeader className="text-center pb-6">
                    <CardTitle className="text-3xl font-bold text-white mb-2">
                        {isRegistering ? 'Register' : 'Login'}
                    </CardTitle>
                    <CardDescription className="text-gray-500 text-base">
                        {isRegistering ? 'Create your account to get started' : 'Welcome back! Please log in to your account.'}
                    </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6 p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-4">
                            <div className="relative group">
                                <Input
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="bg-black/60 border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                            
                            <div className="relative group">
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="bg-black/60 border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                        
                        <Button 
                            type="submit" 
                            className="w-full h-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg shadow-red-900/30 hover:shadow-red-800/40 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none" 
                            disabled={isLoading}
                        >
                            <span className="relative z-10">
                                {isLoading ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Processing...</span>
                                    </div>
                                ) : (
                                    isRegistering ? 'Register' : 'Login'
                                )}
                            </span>
                        </Button>
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
                        {isRegistering ? (
                            <div className="flex items-center justify-center space-x-1">
                                <span>Already have an account?</span>
                                <Button 
                                    variant="ghost" 
                                    onClick={() => setIsRegistering(false)} 
                                    className="px-2 py-0 h-auto text-red-400 hover:text-red-300 font-semibold hover:bg-black/30 rounded-lg transition-all duration-200"
                                >
                                    Login
                                </Button>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center space-x-1">
                                <span>Don't have an account?</span>
                                <Button 
                                    variant="ghost" 
                                    onClick={() => setIsRegistering(true)} 
                                    className="px-2 py-0 h-auto text-red-400 hover:text-red-300 font-semibold hover:bg-black/30 rounded-lg transition-all duration-200"
                                >
                                    Register
                                </Button>
                            </div>
                        )}
                    </div>
                    
                    {messages.map((msg, index) => (
                        <div key={index} className="bg-red-600/10 border border-red-600/25 rounded-lg p-3 backdrop-blur-sm">
                            <p className="text-center text-sm text-red-400 font-medium">{msg.text}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default AuthPage;

// import React, { useState, useEffect } from 'react';

// // Simulated JWT utility functions
// const createJWT = (payload, secret = 'gym_secret', expiresIn = 15) => {
//   const header = { alg: 'HS256', typ: 'JWT' };
//   const exp = Math.floor(Date.now() / 1000) + (expiresIn * 60); // expires in minutes
//   const jwtPayload = { ...payload, exp, iat: Math.floor(Date.now() / 1000) };
  
//   // Simple base64 encoding simulation
//   const encodedHeader = btoa(JSON.stringify(header));
//   const encodedPayload = btoa(JSON.stringify(jwtPayload));
//   const signature = btoa(`${encodedHeader}.${encodedPayload}.${secret}`);
  
//   return `${encodedHeader}.${encodedPayload}.${signature}`;
// };

// const verifyJWT = (token, secret = 'gym_secret') => {
//   try {
//     if (!token) return null;
//     const [header, payload, signature] = token.split('.');
//     const decodedPayload = JSON.parse(atob(payload));
    
//     // Check if token is expired
//     if (decodedPayload.exp < Math.floor(Date.now() / 1000)) {
//       return null;
//     }
    
//     // Verify signature (simplified)
//     const expectedSignature = btoa(`${header}.${payload}.${secret}`);
//     if (signature !== expectedSignature) {
//       return null;
//     }
    
//     return decodedPayload;
//   } catch (error) {
//     return null;
//   }
// };

// const createRefreshToken = (userId) => {
//   const payload = { userId, type: 'refresh' };
//   return createJWT(payload, 'refresh_secret', 7 * 24 * 60); // 7 days
// };

// // UI Components
// const Button = ({ children, className = '', disabled = false, variant = 'default', type = 'button', onClick = () => {}, ...props }) => {
//   const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
//   const variants = {
//     default: 'bg-primary text-primary-foreground hover:bg-primary/90',
//     ghost: 'hover:bg-accent hover:text-accent-foreground',
//   };
  
//   return (
//     <button
//       type={type}
//       className={`${baseClasses} ${variants[variant]} ${className}`}
//       disabled={disabled}
//       onClick={onClick}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// const Input = ({ className = '', type = 'text', ...props }) => {
//   return (
//     <input
//       type={type}
//       className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
//       {...props}
//     />
//   );
// };

// const Card = ({ children, className = '', ...props }) => (
//   <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
//     {children}
//   </div>
// );

// const CardHeader = ({ children, className = '', ...props }) => (
//   <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
//     {children}
//   </div>
// );

// const CardTitle = ({ children, className = '', ...props }) => (
//   <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
//     {children}
//   </h3>
// );

// const CardDescription = ({ children, className = '', ...props }) => (
//   <p className={`text-sm text-muted-foreground ${className}`} {...props}>
//     {children}
//   </p>
// );

// const CardContent = ({ children, className = '', ...props }) => (
//   <div className={`p-6 pt-0 ${className}`} {...props}>
//     {children}
//   </div>
// );

// // Main Auth Component
// const AuthPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isRegistering, setIsRegistering] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [messages, setMessages] = useState([]);
//     const [users, setUsers] = useState([]); // Simulated user database
//     const [accessToken, setAccessToken] = useState(null);
//     const [refreshToken, setRefreshToken] = useState(null);
//     const [currentUser, setCurrentUser] = useState(null);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     // Check token validity on component mount and periodically
//     useEffect(() => {
//         const checkTokenValidity = () => {
//             if (accessToken) {
//                 const decoded = verifyJWT(accessToken);
//                 if (!decoded) {
//                     // Access token expired, try to refresh
//                     handleRefreshToken();
//                 } else {
//                     setCurrentUser(decoded);
//                     setIsAuthenticated(true);
//                 }
//             }
//         };

//         checkTokenValidity();
        
//         // Check token validity every minute
//         const interval = setInterval(checkTokenValidity, 60000);
//         return () => clearInterval(interval);
//     }, [accessToken, refreshToken]);

//     const showMessage = (text, type = 'error') => {
//         const message = { text, type };
//         setMessages([message]);
//         setTimeout(() => setMessages([]), 5000);
//     };

//     const handleRefreshToken = async () => {
//         if (!refreshToken) {
//             handleLogout();
//             return;
//         }

//         const decoded = verifyJWT(refreshToken, 'refresh_secret');
//         if (!decoded || decoded.type !== 'refresh') {
//             showMessage('Session expired. Please login again.');
//             handleLogout();
//             return;
//         }

//         // Find user and generate new access token
//         const user = users.find(u => u.id === decoded.userId);
//         if (!user) {
//             handleLogout();
//             return;
//         }

//         const newAccessToken = createJWT({ 
//             id: user.id, 
//             email: user.email 
//         });
        
//         setAccessToken(newAccessToken);
//         showMessage('Token refreshed successfully', 'success');
//     };

//     const handleRegister = async (email, password) => {
//         setIsLoading(true);
        
//         // Simulate API delay
//         await new Promise(resolve => setTimeout(resolve, 1500));
        
//         try {
//             // Check if user already exists
//             const existingUser = users.find(user => user.email === email);
//             if (existingUser) {
//                 showMessage('User already exists with this email');
//                 setIsLoading(false);
//                 return;
//             }

//             // Validate inputs
//             if (!email || !password) {
//                 showMessage('Please fill in all fields');
//                 setIsLoading(false);
//                 return;
//             }

//             if (password.length < 6) {
//                 showMessage('Password must be at least 6 characters long');
//                 setIsLoading(false);
//                 return;
//             }

//             // Create new user
//             const newUser = {
//                 id: Date.now().toString(),
//                 email,
//                 password, // In real app, this would be hashed
//                 createdAt: new Date().toISOString()
//             };

//             // Add user to database
//             setUsers(prevUsers => [...prevUsers, newUser]);

//             // Generate tokens
//             const newAccessToken = createJWT({ 
//                 id: newUser.id, 
//                 email: newUser.email 
//             });
//             const newRefreshToken = createRefreshToken(newUser.id);

//             setAccessToken(newAccessToken);
//             setRefreshToken(newRefreshToken);
//             setCurrentUser({ id: newUser.id, email: newUser.email });
//             setIsAuthenticated(true);

//             showMessage('Registration successful! You are now logged in.', 'success');
//             setEmail('');
//             setPassword('');
//         } catch (error) {
//             showMessage('Registration failed. Please try again.');
//         }
        
//         setIsLoading(false);
//     };

//     const handleLogin = async (email, password) => {
//         setIsLoading(true);
        
//         // Simulate API delay
//         await new Promise(resolve => setTimeout(resolve, 1500));
        
//         try {
//             // Find user in database
//             const user = users.find(u => u.email === email && u.password === password);
            
//             if (!user) {
//                 showMessage('Invalid email or password');
//                 setIsLoading(false);
//                 return;
//             }

//             // Generate tokens
//             const newAccessToken = createJWT({ 
//                 id: user.id, 
//                 email: user.email 
//             });
//             const newRefreshToken = createRefreshToken(user.id);

//             setAccessToken(newAccessToken);
//             setRefreshToken(newRefreshToken);
//             setCurrentUser({ id: user.id, email: user.email });
//             setIsAuthenticated(true);

//             showMessage('Login successful!', 'success');
//             setEmail('');
//             setPassword('');
//         } catch (error) {
//             showMessage('Login failed. Please try again.');
//         }
        
//         setIsLoading(false);
//     };

//     const handleLogout = () => {
//         setAccessToken(null);
//         setRefreshToken(null);
//         setCurrentUser(null);
//         setIsAuthenticated(false);
//         setEmail('');
//         setPassword('');
//         setMessages([]);
//         showMessage('Logged out successfully', 'success');
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (isRegistering) {
//             handleRegister(email, password);
//         } else {
//             handleLogin(email, password);
//         }
//     };

//     // Dashboard component for authenticated users
//     if (isAuthenticated && currentUser) {
//         return (
//             <div className="flex items-center justify-center min-h-screen w-full bg-black relative overflow-hidden">
//                 {/* Premium background effects */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-black to-red-900/5"></div>
//                 <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/8 rounded-full blur-3xl animate-pulse"></div>
//                 <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
                
//                 <Card className="w-96 h-auto relative z-10 bg-gray-950/95 backdrop-blur-xl border border-gray-800 shadow-2xl shadow-black/50 mx-auto">
//                     <CardHeader className="text-center pb-6">
//                         <CardTitle className="text-3xl font-bold text-white mb-2">
//                             Welcome to Gym App
//                         </CardTitle>
//                         <CardDescription className="text-gray-500 text-base">
//                             You are successfully authenticated!
//                         </CardDescription>
//                     </CardHeader>
                    
//                     <CardContent className="space-y-6 p-6">
//                         <div className="bg-green-600/10 border border-green-600/25 rounded-lg p-4 backdrop-blur-sm">
//                             <p className="text-center text-sm text-green-400 font-medium mb-2">User Information</p>
//                             <p className="text-center text-white">Email: {currentUser.email}</p>
//                             <p className="text-center text-gray-400 text-sm">ID: {currentUser.id}</p>
//                         </div>

//                         <div className="bg-blue-600/10 border border-blue-600/25 rounded-lg p-4 backdrop-blur-sm">
//                             <p className="text-center text-sm text-blue-400 font-medium mb-2">Token Status</p>
//                             <p className="text-center text-gray-300 text-xs">Access Token: {accessToken ? 'Valid' : 'Invalid'}</p>
//                             <p className="text-center text-gray-300 text-xs">Refresh Token: {refreshToken ? 'Available' : 'Not Available'}</p>
//                         </div>

//                         <div className="space-y-3">
//                             <Button 
//                                 onClick={handleRefreshToken}
//                                 className="w-full h-12 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg shadow-blue-900/30 hover:shadow-blue-800/40 transform hover:scale-[1.02] transition-all duration-300"
//                             >
//                                 Refresh Token
//                             </Button>
                            
//                             <Button 
//                                 onClick={handleLogout}
//                                 className="w-full h-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg shadow-red-900/30 hover:shadow-red-800/40 transform hover:scale-[1.02] transition-all duration-300"
//                             >
//                                 Logout
//                             </Button>
//                         </div>

//                         {messages.map((msg, index) => (
//                             <div key={index} className={`${msg.type === 'success' ? 'bg-green-600/10 border-green-600/25 text-green-400' : 'bg-red-600/10 border-red-600/25 text-red-400'} border rounded-lg p-3 backdrop-blur-sm`}>
//                                 <p className="text-center text-sm font-medium">{msg.text}</p>
//                             </div>
//                         ))}
//                     </CardContent>
//                 </Card>
//             </div>
//         );
//     }

//     return (
//         <div className="flex items-center justify-center min-h-screen w-full bg-black relative overflow-hidden">
//             {/* Premium background effects */}
//             <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-black to-red-900/5"></div>
//             <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/8 rounded-full blur-3xl animate-pulse"></div>
//             <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
//             <Card className="w-96 h-auto relative z-10 bg-gray-950/95 backdrop-blur-xl border border-gray-800 shadow-2xl shadow-black/50 mx-auto">
//                 <CardHeader className="text-center pb-6">
//                     <CardTitle className="text-3xl font-bold text-white mb-2">
//                         {isRegistering ? 'Register' : 'Login'}
//                     </CardTitle>
//                     <CardDescription className="text-gray-500 text-base">
//                         {isRegistering ? 'Create your account to get started' : 'Welcome back! Please log in to your account.'}
//                     </CardDescription>
//                 </CardHeader>
                
//                 <CardContent className="space-y-6 p-6">
//                     <div className="space-y-4">
//                         <div className="space-y-4">
//                             <div className="relative group">
//                                 <Input
//                                     type="email"
//                                     placeholder="Email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className="bg-black/60 border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                             </div>
                            
//                             <div className="relative group">
//                                 <Input
//                                     type="password"
//                                     placeholder="Password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     className="bg-black/60 border-gray-800 text-white placeholder-gray-600 h-12 px-4 rounded-lg focus:bg-black/80 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:bg-black/70"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                             </div>
//                         </div>
                        
//                         <Button 
//                             onClick={handleSubmit}
//                             className="w-full h-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg shadow-red-900/30 hover:shadow-red-800/40 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none" 
//                             disabled={isLoading}
//                         >
//                             <span className="relative z-10">
//                                 {isLoading ? (
//                                     <div className="flex items-center justify-center space-x-2">
//                                         <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                                         <span>Processing...</span>
//                                     </div>
//                                 ) : (
//                                     isRegistering ? 'Register' : 'Login'
//                                 )}
//                             </span>
//                         </Button>
//                     </div>
                    
//                     <div className="relative">
//                         <div className="absolute inset-0 flex items-center">
//                             <div className="w-full border-t border-gray-800"></div>
//                         </div>
//                         <div className="relative flex justify-center text-sm">
//                             <span className="bg-gray-950 px-4 text-gray-600">or</span>
//                         </div>
//                     </div>
                    
//                     <div className="text-center text-gray-500">
//                         {isRegistering ? (
//                             <div className="flex items-center justify-center space-x-1">
//                                 <span>Already have an account?</span>
//                                 <Button 
//                                     variant="ghost" 
//                                     onClick={() => setIsRegistering(false)} 
//                                     className="px-2 py-0 h-auto text-red-400 hover:text-red-300 font-semibold hover:bg-black/30 rounded-lg transition-all duration-200"
//                                 >
//                                     Login
//                                 </Button>
//                             </div>
//                         ) : (
//                             <div className="flex items-center justify-center space-x-1">
//                                 <span>Don't have an account?</span>
//                                 <Button 
//                                     variant="ghost" 
//                                     onClick={() => setIsRegistering(true)} 
//                                     className="px-2 py-0 h-auto text-red-400 hover:text-red-300 font-semibold hover:bg-black/30 rounded-lg transition-all duration-200"
//                                 >
//                                     Register
//                                 </Button>
//                             </div>
//                         )}
//                     </div>

//                     {/* Show registered users count for demo */}
//                     {users.length > 0 && (
//                         <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-3 backdrop-blur-sm">
//                             <p className="text-center text-xs text-gray-400">
//                                 {users.length} user{users.length !== 1 ? 's' : ''} registered in this session
//                             </p>
//                         </div>
//                     )}
                    
//                     {messages.map((msg, index) => (
//                         <div key={index} className={`${msg.type === 'success' ? 'bg-green-600/10 border-green-600/25 text-green-400' : 'bg-red-600/10 border-red-600/25 text-red-400'} border rounded-lg p-3 backdrop-blur-sm`}>
//                             <p className="text-center text-sm font-medium">{msg.text}</p>
//                         </div>
//                     ))}
//                 </CardContent>
//             </Card>
//         </div>
//     );
// };

// export default AuthPage;