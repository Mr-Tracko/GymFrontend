import React from 'react';
import { Card } from '../ui/Card';

const AnalyticsCard = ({ title, value, subtext, icon, color }) => {
    return (
        <Card className="p-4 bg-gray-700 rounded-lg shadow-inner">
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="text-md font-semibold text-red-300">{title}</h4>
                    <p className="text-xl font-bold text-white">{value}</p>
                </div>
                {icon && <div className={`text-2xl ${color}`}>{icon}</div>}
            </div>
            {subtext && <span className={`text-sm mt-1 block ${color}`}>{subtext}</span>}
        </Card>
    );
};

export default AnalyticsCard;
