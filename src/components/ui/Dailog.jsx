import React from 'react';

const Dialog = ({ children, open, onOpenChange }) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative w-full max-w-md rounded-lg border border-gray-700 bg-gray-900 p-6 shadow-lg">
                {children}
            </div>
        </div>
    );
};

const DialogContent = ({ children, className = '' }) => (
    <div className={className}>{children}</div>
);

const DialogHeader = ({ children, className = '' }) => (
    <div className={`flex flex-col space-y-1.5 text-center sm:text-left mb-4 ${className}`}>
        {children}
    </div>
);

const DialogTitle = ({ children, className = '' }) => (
    <h3 className={`text-lg font-semibold leading-none tracking-tight text-red-600 ${className}`}>
        {children}
    </h3>
);

const DialogDescription = ({ children, className = '' }) => (
    <p className={`text-sm text-gray-400 ${className}`}>
        {children}
    </p>
);

const DialogFooter = ({ children, className = '' }) => (
    <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4 ${className}`}>
        {children}
    </div>
);

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter };
