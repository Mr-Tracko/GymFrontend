import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';

const LogsPage = ({ logs }) => {
    return (
        <div className="p-6 bg-gray-900 rounded-lg shadow-lg overflow-y-auto">
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Previous 7 Days Logs</CardTitle>
                    <CardDescription>Your recent diet and workout activities.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="bg-gray-700 p-4 rounded-xl shadow-inner">
                        <h3 className="text-xl font-semibold text-red-300 mb-2">Workout History</h3>
                        <ul className="space-y-2 text-gray-300">
                            {logs.workout.length > 0 ? (
                                logs.workout.map((log, index) => (
                                    <li key={index} className="flex justify-between items-center border-b border-gray-600 py-1 last:border-b-0">
                                        <span>{log.date}: {log.workout}</span>
                                    </li>
                                ))
                            ) : (
                                <li>No workout logs found for the last 7 days.</li>
                            )}
                        </ul>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-xl shadow-inner">
                        <h3 className="text-xl font-semibold text-red-300 mb-2">Diet History</h3>
                        <ul className="space-y-2 text-gray-300">
                            {logs.diet.length > 0 ? (
                                logs.diet.map((log, index) => (
                                    <li key={index} className="flex justify-between items-center border-b border-gray-600 py-1 last:border-b-0">
                                        <span>{log.date}: {log.meal}</span>
                                    </li>
                                ))
                            ) : (
                                <li>No diet logs found for the last 7 days.</li>
                            )}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default LogsPage;
