import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import MentorDashboard from './MentorDashboard';
import { Button } from '@/components/ui/button';
import { LogOut, User, Settings } from 'lucide-react';

const Dashboard = () => {
    // In a real app, this would come from Firebase Auth or other auth provider
    const [userRole, setUserRole] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(true); // Simulating auth state
    const [userName, setUserName] = useState('John Doe'); // Simulating user data
    const navigate = useNavigate();
    
    useEffect(() => {
        // In a real app, you would check authentication status here
        // For demo purposes, we're assuming the user is authenticated
        const checkAuth = () => {
            // Simulating auth check
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            setIsAuthenticated(isLoggedIn || true); // For demo, default to true
        };
        
        checkAuth();
    }, []);
    
    const handleLogout = () => {
        // In a real app, you would sign out the user here
        localStorage.removeItem('isLoggedIn');
        setIsAuthenticated(false);
        navigate('/auth');
    };
    
    // Redirect to auth page if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/auth" replace />;
    }
    
    // For demo purposes - toggle between admin and mentor views
    if (!userRole) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-paytech-dark to-black flex items-center justify-center flex-col gap-6 p-4">
                <div className="absolute top-4 right-4">
                    <Button 
                        variant="ghost" 
                        className="text-white hover:bg-paytech-purple/20"
                        onClick={handleLogout}
                    >
                        <LogOut size={18} className="mr-2" /> Sign Out
                    </Button>
                </div>
                
                <div className="max-w-md w-full bg-paytech-dark/60 border border-white/10 rounded-xl p-8 backdrop-blur-md shadow-xl">
                    <h1 className="text-3xl font-bold gradient-text mb-8 text-center">Welcome to Your Dashboard</h1>
                    <p className="text-paytech-gray text-center mb-8">Please select your dashboard view</p>
                    
                    <div className="grid grid-cols-1 gap-4">
                        <Button
                            onClick={() => setUserRole('admin')}
                            className="bg-gradient-to-r from-paytech-purple to-paytech-accent hover:from-paytech-accent hover:to-paytech-purple text-white transition-all duration-300 py-6 text-lg"
                        >
                            Admin Dashboard
                        </Button>
                        <Button
                            onClick={() => setUserRole('mentor')}
                            className="bg-paytech-dark/80 border border-white/10 hover:bg-paytech-purple/20 text-white py-6 text-lg"
                        >
                            Mentor Dashboard
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    // Render the appropriate dashboard based on user role
    return (
        <div className="min-h-screen bg-gradient-to-b from-paytech-dark to-black">
            <header className="w-full py-4 px-6 bg-paytech-dark/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <div className="text-2xl font-bold gradient-text">Payvance</div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center mr-4 text-paytech-gray">
                            <User size={16} className="mr-2 text-paytech-purple" />
                            <span>{userName}</span>
                        </div>
                        <Button 
                            variant="ghost" 
                            className="text-white hover:bg-paytech-purple/20" 
                            onClick={() => setUserRole(null)}
                        >
                            <Settings size={16} className="mr-2" /> Switch Role
                        </Button>
                        <Button 
                            variant="outline" 
                            className="border-white/10 hover:bg-paytech-purple/20 hover:border-paytech-purple/50"
                            onClick={handleLogout}
                        >
                            <LogOut size={16} className="mr-2" /> Sign out
                        </Button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-6">
                {userRole === 'admin' ? <AdminDashboard /> : <MentorDashboard />}
            </main>
        </div>
    );
};

export default Dashboard; 