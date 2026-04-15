import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Search, Mail, Phone, Trash2 } from 'lucide-react';
import api from '@/lib/api';
import { Contact } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

const Inbox = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const { toast } = useToast();

    const fetchContacts = async () => {
        try {
            setLoading(true);
            const params: any = {};
            if (statusFilter !== 'all') params.status = statusFilter;
            if (searchQuery) params.search = searchQuery;

            const response: any = await api.get('/contact/inbox', { params });
            setContacts(response.data);
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to fetch contacts',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, [statusFilter]);

    const handleSearch = () => {
        fetchContacts();
    };

    const handleStatusChange = async (id: string, newStatus: string) => {
        try {
            await api.put(`/contact/${id}`, { status: newStatus });
            toast({
                title: 'Success',
                description: 'Status updated successfully',
            });
            fetchContacts();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to update status',
                variant: 'destructive',
            });
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this message?')) return;

        try {
            await api.delete(`/contact/${id}`);
            toast({
                title: 'Success',
                description: 'Message deleted successfully',
            });
            fetchContacts();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to delete message',
                variant: 'destructive',
            });
        }
    };

    const getStatusBadge = (status: string) => {
        const variants: Record<string, any> = {
            new: 'default',
            read: 'secondary',
            replied: 'outline',
            archived: 'secondary',
        };
        return <Badge variant={variants[status] || 'default'}>{status}</Badge>;
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Inbox</h1>
                <p className="text-muted-foreground">Manage contact form submissions</p>
            </div>

            {/* Filters */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 flex gap-2">
                            <Input
                                placeholder="Search by name, email, or message..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <Button onClick={handleSearch}>
                                <Search className="h-4 w-4" />
                            </Button>
                        </div>
                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                            <SelectTrigger className="w-full md:w-48">
                                <SelectValue placeholder="Filter by status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Messages</SelectItem>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="read">Read</SelectItem>
                                <SelectItem value="replied">Replied</SelectItem>
                                <SelectItem value="archived">Archived</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            {/* Messages List */}
            <div className="space-y-4">
                {loading ? (
                    <Card>
                        <CardContent className="py-12 text-center">
                            <p className="text-muted-foreground">Loading messages...</p>
                        </CardContent>
                    </Card>
                ) : contacts.length === 0 ? (
                    <Card>
                        <CardContent className="py-12 text-center">
                            <p className="text-muted-foreground">No messages found</p>
                        </CardContent>
                    </Card>
                ) : (
                    contacts.map((contact) => (
                        <Card key={contact._id}>
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1">
                                        <CardTitle className="text-lg">{contact.fullName}</CardTitle>
                                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Mail className="h-3 w-3" />
                                                {contact.email}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Phone className="h-3 w-3" />
                                                {contact.phone}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Service: {contact.serviceInterest}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {getStatusBadge(contact.status)}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm mb-4">{contact.message}</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-xs text-muted-foreground">
                                        {format(new Date(contact.createdAt), 'PPp')}
                                    </p>
                                    <div className="flex gap-2">
                                        <Select
                                            value={contact.status}
                                            onValueChange={(value) => handleStatusChange(contact._id, value)}
                                        >
                                            <SelectTrigger className="w-32">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="new">New</SelectItem>
                                                <SelectItem value="read">Read</SelectItem>
                                                <SelectItem value="replied">Replied</SelectItem>
                                                <SelectItem value="archived">Archived</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            onClick={() => handleDelete(contact._id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
};

export default Inbox;
