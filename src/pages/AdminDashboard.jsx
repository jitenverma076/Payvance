import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AdminDashboard = () => {
    // Mock data for dashboard
    const recentPayouts = [
        { id: 1, mentor: 'Sarah Johnson', amount: '₹12,500', date: '2025-05-14', status: 'Paid' },
        { id: 2, mentor: 'Michael Chen', amount: '₹8,750', date: '2025-05-13', status: 'Processing' },
        { id: 3, mentor: 'Priya Sharma', amount: '₹15,000', date: '2025-05-12', status: 'Paid' },
        { id: 4, mentor: 'David Wilson', amount: '₹10,200', date: '2025-05-10', status: 'Under Review' },
    ];

    const stats = [
        { title: 'Total Payouts (May)', value: '₹384,500', trend: '+12%' },
        { title: 'Active Mentors', value: '152', trend: '+3%' },
        { title: 'Pending Approvals', value: '18', trend: '-2%' },
        { title: 'Avg. Processing Time', value: '36h', trend: '-4h' },
    ];

    return (
        <div className="flex-1 space-y-6 p-8">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold gradient-text">Admin Dashboard</h2>
                <div className="flex items-center space-x-4">
                    <Button className="button-accent">
                        Generate Payouts
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index} className="metric-card border-white/10">
                        <CardHeader className="pb-2">
                            <CardDescription className="text-paytech-gray">{stat.title}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between items-end">
                                <p className="text-2xl font-bold">{stat.value}</p>
                                <span className={`text-sm font-medium ${stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                                    {stat.trend}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Tabs defaultValue="recent" className="w-full">
                <TabsList className="bg-paytech-blue/30 border-white/10">
                    <TabsTrigger value="recent">Recent Payouts</TabsTrigger>
                    <TabsTrigger value="pending">Pending Approvals</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
                <TabsContent value="recent" className="mt-6">
                    <Card className="bg-paytech-dark/70 backdrop-blur-lg border border-white/10">
                        <CardHeader>
                            <CardTitle>Recent Payouts</CardTitle>
                            <CardDescription>Manage and track all recent mentor payouts</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md overflow-hidden">
                                <table className="min-w-full">
                                    <thead>
                                        <tr className="bg-paytech-blue/30">
                                            <th className="px-6 py-3 text-left text-xs font-medium text-paytech-gray uppercase tracking-wider">Mentor</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-paytech-gray uppercase tracking-wider">Amount</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-paytech-gray uppercase tracking-wider">Date</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-paytech-gray uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-paytech-gray uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        {recentPayouts.map((payout) => (
                                            <tr key={payout.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">{payout.mentor}</td>
                                                <td className="px-6 py-4 whitespace-nowrap font-medium">{payout.amount}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-paytech-gray">{payout.date}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${payout.status === 'Paid' ? 'bg-green-100 text-green-800' :
                                                            payout.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                                                                'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                        {payout.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <Button variant="ghost" size="sm" className="text-paytech-accent hover:text-paytech-purple">
                                                        <ArrowRight className="h-4 w-4 mr-1" />
                                                        View
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="pending" className="mt-6">
                    <Card className="bg-paytech-dark/70 backdrop-blur-lg border border-white/10">
                        <CardHeader>
                            <CardTitle>Pending Approvals</CardTitle>
                            <CardDescription>Review and approve pending payouts</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center py-8 text-paytech-gray">Select date range to view pending approvals</p>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="analytics" className="mt-6">
                    <Card className="bg-paytech-dark/70 backdrop-blur-lg border border-white/10">
                        <CardHeader>
                            <CardTitle>Analytics</CardTitle>
                            <CardDescription>Review financial performance and trends</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center py-8 text-paytech-gray">Analytics dashboard coming soon</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default AdminDashboard; 