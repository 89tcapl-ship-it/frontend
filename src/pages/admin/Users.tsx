import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { UserPlus, Mail, Trash2, Shield, User as UserIcon } from 'lucide-react';
import api from '@/lib/api';
import { User } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { format } from 'date-fns';

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);
    const { toast } = useToast();
    const { user: currentUser } = useAuth();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'admin' as 'admin' | 'super_admin',
    });

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response: any = await api.get('/users');
            setUsers(response.data);
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to fetch users',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await api.post('/invitation/invite', formData);
            toast({
                title: 'Success',
                description: 'Invitation sent! The user will receive an email to set their password.',
            });
            setDialogOpen(false);
            resetForm();
            fetchUsers();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to send invitation',
                variant: 'destructive',
            });
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this user?')) return;

        try {
            await api.delete(`/users/${id}`);
            toast({ title: 'Success', description: 'User deleted successfully' });
            fetchUsers();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to delete user',
                variant: 'destructive',
            });
        }
    };

    const toggleUserStatus = async (id: string, currentStatus: boolean) => {
        try {
            await api.put(`/users/${id}`, { isActive: !currentStatus });
            toast({
                title: 'Success',
                description: `User ${!currentStatus ? 'activated' : 'deactivated'} successfully`,
            });
            fetchUsers();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to update user status',
                variant: 'destructive',
            });
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            role: 'admin',
        });
    };

    const getRoleBadge = (role: string) => {
        return role === 'super_admin' ? (
            <Badge variant="default" className="gap-1">
                <Shield className="h-3 w-3" />
                Super Admin
            </Badge>
        ) : (
            <Badge variant="secondary" className="gap-1">
                <UserIcon className="h-3 w-3" />
                Admin
            </Badge>
        );
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">User Management</h1>
                    <p className="text-muted-foreground">Manage admin users and permissions</p>
                </div>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={resetForm}>
                            <UserPlus className="h-4 w-4 mr-2" />
                            Invite User
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Invite New Admin User</DialogTitle>
                            <DialogDescription>
                                Send an invitation email. The user will set their own password via the link.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name *</Label>
                                <Input
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="john@example.com"
                                />
                                <p className="text-xs text-muted-foreground">
                                    An invitation email will be sent to this address
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="role">Role *</Label>
                                <Select
                                    value={formData.role}
                                    onValueChange={(value: 'admin' | 'super_admin') =>
                                        setFormData({ ...formData, role: value })
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="admin">Admin</SelectItem>
                                        <SelectItem value="super_admin">Super Admin</SelectItem>
                                    </SelectContent>
                                </Select>
                                <p className="text-xs text-muted-foreground">
                                    Super Admins can manage users and have full access
                                </p>
                            </div>

                            <div className="flex gap-2 justify-end">
                                <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit">
                                    <Mail className="h-4 w-4 mr-2" />
                                    Create & Send Invite
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {loading ? (
                <Card>
                    <CardContent className="py-12 text-center">
                        <p className="text-muted-foreground">Loading users...</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((user) => (
                        <Card key={user._id}>
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1">
                                        <CardTitle className="text-lg">{user.name}</CardTitle>
                                        <p className="text-sm text-muted-foreground">{user.email}</p>
                                    </div>
                                    {getRoleBadge(user.role)}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Status:</span>
                                        <Badge variant={user.isActive ? 'default' : 'secondary'}>
                                            {user.isActive ? 'Active' : 'Inactive'}
                                        </Badge>
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Joined {format(new Date(user.createdAt), 'PPP')}
                                    </div>

                                    {currentUser?._id !== user._id && (
                                        <div className="flex gap-2 pt-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="flex-1"
                                                onClick={() => toggleUserStatus(user._id, user.isActive)}
                                            >
                                                {user.isActive ? 'Deactivate' : 'Activate'}
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => handleDelete(user._id)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    )}
                                    {currentUser?._id === user._id && (
                                        <p className="text-xs text-center text-muted-foreground pt-2">
                                            (Current User)
                                        </p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Users;
