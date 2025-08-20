import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';

const AuthPage = ({ onLogin, onRegister, isLoading, messages }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegistering) {
            onRegister(email, password);
        } else {
            onLogin(email, password);
        }
    };

    return (
        <div className="flex items-center justify-center h-full">
            <Card className="w-full max-w-md p-6">
                <CardHeader className="text-center">
                    <CardTitle>{isRegistering ? 'Register' : 'Login'}</CardTitle>
                    <CardDescription>
                        {isRegistering ? 'Create your account to get started' : 'Welcome back! Please log in to your account.'}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? 'Processing...' : (isRegistering ? 'Register' : 'Login')}
                        </Button>
                    </form>
                    <div className="mt-4 text-center text-sm text-gray-400">
                        {isRegistering ? (
                            <>
                                Already have an account?{' '}
                                <Button variant="ghost" onClick={() => setIsRegistering(false)} className="px-0 py-0 h-auto text-red-400 hover:text-red-500">
                                    Login
                                </Button>
                            </>
                        ) : (
                            <>
                                Don't have an account?{' '}
                                <Button variant="ghost" onClick={() => setIsRegistering(true)} className="px-0 py-0 h-auto text-red-400 hover:text-red-500">
                                    Register
                                </Button>
                            </>
                        )}
                    </div>
                    {messages.map((msg, index) => (
                        <p key={index} className="text-center text-sm mt-2 text-red-400">{msg.text}</p>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default AuthPage;
