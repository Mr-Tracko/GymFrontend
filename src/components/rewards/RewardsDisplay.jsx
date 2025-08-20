import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { CheckIcon } from '../../assets/icons/Icons';

const RewardsDisplay = ({ rewards }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Reward Points & Achievements</CardTitle>
                <CardDescription>Celebrate your progress!</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <div className="bg-gray-700 p-6 rounded-xl shadow-inner mb-4">
                    <h3 className="text-5xl font-extrabold text-red-600 mb-2">{rewards.points}</h3>
                    <p className="text-gray-300 text-lg">Total Reward Points</p>
                </div>
                <h4 className="text-xl font-semibold text-red-300 mb-3">Your Achievements</h4>
                <ul className="space-y-3">
                    {rewards.achievements.length > 0 ? (
                        rewards.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-center bg-gray-700 p-3 rounded-lg shadow-sm">
                                <CheckIcon className="mr-3" />
                                <div>
                                    <p className="font-semibold text-white">{achievement.name}</p>
                                    <p className="text-sm text-gray-300">{achievement.description}</p>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li className="text-gray-400">No achievements unlocked yet. Keep going!</li>
                    )}
                </ul>
            </CardContent>
        </Card>
    );
};

export default RewardsDisplay;
