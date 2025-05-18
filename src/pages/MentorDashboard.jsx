import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const MentorDashboard = () => {
    // Mock data for dashboard
    const sessionHistory = [
        { id: 1, type: 'Workshop', duration: '60 min', date: '2025-05-14', amount: '₹4,000', status: 'Paid' },
        { id: 2, type: 'One-on-One', duration: '30 min', date: '2025-05-13', amount: '₹2,500', status: 'Processing' },
        { id: 3, type: 'Group Session', duration: '90 min', date: '2025-05-10', amount: '₹5,500', status: 'Paid' },
        { id: 4, type: 'Workshop', duration: '45 min', date: '2025-05-08', amount: '₹3,200', status: 'Paid' },
    ];

    const stats = [
        { title: 'Earnings (May)', value: '₹48,500', trend: '+8%' },
        { title: 'Sessions Conducted', value: '24', trend: '+2' },
        { title: 'Pending Amount', value: '₹7,500', trend: '' },
        { title: 'Hours Taught', value: '36h', trend: '+4h' },
    ];

    return (
        <div className="flex-1 space-y-6 p-8">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold gradient-text">Mentor Dashboard</h2>
                <div className="flex items-center space-x-4">
                    <Button className="bg-paytech-dark/60 border border-white/10 hover:bg-paytech-blue/30">
                        <Download className="h-4 w-4 mr-2" />
                        Download Tax Report
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
                                {stat.trend && (
                                    <span className={`text-sm font-medium ${stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                                        {stat.trend}
                                    </span>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Tabs defaultValue="sessions" className="w-full">
                <TabsList className="bg-paytech-blue/30 border-white/10">
                    <TabsTrigger value="sessions">Session History</TabsTrigger>
                    <TabsTrigger value="payouts">Payout History</TabsTrigger>
                    <TabsTrigger value="receipts">Receipts</TabsTrigger>
                </TabsList>
                <TabsContent value="sessions" className="mt-6">
                    <Card className="bg-paytech-dark/70 backdrop-blur-lg border border-white/10">
                        <CardHeader>
                            <CardTitle>Session History</CardTitle>
                            <CardDescription>Your recent teaching sessions and their status</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md overflow-hidden">
                                <table className="min-w-full">
                                    <thead>
                                        <tr className="bg-paytech-blue/30">
                                            <th className="px-6 py-3 text-left text-xs font-medium text-paytech-gray uppercase tracking-wider">Session Type</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-paytech-gray uppercase tracking-wider">Duration</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-paytech-gray uppercase tracking-wider">Date</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-paytech-gray uppercase tracking-wider">Amount</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-paytech-gray uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-paytech-gray uppercase tracking-wider">Receipt</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        {sessionHistory.map((session) => (
                                            <tr key={session.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">{session.type}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{session.duration}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-paytech-gray">{session.date}</td>
                                                <td className="px-6 py-4 whitespace-nowrap font-medium">{session.amount}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${session.status === 'Paid' ? 'bg-green-100 text-green-800' :
                                                            'bg-blue-100 text-blue-800'
                                                        }`}>
                                                        {session.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {session.status === 'Paid' && (
                                                        <Button variant="ghost" size="sm" className="text-paytech-accent hover:text-paytech-purple">
                                                            <Download className="h-4 w-4 mr-1" />
                                                            Download
                                                        </Button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="payouts" className="mt-6">
                    <Card className="bg-paytech-dark/70 backdrop-blur-lg border border-white/10">
                        <CardHeader>
                            <CardTitle>Payout History</CardTitle>
                            <CardDescription>Track all your payout transactions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center py-8 text-paytech-gray">Select date range to view payout history</p>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="receipts" className="mt-6">
                    <Card className="bg-paytech-dark/70 backdrop-blur-lg border border-white/10">
                        <CardHeader>
                            <CardTitle>Receipts</CardTitle>
                            <CardDescription>Download and manage payment receipts</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center py-8 text-paytech-gray">Select month to view available receipts</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default MentorDashboard; 