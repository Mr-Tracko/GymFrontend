import React from 'react';

const Textarea = ({ placeholder, value, onChange, className = '' }) => (
    <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`flex min-h-[80px] w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 ${className}`}
    />
);

export default Textarea;
