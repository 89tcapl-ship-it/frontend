import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Inbox, Briefcase, FileText, TrendingUp } from 'lucide-react';
import api from '@/lib/api';
import { InboxStats } from '@/lib/types';

const Dashboard = () => {
    const [stats, setStats] = useState<InboxStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response: any = await api.get('/contact/stats');
                setStats(response.data);
            } catch (error) {
                console.error('Error fetching stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const statCards = [
        {
            title: 'Total Messages',
            value: stats?.total || 0,
            icon: Inbox,
            color: 'text-blue-600',
            bgColor: 'bg-blue-100',
        },
        {
            title: 'New Messages',
            value: stats?.new || 0,
            icon: TrendingUp,
            color: 'text-green-600',
            bgColor: 'bg-green-100',
        },
        {
            title: 'Services',
            value: '-',
            icon: Briefcase,
            color: 'text-orange-600',
            bgColor: 'bg-orange-100',
        },
        {
            title: 'Blog Posts',
            value: '-',
            icon: FileText,
            color: 'text-purple-600',
            bgColor: 'bg-purple-100',
        },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">Welcome to the admin panel</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={stat.title}>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {stat.title}
                                </CardTitle>
                                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                                    <Icon className={`h-4 w-4 ${stat.color}`} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {loading ? '...' : stat.value}
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Quick Actions */}
            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <a
                            href="/admin/inbox"
                            className="p-4 border border-border rounded-lg hover:bg-muted transition-colors"
                        >
                            <Inbox className="h-6 w-6 mb-2 text-primary" />
                            <h3 className="font-semibold">View Inbox</h3>
                            <p className="text-sm text-muted-foreground">
                                Check new contact messages
                            </p>
                        </a>
                        <a
                            href="/admin/services"
                            className="p-4 border border-border rounded-lg hover:bg-muted transition-colors"
                        >
                            <Briefcase className="h-6 w-6 mb-2 text-primary" />
                            <h3 className="font-semibold">Manage Services</h3>
                            <p className="text-sm text-muted-foreground">
                                Add or edit services
                            </p>
                        </a>
                        <a
                            href="/admin/blog"
                            className="p-4 border border-border rounded-lg hover:bg-muted transition-colors"
                        >
                            <FileText className="h-6 w-6 mb-2 text-primary" />
                            <h3 className="font-semibold">Create Blog Post</h3>
                            <p className="text-sm text-muted-foreground">
                                Write a new article
                            </p>
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Dashboard;
