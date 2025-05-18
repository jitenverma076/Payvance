import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import MentorDashboard from './MentorDashboard';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
    // In a real app, this would come from Firebase Auth
    const [userRole, setUserRole] = useState(null);

    // For demo purposes - toggle between admin and mentor views
    if (!userRole) {
        return (
            <div className="h-screen flex items-center justify-center flex-col gap-6">
                <h1 className="text-3xl font-bold gradient-text mb-8">Select Dashboard Type</h1>
                <div className="flex gap-4">
                    <Button
                        onClick={() => setUserRole('admin')}
                        className="button-accent py-8 px-12 text-lg"
                    >
                        Admin Dashboard
                    </Button>
                    <Button
                        onClick={() => setUserRole('mentor')}
                        className="bg-paytech-dark/60 border border-white/10 hover:bg-paytech-blue/30 py-8 px-12 text-lg"
                    >
                        Mentor Dashboard
                    </Button>
                </div>
            </div>
        );
    }

    // Render the appropriate dashboard based on user role
    return (
        <div className="min-h-screen">
            <header className="w-full py-4 px-6 bg-paytech-dark/80 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <div className="text-2xl font-bold text-white">PayTech</div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" className="text-white" onClick={() => setUserRole(null)}>
                            Switch Role
                        </Button>
                        <Button variant="outline" className="border-white/10">
                            Sign out
                        </Button>
                    </div>
                </div>
            </header>

            {userRole === 'admin' ? <AdminDashboard /> : <MentorDashboard />}
        </div>
    );
};

export default Dashboard; 