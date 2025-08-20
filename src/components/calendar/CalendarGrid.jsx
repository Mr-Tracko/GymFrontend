import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import Button from '../ui/Button';

const CalendarGrid = ({ planCreationDate, calendarData, handleDayClick }) => {
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

    return (
        <Card className="p-4">
            <CardHeader>
                <CardTitle className="text-red-400">
                    {today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </CardTitle>
                <CardDescription>Click a highlighted date for daily report.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="font-semibold text-gray-400">{day}</div>
                    ))}
                    {days.map((day, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            className={`p-2 rounded-lg ${day ? 'bg-gray-700' : ''} ${
                                isPlanDay(day) ? 'bg-red-600 text-white hover:bg-red-700' : 'hover:bg-gray-700'
                            }`}
                            onClick={() => handleDayClick(day)}
                            disabled={!day}
                        >
                            {day}
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default CalendarGrid;
