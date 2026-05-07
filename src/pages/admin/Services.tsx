import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { ImageUpload } from '@/components/shared/ImageUpload';
import { defaultServiceSeed } from '@/data/defaultServiceSeed';

const emptyForm: ServiceFormData = {
    title: '',
    shortDescription: '',
    description: '',
    features: [],
    keyBenefits: [],
    support: [],
    limitations: [],
    nonComplianceRisks: [],
    offers: [],
    image: '',
    isActive: true,
    order: 0,
};

const toLines = (value?: string[]) => (value || []).join('\n');
const fromLines = (value: string) => value.split('\n').map((line) => line.trim()).filter(Boolean);

const Services = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingService, setEditingService] = useState<Service | null>(null);
    const { toast } = useToast();

    const [formData, setFormData] = useState<ServiceFormData>(emptyForm);

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

    const resetForm = () => {
        setEditingService(null);
        setFormData(emptyForm);
    };

    const handleEdit = (service: Service) => {
        setEditingService(service);
        setFormData({
            title: service.title,
            shortDescription: service.shortDescription,
            description: service.description,
            features: service.features || [],
            keyBenefits: service.keyBenefits || [],
            support: service.support || [],
            limitations: service.limitations || [],
            nonComplianceRisks: service.nonComplianceRisks || [],
            offers: service.offers || [],
            image: service.image,
            isActive: service.isActive,
            order: service.order,
        });
        setDialogOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload: ServiceFormData = {
            ...formData,
            features: formData.features || [],
            keyBenefits: formData.keyBenefits || [],
            support: formData.support || [],
            limitations: formData.limitations || [],
            nonComplianceRisks: formData.nonComplianceRisks || [],
            offers: formData.offers || [],
        };

        try {
            if (editingService) {
                await api.put(`/services/${editingService._id}`, payload);
                toast({ title: 'Success', description: 'Service updated successfully' });
            } else {
                await api.post('/services', payload);
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

    const seedDefaultServices = async () => {
        const existingSlugs = new Set(services.map((service) => service.slug));
        const missing = defaultServiceSeed.filter((service) => service.slug && !existingSlugs.has(service.slug));

        if (missing.length === 0) {
            toast({ title: 'Nothing to import', description: 'All frontend services are already present.' });
            return;
        }

        try {
            for (const service of missing) {
                await api.post('/services', service);
            }

            toast({
                title: 'Success',
                description: `Imported ${missing.length} services from the frontend catalog.`,
            });
            fetchServices();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to import frontend services',
                variant: 'destructive',
            });
        }
    };

    const updateTextList = (field: keyof Pick<ServiceFormData, 'features' | 'keyBenefits' | 'support' | 'limitations' | 'nonComplianceRisks' | 'offers'>, value: string) => {
        setFormData({ ...formData, [field]: fromLines(value) });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Services</h1>
                    <p className="text-muted-foreground">Manage your service offerings and detailed content</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button type="button" variant="outline" onClick={seedDefaultServices} className="hidden sm:inline-flex">
                        Import Frontend Catalog
                    </Button>
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                        <DialogTrigger asChild>
                            <Button onClick={resetForm}>
                                <Plus className="h-4 w-4 mr-2" />
                                Add Service
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
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
                                <Label htmlFor="shortDescription">Short Description *</Label>
                                <Textarea
                                    id="shortDescription"
                                    required
                                    rows={2}
                                    value={formData.shortDescription}
                                    onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Detailed Description *</Label>
                                <Textarea
                                    id="description"
                                    required
                                    rows={7}
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Service Image</Label>
                                <ImageUpload
                                    value={formData.image || ''}
                                    onChange={(url) => setFormData({ ...formData, image: url })}
                                />
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="features">Features (one per line)</Label>
                                    <Textarea
                                        id="features"
                                        rows={5}
                                        value={toLines(formData.features)}
                                        onChange={(e) => updateTextList('features', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="offers">Highlights / Offers (one per line)</Label>
                                    <Textarea
                                        id="offers"
                                        rows={5}
                                        value={toLines(formData.offers)}
                                        onChange={(e) => updateTextList('offers', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="keyBenefits">Key Benefits (one per line)</Label>
                                    <Textarea
                                        id="keyBenefits"
                                        rows={5}
                                        value={toLines(formData.keyBenefits)}
                                        onChange={(e) => updateTextList('keyBenefits', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="support">Support Steps (one per line)</Label>
                                    <Textarea
                                        id="support"
                                        rows={5}
                                        value={toLines(formData.support)}
                                        onChange={(e) => updateTextList('support', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="limitations">Limitations (one per line)</Label>
                                    <Textarea
                                        id="limitations"
                                        rows={5}
                                        value={toLines(formData.limitations)}
                                        onChange={(e) => updateTextList('limitations', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="nonComplianceRisks">Non-Compliance Risks (one per line)</Label>
                                    <Textarea
                                        id="nonComplianceRisks"
                                        rows={5}
                                        value={toLines(formData.nonComplianceRisks)}
                                        onChange={(e) => updateTextList('nonComplianceRisks', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="order">Display Order</Label>
                                    <Input
                                        id="order"
                                        type="number"
                                        value={formData.order}
                                        onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value || '0', 10) })}
                                    />
                                </div>
                                <div className="flex items-center space-x-2 pt-8">
                                    <Switch
                                        id="isActive"
                                        checked={formData.isActive}
                                        onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                                    />
                                    <Label htmlFor="isActive">Active</Label>
                                </div>
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
            </div>

            {loading ? (
                <Card>
                    <CardContent className="py-12 text-center">
                        <p className="text-muted-foreground">Loading services...</p>
                    </CardContent>
                </Card>
            ) : services.length === 0 ? (
                <Card>
                    <CardContent className="py-12 text-center space-y-4">
                        <p className="text-muted-foreground">No services found. Create your first service!</p>
                        <Button type="button" variant="outline" onClick={seedDefaultServices}>
                            Import Frontend Service Catalog
                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                                    <div>
                                        <CardTitle className="text-lg">{service.title}</CardTitle>
                                        <p className="text-sm text-muted-foreground mt-1">{service.shortDescription}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="icon" onClick={() => handleEdit(service)}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" onClick={() => handleDelete(service._id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="text-sm text-muted-foreground line-clamp-4 whitespace-pre-line">
                                    {service.description}
                                </div>
                                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                                    <span>Order: {service.order}</span>
                                    <span>•</span>
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
