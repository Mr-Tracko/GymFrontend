import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';

// REMOVED: props related to daily reports
const CalendarPage = ({ planCreationDate }) => {
    const today = new Date();
    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const totalDays = daysInMonth(currentYear, currentMonth);
    const startDay = firstDayOfMonth(currentYear, currentMonth);

    const days = [];
    for (let i = 0; i < startDay; i++) days.push(null);
    for (let i = 1; i <= totalDays; i++) days.push(i);

    const isPlanDay = (day) => {
        if (!day || !planCreationDate) return false;
        const date = new Date(currentYear, currentMonth, day);
        const planDate = new Date(planCreationDate);
        const diffTime = Math.abs(date.getTime() - planDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return date >= planDate && diffDays <= 7;
    };

    // REMOVED: handleDayClick function

    return (
        <div className="p-6 bg-gray-900 rounded-lg shadow-lg overflow-y-auto">
            <h2 className="text-2xl font-bold text-red-600 mb-6">Calendar</h2>
            <Card className="p-4">
                <CardHeader>
                    <CardTitle className="text-red-400">
                        {today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </CardTitle>
                    {/* MODIFIED: CardDescription */}
                    <CardDescription>Your weekly plan is highlighted below.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-7 gap-2 text-center text-sm">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className="font-semibold text-gray-400">{day}</div>
                        ))}
                        {days.map((day, index) => (
                            // MODIFIED: Removed onClick and made it non-interactive
                            <div
                                key={index}
                                className={`p-2 rounded-lg flex items-center justify-center ${day ? 'bg-gray-700' : ''} ${
                                    isPlanDay(day) ? 'bg-red-600 text-white' : ''
                                }`}
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                    {/* REMOVED: Conditional rendering block for daily report */}
                </CardContent>
            </Card>
        </div>
    );
};

export default CalendarPage;