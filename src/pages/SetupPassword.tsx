import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, Loader2 } from 'lucide-react';
import api from '@/lib/api';

const SetupPassword = () => {
    const { token } = useParams<{ token: string }>();
    const navigate = useNavigate();
    const { toast } = useToast();

    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [userInfo, setUserInfo] = useState<any>(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response: any = await api.get(`/invitation/verify/${token}`);
                setUserInfo(response.data);
            } catch (error: any) {
                toast({
                    title: 'Invalid Invitation',
                    description: error.message || 'This invitation link is invalid or has expired.',
                    variant: 'destructive',
                });
                setTimeout(() => navigate('/login'), 3000);
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            verifyToken();
        }
    }, [token, navigate, toast]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password.length < 6) {
            toast({
                title: 'Invalid Password',
                description: 'Password must be at least 6 characters long.',
                variant: 'destructive',
            });
            return;
        }

        if (password !== confirmPassword) {
            toast({
                title: 'Passwords Don\'t Match',
                description: 'Please make sure both passwords match.',
                variant: 'destructive',
            });
            return;
        }

        try {
            setSubmitting(true);
            await api.post(`/invitation/setup/${token}`, { password });

            setSuccess(true);
            toast({
                title: 'Success!',
                description: 'Your password has been set. Redirecting to login...',
            });

            setTimeout(() => navigate('/login'), 2000);
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to set password. Please try again.',
                variant: 'destructive',
            });
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-surface">
                <div className="text-center">
                    <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
                    <p className="text-muted-foreground">Verifying invitation...</p>
                </div>
            </div>
        );
    }

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-surface">
                <Card className="w-full max-w-md">
                    <CardContent className="pt-6 text-center">
                        <CheckCircle2 className="h-16 w-16 text-secondary mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Password Set Successfully!</h2>
                        <p className="text-muted-foreground">Redirecting you to login...</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-surface p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <div className="mb-4">
                        <img src="/logo.png" alt="89T Corporate Advisors" className="h-12 mx-auto" />
                    </div>
                    <CardTitle className="text-2xl text-center">Set Up Your Password</CardTitle>
                    <CardDescription className="text-center">
                        Welcome, {userInfo?.name}! Create a secure password for your admin account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={userInfo?.email || ''}
                                disabled
                                className="bg-muted"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                                minLength={6}
                            />
                            <p className="text-xs text-muted-foreground">
                                Must be at least 6 characters long
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm your password"
                                required
                                minLength={6}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={submitting}
                        >
                            {submitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Setting up...
                                </>
                            ) : (
                                'Set Password & Activate Account'
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default SetupPassword;
