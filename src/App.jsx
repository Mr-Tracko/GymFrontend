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

import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
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
import { useAuth } from './hooks/useAuth';
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

const App = () => {
    const { user, isAuthenticated, loading, login, logout } = useAuth();

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

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleLogin = async (email, password) => {
        setIsLoading(true);
        const response = await login(email, password);
        setIsLoading(false);
        if (response.success) {
            fetchInitialData();
        } else {
            setMessages((prev) => [...prev, { sender: 'ai', text: response.message || 'Login failed.' }]);
        }
    };

    const handleRegister = async (email, password) => {
        // This function will need to be implemented in useAuth.js
    };

    const handleUserDetailsSubmit = async (details) => {
        setIsLoading(true);
        const response = await apiClient.post('/user/details', details);
        setIsLoading(false);
        if (response.data.success) {
            // setHasProvidedDetails(true); // Example state update
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
                <Navbar />
            </div>
            
            {/* Main layout container - flex row for sidebar and content */}
            <div className="flex flex-1 pt-20">
                {/* Sidebar */}
                <Sidebar 
                    isSidebarOpen={isSidebarOpen} 
                    setIsSidebarOpen={setIsSidebarOpen}
                    navbarHeight="80px"
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
                            <Route path="account" element={<AccountPage profile={profile} />} />

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

    return (
        <div className="h-screen bg-black text-white font-sans antialiased">
            <Routes>
                <Route path="/auth" element={!isAuthenticated ? <AuthPage onLogin={handleLogin} onRegister={handleRegister} isLoading={isLoading} messages={messages} /> : <Navigate to="/dashboard" />} />
                <Route path="/*" element={<ProtectedRoute><MainLayout /></ProtectedRoute>} />
                <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth"} />} />
            </Routes>
        </div>
    );
};

export default App;