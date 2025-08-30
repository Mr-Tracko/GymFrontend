// import React, { useState } from 'react';
// import { Home, User, Briefcase, Users, Mail, Bot, LogIn } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleNavClick = (path) => {
//     // Replace with your routing solution (React Router, etc.)
//     window.location.href = path;
//     setIsMenuOpen(false); 
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-black text-white shadow-md z-100">
//       <div className="max-w-7xl mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Left Section - Logo and Brand */}
//           <div className="flex items-center space-x-3">
//             <img 
//               src="/gymlogo.png" 
//               alt="Gym Logo" 
//               width="56" 
//               height="56" 
//               className="h-14 w-auto" 
//             />
//             <div className="text-2xl font-bold text-red-600">
//               Armour Zone
//             </div>
//           </div>

//           {/* Desktop Navigation - Center Section */}
//           <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
//             <ul className="flex items-center space-x-10">
//               <li>
//                 <a 
//                   className="hover:text-red-500 text-gray-300 transition duration-200 cursor-pointer flex items-center space-x-2"
//                   onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/')}
//                 >
//                   {/* <Home className="w-5 h-5" /> */}
//                   <span>Home</span>
//                 </a>
//               </li>
//               <li>
//                 <a 
//                   className="hover:text-red-500 text-gray-300 transition duration-200 cursor-pointer flex items-center space-x-2"
//                   onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/About')}
//                 >
//                   {/* <User className="w-5 h-5" /> */}
//                   <span>About</span>
//                 </a>
//               </li>
//               <li>
//                 <a 
//                   className="hover:text-red-500 text-gray-300 transition duration-200 cursor-pointer flex items-center space-x-2"
//                   onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/Services')}
//                 >
//                   {/* <Briefcase className="w-5 h-5" /> */}
//                   <span>Services</span>
//                 </a>
//               </li>
//               <li>
//                 <a 
//                   className="hover:text-red-500 text-gray-300 transition duration-200 cursor-pointer flex items-center space-x-2"
//                   onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/Trainers')}
//                 >
//                   {/* <Users className="w-5 h-5" /> */}
//                   <span>Our Trainers</span>
//                 </a>
//               </li>
//               <li>
//                 <a 
//                   className="hover:text-red-500 text-gray-300 transition duration-200 cursor-pointer flex items-center space-x-2"
//                   onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/Contact')}
//                 >
//                   {/* <Mail className="w-5 h-5" /> */}
//                   <span>Contact Us</span>
//                 </a>
//               </li>
//               <li>
//                 <a 
//                   href="https://gym-delta-wine.vercel.app" 
//                   className="hover:text-red-500 text-gray-300 transition duration-200 flex items-center space-x-2"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {/* <Bot className="w-5 h-5" /> */}
//                   <span>Use AI</span>
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Right Section - Desktop Login Button */}
//           <button className="hidden md:flex items-center space-x-2 bg-red-700 hover:bg-red-800 text-white hover:text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 border border-red-700 hover:border-red-800">
//             {/* <LogIn className="w-5 h-5" /> */}
//             <span>LogOut</span>
//           </button>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             <span 
//               className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
//                 isMenuOpen ? 'rotate-45 translate-y-2' : ''
//               }`}
//             ></span>
//             <span 
//               className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
//                 isMenuOpen ? 'opacity-0' : ''
//               }`}
//             ></span>
//             <span 
//               className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
//                 isMenuOpen ? '-rotate-45 -translate-y-2' : ''
//               }`}
//             ></span>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div 
//           className={`lg:hidden transition-all duration-300 ease-in-out ${
//             isMenuOpen 
//               ? 'max-h-96 opacity-100 mt-4' 
//               : 'max-h-0 opacity-0 overflow-hidden'
//           }`}
//         >
//           <div className="bg-gray-900 rounded-lg p-4">
//             <ul className="flex flex-col space-y-4">
//               <li>
//                 <a 
//                   className="block flex items-center space-x-2 hover:text-red-500 text-gray-300 transition duration-200 cursor-pointer py-2 px-3 rounded hover:bg-gray-800"
//                   onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/')}
//                 >
//                   <Home className="w-5 h-5" />
//                   <span>Home</span>
//                 </a>
//               </li>
//               <li>
//                 <a 
//                   className="block flex items-center space-x-2 hover:text-red-500 text-gray-300 transition duration-200 cursor-pointer py-2 px-3 rounded hover:bg-gray-800"
//                   onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/About')}
//                 >
//                   <User className="w-5 h-5" />
//                   <span>About</span>
//                 </a>
//               </li>
//               <li>
//                 <a 
//                   className="block flex items-center space-x-2 hover:text-red-500 text-gray-300 transition duration-200 cursor-pointer py-2 px-3 rounded hover:bg-gray-800"
//                   onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/Services')}
//                 >
//                   <Briefcase className="w-5 h-5" />
//                   <span>Services</span>
//                 </a>
//               </li>
//               <li>
//                 <a 
//                   className="block flex items-center space-x-2 hover:text-red-500 text-gray-300 transition duration-200 cursor-pointer py-2 px-3 rounded hover:bg-gray-800"
//                   onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/Trainers')}
//                 >
//                   <Users className="w-5 h-5" />
//                   <span>Our Trainers</span>
//                 </a>
//               </li>
//               <li>
//                 <a 
//                   className="block flex items-center space-x-2 hover:text-red-500 text-gray-300 transition duration-200 cursor-pointer py-2 px-3 rounded hover:bg-gray-800"
//                   onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/Contact')}
//                 >
//                   <Mail className="w-5 h-5" />
//                   <span>Contact Us</span>
//                 </a>
//               </li>
//               <li>
//                 <a 
//                   href="https://gym-delta-wine.vercel.app" 
//                   className="block flex items-center space-x-2 hover:text-red-500 text-gray-300 transition duration-200 py-2 px-3 rounded hover:bg-gray-800"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   <Bot className="w-5 h-5" />
//                   <span>Use AI</span>
//                 </a>
//               </li>
//               <li className="pt-2 border-t border-gray-700">
//                 <button 
//                   className="w-full pd-5 flex items-center justify-center space-x-2 bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-red-700 hover:border-red-800"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   <LogIn className="w-5 h-5" />
//                   <span>LogOut</span>
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Users, Mail, Bot, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile screen
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleNavClick = (path) => {
    // Replace with your routing solution (React Router, etc.)
    window.location.href = path;
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isMenuOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black transition-opacity duration-500 ease-out z-40 lg:hidden"
          style={{ opacity: isMenuOpen ? 0.5 : 0 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav className="bg-black text-white shadow-md z-50 relative">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Section - Logo and Brand */}
            <div className="flex items-center space-x-3">
              <img 
                src="/gymlogo.png" 
                alt="Gym Logo" 
                width="56" 
                height="56" 
                className="h-14 w-auto" 
              />
              <div className="text-2xl font-bold text-red-600">
                Armour Zone
              </div>
            </div>

            {/* Desktop Navigation - Center Section */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
              <ul className="flex items-center space-x-10">
                <li>
                  <a 
                    className="hover:text-red-500 text-gray-300 transition duration-300 cursor-pointer flex items-center space-x-2"
                    onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/')}
                  >
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:text-red-500 text-gray-300 transition duration-300 cursor-pointer flex items-center space-x-2"
                    onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/About')}
                  >
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:text-red-500 text-gray-300 transition duration-300 cursor-pointer flex items-center space-x-2"
                    onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/Services')}
                  >
                    <span>Services</span>
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:text-red-500 text-gray-300 transition duration-300 cursor-pointer flex items-center space-x-2"
                    onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/Trainers')}
                  >
                    <span>Our Trainers</span>
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:text-red-500 text-gray-300 transition duration-300 cursor-pointer flex items-center space-x-2"
                    onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/Contact')}
                  >
                    <span>Contact Us</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://gym-delta-wine.vercel.app" 
                    className="hover:text-red-500 text-gray-300 transition duration-300 flex items-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Use AI</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Section - Desktop Login Button */}
            <button className="hidden md:flex items-center space-x-2 bg-red-700 hover:bg-red-800 text-white hover:text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 border border-red-700 hover:border-red-800">
              <span>LogOut</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span 
                className={`block w-6 h-0.5 bg-white transition-all duration-500 ease-out ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span 
                className={`block w-6 h-0.5 bg-white transition-all duration-500 ease-out ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span 
                className={`block w-6 h-0.5 bg-white transition-all duration-500 ease-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide from Right */}
        <div 
          className={`lg:hidden fixed top-0 right-0 h-full w-80 sm:w-96 bg-black transform transition-transform duration-700 ease-out z-50 shadow-2xl ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close button inside mobile menu */}
          <div className="flex justify-between items-center p-6 border-b border-gray-700">
            <div className="text-xl font-bold text-red-600">
              Menu
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-all duration-400 ease-out"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="p-6 h-full overflow-y-auto">
            <ul className="flex flex-col space-y-2">
              <li>
                <a 
                  className="block flex items-center space-x-3 hover:text-red-500 text-gray-300 transition-all duration-400 ease-out cursor-pointer py-4 px-4 rounded-lg hover:bg-gray-800 active:bg-gray-700"
                  onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/')}
                >
                  <Home className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Home</span>
                </a>
              </li>
              <li>
                <a 
                  className="block flex items-center space-x-3 hover:text-red-500 text-gray-300 transition-all duration-400 ease-out cursor-pointer py-4 px-4 rounded-lg hover:bg-gray-800 active:bg-gray-700"
                  onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/About')}
                >
                  <User className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">About</span>
                </a>
              </li>
              <li>
                <a 
                  className="block flex items-center space-x-3 hover:text-red-500 text-gray-300 transition-all duration-400 ease-out cursor-pointer py-4 px-4 rounded-lg hover:bg-gray-800 active:bg-gray-700"
                  onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/Services')}
                >
                  <Briefcase className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Services</span>
                </a>
              </li>
              <li>
                <a 
                  className="block flex items-center space-x-3 hover:text-red-500 text-gray-300 transition-all duration-400 ease-out cursor-pointer py-4 px-4 rounded-lg hover:bg-gray-800 active:bg-gray-700"
                  onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/Trainers')}
                >
                  <Users className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Our Trainers</span>
                </a>
              </li>
              <li>
                <a 
                  className="block flex items-center space-x-3 hover:text-red-500 text-gray-300 transition-all duration-400 ease-out cursor-pointer py-4 px-4 rounded-lg hover:bg-gray-800 active:bg-gray-700"
                  onClick={() => handleNavClick('https://gym-project-tan-theta.vercel.app/Contact')}
                >
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Contact Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://gym-delta-wine.vercel.app" 
                  className="block flex items-center space-x-3 hover:text-red-500 text-gray-300 transition-all duration-400 ease-out py-4 px-4 rounded-lg hover:bg-gray-800 active:bg-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Bot className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Use AI</span>
                </a>
              </li>
              
              {/* Separator and Logout Button */}
              <li className="pt-6 mt-6 border-t border-gray-700">
                <button 
                  className="w-full flex items-center justify-center space-x-3 bg-red-700 hover:bg-red-800 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-400 ease-out border border-red-700 hover:border-red-800 active:bg-red-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogIn className="w-6 h-6" />
                  <span className="text-lg">LogOut</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;