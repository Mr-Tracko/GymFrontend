import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, className = '' }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 ${className}`}
    />
);

export default Input;