import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageUpload } from '@/components/shared/ImageUpload';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Plus, Edit, Trash2 } from 'lucide-react';
import api from '@/lib/api';
import { Service, ServiceFormData } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

const Services = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingService, setEditingService] = useState<Service | null>(null);
    const { toast } = useToast();

    const [formData, setFormData] = useState<ServiceFormData>({
        title: '',
        shortDescription: '',
        description: '',
        features: [],
        image: '',
        isActive: true,
        order: 0,
    });

    const fetchServices = async () => {
        try {
            setLoading(true);
            const response: any = await api.get('/services');
            setServices(response.data);
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to fetch services',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (editingService) {
                await api.put(`/services/${editingService._id}`, formData);
                toast({ title: 'Success', description: 'Service updated successfully' });
            } else {
                await api.post('/services', formData);
                toast({ title: 'Success', description: 'Service created successfully' });
            }
            setDialogOpen(false);
            resetForm();
            fetchServices();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to save service',
                variant: 'destructive',
            });
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this service?')) return;

        try {
            await api.delete(`/services/${id}`);
            toast({ title: 'Success', description: 'Service deleted successfully' });
            fetchServices();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to delete service',
                variant: 'destructive',
            });
        }
    };

    const handleEdit = (service: Service) => {
        setEditingService(service);
        setFormData({
            title: service.title,
            shortDescription: service.shortDescription,
            description: service.description,
            features: service.features,
            image: service.image,
            isActive: service.isActive,
            order: service.order,
        });
        setDialogOpen(true);
    };

    const resetForm = () => {
        setEditingService(null);
        setFormData({
            title: '',
            shortDescription: '',
            description: '',
            features: [],
            image: '',
            isActive: true,
            order: 0,
        });
    };

    const addFeature = () => {
        setFormData({ ...formData, features: [...formData.features, ''] });
    };

    const updateFeature = (index: number, value: string) => {
        const newFeatures = [...formData.features];
        newFeatures[index] = value;
        setFormData({ ...formData, features: newFeatures });
    };

    const removeFeature = (index: number) => {
        const newFeatures = formData.features.filter((_, i) => i !== index);
        setFormData({ ...formData, features: newFeatures });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Services</h1>
                    <p className="text-muted-foreground">Manage your service offerings</p>
                </div>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={resetForm}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Service
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>{editingService ? 'Edit Service' : 'Add New Service'}</DialogTitle>
                            <DialogDescription>
                                {editingService ? 'Update service details' : 'Create a new service offering'}
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title *</Label>
                                <Input
                                    id="title"
                                    required
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Service Image</Label>
                                <ImageUpload
                                    value={formData.image || ''}
                                    onChange={(url) => setFormData({ ...formData, image: url })}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="shortDescription">Short Description (for cards) *</Label>
                                <Textarea
                                    id="shortDescription"
                                    required
                                    rows={2}
                                    value={formData.shortDescription}
                                    onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Detailed Content (Markdown Supported) *</Label>
                                <Textarea
                                    id="description"
                                    required
                                    rows={8}
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label>Features</Label>
                                    <Button type="button" variant="outline" size="sm" onClick={addFeature}>
                                        <Plus className="h-3 w-3 mr-1" />
                                        Add Feature
                                    </Button>
                                </div>
                                {formData.features.map((feature, index) => (
                                    <div key={index} className="flex gap-2">
                                        <Input
                                            value={feature}
                                            onChange={(e) => updateFeature(index, e.target.value)}
                                            placeholder="Feature description"
                                        />
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            size="icon"
                                            onClick={() => removeFeature(index)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center space-x-2">
                                <Switch
                                    id="isActive"
                                    checked={formData.isActive}
                                    onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                                />
                                <Label htmlFor="isActive">Active</Label>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="order">Display Order</Label>
                                <Input
                                    id="order"
                                    type="number"
                                    value={formData.order}
                                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                                />
                            </div>

                            <div className="flex gap-2 justify-end">
                                <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit">
                                    {editingService ? 'Update' : 'Create'}
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {loading ? (
                <Card>
                    <CardContent className="py-12 text-center">
                        <p className="text-muted-foreground">Loading services...</p>
                    </CardContent>
                </Card>
            ) : services.length === 0 ? (
                <Card>
                    <CardContent className="py-12 text-center">
                        <p className="text-muted-foreground">No services found. Create your first service!</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <Card key={service._id}>

                            <CardHeader className="relative p-0 pt-0">
                                <div className="aspect-video w-full rounded-t-xl overflow-hidden bg-muted">
                                    {service.image ? (
                                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-muted-foreground">
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-start justify-between p-6">
                                    <CardTitle className="text-lg">{service.title}</CardTitle>
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="icon" onClick={() => handleEdit(service)}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleDelete(service._id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">{service.shortDescription}</p>
                                {service.features.length > 0 && (
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium">Features:</p>
                                        <ul className="text-sm text-muted-foreground list-disc list-inside">
                                            {service.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                                    <span>Order: {service.order}</span>
                                    <span className={service.isActive ? 'text-green-600' : 'text-red-600'}>
                                        {service.isActive ? 'Active' : 'Inactive'}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Services;
