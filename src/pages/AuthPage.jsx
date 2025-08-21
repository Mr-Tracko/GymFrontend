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
        <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
            {/* Premium background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-black to-red-600/5"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
            <Card className="w-96 h-auto relative z-10 bg-black/80 backdrop-blur-xl border border-red-500/30 shadow-2xl shadow-red-500/20 mx-auto">
                <CardHeader className="text-center pb-6">
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-red-300 bg-clip-text text-transparent mb-2">
                        {isRegistering ? 'REGISTER' : 'LOGIN'}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-base">
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
                                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 h-12 px-4 rounded-lg focus:bg-gray-900/70 focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:bg-gray-900/60"
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
                                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 h-12 px-4 rounded-lg focus:bg-gray-900/70 focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:bg-gray-900/60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                        
                        <Button 
                            type="submit" 
                            className="w-full h-12 bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-500 hover:via-red-600 hover:to-red-700 text-white font-semibold rounded-lg shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none" 
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
                            <div className="w-full border-t border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-black px-4 text-gray-400">or</span>
                        </div>
                    </div>
                    
                    <div className="text-center text-gray-400">
                        {isRegistering ? (
                            <div className="flex items-center justify-center space-x-1">
                                <span>Already have an account?</span>
                                <Button 
                                    variant="ghost" 
                                    onClick={() => setIsRegistering(false)} 
                                    className="px-2 py-0 h-auto text-red-400 hover:text-red-300 font-semibold hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                                >
                                    LOGIN
                                </Button>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center space-x-1">
                                <span>Don't have an account?</span>
                                <Button 
                                    variant="ghost" 
                                    onClick={() => setIsRegistering(true)} 
                                    className="px-2 py-0 h-auto text-red-400 hover:text-red-300 font-semibold hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                                >
                                    REGISTER
                                </Button>
                            </div>
                        )}
                    </div>
                    
                    {messages.map((msg, index) => (
                        <div key={index} className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 backdrop-blur-sm">
                            <p className="text-center text-sm text-red-400 font-medium">{msg.text}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default AuthPage;