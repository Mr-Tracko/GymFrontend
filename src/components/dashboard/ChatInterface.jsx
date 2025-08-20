import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const ChatInterface = ({ messages, input, setInput, isLoading, handleSendMessage, handleKeyPress, messagesEndRef }) => {
    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900 border-x-2 border-red-600 rounded-b-lg scrollbar-hide">
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
            <div className="flex items-center p-4 bg-gray-900 border-t-2 border-red-600 rounded-b-lg mt-4">
                <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me to log a workout, generate a plan, or check your progress..."
                    className="flex-1"
                />
                <Button
                    onClick={handleSendMessage}
                    className="ml-3"
                    disabled={isLoading}
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

export default ChatInterface;
