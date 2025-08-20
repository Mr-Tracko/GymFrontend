import React from 'react';

const DailyReportView = ({ selectedCalendarDate, dailyReport }) => {
    if (!selectedCalendarDate || !dailyReport) {
        return (
            <div className="mt-6 p-4 bg-gray-700 rounded-xl shadow-inner">
                <p className="text-gray-300">Click on a date in the calendar to view its report.</p>
            </div>
        );
    }

    return (
        <div className="mt-6 p-4 bg-gray-700 rounded-xl shadow-inner">
            <h4 className="text-lg font-bold text-red-300 mb-2">Report for {selectedCalendarDate}</h4>
            <p className="text-gray-200"><strong>Workout:</strong> {dailyReport.workout}</p>
            <p className="text-gray-200"><strong>Meals:</strong> {dailyReport.meals.join(', ')}</p>
        </div>
    );
};

export default DailyReportView;
