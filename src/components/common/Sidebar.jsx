// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import Button from '../ui/Button';
// import { 
//     HomeIcon, 
//     LogIcon, 
//     CalendarIcon, 
//     RewardIcon, 
//     UserIcon, 
//     XIcon
// } from '../../assets/Icons';

// // Fallback icons using simple SVG if the custom icons don't exist
// const ChevronDownIcon = ({ className }) => (
//     <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//     </svg>
// );

// const ChevronRightIcon = ({ className }) => (
//     <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//     </svg>
// );

// const UtensilsIcon = ({ className }) => (
//   <svg
//     className={className}
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//     width="20"
//     height="30" 
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
//     />
//   </svg>
// );

// const DumbbellIcon = ({ className }) => (
//   <svg
//     className={className}
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//     width="20"
//     height="30"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M7 21a4 4 0 01-4-4V7a4 4 0 014-4h2v2H7a2 2 0 00-2 2v10a2 2 0 002 2h2v2H7zM17 3a4 4 0 014 4v10a4 4 0 01-4 4h-2v-2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2V3h2zM8 8h8v8H8V8z"
//     />
//   </svg>
// );

// const TrendingUpIcon = ({ className }) => (
//   <svg
//     className={className}
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//     width="20"
//     height="27"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//     />
//   </svg>
// );

// const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, navbarHeight = "80px", sidebarWidth = "280px", dropdownOffset = { left: 280, top: 80 } }) => {
//     const location = useLocation();
//     const [dietDropdownOpen, setDietDropdownOpen] = useState(false);
//     const [workoutDropdownOpen, setWorkoutDropdownOpen] = useState(false);

//     // Helper to determine if a link is active
//     const isActive = (path) => location.pathname.includes(path);

//     // Helper to determine if any dropdown items are active
//     const isDropdownActive = (paths) => paths.some(path => location.pathname.includes(path));

//     const toggleDietDropdown = () => {
//         setDietDropdownOpen(!dietDropdownOpen);
//         setWorkoutDropdownOpen(false); // Close other dropdown
//     };

//     const toggleWorkoutDropdown = () => {
//         setWorkoutDropdownOpen(!workoutDropdownOpen);
//         setDietDropdownOpen(false); // Close other dropdown
//     };

//     return (
//         <>
//             <nav
//                 className={`fixed inset-y-0 left-0 pl-5 transform ${
//                     isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//                 } md:relative md:translate-x-0 w-64 bg-gray-900 p-4 transition-transform duration-300 ease-in-out z-50 flex flex-col justify-between rounded-md border-r-2 border-red-600 shadow-xl`}
//             >
//                 <div>
//                     <div className="flex justify-between items-center mb-6">
//                         <h1 className="text-2xl font-bold text-red-600">FIT AI</h1>
//                         <Button variant="ghost" onClick={() => setIsSidebarOpen(false)} className="md:hidden p-2">
//                             <XIcon className="h-6 w-6 text-white"/>
//                         </Button>
//                     </div>
                    
//                     <ul className="space-y-1">
//                         {/* Dashboard */}
//                         <li>
//                             <Link 
//                                 to="/dashboard" 
//                                 className={`w-full flex items-center p-3 rounded-lg font-semibold transition-all duration-200 ${
//                                     isActive('/dashboard') 
//                                         ? 'bg-red-600 text-white shadow-lg' 
//                                         : 'text-gray-300 hover:bg-gray-800 hover:text-white'
//                                 }`}
//                             >
//                                 <HomeIcon />
//                                 <span className="ml-3">Dashboard</span>
//                             </Link>
//                         </li>

//                         {/* Diet Plans Dropdown */}
//                         <li className="relative">
//                             <button
//                                 onClick={toggleDietDropdown}
//                                 className={`w-full flex items-center justify-between p-3 rounded-lg font-semibold transition-all duration-200 ${
//                                     isDropdownActive(['/diet', '/generate-diet', '/ask-meal', '/diet-history', '/diet-summary', '/latest-diet']) 
//                                         ? 'bg-red-600 text-white shadow-lg' 
//                                         : 'text-gray-300 hover:bg-gray-800 hover:text-white'
//                                 }`}
//                             >
//                                 <div className="flex items-center">
//                                     <UtensilsIcon />
//                                     <span className="ml-3">Diet Plans</span>
//                                 </div>
//                                 {dietDropdownOpen ? (
//                                     <ChevronDownIcon className="h-4 w-4" />
//                                 ) : (
//                                     <ChevronRightIcon className="h-4 w-4" />
//                                 )}
//                             </button>
//                         </li>

//                         {/* Workout Plans Dropdown */}
//                         <li className="relative">
//                             <button
//                                 onClick={toggleWorkoutDropdown}
//                                 className={`w-full flex items-center justify-between p-3 rounded-lg font-semibold transition-all duration-200 ${
//                                     isDropdownActive(['/workout', '/new-workout', '/log-workout', '/workout-history']) 
//                                         ? 'bg-red-600 text-white shadow-lg' 
//                                         : 'text-gray-300 hover:bg-gray-800 hover:text-white'
//                                 }`}
//                             >
//                                 <div className="flex items-center">
//                                     <DumbbellIcon />
//                                     <span className="ml-3">Workout Plans</span>
//                                 </div>
//                                 {workoutDropdownOpen ? (
//                                     <ChevronDownIcon className="h-4 w-4" />
//                                 ) : (
//                                     <ChevronRightIcon className="h-4 w-4" />
//                                 )}
//                             </button>
//                         </li>

//                         {/* Progress Tracker */}
//                         <li>
//                             <Link 
//                                 to="/progress" 
//                                 className={`w-full flex items-center p-3 rounded-lg font-semibold transition-all duration-200 ${
//                                     isActive('/progress') 
//                                         ? 'bg-red-600 text-white shadow-lg' 
//                                         : 'text-gray-300 hover:bg-gray-800 hover:text-white'
//                                 }`}
//                             >
//                                 <TrendingUpIcon />
//                                 <span className="ml-2">Progress Tracker</span>
//                             </Link>
//                         </li>

//                         {/* Previous Logs */}
//                         <li>
//                             <Link 
//                                 to="/logs" 
//                                 className={`w-full flex items-center p-3 rounded-lg font-semibold transition-all duration-200 ${
//                                     isActive('/logs') 
//                                         ? 'bg-red-600 text-white shadow-lg' 
//                                         : 'text-gray-300 hover:bg-gray-800 hover:text-white'
//                                 }`}
//                             >
//                                 <LogIcon />
//                                 <span className="ml-3">Previous Logs</span>
//                             </Link>
//                         </li>

//                         {/* Calendar */}
//                         <li>
//                             <Link 
//                                 to="/calendar" 
//                                 className={`w-full flex items-center p-3 rounded-lg font-semibold transition-all duration-200 ${
//                                     isActive('/calendar') 
//                                         ? 'bg-red-600 text-white shadow-lg' 
//                                         : 'text-gray-300 hover:bg-gray-800 hover:text-white'
//                                 }`}
//                             >
//                                 <CalendarIcon />
//                                 <span className="ml-3">Calendar</span>
//                             </Link>
//                         </li>

//                         {/* Rewards */}
//                         <li>
//                             <Link 
//                                 to="/rewards" 
//                                 className={`w-full flex items-center p-3 rounded-lg font-semibold transition-all duration-200 ${
//                                     isActive('/rewards') 
//                                         ? 'bg-red-600 text-white shadow-lg' 
//                                         : 'text-gray-300 hover:bg-gray-800 hover:text-white'
//                                 }`}
//                             >
//                                 <RewardIcon />
//                                 <span className="ml-3">Reward Points</span>
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Account section at bottom */}
//                 <div className="border-t border-gray-700 pt-4">
//                     <Link 
//                         to="/account" 
//                         className={`w-full flex items-center p-3 rounded-lg font-semibold transition-all duration-200 ${
//                             isActive('/account') 
//                                 ? 'bg-red-600 text-white shadow-lg' 
//                                 : 'text-gray-300 hover:bg-gray-800 hover:text-white'
//                         }`}
//                     >
//                         <UserIcon />
//                         <span className="ml-3">Account</span>
//                     </Link>
//                 </div>
//             </nav>

//             {/* Diet Dropdown - Positioned as overlay */}
//             {dietDropdownOpen && (
//                 <div 
//                     className="fixed bg-gray-800 rounded-lg shadow-xl border border-gray-600 z-[60] min-w-[250px]"
//                     style={{ 
//                         left: `${dropdownOffset.left}px`, 
//                         top: `${dropdownOffset.top + 110}px` // Adjust based on diet item position
//                     }}
//                 >
//                     <ul className="p-2 space-y-1">
//                         <li>
//                             <Link 
//                                 to="/generate-diet" 
//                                 className={`block p-3 rounded-md text-sm font-medium transition-all duration-200 ${
//                                     isActive('/generate-diet') 
//                                         ? 'bg-red-500 text-white' 
//                                         : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                                 }`}
//                                 onClick={() => setDietDropdownOpen(false)}
//                             >
//                                 Generate a Diet Plan
//                             </Link>
//                         </li>
//                         <li>
//                             <Link 
//                                 to="/ask-meal" 
//                                 className={`block p-3 rounded-md text-sm font-medium transition-all duration-200 ${
//                                     isActive('/ask-meal') 
//                                         ? 'bg-red-500 text-white' 
//                                         : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                                 }`}
//                                 onClick={() => setDietDropdownOpen(false)}
//                             >
//                                 Ask a Meal
//                             </Link>
//                         </li>
//                         <li>
//                             <Link 
//                                 to="/diet-history" 
//                                 className={`block p-3 rounded-md text-sm font-medium transition-all duration-200 ${
//                                     isActive('/diet-history') 
//                                         ? 'bg-red-500 text-white' 
//                                         : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                                 }`}
//                                 onClick={() => setDietDropdownOpen(false)}
//                             >
//                                 Diet History
//                             </Link>
//                         </li>
//                         <li>
//                             <Link 
//                                 to="/diet-summary" 
//                                 className={`block p-3 rounded-md text-sm font-medium transition-all duration-200 ${
//                                     isActive('/diet-summary') 
//                                         ? 'bg-red-500 text-white' 
//                                         : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                                 }`}
//                                 onClick={() => setDietDropdownOpen(false)}
//                             >
//                                 Diet Summary
//                             </Link>
//                         </li>
//                         <li>
//                             <Link 
//                                 to="/latest-diet" 
//                                 className={`block p-3 rounded-md text-sm font-medium transition-all duration-200 ${
//                                     isActive('/latest-diet') 
//                                         ? 'bg-red-500 text-white' 
//                                         : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                                 }`}
//                                 onClick={() => setDietDropdownOpen(false)}
//                             >
//                                 Latest Diet Plan
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             )}

//             {/* Workout Dropdown - Positioned as overlay */}
//             {workoutDropdownOpen && (
//                 <div 
//                     className="fixed bg-gray-800 rounded-lg shadow-xl border border-gray-600 z-[60] min-w-[250px]"
//                     style={{ 
//                         left: `${dropdownOffset.left}px`, 
//                         top: `${dropdownOffset.top + 170}px` // Adjust based on workout item position
//                     }}
//                 >
//                     <ul className="p-2 space-y-1">
//                         <li>
//                             <Link 
//                                 to="/new-workout" 
//                                 className={`block p-3 rounded-md text-sm font-medium transition-all duration-200 ${
//                                     isActive('/new-workout') 
//                                         ? 'bg-red-500 text-white' 
//                                         : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                                 }`}
//                                 onClick={() => setWorkoutDropdownOpen(false)}
//                             >
//                                 New Workout Plan
//                             </Link>
//                         </li>
//                         <li>
//                             <Link 
//                                 to="/log-workout" 
//                                 className={`block p-3 rounded-md text-sm font-medium transition-all duration-200 ${
//                                     isActive('/log-workout') 
//                                         ? 'bg-red-500 text-white' 
//                                         : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                                 }`}
//                                 onClick={() => setWorkoutDropdownOpen(false)}
//                             >
//                                 Current Workout Plan
//                             </Link>
//                         </li>
//                         <li>
//                             <Link 
//                                 to="/workout-history" 
//                                 className={`block p-3 rounded-md text-sm font-medium transition-all duration-200 ${
//                                     isActive('/workout-history') 
//                                         ? 'bg-red-500 text-white' 
//                                         : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                                 }`}
//                                 onClick={() => setWorkoutDropdownOpen(false)}
//                             >
//                                 Workout History
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Sidebar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import { 
    HomeIcon, 
    LogIcon, 
    CalendarIcon, 
    RewardIcon, 
    UserIcon, 
    XIcon
} from '../../assets/Icons';

// Fallback icons using simple SVG if the custom icons don't exist
const ChevronDownIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const ChevronRightIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const UtensilsIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="20"
    height="30" 
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
    />
  </svg>
);

const DumbbellIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="20"
    height="30"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V7a4 4 0 014-4h2v2H7a2 2 0 00-2 2v10a2 2 0 002 2h2v2H7zM17 3a4 4 0 014 4v10a4 4 0 01-4 4h-2v-2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2V3h2zM8 8h8v8H8V8z"
    />
  </svg>
);

const TrendingUpIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="20"
    height="27"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, navbarHeight = "80px", sidebarWidth = "280px", dropdownOffset = { left: 280, top: 80 } }) => {
    const location = useLocation();
    const [dietDropdownOpen, setDietDropdownOpen] = useState(false);
    const [workoutDropdownOpen, setWorkoutDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile screen
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Close sidebar when clicking on a link (mobile only)
    const handleLinkClick = () => {
        if (isMobile) {
            setIsSidebarOpen(false);
            setDietDropdownOpen(false);
            setWorkoutDropdownOpen(false);
        }
    };

    // Close dropdowns when sidebar closes
    useEffect(() => {
        if (!isSidebarOpen) {
            setDietDropdownOpen(false);
            setWorkoutDropdownOpen(false);
        }
    }, [isSidebarOpen]);

    // Helper to determine if a link is active
    const isActive = (path) => location.pathname.includes(path);

    // Helper to determine if any dropdown items are active
    const isDropdownActive = (paths) => paths.some(path => location.pathname.includes(path));

    const toggleDietDropdown = () => {
        setDietDropdownOpen(!dietDropdownOpen);
        setWorkoutDropdownOpen(false); // Close other dropdown
    };

    const toggleWorkoutDropdown = () => {
        setWorkoutDropdownOpen(!workoutDropdownOpen);
        setDietDropdownOpen(false); // Close other dropdown
    };

    // Calculate dropdown positions for mobile
    const getDropdownStyle = (baseTop) => {
        if (isMobile) {
            return {
                position: 'relative',
                left: 0,
                top: 0,
                width: '100%',
                marginTop: '8px'
            };
        }
        return {
            position: 'fixed',
            left: `${dropdownOffset.left}px`,
            top: `${dropdownOffset.top + baseTop}px`,
            minWidth: '250px'
        };
    };

    return (
        <>
            {/* Backdrop for mobile */}
            {isSidebarOpen && isMobile && (
                <div
                    className="fixed inset-0 bg-black transition-opacity duration-700 ease-out z-40 md:hidden"
                    style={{ opacity: isSidebarOpen ? 0.5 : 0 }}
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <nav
                className={`fixed inset-y-0 left-0 transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:relative md:translate-x-0 w-64 sm:w-72 md:w-64 bg-gray-900 transition-all duration-700 ease-out z-50 flex flex-col justify-between rounded-none md:rounded-md border-r-2 border-red-600 shadow-xl overflow-y-auto`}
                style={{ 
                    paddingLeft: isMobile ? '16px' : '20px',
                    paddingRight: isMobile ? '16px' : '16px',
                    paddingTop: '16px',
                    paddingBottom: '16px'
                }}
            >
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-xl sm:text-2xl font-bold text-red-600 truncate">FIT AI</h1>
                        <Button 
                            variant="ghost" 
                            onClick={() => setIsSidebarOpen(false)} 
                            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-all duration-400 ease-out"
                        >
                            <XIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white"/>
                        </Button>
                    </div>
                    
                    <ul className="space-y-1">
                        {/* Dashboard */}
                        <li>
                            <Link 
                                to="/dashboard" 
                                onClick={handleLinkClick}
                                className={`w-full flex items-center p-3 rounded-lg font-medium sm:font-semibold transition-all duration-500 ease-out text-sm sm:text-base ${
                                    isActive('/dashboard') 
                                        ? 'bg-red-600 text-white shadow-lg' 
                                        : 'text-gray-300 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                                }`}
                            >
                                <HomeIcon className="flex-shrink-0" />
                                <span className="ml-3">Dashboard</span>
                            </Link>
                        </li>

                        {/* Diet Plans Dropdown */}
                        <li className="relative">
                            <button
                                onClick={toggleDietDropdown}
                                className={`w-full flex items-center justify-between p-3 rounded-lg font-medium sm:font-semibold transition-all duration-500 ease-out text-sm sm:text-base ${
                                    isDropdownActive(['/diet', '/generate-diet', '/ask-meal', '/diet-history', '/diet-summary', '/latest-diet']) 
                                        ? 'bg-red-600 text-white shadow-lg' 
                                        : 'text-gray-300 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                                }`}
                            >
                                <div className="flex items-center min-w-0">
                                    <UtensilsIcon className="flex-shrink-0" />
                                    <span className="ml-3 truncate">Diet Plans</span>
                                </div>
                                <div className="flex-shrink-0 ml-2">
                                    {dietDropdownOpen ? (
                                        <ChevronDownIcon className="h-4 w-4" />
                                    ) : (
                                        <ChevronRightIcon className="h-4 w-4" />
                                    )}
                                </div>
                            </button>
                            
                            {/* Mobile dropdown - inline */}
                            {isMobile && dietDropdownOpen && (
                                <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top-2 duration-500 ease-out">
                                    <Link 
                                        to="/generate-diet" 
                                        onClick={handleLinkClick}
                                        className={`block p-2 rounded-md text-sm font-medium transition-all duration-400 ease-out ${
                                            isActive('/generate-diet') 
                                                ? 'bg-red-500 text-white' 
                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                                        }`}
                                    >
                                        Generate a Diet Plan
                                    </Link>
                                    <Link 
                                        to="/ask-meal" 
                                        onClick={handleLinkClick}
                                        className={`block p-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                            isActive('/ask-meal') 
                                                ? 'bg-red-500 text-white' 
                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                                        }`}
                                    >
                                        Ask a Meal
                                    </Link>
                                    <Link 
                                        to="/diet-history" 
                                        onClick={handleLinkClick}
                                        className={`block p-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                            isActive('/diet-history') 
                                                ? 'bg-red-500 text-white' 
                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                                        }`}
                                    >
                                        Diet History
                                    </Link>
                                    <Link 
                                        to="/diet-summary" 
                                        onClick={handleLinkClick}
                                        className={`block p-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                            isActive('/diet-summary') 
                                                ? 'bg-red-500 text-white' 
                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                                        }`}
                                    >
                                        Diet Summary
                                    </Link>
                                    <Link 
                                        to="/latest-diet" 
                                        onClick={handleLinkClick}
                                        className={`block p-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                            isActive('/latest-diet') 
                                                ? 'bg-red-500 text-white' 
                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                                        }`}
                                    >
                                        Latest Diet Plan
                                    </Link>
                                </div>
                            )}
                        </li>

                        {/* Workout Plans Dropdown */}
                        <li className="relative">
                            <button
                                onClick={toggleWorkoutDropdown}
                                className={`w-full flex items-center justify-between p-3 rounded-lg font-medium sm:font-semibold transition-all duration-500 ease-out text-sm sm:text-base ${
                                    isDropdownActive(['/workout', '/new-workout', '/log-workout', '/workout-history']) 
                                        ? 'bg-red-600 text-white shadow-lg' 
                                        : 'text-gray-300 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                                }`}
                            >
                                <div className="flex items-center min-w-0">
                                    <DumbbellIcon className="flex-shrink-0" />
                                    <span className="ml-3 truncate">Workout Plans</span>
                                </div>
                                <div className="flex-shrink-0 ml-2">
                                    {workoutDropdownOpen ? (
                                        <ChevronDownIcon className="h-4 w-4" />
                                    ) : (
                                        <ChevronRightIcon className="h-4 w-4" />
                                    )}
                                </div>
                            </button>
                            
                            {/* Mobile dropdown - inline */}
                            {isMobile && workoutDropdownOpen && (
                                <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top-2 duration-500 ease-out">
                                    <Link 
                                        to="/new-workout" 
                                        onClick={handleLinkClick}
                                        className={`block p-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                            isActive('/new-workout') 
                                                ? 'bg-red-500 text-white' 
                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                                        }`}
                                    >
                                        New Workout Plan
                                    </Link>
                                    <Link 
                                        to="/log-workout" 
                                        onClick={handleLinkClick}
                                        className={`block p-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                            isActive('/log-workout') 
                                                ? 'bg-red-500 text-white' 
                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                                        }`}
                                    >
                                        Current Workout Plan
                                    </Link>
                                    <Link 
                                        to="/workout-history" 
                                        onClick={handleLinkClick}
                                        className={`block p-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                            isActive('/workout-history') 
                                                ? 'bg-red-500 text-white' 
                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                                        }`}
                                    >
                                        Workout History
                                    </Link>
                                </div>
                            )}
                        </li>

                        {/* Progress Tracker */}
                        <li>
                            <Link 
                                to="/progress" 
                                onClick={handleLinkClick}
                                className={`w-full flex items-center p-3 rounded-lg font-medium sm:font-semibold transition-all duration-500 ease-out text-sm sm:text-base ${
                                    isActive('/progress') 
                                        ? 'bg-red-600 text-white shadow-lg' 
                                        : 'text-gray-300 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                                }`}
                            >
                                <TrendingUpIcon className="flex-shrink-0" />
                                <span className="ml-2">Progress Tracker</span>
                            </Link>
                        </li>

                        {/* Previous Logs */}
                        <li>
                            <Link 
                                to="/logs" 
                                onClick={handleLinkClick}
                                className={`w-full flex items-center p-3 rounded-lg font-medium sm:font-semibold transition-all duration-500 ease-out text-sm sm:text-base ${
                                    isActive('/logs') 
                                        ? 'bg-red-600 text-white shadow-lg' 
                                        : 'text-gray-300 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                                }`}
                            >
                                <LogIcon className="flex-shrink-0" />
                                <span className="ml-3">Previous Logs</span>
                            </Link>
                        </li>

                        {/* Calendar */}
                        <li>
                            <Link 
                                to="/calendar" 
                                onClick={handleLinkClick}
                                className={`w-full flex items-center p-3 rounded-lg font-medium sm:font-semibold transition-all duration-500 ease-out text-sm sm:text-base ${
                                    isActive('/calendar') 
                                        ? 'bg-red-600 text-white shadow-lg' 
                                        : 'text-gray-300 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                                }`}
                            >
                                <CalendarIcon className="flex-shrink-0" />
                                <span className="ml-3">Calendar</span>
                            </Link>
                        </li>

                        {/* Rewards */}
                        <li>
                            <Link 
                                to="/rewards" 
                                onClick={handleLinkClick}
                                className={`w-full flex items-center p-3 rounded-lg font-medium sm:font-semibold transition-all duration-500 ease-out text-sm sm:text-base ${
                                    isActive('/rewards') 
                                        ? 'bg-red-600 text-white shadow-lg' 
                                        : 'text-gray-300 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                                }`}
                            >
                                <RewardIcon className="flex-shrink-0" />
                                <span className="ml-3">Reward Points</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Account section at bottom */}
                <div className="border-t border-gray-700 pt-4 mt-4">
                    <Link 
                        to="/account" 
                        onClick={handleLinkClick}
                                                        className={`w-full flex items-center p-3 rounded-lg font-medium sm:font-semibold transition-all duration-500 ease-out text-sm sm:text-base ${
                            isActive('/account') 
                                ? 'bg-red-600 text-white shadow-lg' 
                                : 'text-gray-300 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                        }`}
                    >
                        <UserIcon className="flex-shrink-0" />
                        <span className="ml-3">Account</span>
                    </Link>
                </div>
            </nav>

            {/* Desktop Dropdowns - Positioned as overlay */}
            {!isMobile && dietDropdownOpen && (
                <div 
                    className="fixed bg-gray-800 rounded-lg shadow-xl border border-gray-600 z-[60] min-w-[250px]"
                    style={{ 
                        left: `${dropdownOffset.left}px`, 
                        top: `${dropdownOffset.top + 110}px`
                    }}
                >
                    <ul className="p-2 space-y-1">
                        <li>
                            <Link 
                                to="/generate-diet" 
                                className={`block p-3 rounded-md text-sm font-medium transition-all duration-400 ease-out ${
                                    isActive('/generate-diet') 
                                        ? 'bg-red-500 text-white' 
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                                onClick={() => setDietDropdownOpen(false)}
                            >
                                Generate a Diet Plan
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/ask-meal" 
                                className={`block p-3 rounded-md text-sm font-medium transition-all duration-200 ${
                                    isActive('/ask-meal') 
                                        ? 'bg-red-500 text-white' 
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                                onClick={() => setDietDropdownOpen(false)}
                            >
                                Ask a Meal
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/diet-history" 
                                className={`block p-3 rounded-md text-sm font-medium transition-all duration-200 ${
                                    isActive('/diet-history') 
                                        ? 'bg-red-500 text-white' 
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                                onClick={() => setDietDropdownOpen(false)}
                            >
                                Diet History
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/diet-summary" 
                                className={`block p-3 rounded-md text-sm font-medium transition-all duration-200 ${
                                    isActive('/diet-summary') 
                                        ? 'bg-red-500 text-white' 
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                                onClick={() => setDietDropdownOpen(false)}
                            >
                                Diet Summary
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/latest-diet" 
                                className={`block p-3 rounded-md text-sm font-medium transition-all duration-200 ${
                                    isActive('/latest-diet') 
                                        ? 'bg-red-500 text-white' 
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                                onClick={() => setDietDropdownOpen(false)}
                            >
                                Latest Diet Plan
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

            {/* Desktop Workout Dropdown */}
            {!isMobile && workoutDropdownOpen && (
                <div 
                    className="fixed bg-gray-800 rounded-lg shadow-xl border border-gray-600 z-[60] min-w-[250px]"
                    style={{ 
                        left: `${dropdownOffset.left}px`, 
                        top: `${dropdownOffset.top + 170}px`
                    }}
                >
                    <ul className="p-2 space-y-1">
                        <li>
                            <Link 
                                to="/new-workout" 
                                className={`block p-3 rounded-md text-sm font-medium transition-all duration-200 ${
                                    isActive('/new-workout') 
                                        ? 'bg-red-500 text-white' 
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                                onClick={() => setWorkoutDropdownOpen(false)}
                            >
                                New Workout Plan
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/log-workout" 
                                className={`block p-3 rounded-md text-sm font-medium transition-all duration-200 ${
                                    isActive('/log-workout') 
                                        ? 'bg-red-500 text-white' 
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                                onClick={() => setWorkoutDropdownOpen(false)}
                            >
                                Current Workout Plan
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/workout-history" 
                                className={`block p-3 rounded-md text-sm font-medium transition-all duration-200 ${
                                    isActive('/workout-history') 
                                        ? 'bg-red-500 text-white' 
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                                onClick={() => setWorkoutDropdownOpen(false)}
                            >
                                Workout History
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Sidebar;