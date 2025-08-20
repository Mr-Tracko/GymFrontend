import React from 'react';

const Card = ({ children, className = '' }) => (
    <div className={`rounded-xl border border-gray-700 bg-gray-800 text-white shadow-lg ${className}`}>
        {children}
    </div>
);

const CardHeader = ({ children, className = '' }) => (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
        {children}
    </div>
);

const CardTitle = ({ children, className = '' }) => (
    <h3 className={`text-2xl font-semibold leading-none tracking-tight text-red-600 ${className}`}>
        {children}
    </h3>
);

const CardDescription = ({ children, className = '' }) => (
    <p className={`text-sm text-gray-400 ${className}`}>
        {children}
    </p>
);

const CardContent = ({ children, className = '' }) => (
    <div className={`p-6 pt-0 ${className}`}>
        {children}
    </div>
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
