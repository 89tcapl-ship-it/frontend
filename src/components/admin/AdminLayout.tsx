import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
    LayoutDashboard,
    Inbox,
    Briefcase,
    FileText,
    Settings,
    Users,
    LogOut,
    Menu,
    X,
} from 'lucide-react';
import { useState } from 'react';

const AdminLayout = () => {
    const { user, logout, isSuperAdmin } = useAuth();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigation = [
        { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Inbox', href: '/admin/inbox', icon: Inbox },
        { name: 'Content', href: '/admin/content', icon: FileText },
        { name: 'Services', href: '/admin/services', icon: Briefcase },
        { name: 'Blog', href: '/admin/blog', icon: FileText },
        { name: 'Settings', href: '/admin/settings', icon: Settings },
        ...(isSuperAdmin ? [{ name: 'Users', href: '/admin/users', icon: Users }] : []),
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="min-h-screen bg-background">
            {/* Mobile sidebar toggle */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-border px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">89T</span>
                    </div>
                    <span className="font-semibold">Admin Panel</span>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
            </div>

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-6 border-b border-border hidden lg:block">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-lg">89T</span>
                            </div>
                            <div>
                                <h1 className="font-semibold">Admin Panel</h1>
                                <p className="text-xs text-muted-foreground">89tcapl</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-1 overflow-y-auto mt-16 lg:mt-0">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive(item.href)
                                        ? 'bg-primary text-primary-foreground'
                                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                        }`}
                                >
                                    <Icon className="h-5 w-5" />
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User info & logout */}
                    <div className="p-4 border-t border-border">
                        <div className="mb-3 px-3">
                            <p className="text-sm font-medium">{user?.name}</p>
                            <p className="text-xs text-muted-foreground">{user?.email}</p>
                            <p className="text-xs text-primary mt-1 capitalize">{user?.role?.replace('_', ' ')}</p>
                        </div>
                        <Button
                            variant="outline"
                            className="w-full justify-start"
                            onClick={logout}
                        >
                            <LogOut className="h-4 w-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Main content */}
            <main className="lg:ml-64 min-h-screen">
                <div className="p-6 mt-16 lg:mt-0">
                    <Outlet />
                </div>
            </main>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default AdminLayout;
