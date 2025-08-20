// import React, { useState, useEffect } from 'react';

// const ComingSoonPage = ({ featureName = "This Feature", estimatedDate = "Soon" }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [dots, setDots] = useState('');

//   useEffect(() => {
//     setIsVisible(true);
    
//     // Animated dots effect
//     const interval = setInterval(() => {
//       setDots(prev => prev.length >= 3 ? '' : prev + '.');
//     }, 500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black flex items-center justify-center p-4 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-0 -left-4 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
//         <div className="absolute top-0 -right-4 w-72 h-72 bg-red-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
//       </div>

//       {/* Grid Pattern Overlay */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="h-full w-full bg-grid-pattern bg-[size:50px_50px]"></div>
//       </div>

//       {/* Main Content */}
//       <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 transform ${
//         isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//       }`}>
        
//         {/* Icon/Logo Area */}
//         <div className="mb-8">
//           <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-full shadow-2xl mb-6 border-2 border-red-400">
//             <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.674-2.153-1.414-3.414l5-5A2 2 0 009 11.172V5l-1-1z" />
//             </svg>
//           </div>
//         </div>

//         {/* Main Heading */}
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent leading-tight font-black tracking-tight">
//           FEATURE
//         </h1>
        
//         <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent leading-tight font-black">
//           WILL BE ADDED SOON
//         </h2>

//         {/* Feature Name */}
//         <div className="mb-8">
//           <p className="text-xl md:text-2xl text-gray-300 mb-2">We're building something powerful for</p>
//           <h3 className="text-2xl md:text-4xl font-bold text-red-400 mb-4 uppercase tracking-wide">
//             {featureName}
//           </h3>
//         </div>

//         {/* Status Message */}
//         <div className="mb-12">
//           <div className="inline-flex items-center px-8 py-4 bg-black/60 backdrop-blur-sm border-2 border-red-600/50 rounded-full shadow-lg shadow-red-600/20">
//             <div className="flex items-center space-x-3">
//               <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
//               <span className="text-red-300 font-bold text-lg uppercase tracking-wider">
//                 Under Development{dots}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Progress Indicator */}
//         <div className="mb-12">
//           <div className="max-w-md mx-auto">
//             <div className="flex justify-between text-sm text-gray-300 mb-3 font-bold uppercase tracking-wide">
//               <span>Build Progress</span>
//               <span>85%</span>
//             </div>
//             <div className="w-full bg-gray-900 rounded-full h-3 border border-red-600/30">
//               <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-red-500/30 relative overflow-hidden"
//                    style={{ width: '85%' }}>
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Expected Timeline */}
//         <div className="mb-12">
//           <div className="inline-flex items-center space-x-2 text-gray-300 bg-black/40 px-6 py-3 rounded-full border border-red-600/30">
//             <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <span className="font-bold uppercase tracking-wide">Launch Expected: {estimatedDate}</span>
//           </div>
//         </div>

//         {/* Feature Highlights */}
//         <div className="grid md:grid-cols-3 gap-6 mb-12">
//           <div className="p-6 bg-black/40 backdrop-blur-sm border-2 border-red-600/30 rounded-xl hover:bg-black/60 hover:border-red-500/50 transition-all duration-300 shadow-lg shadow-red-600/10">
//             <div className="w-12 h-12 bg-red-600/30 rounded-lg flex items-center justify-center mb-4 mx-auto border border-red-500/50">
//               <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//             </div>
//             <h3 className="text-white font-bold mb-2 uppercase tracking-wide">POWERFUL</h3>
//             <p className="text-gray-400 text-sm">Built for maximum performance and results</p>
//           </div>

//           <div className="p-6 bg-black/40 backdrop-blur-sm border-2 border-red-600/30 rounded-xl hover:bg-black/60 hover:border-red-500/50 transition-all duration-300 shadow-lg shadow-red-600/10">
//             <div className="w-12 h-12 bg-red-600/30 rounded-lg flex items-center justify-center mb-4 mx-auto border border-red-500/50">
//               <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <h3 className="text-white font-bold mb-2 uppercase tracking-wide">PROVEN</h3>
//             <p className="text-gray-400 text-sm">Tested methods for guaranteed success</p>
//           </div>

//           <div className="p-6 bg-black/40 backdrop-blur-sm border-2 border-red-600/30 rounded-xl hover:bg-black/60 hover:border-red-500/50 transition-all duration-300 shadow-lg shadow-red-600/10">
//             <div className="w-12 h-12 bg-red-600/30 rounded-lg flex items-center justify-center mb-4 mx-auto border border-red-500/50">
//               <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.674-2.153-1.414-3.414l5-5A2 2 0 009 11.172V5l-1-1z" />
//               </svg>
//             </div>
//             <h3 className="text-white font-bold mb-2 uppercase tracking-wide">ELITE</h3>
//             <p className="text-gray-400 text-sm">Premium features for serious athletes</p>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <p className="text-gray-300 mb-8 text-lg font-medium">
//             Get ready to TRANSFORM your fitness journey with this game-changing feature!
//           </p>
          
//         </div>
//       </div>

//       {/* Bottom Decoration */}
//       <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-lg shadow-red-500/50"></div>
//     </div>
//   );
// };

// export default ComingSoonPage;

import React, { useState, useEffect } from 'react';

const ComingSoonPage = ({ featureName = "This Feature", estimatedDate = "Soon" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dots, setDots] = useState('');

  useEffect(() => {
    setIsVisible(true);
    
    // Animated dots effect
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500 to-red-700 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-white to-gray-300 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-red-600 to-black rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Glowing Icon */}
        <div className="mb-12">
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute inset-0 w-28 h-28 bg-gradient-to-r from-red-500 to-red-700 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="relative w-20 h-20 bg-gradient-to-br from-red-500 via-red-600 to-black rounded-full shadow-2xl flex items-center justify-center border-2 border-red-300/50">
              <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Heading with Glowing Text */}
        <div className="mb-8 space-y-4">
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-red-300 to-red-500 bg-clip-text text-transparent leading-tight tracking-tight drop-shadow-2xl">
            COMING
          </h1>
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-red-500 via-white to-red-300 bg-clip-text text-transparent leading-tight">
            SOON
          </h2>
        </div>

        {/* Feature Name with Neon Effect */}
        <div className="mb-10">
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">Introducing the next generation of</p>
          <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-white to-red-400 bg-clip-text uppercase tracking-wide drop-shadow-lg">
            {featureName}
          </h3>
        </div>

        {/* Status Badge */}
        <div className="mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-black/60 backdrop-blur-lg border border-red-400/30 rounded-2xl shadow-xl shadow-red-500/20 hover:shadow-red-500/30 transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-ping absolute"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <span className="text-red-300 font-semibold text-lg tracking-wide">
                In Development{dots}
              </span>
            </div>
          </div>
        </div>

        {/* Futuristic Progress Bar */}
        <div className="mb-12">
          <div className="max-w-lg mx-auto">
            <div className="flex justify-between text-gray-300 mb-4 font-medium">
              <span className="text-red-300">Progress</span>
              <span className="text-white">92%</span>
            </div>
            <div className="relative">
              <div className="w-full bg-black/50 rounded-full h-4 border border-gray-700/50 overflow-hidden">
                <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 h-4 rounded-full transition-all duration-2000 ease-out relative overflow-hidden shadow-lg shadow-red-500/50"
                     style={{ width: '92%' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-200/40 to-transparent animate-pulse animation-delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-3 text-gray-300 bg-black/40 backdrop-blur-lg px-6 py-3 rounded-full border border-red-400/30 shadow-lg shadow-red-500/20">
            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Expected Launch: {estimatedDate}</span>
          </div>
        </div>

        {/* Feature Cards with Glass Morphism */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { title: 'INNOVATIVE', desc: 'Cutting-edge technology at your fingertips', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
            { title: 'SEAMLESS', desc: 'Effortless integration with your workflow', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
            { title: 'POWERFUL', desc: 'Built for performance and scalability', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.674-2.153-1.414-3.414l5-5A2 2 0 009 11.172V5l-1-1z' }
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-red-400/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/10">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-white/10 rounded-xl flex items-center justify-center mb-6 mx-auto border border-red-400/30">
                  <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-white font-bold mb-3 text-lg tracking-wide">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-300 mb-10 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Experience the future of innovation. Be among the first to witness this revolutionary feature.
          </p>
          
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-white to-red-500 shadow-lg shadow-red-500/50"></div>
    </div>
  );
};

export default ComingSoonPage;