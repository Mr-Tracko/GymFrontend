import React from 'react';
import Button from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';

const AccountPage = ({ profile }) => {
    if (!profile) {
        return (
            <div className="p-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Account Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Loading profile...</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-900 rounded-lg shadow-lg overflow-y-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Account Profile</CardTitle>
                    <CardDescription>Manage your personal details.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4 text-white">
                        <li className="flex justify-between items-center border-b border-gray-700 py-2">
                            <span className="font-semibold text-gray-400">Name:</span>
                            <span>{profile?.name}</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-700 py-2">
                            <span className="font-semibold text-gray-400">Age:</span>
                            <span>{profile?.age}</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-700 py-2">
                            <span className="font-semibold text-gray-400">Gender:</span>
                            <span>{profile?.gender}</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-700 py-2">
                            <span className="font-semibold text-gray-400">Email:</span>
                            <span>{profile?.email}</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-700 py-2">
                            <span className="font-semibold text-gray-400">Height:</span>
                            <span>{profile?.height_cm} cm</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-700 py-2">
                            <span className="font-semibold text-gray-400">Weight:</span>
                            <span>{profile?.weight_kg} kg</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-700 py-2">
                            <span className="font-semibold text-gray-400">Goals:</span>
                            {/* CORRECTED: fitness_goals */}
                            <span>{profile?.fitness_goals}</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-700 py-2">
                            <span className="font-semibold text-gray-400">Workouts/Week:</span>
                            {/* CORRECTED: workouts_per_week */}
                            <span>{profile?.workouts_per_week} days</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-700 py-2">
                            <span className="font-semibold text-gray-400">Workout Duration:</span>
                            {/* CORRECTED: workout_duration */}
                            <span>{profile?.workout_duration} hours</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-700 py-2">
                            <span className="font-semibold text-gray-400">Sleep Hours:</span>
                            {/* CORRECTED: sleep_hours */}
                            <span>{profile?.sleep_hours} hours</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-700 py-2">
                            <span className="font-semibold text-gray-400">Stress Level:</span>
                            {/* CORRECTED: stress_level */}
                            <span>{profile?.stress_level}</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-700 py-2">
                            <span className="font-semibold text-gray-400">Disliked Foods:</span>
                             {/* CORRECTED: disliked_foods */}
                            <span>{profile?.disliked_foods}</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-700 py-2">
                            <span className="font-semibold text-gray-400">Allergies:</span>
                            <span>{profile?.allergies}</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-700 py-2">
                            <span className="font-semibold text-gray-400">Health Conditions:</span>
                            {/* CORRECTED: health_conditions */}
                            <span>{profile?.health_conditions}</span>
                        </li>
                        <li className="flex justify-between items-center py-2">
                            <span className="font-semibold text-gray-400">Medications:</span>
                            {/* This will remain blank as it is not in the database */}
                            <span>{profile?.medications}</span>
                        </li>
                    </ul>
                    <Button className="mt-6 w-full">Edit Profile</Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default AccountPage;