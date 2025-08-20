// import React from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
// import Button from '../components/ui/Button';
// import Input from '../components/ui/Input';
// import { CheckIcon } from '../assets/Icons';

// const DashboardPage = ({ messages, input, setInput, isLoading, handleSendMessage, handleKeyPress, messagesEndRef, analytics }) => {
//     return (
//         <div className="flex flex-col h-full">
//             <Card className="mb-6">
//                 <CardHeader>
//                     <CardTitle>Your Weekly Progress</CardTitle>
//                     <CardDescription>Overview of your fitness journey.</CardDescription>
//                 </CardHeader>
//                 <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {analytics ? (
//                         <>
//                             <div className="p-4 bg-gray-700 rounded-lg shadow-inner">
//                                 <h4 className="text-md font-semibold text-red-300">Weight Change</h4>
//                                 <p className="text-xl font-bold text-white">{analytics?.weightChange || 0} kg</p>
//                                 <span className={`text-sm ${analytics?.weightChange < 0 ? 'text-green-400' : 'text-red-400'}`}>
//                                     {analytics?.weightChange < 0 ? '⬇️' : '⬆️'} This Week
//                                 </span>
//                             </div>
//                             <div className="p-4 bg-gray-700 rounded-lg shadow-inner">
//                                 <h4 className="text-md font-semibold text-red-300">Muscle Gain</h4>
//                                 <p className="text-xl font-bold text-white">{analytics?.muscleGain || 0} cm</p>
//                                 <span className="text-sm text-green-400">💪 Bicep Growth</span>
//                             </div>
//                             <div className="p-4 bg-gray-700 rounded-lg shadow-inner">
//                                 <h4 className="text-md font-semibold text-red-300">Consistency</h4>
//                                 <p className="text-xl font-bold text-white">{analytics?.consistency || 'N/A'}</p>
//                                 <span className="text-sm text-blue-400">🎯 Adherence Score</span>
//                             </div>
//                             <div className="p-4 bg-gray-700 rounded-lg shadow-inner col-span-full">
//                                 <h4 className="text-md font-semibold text-red-300 mb-2">Areas for Improvement</h4>
//                                 <ul className="list-disc list-inside text-gray-200">
//                                     {analytics?.areasForImprovement && Array.isArray(analytics.areasForImprovement) ? (
//                                         analytics.areasForImprovement.map((area, idx) => (
//                                             <li key={idx}>{area}</li>
//                                         ))
//                                     ) : (
//                                         <li>No specific areas for improvement noted this week.</li>
//                                     )}
//                                 </ul>
//                                 <p className="text-sm text-gray-400 mt-2">
//                                     <span className="font-bold text-red-400">Tip:</span> If you don't follow the plan, the AI will adjust your next week's plan to help you get back on track!
//                                 </p>
//                             </div>
//                         </>
//                     ) : (
//                         <p className="text-gray-400 col-span-full">Loading analytics...</p>
//                     )}
//                 </CardContent>
//             </Card>
//             <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900 border-x-2 border-red-600 rounded-b-lg scrollbar-hide">
//                 {messages.map((message, index) => (
//                     <div
//                         key={index}
//                         className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//                     >
//                         <div
//                             className={`p-3 max-w-[70%] rounded-xl shadow-md ${
//                                 message.sender === 'user'
//                                     ? 'bg-red-600 text-white rounded-tr-none'
//                                     : 'bg-gray-800 text-white rounded-tl-none'
//                             }`}
//                         >
//                             <p>{message.text}</p>
//                         </div>
//                     </div>
//                 ))}
//                 {isLoading && (
//                     <div className="flex justify-start">
//                         <div className="p-3 bg-gray-800 text-white rounded-xl rounded-tl-none shadow-md">
//                             <div className="flex items-center space-x-2">
//                                 <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-red-600"></div>
//                                 <span className="text-sm text-gray-400">Thinking...</span>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 <div ref={messagesEndRef} />
//             </div>
//             <div className="flex items-center p-4 bg-gray-900 border-t-2 border-red-600 rounded-b-lg mt-4">
//                 <Input
//                     type="text"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     onKeyPress={handleKeyPress}
//                     placeholder="Ask me to log a workout, generate a plan, or check your progress..."
//                     className="flex-1"
//                 />
//                 <Button
//                     onClick={handleSendMessage}
//                     className="ml-3"
//                     disabled={isLoading}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M5 13l4 4L19 7"
//                         />
//                     </svg>
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default DashboardPage;

import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { CheckIcon } from '../assets/Icons';

const DashboardPage = ({ messages, input, setInput, isLoading, handleSendMessage, handleKeyPress, messagesEndRef, analytics }) => {
    // State for dropdown only
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        // Don't sync with parent on every keystroke - this causes the input issue
    };

    // Handle sending message - sync only when sending
    const handleLocalSendMessage = useCallback(() => {
        if (inputValue.trim()) {
            setInput(inputValue);
            // Use setTimeout to ensure setInput completes before calling handleSendMessage
            setTimeout(() => {
                handleSendMessage();
            }, 0);
            // Clear only our local input
            setInputValue('');
        }
    }, [inputValue, setInput, handleSendMessage]);

    // Handle key press
    const handleLocalKeyPress = useCallback((e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent newline in textarea
            handleLocalSendMessage();
        }
    }, [handleLocalSendMessage]);

    return (
        <div className="flex flex-col h-full">
            {/* Weekly Progress Dropdown */}
            <div className="mb-4">
                <div 
                    onClick={toggleDropdown}
                    className="flex items-center justify-between p-4 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-750 transition-colors"
                >
                    <h3 className="text-lg font-semibold text-white">Your Weekly Progress</h3>
                    <svg 
                        className={`w-5 h-5 text-gray-400 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                
                {isDropdownOpen && (
                    <Card className="mt-2 border-gray-700">
                        <CardHeader>
                            <CardDescription>Overview of your fitness journey.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {analytics ? (
                                <>
                                    <div className="p-4 bg-gray-700 rounded-lg shadow-inner">
                                        <h4 className="text-md font-semibold text-red-300">Weight Change</h4>
                                        <p className="text-xl font-bold text-white">{analytics?.weightChange || 0} kg</p>
                                        <span className={`text-sm ${analytics?.weightChange < 0 ? 'text-green-400' : 'text-red-400'}`}>
                                            {analytics?.weightChange < 0 ? '⬇️' : '⬆️'} This Week
                                        </span>
                                    </div>
                                    <div className="p-4 bg-gray-700 rounded-lg shadow-inner">
                                        <h4 className="text-md font-semibold text-red-300">Muscle Gain</h4>
                                        <p className="text-xl font-bold text-white">{analytics?.muscleGain || 0} cm</p>
                                        <span className="text-sm text-green-400">💪 Bicep Growth</span>
                                    </div>
                                    <div className="p-4 bg-gray-700 rounded-lg shadow-inner">
                                        <h4 className="text-md font-semibold text-red-300">Consistency</h4>
                                        <p className="text-xl font-bold text-white">{analytics?.consistency || 'N/A'}</p>
                                        <span className="text-sm text-blue-400">🎯 Adherence Score</span>
                                    </div>
                                    <div className="p-4 bg-gray-700 rounded-lg shadow-inner col-span-full">
                                        <h4 className="text-md font-semibold text-red-300 mb-2">Areas for Improvement</h4>
                                        <ul className="list-disc list-inside text-gray-200">
                                            {analytics?.areasForImprovement && Array.isArray(analytics.areasForImprovement) ? (
                                                analytics.areasForImprovement.map((area, idx) => (
                                                    <li key={idx}>{area}</li>
                                                ))
                                            ) : (
                                                <li>No specific areas for improvement noted this week.</li>
                                            )}
                                        </ul>
                                        <p className="text-sm text-gray-400 mt-2">
                                            <span className="font-bold text-red-400">Tip:</span> If you don't follow the plan, the AI will adjust your next week's plan to help you get back on track!
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <p className="text-gray-400 col-span-full">Loading analytics...</p>
                            )}
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900 border-x-2 border-red-600 rounded-t-lg scrollbar-hide">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`p-3 max-w-[70%] rounded-xl shadow-md ${
                                message.sender === 'user'
                                    ? 'bg-red-600 text-white rounded-tr-none'
                                    : 'bg-gray-800 text-white rounded-tl-none'
                            }`}
                        >
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="p-3 bg-gray-800 text-white rounded-xl rounded-tl-none shadow-md">
                            <div className="flex items-center space-x-2">
                                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-red-600"></div>
                                <span className="text-sm text-gray-400">Thinking...</span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area - Combined working input typing + working messaging */}
            <div className="flex items-center p-4 bg-gray-900 border-t-2 border-red-600 rounded-b-lg">
                <textarea
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleLocalKeyPress}
                    placeholder="Ask me to log a workout, generate a plan, or check your progress..."
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                    rows="1"
                    style={{minHeight: '40px'}}
                    disabled={isLoading}
                />
                <Button
                    onClick={handleLocalSendMessage}
                    className="ml-3"
                    disabled={isLoading || !inputValue.trim()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </Button>
            </div>
        </div>
    );
};

export default DashboardPage;