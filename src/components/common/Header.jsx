import React from 'react';
import Button from '../ui/Button';
import { MenuIcon } from '../../assets/Icons';

const Header = ({ onMenuClick, title }) => {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-900 border-b-2 border-red-600 rounded-t-lg shadow-lg md:hidden mb-4">
            <Button variant="ghost" onClick={onMenuClick} className="p-2">
                <MenuIcon className="h-6 w-6 text-white" />
            </Button>
            <h1 className="text-xl font-bold text-red-600">{title}</h1>
            <div className="flex space-x-2">
                <span className="text-sm font-semibold text-green-500">Online</span>
            </div>
        </header>
    );
};

export default Header;
