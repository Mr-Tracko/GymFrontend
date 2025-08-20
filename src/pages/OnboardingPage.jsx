import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Textarea from '../components/ui/Textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';

const OnboardingPage = ({ onSubmit, isLoading, messages }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [weight, setWeight] = useState('');
    const [goals, setGoals] = useState('');
    const [workoutDays, setWorkoutDays] = useState('');
    const [workoutDuration, setWorkoutDuration] = useState('');
    const [sleepHours, setSleepHours] = useState('');
    const [stressLevel, setStressLevel] = useState('');
    const [dislikedFoods, setDislikedFoods] = useState('');
    const [allergies, setAllergies] = useState('');
    const [healthConditions, setHealthConditions] = useState('');
    const [medications, setMedications] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            name,
            age: parseInt(age),
            gender,
            email,
            weight_kg: parseFloat(weight),
            goals,
            workoutPerWeek: parseInt(workoutDays),
            workoutDuration: parseFloat(workoutDuration),
            sleepHours: parseFloat(sleepHours),
            stressLevel,
            dislikedFoods,
            allergies,
            healthConditions,
            medications
        });
    };

    return (
        <div className="flex items-center justify-center h-full overflow-y-auto py-8">
            <Card className="w-full max-w-lg p-6">
                <CardHeader className="text-center">
                    <CardTitle>Tell Us About Yourself</CardTitle>
                    <CardDescription>
                        Help us create your personalized fitness and diet plans.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                            <Input id="name" type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-1">Age</label>
                                <Input id="age" type="number" placeholder="e.g., 30" value={age} onChange={(e) => setAge(e.target.value)} required />
                            </div>
                            <div>
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-300 mb-1">Gender</label>
                                <Select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </Select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                            <Input id="email" type="email" placeholder="your@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="weight" className="block text-sm font-medium text-gray-300 mb-1">Weight (kg)</label>
                            <Input id="weight" type="number" placeholder="e.g., 70" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="goals" className="block text-sm font-medium text-gray-300 mb-1">Fitness Goals</label>
                            <Input id="goals" type="text" placeholder="e.g., Build muscle, Lose fat, Improve endurance" value={goals} onChange={(e) => setGoals(e.target.value)} required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="workoutDays" className="block text-sm font-medium text-gray-300 mb-1">Workouts per Week (days)</label>
                                <Input id="workoutDays" type="number" placeholder="e.g., 4" value={workoutDays} onChange={(e) => setWorkoutDays(e.target.value)} required />
                            </div>
                            <div>
                                <label htmlFor="workoutDuration" className="block text-sm font-medium text-gray-300 mb-1">Workout Duration (hours)</label>
                                <Input id="workoutDuration" type="number" step="0.5" placeholder="e.g., 1.5" value={workoutDuration} onChange={(e) => setWorkoutDuration(e.target.value)} required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="sleepHours" className="block text-sm font-medium text-gray-300 mb-1">Sleep Hours per Night</label>
                                <Input id="sleepHours" type="number" step="0.5" placeholder="e.g., 7.5" value={sleepHours} onChange={(e) => setSleepHours(e.target.value)} required />
                            </div>
                            <div>
                                <label htmlFor="stressLevel" className="block text-sm font-medium text-gray-300 mb-1">Stress Level</label>
                                <Select id="stressLevel" value={stressLevel} onChange={(e) => setStressLevel(e.target.value)} required>
                                    <option value="">Select Level</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </Select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="dislikedFoods" className="block text-sm font-medium text-gray-300 mb-1">Disliked Foods (comma-separated)</label>
                            <Textarea id="dislikedFoods" placeholder="e.g., Broccoli, Olives" value={dislikedFoods} onChange={(e) => setDislikedFoods(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="allergies" className="block text-sm font-medium text-gray-300 mb-1">Allergies (comma-separated)</label>
                            <Textarea id="allergies" placeholder="e.g., Peanuts, Gluten" value={allergies} onChange={(e) => setAllergies(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="healthConditions" className="block text-sm font-medium text-gray-300 mb-1">Health Conditions</label>
                            <Textarea id="healthConditions" placeholder="e.g., Diabetes, High Blood Pressure" value={healthConditions} onChange={(e) => setHealthConditions(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="medications" className="block text-sm font-medium text-gray-300 mb-1">Medications</label>
                            <Textarea id="medications" placeholder="Any medications you are currently taking" value={medications} onChange={(e) => setMedications(e.target.value)} />
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? 'Generating Plans...' : 'Generate My Plan'}
                        </Button>
                    </form>
                    {messages.map((msg, index) => (
                        <p key={index} className="text-center text-sm mt-2 text-red-400">{msg.text}</p>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default OnboardingPage;
