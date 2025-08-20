import React from 'react';
import Button from '../ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';

const ProfileDetails = ({ profile }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Account Profile</CardTitle>
                <CardDescription>Manage your personal details.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4 text-white">
                    <li className="flex justify-between items-center border-b border-gray-700 py-2">
                        <span className="font-semibold text-gray-400">Name:</span>
                        <span>{profile.name}</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-700 py-2">
                        <span className="font-semibold text-gray-400">Age:</span>
                        <span>{profile.age}</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-700 py-2">
                        <span className="font-semibold text-gray-400">Gender:</span>
                        <span>{profile.gender}</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-700 py-2">
                        <span className="font-semibold text-gray-400">Email:</span>
                        <span>{profile.email}</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-700 py-2">
                        <span className="font-semibold text-gray-400">Height:</span>
                        <span>{profile.height_cm} cm</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-700 py-2">
                        <span className="font-semibold text-gray-400">Weight:</span>
                        <span>{profile.weight_kg} kg</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-700 py-2">
                        <span className="font-semibold text-gray-400">Goals:</span>
                        <span>{profile.goals}</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-700 py-2">
                        <span className="font-semibold text-gray-400">Workouts/Week:</span>
                        <span>{profile.workoutPerWeek} days</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-700 py-2">
                        <span className="font-semibold text-gray-400">Workout Duration:</span>
                        <span>{profile.workoutDuration} hours</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-700 py-2">
                        <span className="font-semibold text-gray-400">Sleep Hours:</span>
                        <span>{profile.sleepHours} hours</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-700 py-2">
                        <span className="font-semibold text-gray-400">Stress Level:</span>
                        <span>{profile.stressLevel}</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-700 py-2">
                        <span className="font-semibold text-gray-400">Disliked Foods:</span>
                        <span>{profile.dislikedFoods}</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-700 py-2">
                        <span className="font-semibold text-gray-400">Allergies:</span>
                        <span>{profile.allergies}</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-700 py-2">
                        <span className="font-semibold text-gray-400">Health Conditions:</span>
                        <span>{profile.healthConditions}</span>
                    </li>
                    <li className="flex justify-between items-center py-2">
                        <span className="font-semibold text-gray-400">Medications:</span>
                        <span>{profile.medications}</span>
                    </li>
                </ul>
                <Button className="mt-6 w-full">Edit Profile</Button>
            </CardContent>
        </Card>
    );
};

export default ProfileDetails;
