import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'default', disabled = false, type = 'button' }) => {
    const baseStyle = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    const variants = {
        default: 'bg-red-600 text-white hover:bg-red-700',
        outline: 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
        ghost: 'hover:bg-gray-800 hover:text-white',
    };
    return (
        <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className} p-3`} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;