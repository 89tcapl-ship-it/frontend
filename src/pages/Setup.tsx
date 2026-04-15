import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import api from '@/lib/api';

const Setup = () => {
    const navigate = useNavigate();
    const { setupSuperAdmin, isAuthenticated } = useAuth();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [checkingSetup, setCheckingSetup] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    // Check if setup is needed
    useEffect(() => {
        const checkSetupStatus = async () => {
            try {
                const response: any = await api.get('/auth/setup-status');
                if (!response.data.setupRequired) {
                    // Setup already done, redirect to login
                    navigate('/admin/login');
                }
            } catch (error) {
                console.error('Error checking setup status:', error);
            } finally {
                setCheckingSetup(false);
            }
        };

        checkSetupStatus();
    }, [navigate]);

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/admin/dashboard');
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast({
                title: 'Error',
                description: 'Passwords do not match',
                variant: 'destructive',
            });
            return;
        }

        if (formData.password.length < 6) {
            toast({
                title: 'Error',
                description: 'Password must be at least 6 characters',
                variant: 'destructive',
            });
            return;
        }

        setLoading(true);

        try {
            await setupSuperAdmin(formData.name, formData.email, formData.password);
            toast({
                title: 'Success',
                description: 'Super admin account created successfully!',
            });
            navigate('/admin/dashboard');
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to create super admin',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    };

    if (checkingSetup) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-muted">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-4 text-muted-foreground">Checking setup status...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-2xl">89T</span>
                    </div>
                    <CardTitle className="text-2xl">Setup Super Admin</CardTitle>
                    <CardDescription>
                        Create the first super admin account to get started
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="admin@89tcapl.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                required
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                placeholder="••••••••"
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? 'Creating Account...' : 'Create Super Admin'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Setup;
