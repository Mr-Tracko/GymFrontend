// import React, { useState, useEffect, useRef } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import AuthPage from './pages/AuthPage';
// import OnboardingPage from './pages/OnboardingPage';
// import DashboardPage from './pages/DashboardPage';
// import LogsPage from './pages/LogsPage';
// import CalendarPage from './pages/CalenderPage';
// import RewardsPage from './pages/RewardsPage';
// import AccountPage from './pages/AccountPage';
// import Sidebar from './components/common/Sidebar';
// import Navbar from './components/common/Navbar';
// import Header from './components/common/Header';
// import ProtectedRoute from './components/common/ProtectedRoute';
// import { useAuth } from './hooks/useAuth';
// import useFitnessData from './hooks/useFitnessData';
// import apiClient from './api/apiClient';
// import CurrentWorkout from './pages/Workout/CurrentWorkout';
// import History from './pages/Workout/History';
// import NewWorkout from './pages/Workout/NewWorkout';
// import DietHistory from './pages/Diet/DietHistory';
// import DietSummary from './pages/Diet/DietSummary';
// import LatestPlan from './pages/Diet/LatestPlan';
// import Meal from './pages/Diet/Meal';
// import NewDiet from './pages/Diet/NewDiet';
// import Progress from './pages/Progress';

// const App = () => {
//     const { user, isAuthenticated, loading, login, logout } = useAuth();

//     const [planCreationDate, setPlanCreationDate] = useState(null);
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     // REMOVED: dailyReport, selectedCalendarDate, fetchDailyReport from destructuring
//     const {
//         logs,
//         profile,
//         rewards,
//         analytics,
//         isLoadingData,
//         fetchInitialData,
//         fetchLogs
//     } = useFitnessData(isAuthenticated, user?.id);

//     const messagesEndRef = useRef(null);

//     useEffect(() => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, [messages]);

//     // useEffect(() => {
//     //     if (!isAuthenticated && !loading) {
//     //         setMessages([{
//     //             sender: 'ai',
//     //             text: 'Welcome to your AI Fitness Tracker! Please log in or register to get started.'
//     //         }]);
//     //     }
//     // }, [isAuthenticated, loading]);

//     const handleLogin = async (email, password) => {
//         setIsLoading(true);
//         const response = await login(email, password);
//         setIsLoading(false);
//         if (response.success) {
//             fetchInitialData();
//         } else {
//             setMessages((prev) => [...prev, { sender: 'ai', text: response.message || 'Login failed.' }]);
//         }
//     };

//     const handleRegister = async (email, password) => {
//         // This function will need to be implemented in useAuth.js
//     };

//     const handleUserDetailsSubmit = async (details) => {
//         setIsLoading(true);
//         const response = await apiClient.post('/user/details', details);
//         setIsLoading(false);
//         if (response.data.success) {
//             // setHasProvidedDetails(true); // Example state update
//         }
//     };

//     const handleSendMessage = async () => {
//         if (input.trim() === '') return;
//         const userMessage = { sender: 'user', text: input };
//         setMessages((prevMessages) => [...prevMessages, userMessage]);
//         setInput('');
//         setIsLoading(true);
//         let aiResponse = 'I am sorry, I do not understand that request. Please try asking to log a workout, get a report, or generate a plan.';

//         try {
//             // API logic would go here
//         } catch (error) {
//             console.error('API call failed:', error);
//             aiResponse = 'Sorry, something went wrong. Please try again.';
//         } finally {
//             setTimeout(() => {
//                 const aiMessage = { sender: 'ai', text: aiResponse };
//                 setMessages((prevMessages) => [...prevMessages, aiMessage]);
//                 setIsLoading(false);
//             }, 1000);
//         }
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             handleSendMessage();
//         }
//     };

//     const MainLayout = () => (
//         <>
//             <Navbar/>
//             <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
//             <div className="flex-1 flex flex-col p-4 md:p-6 overflow-hidden">
//                 <Header onMenuClick={() => setIsSidebarOpen(true)} title="FIT AI" />
//                 <main className="flex-1 overflow-y-auto">
//                     <Routes>
//                         <Route path="dashboard" element={<DashboardPage messages={messages} input={input} setInput={setInput} isLoading={isLoading} handleSendMessage={handleSendMessage} handleKeyPress={handleKeyPress} messagesEndRef={messagesEndRef} analytics={analytics} />} />
//                         <Route path="logs" element={<LogsPage logs={logs} />} />
//                         <Route path="calendar" element={<CalendarPage planCreationDate={planCreationDate} />} />
//                         <Route path="rewards" element={<RewardsPage rewards={rewards} />} />
//                         <Route path="account" element={<AccountPage profile={profile} />} />

//                         {/* Diet Plan Routes */}
//                         <Route path="generate-diet" element={<NewDiet profile={profile} />} />
//                         <Route path="ask-meal" element={<Meal profile={profile} />} />
//                         <Route path="diet-history" element={<DietHistory profile={profile} />} />
//                         <Route path="diet-summary" element={<DietSummary profile={profile} />} />
//                         <Route path="latest-diet" element={<LatestPlan profile={profile} />} />

//                         {/* Workout Plan Routes */}
//                         <Route path="new-workout" element={<NewWorkout profile={profile} />} />
//                         <Route path="log-workout" element={<CurrentWorkout profile={profile} />} />
//                         <Route path="workout-history" element={<History profile={profile} />} />

//                         {/* Progress Tracker Route */}
//                         <Route path="progress" element={<Progress profile={profile} />} />

//                         <Route path="*" element={<Navigate to="/dashboard" />} />
//                     </Routes>
//                 </main>
//             </div>
//         </>
//     );

//     return (
//         <div className="flex h-screen bg-black text-white font-sans antialiased">
//             <Routes>
//                 <Route path="/auth" element={!isAuthenticated ? <AuthPage onLogin={handleLogin} onRegister={handleRegister} isLoading={isLoading} messages={messages} /> : <Navigate to="/dashboard" />} />
//                 <Route path="/*" element={<ProtectedRoute><MainLayout /></ProtectedRoute>} />
//                 <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth"} />} />
//                 {/* <Route path="/" element={<Navigate to={"/dashboard"} />} /> */}
//             </Routes>
//         </div>
//     );
// };

// export default App;
// import React, { useState, useEffect, useRef } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import AuthPage from './pages/AuthPage';
// import OnboardingPage from './pages/OnboardingPage';
// import DashboardPage from './pages/DashboardPage';
// import LogsPage from './pages/LogsPage';
// import CalendarPage from './pages/CalenderPage';
// import RewardsPage from './pages/RewardsPage';
// import AccountPage from './pages/AccountPage';
// import Sidebar from './components/common/Sidebar';
// import Navbar from './components/common/Navbar';
// import Header from './components/common/Header';
// import ProtectedRoute from './components/common/ProtectedRoute';
// import { useAuth } from './hooks/useAuth';
// import useFitnessData from './hooks/useFitnessData';
// import apiClient from './api/apiClient';
// import CurrentWorkout from './pages/Workout/CurrentWorkout';
// import History from './pages/Workout/History';
// import NewWorkout from './pages/Workout/NewWorkout';
// import DietHistory from './pages/Diet/DietHistory';
// import DietSummary from './pages/Diet/DietSummary';
// import LatestPlan from './pages/Diet/LatestPlan';
// import Meal from './pages/Diet/Meal';
// import NewDiet from './pages/Diet/NewDiet';
// import Progress from './pages/Progress';

// const App = () => {
//     const { user, isAuthenticated, loading, login, logout } = useAuth();

//     const [planCreationDate, setPlanCreationDate] = useState(null);
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     // REMOVED: dailyReport, selectedCalendarDate, fetchDailyReport from destructuring
//     const {
//         logs,
//         profile,
//         rewards,
//         analytics,
//         isLoadingData,
//         fetchInitialData,
//         fetchLogs
//     } = useFitnessData(isAuthenticated, user?.id);

//     const messagesEndRef = useRef(null);

//     useEffect(() => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, [messages]);

//     // useEffect(() => {
//     //     if (!isAuthenticated && !loading) {
//     //         setMessages([{
//     //             sender: 'ai',
//     //             text: 'Welcome to your AI Fitness Tracker! Please log in or register to get started.'
//     //         }]);
//     //     }
//     // }, [isAuthenticated, loading]);

//     const handleLogin = async (email, password) => {
//         setIsLoading(true);
//         const response = await login(email, password);
//         setIsLoading(false);
//         if (response.success) {
//             fetchInitialData();
//         } else {
//             setMessages((prev) => [...prev, { sender: 'ai', text: response.message || 'Login failed.' }]);
//         }
//     };

//     const handleRegister = async (email, password) => {
//         // This function will need to be implemented in useAuth.js
//     };

//     const handleUserDetailsSubmit = async (details) => {
//         setIsLoading(true);
//         const response = await apiClient.post('/user/details', details);
//         setIsLoading(false);
//         if (response.data.success) {
//             // setHasProvidedDetails(true); // Example state update
//         }
//     };

//     const handleSendMessage = async () => {
//         if (input.trim() === '') return;
//         const userMessage = { sender: 'user', text: input };
//         setMessages((prevMessages) => [...prevMessages, userMessage]);
//         setInput('');
//         setIsLoading(true);
//         let aiResponse = 'I am sorry, I do not understand that request. Please try asking to log a workout, get a report, or generate a plan.';

//         try {
//             // API logic would go here
//         } catch (error) {
//             console.error('API call failed:', error);
//             aiResponse = 'Sorry, something went wrong. Please try again.';
//         } finally {
//             setTimeout(() => {
//                 const aiMessage = { sender: 'ai', text: aiResponse };
//                 setMessages((prevMessages) => [...prevMessages, aiMessage]);
//                 setIsLoading(false);
//             }, 1000);
//         }
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             handleSendMessage();
//         }
//     };

//     const MainLayout = () => (
//         <>
//             {/* Fixed Navbar at the top */}
//             <div className="fixed top-0 left-0 right-0 z-40">
//                 <Navbar />
//             </div>
            
//             {/* Original layout structure preserved with top padding for both sidebar and content */}
//             <div className="pt-20"> {/* Wrapper with top padding */}
//                 <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
//                 <div className="flex-1 flex flex-col p-4 md:p-6 overflow-hidden">

//                 <Header onMenuClick={() => setIsSidebarOpen(true)} title="FIT AI" />
//                 <main className="flex-1 overflow-y-auto">
//                     <Routes>
//                         <Route path="dashboard" element={<DashboardPage messages={messages} input={input} setInput={setInput} isLoading={isLoading} handleSendMessage={handleSendMessage} handleKeyPress={handleKeyPress} messagesEndRef={messagesEndRef} analytics={analytics} />} />
//                         <Route path="logs" element={<LogsPage logs={logs} />} />
//                         <Route path="calendar" element={<CalendarPage planCreationDate={planCreationDate} />} />
//                         <Route path="rewards" element={<RewardsPage rewards={rewards} />} />
//                         <Route path="account" element={<AccountPage profile={profile} />} />

//                         {/* Diet Plan Routes */}
//                         <Route path="generate-diet" element={<NewDiet profile={profile} />} />
//                         <Route path="ask-meal" element={<Meal profile={profile} />} />
//                         <Route path="diet-history" element={<DietHistory profile={profile} />} />
//                         <Route path="diet-summary" element={<DietSummary profile={profile} />} />
//                         <Route path="latest-diet" element={<LatestPlan profile={profile} />} />

//                         {/* Workout Plan Routes */}
//                         <Route path="new-workout" element={<NewWorkout profile={profile} />} />
//                         <Route path="log-workout" element={<CurrentWorkout profile={profile} />} />
//                         <Route path="workout-history" element={<History profile={profile} />} />

//                         {/* Progress Tracker Route */}
//                         <Route path="progress" element={<Progress profile={profile} />} />

//                         <Route path="*" element={<Navigate to="/dashboard" />} />
//                     </Routes>
//                 </main>
//             </div>
//         </div> {/* Close the wrapper div */}
//         </>
//     );

//     return (
//         <div className="flex h-screen bg-black text-white font-sans antialiased">
//             <Routes>
//                 <Route path="/auth" element={!isAuthenticated ? <AuthPage onLogin={handleLogin} onRegister={handleRegister} isLoading={isLoading} messages={messages} /> : <Navigate to="/dashboard" />} />
//                 <Route path="/*" element={<ProtectedRoute><MainLayout /></ProtectedRoute>} />
//                 <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth"} />} />
//                 {/* <Route path="/" element={<Navigate to={"/dashboard"} />} /> */}
//             </Routes>
//         </div>
//     );
// };

// export default App;

// import React, { useState, useEffect, useRef } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// // import AuthPage from './pages/AuthPage';
// import OnboardingPage from './pages/OnboardingPage';
// import DashboardPage from './pages/DashboardPage';
// import LogsPage from './pages/LogsPage';
// import CalendarPage from './pages/CalenderPage';
// import RewardsPage from './pages/RewardsPage';
// import AccountPage from './pages/AccountPage';
// import Sidebar from './components/common/Sidebar';
// import Navbar from './components/common/Navbar';
// import Header from './components/common/Header';
// import ProtectedRoute from './components/common/ProtectedRoute';
// import { useAuth } from './hooks/useAuth';
// import useFitnessData from './hooks/useFitnessData';
// import apiClient from './api/apiClient';
// import CurrentWorkout from './pages/Workout/CurrentWorkout';
// import History from './pages/Workout/History';
// import NewWorkout from './pages/Workout/NewWorkout';
// import DietHistory from './pages/Diet/DietHistory';
// import DietSummary from './pages/Diet/DietSummary';
// import LatestPlan from './pages/Diet/LatestPlan';
// import Meal from './pages/Diet/Meal';
// import NewDiet from './pages/Diet/NewDiet';
// import Progress from './pages/Progress';
// import LoginPage from './pages/Login';
// import RegisterPage from './pages/Register';

// const App = () => {
//     const { user, isAuthenticated, loading, login, logout } = useAuth();

//     const [planCreationDate, setPlanCreationDate] = useState(null);
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const {
//         logs,
//         profile,
//         rewards,
//         analytics,
//         isLoadingData,
//         fetchInitialData,
//         fetchLogs
//     } = useFitnessData(isAuthenticated, user?.id);

//     const messagesEndRef = useRef(null);

//     useEffect(() => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, [messages]);

//     const handleLogin = async (email, password) => {
//         setIsLoading(true);
//         const response = await login(email, password);
//         setIsLoading(false);
//         if (response.success) {
//             fetchInitialData();
//         } else {
//             setMessages((prev) => [...prev, { sender: 'ai', text: response.message || 'Login failed.' }]);
//         }
//     };

//     const handleRegister = async (email, password) => {
//         // This function will need to be implemented in useAuth.js
//     };

//     const handleUserDetailsSubmit = async (details) => {
//         setIsLoading(true);
//         const response = await apiClient.post('/user/details', details);
//         setIsLoading(false);
//         if (response.data.success) {
//             // setHasProvidedDetails(true); // Example state update
//         }
//     };

//     const handleSendMessage = async () => {
//         if (input.trim() === '') return;
//         const userMessage = { sender: 'user', text: input };
//         setMessages((prevMessages) => [...prevMessages, userMessage]);
//         setInput('');
//         setIsLoading(true);
//         let aiResponse = 'I am sorry, I do not understand that request. Please try asking to log a workout, get a report, or generate a plan.';

//         try {
//             // API logic would go here
//         } catch (error) {
//             console.error('API call failed:', error);
//             aiResponse = 'Sorry, something went wrong. Please try again.';
//         } finally {
//             setTimeout(() => {
//                 const aiMessage = { sender: 'ai', text: aiResponse };
//                 setMessages((prevMessages) => [...prevMessages, aiMessage]);
//                 setIsLoading(false);
//             }, 1000);
//         }
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             handleSendMessage();
//         }
//     };

//     const MainLayout = () => (
//         <div className="flex flex-col h-screen">
//             {/* Fixed Navbar at the top */}
//             <div className="fixed top-0 left-0 right-0 z-40 h-20">
//                 <Navbar />
//             </div>
            
//             {/* Main layout container - flex row for sidebar and content */}
//             <div className="flex flex-1 pt-20">
//                 {/* Sidebar */}
//                 <Sidebar 
//                     isSidebarOpen={isSidebarOpen} 
//                     setIsSidebarOpen={setIsSidebarOpen}
//                     navbarHeight="80px"
//                 />
                
//                 {/* Main content area */}
//                 <div className="flex-1 flex flex-col overflow-hidden md:ml-0">
//                     <Header 
//                         onMenuClick={() => setIsSidebarOpen(true)} 
//                         title="FIT AI" 
//                         className="md:hidden" // Only show header on mobile
//                     />
                    
//                     <main className="flex-1 overflow-hidden p-4 md:p-6">
//                         <Routes>
//                             <Route path="dashboard" element={
//                                 <DashboardPage 
//                                     messages={messages} 
//                                     input={input} 
//                                     setInput={setInput} 
//                                     isLoading={isLoading} 
//                                     handleSendMessage={handleSendMessage} 
//                                     handleKeyPress={handleKeyPress} 
//                                     messagesEndRef={messagesEndRef} 
//                                     analytics={analytics}
//                                     navbarHeight="80px"
//                                 />
//                             } />
//                             <Route path="logs" element={<LogsPage logs={logs} />} />
//                             <Route path="calendar" element={<CalendarPage planCreationDate={planCreationDate} />} />
//                             <Route path="rewards" element={<RewardsPage rewards={rewards} />} />
//                             <Route path="account" element={<AccountPage profile={profile} />} />

//                             {/* Diet Plan Routes */}
//                             <Route path="generate-diet" element={<NewDiet profile={profile} />} />
//                             <Route path="ask-meal" element={<Meal profile={profile} />} />
//                             <Route path="diet-history" element={<DietHistory profile={profile} />} />
//                             <Route path="diet-summary" element={<DietSummary profile={profile} />} />
//                             <Route path="latest-diet" element={<LatestPlan profile={profile} />} />

//                             {/* Workout Plan Routes */}
//                             <Route path="new-workout" element={<NewWorkout profile={profile} />} />
//                             <Route path="log-workout" element={<CurrentWorkout profile={profile} />} />
//                             <Route path="workout-history" element={<History profile={profile} />} />

//                             {/* Progress Tracker Route */}
//                             <Route path="progress" element={<Progress profile={profile} />} />

//                             <Route path="*" element={<Navigate to="/dashboard" />} />
//                         </Routes>
//                     </main>
//                 </div>
//             </div>
//         </div>
//     );

//     return (
//         <div className="h-screen bg-black text-white font-sans antialiased">
//             <Routes>
//                 <Route path="/auth" element={!isAuthenticated ? <LoginPage onLogin={handleLogin} onRegister={handleRegister} isLoading={isLoading} messages={messages} /> : <Navigate to="/dashboard" />} />
//                 {/* <Route path="/auth" element={!isAuthenticated ? <LoginPage onLogin={handleLogin} onRegister={handleRegister} isLoading={isLoading} messages={messages} /> : <Navigate to="/dashboard" />} /> */}
//                 <Route path="/*" element={<ProtectedRoute><MainLayout /></ProtectedRoute>} />
//                 <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth"} />} />
//                 <Route path="/register" element={<RegisterPage />} />
//             </Routes>
//         </div>
//     );
// };

// export default App;

import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import LogsPage from './pages/LogsPage';
import CalendarPage from './pages/CalenderPage';
import RewardsPage from './pages/RewardsPage';
import AccountPage from './pages/AccountPage';
import Sidebar from './components/common/Sidebar';
import Navbar from './components/common/Navbar';
import Header from './components/common/Header';
import ProtectedRoute from './components/common/ProtectedRoute';
import useFitnessData from './hooks/useFitnessData';
import apiClient from './api/apiClient';
import CurrentWorkout from './pages/Workout/CurrentWorkout';
import History from './pages/Workout/History';
import NewWorkout from './pages/Workout/NewWorkout';
import DietHistory from './pages/Diet/DietHistory';
import DietSummary from './pages/Diet/DietSummary';
import LatestPlan from './pages/Diet/LatestPlan';
import Meal from './pages/Diet/Meal';
import NewDiet from './pages/Diet/NewDiet';
import Progress from './pages/Progress';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

const App = () => {
    // Authentication state
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    // Other state
    const [planCreationDate, setPlanCreationDate] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const {
        logs,
        profile,
        rewards,
        analytics,
        isLoadingData,
        fetchInitialData,
        fetchLogs
    } = useFitnessData(isAuthenticated, user?.id);

    const messagesEndRef = useRef(null);

    // Check for existing token on app load
    useEffect(() => {
        checkAuthStatus();
    }, []);

    // Auto scroll messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Check if user is authenticated (has valid token)
    const checkAuthStatus = async () => {
        setLoading(true);
        const token = localStorage.getItem('authToken');
        
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            // Set the token in the API client header
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
            // Verify token with backend
            const response = await apiClient.get('/auth/verify-token');
            
            if (response.data.success) {
                setUser(response.data.user);
                setIsAuthenticated(true);
                fetchInitialData();
            } else {
                // Token is invalid, remove it
                localStorage.removeItem('authToken');
                delete apiClient.defaults.headers.common['Authorization'];
            }
        } catch (error) {
            console.error('Token verification failed:', error);
            localStorage.removeItem('authToken');
            delete apiClient.defaults.headers.common['Authorization'];
        } finally {
            setLoading(false);
        }
    };

    // Login function
    const handleLogin = async (email, password) => {
        setIsLoading(true);
        
        try {
            // Log the data being sent for debugging
            const loginData = {
                email,
                password
            };
            console.log('Sending login data:', loginData);

            const response = await apiClient.post('/auth/login', loginData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            console.log('Login response:', response.data);

            if (response.data.success) {
                const { token, user } = response.data;
                
                // Store token in localStorage
                localStorage.setItem('authToken', token);
                
                // Set token in API client headers
                apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                
                // Update state
                setUser(user);
                setIsAuthenticated(true);
                
                // Fetch initial data
                fetchInitialData();
                
                setMessages((prev) => [...prev, { 
                    sender: 'ai', 
                    text: 'Login successful! Welcome back!' 
                }]);

                return { success: true };
            } else {
                setMessages((prev) => [...prev, { 
                    sender: 'ai', 
                    text: response.data.message || 'Login failed.' 
                }]);
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            console.error('Login error:', error);
            console.error('Error response:', error.response?.data);
            console.error('Error status:', error.response?.status);
            
            let errorMessage = 'Login failed. Please try again.';
            
            if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            } else if (error.response?.data?.error) {
                errorMessage = error.response.data.error;
            } else if (error.response?.status === 400) {
                errorMessage = 'Invalid login credentials. Please check your email and password.';
            } else if (error.response?.status === 401) {
                errorMessage = 'Invalid email or password.';
            } else if (!error.response) {
                errorMessage = 'Network error. Please check your connection.';
            }
            
            setMessages((prev) => [...prev, { 
                sender: 'ai', 
                text: errorMessage 
            }]);
            return { success: false, message: errorMessage };
        } finally {
            setIsLoading(false);
        }
    };

    // Register function
    const handleRegister = async (email, password, name) => {
        setIsLoading(true);
        
        try {
            // Log the data being sent for debugging
            const registrationData = {
                email,
                password,
                fullName: name  // Backend expects 'fullName', not 'name'
            };
            console.log('Sending registration data:', registrationData);

            const response = await apiClient.post('/auth/register', registrationData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            console.log('Registration response:', response.data);

            if (response.data.success) {
                const { token, user } = response.data;
                
                // Store token in localStorage
                localStorage.setItem('authToken', token);
                
                // Set token in API client headers
                apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                
                // Update state
                setUser(user);
                setIsAuthenticated(true);
                
                // Fetch initial data
                fetchInitialData();
                
                setMessages((prev) => [...prev, { 
                    sender: 'ai', 
                    text: 'Registration successful! Welcome to FIT AI!' 
                }]);

                return { success: true };
            } else {
                setMessages((prev) => [...prev, { 
                    sender: 'ai', 
                    text: response.data.message || 'Registration failed.' 
                }]);
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            console.error('Registration error:', error);
            console.error('Error response:', error.response?.data);
            console.error('Error status:', error.response?.status);
            console.error('Error config:', error.config);
            
            let errorMessage = 'Registration failed. Please try again.';
            
            if (error.response?.status === 500) {
                errorMessage = 'Server error occurred. Please try again later or contact support.';
                console.error('Server Error Details:', {
                    status: 500,
                    url: error.config?.url,
                    method: error.config?.method,
                    data: error.config?.data,
                    headers: error.config?.headers
                });
            } else if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            } else if (error.response?.data?.error) {
                errorMessage = error.response.data.error;
            } else if (error.response?.status === 400) {
                errorMessage = 'Invalid registration data. Please check all fields.';
            } else if (error.response?.status === 409) {
                errorMessage = 'Email already exists. Please use a different email.';
            } else if (!error.response) {
                errorMessage = 'Network error. Please check your connection.';
            }
            
            setMessages((prev) => [...prev, { 
                sender: 'ai', 
                text: errorMessage 
            }]);
            return { success: false, message: errorMessage };
        } finally {
            setIsLoading(false);
        }
    };

    // Logout function
    const handleLogout = () => {
        // Remove token from localStorage
        localStorage.removeItem('authToken');
        
        // Remove token from API client headers
        delete apiClient.defaults.headers.common['Authorization'];
        
        // Reset state
        setUser(null);
        setIsAuthenticated(false);
        setMessages([]);
        
        // You might want to call a logout endpoint on your backend as well
        // apiClient.post('/auth/logout');
    };

    const handleUserDetailsSubmit = async (details) => {
        setIsLoading(true);
        
        try {
            const response = await apiClient.post('/user/details', details);
            
            if (response.data.success) {
                // Update user details in state
                setUser(prevUser => ({ ...prevUser, ...details }));
                setMessages((prev) => [...prev, { 
                    sender: 'ai', 
                    text: 'User details updated successfully!' 
                }]);
                return { success: true };
            } else {
                setMessages((prev) => [...prev, { 
                    sender: 'ai', 
                    text: response.data.message || 'Failed to update details.' 
                }]);
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            console.error('Update details error:', error);
            const errorMessage = error.response?.data?.message || 'Failed to update details.';
            setMessages((prev) => [...prev, { 
                sender: 'ai', 
                text: errorMessage 
            }]);
            return { success: false, message: errorMessage };
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendMessage = async () => {
        if (input.trim() === '') return;
        const userMessage = { sender: 'user', text: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput('');
        setIsLoading(true);
        let aiResponse = 'I am sorry, I do not understand that request. Please try asking to log a workout, get a report, or generate a plan.';

        try {
            // API logic would go here
        } catch (error) {
            console.error('API call failed:', error);
            aiResponse = 'Sorry, something went wrong. Please try again.';
        } finally {
            setTimeout(() => {
                const aiMessage = { sender: 'ai', text: aiResponse };
                setMessages((prevMessages) => [...prevMessages, aiMessage]);
                setIsLoading(false);
            }, 1000);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const MainLayout = () => (
        <div className="flex flex-col h-screen">
            {/* Fixed Navbar at the top */}
            <div className="fixed top-0 left-0 right-0 z-40 h-20">
                <Navbar onLogout={handleLogout} user={user} />
            </div>
            
            {/* Main layout container - flex row for sidebar and content */}
            <div className="flex flex-1 pt-20">
                {/* Sidebar */}
                <Sidebar 
                    isSidebarOpen={isSidebarOpen} 
                    setIsSidebarOpen={setIsSidebarOpen}
                    navbarHeight="80px"
                    onLogout={handleLogout}
                />
                
                {/* Main content area */}
                <div className="flex-1 flex flex-col overflow-hidden md:ml-0">
                    <Header 
                        onMenuClick={() => setIsSidebarOpen(true)} 
                        title="FIT AI" 
                        className="md:hidden" // Only show header on mobile
                    />
                    
                    <main className="flex-1 overflow-hidden p-4 md:p-6">
                        <Routes>
                            <Route path="dashboard" element={
                                <DashboardPage 
                                    messages={messages} 
                                    input={input} 
                                    setInput={setInput} 
                                    isLoading={isLoading} 
                                    handleSendMessage={handleSendMessage} 
                                    handleKeyPress={handleKeyPress} 
                                    messagesEndRef={messagesEndRef} 
                                    analytics={analytics}
                                    navbarHeight="80px"
                                />
                            } />
                            <Route path="logs" element={<LogsPage logs={logs} />} />
                            <Route path="calendar" element={<CalendarPage planCreationDate={planCreationDate} />} />
                            <Route path="rewards" element={<RewardsPage rewards={rewards} />} />
                            <Route path="account" element={<AccountPage profile={profile} onLogout={handleLogout} />} />

                            {/* Diet Plan Routes */}
                            <Route path="generate-diet" element={<NewDiet profile={profile} />} />
                            <Route path="ask-meal" element={<Meal profile={profile} />} />
                            <Route path="diet-history" element={<DietHistory profile={profile} />} />
                            <Route path="diet-summary" element={<DietSummary profile={profile} />} />
                            <Route path="latest-diet" element={<LatestPlan profile={profile} />} />

                            {/* Workout Plan Routes */}
                            <Route path="new-workout" element={<NewWorkout profile={profile} />} />
                            <Route path="log-workout" element={<CurrentWorkout profile={profile} />} />
                            <Route path="workout-history" element={<History profile={profile} />} />

                            {/* Progress Tracker Route */}
                            <Route path="progress" element={<Progress profile={profile} />} />

                            <Route path="*" element={<Navigate to="/dashboard" />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </div>
    );

    // Show loading spinner while checking authentication
    if (loading) {
        return (
            <div className="h-screen bg-black text-white font-sans antialiased flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
                    <p className="mt-4">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen bg-black text-white font-sans antialiased">
            <Routes>
                <Route 
                    path="/auth" 
                    element={
                        !isAuthenticated ? 
                        <LoginPage 
                            onLogin={handleLogin} 
                            onRegister={handleRegister} 
                            isLoading={isLoading} 
                            messages={messages} 
                        /> : 
                        <Navigate to="/dashboard" />
                    } 
                />
                <Route 
                    path="/register" 
                    element={
                        !isAuthenticated ? 
                        <RegisterPage 
                            onRegister={handleRegister} 
                            isLoading={isLoading} 
                        /> : 
                        <Navigate to="/dashboard" />
                    } 
                />
                <Route 
                    path="/*" 
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <MainLayout />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/" 
                    element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth"} />} 
                />
            </Routes>
        </div>
    );
};

export default App;