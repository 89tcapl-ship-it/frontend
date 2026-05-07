import { useEffect, useMemo, useState } from 'react';
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
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, ChevronDown } from 'lucide-react';
import api from '@/lib/api';
import { Service, ServiceFormData } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { defaultServiceSeed } from '@/data/defaultServiceSeed';
import serviceDetailData from '@/data/serviceDetailData';
import { defaultServiceConsultationCta, SERVICE_CONSULTATION_CTA_SLUG } from '@/data/serviceConsultationCta';

const emptyForm: ServiceFormData = {
    title: '',
    slug: '',
    shortDescription: '',
    description: '',
    keyBenefits: [],
    support: [],
    limitations: [],
    nonComplianceRisks: [],
    offers: [],
    image: '',
    isActive: true,
    order: 0,
};

const serviceGroups = [
    {
        title: 'Starting a Business',
        description: 'Company formation and allied registrations.',
        subgroups: [
            {
                title: 'Entity Formation',
                slugs: [
                    'sole-proprietor',
                    'partnership',
                    'llp',
                    'opc-registration',
                    'private-limited-company',
                    'foreign-company-subsidiary',
                    'nbfc',
                    'trust-societies',
                    'apartment-association',
                ],
            },
            {
                title: 'Allied Registrations',
                slugs: [
                    'gst',
                    'shops-establishments',
                    'epf-and-esi',
                    'pt',
                    'trade-license',
                    'fssai',
                    'iec',
                    'msme-udyam',
                    'dpiit-startup-india',
                ],
            },
        ],
    },
    {
        title: 'Support Services',
        description: 'Accounting, payroll, MIS, HR, and CFO support.',
        slugs: ['book-keeping', 'virtual-accountant', 'virtual-cfo', 'payroll', 'mis-reports', 'hr-services'],
    },
    {
        title: 'Compliances',
        description: 'Tax, labour, and corporate compliance services.',
        slugs: ['gst', 'epf-and-esi', 'pt', 'shops-establishments', 'trade-license', 'fssai', 'iec', 'msme-udyam', 'dpiit-startup-india', 'itr-and-tds', 'tds-filing', 'mca'],
    },
    {
        title: 'Funding',
        description: 'Fundraising, diligence, valuation, and finance support.',
        slugs: ['startup-funding', 'due-diligence', 'valuation', 'fdi-compliance', 'bank-finance', 'project-reports'],
    },
    {
        title: 'Audits',
        description: 'Statutory, tax, internal, transfer pricing, and forensic audits.',
        slugs: ['statutory-audits', 'income-tax-audit', 'internal-audits', 'transfer-pricing-audits', 'investigation-audit', 'compliance-health-check'],
    },
] as const;

const toLines = (value?: string[]) => (value || []).join('\n');
const fromLines = (value: string) => value.split('\n').map((line) => line.trim()).filter(Boolean);
const toSlug = (value: string) =>
    value
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

const normalizeSeed = (seed: ServiceFormData): ServiceFormData => ({
    ...seed,
    slug: seed.slug || toSlug(seed.title),
    keyBenefits: seed.keyBenefits || [],
    support: seed.support || [],
    limitations: seed.limitations || [],
    nonComplianceRisks: seed.nonComplianceRisks || [],
    offers: seed.offers || [],
    image: seed.image || '',
    isActive: seed.isActive ?? true,
    order: seed.order ?? 0,
});

const contentBlocks = [
    { key: 'keyBenefits', label: 'Key Benefits' },
    { key: 'support', label: 'Support Steps' },
    { key: 'limitations', label: 'Limitations' },
    { key: 'nonComplianceRisks', label: 'Non-Compliance Risks' },
    { key: 'offers', label: 'Highlights / Offers' },
] as const;

interface ConsultationCtaFormData {
    title: string;
    shortDescription: string;
    description: string;
    consultationOverline: string;
    consultationButtonText: string;
    consultationButtonLink: string;
    consultationWhatsappText: string;
    consultationWhatsappLink: string;
}

const defaultConsultationCtaForm: ConsultationCtaFormData = {
    title: defaultServiceConsultationCta.title,
    shortDescription: defaultServiceConsultationCta.subtitle,
    description: defaultServiceConsultationCta.subtitle,
    consultationOverline: defaultServiceConsultationCta.overline,
    consultationButtonText: defaultServiceConsultationCta.buttonText,
    consultationButtonLink: defaultServiceConsultationCta.buttonLink,
    consultationWhatsappText: defaultServiceConsultationCta.whatsappText,
    consultationWhatsappLink: defaultServiceConsultationCta.whatsappLink,
};

const detailAliases: Record<string, string> = {
    'epf-and-esi': 'epf-esi',
    'itr-and-tds': 'itr-and-tds-compliance',
    'tds-filing': 'itr-and-tds-compliance',
    'income-tax-filing': 'itr-and-tds-compliance',
    'mca': 'mca-compliance',
    'opc': 'opc-registration',
    'one-person-company': 'opc-registration',
    'llp-registration': 'llp',
    'shops-and-establishments-labour': 'shops-establishments',
};

const getDetailData = (slug: string) => {
    const detailSlug = detailAliases[slug] || slug;
    return (serviceDetailData as Record<string, any>)[detailSlug] || null;
};

const getDetailSeed = (seed: ServiceFormData) => {
    const detail = getDetailData(seed.slug || toSlug(seed.title));
    return {
        title: detail?.title || seed.title,
        slug: seed.slug || toSlug(seed.title),
        shortDescription: seed.shortDescription,
        description: detail?.description || seed.description,
        keyBenefits: detail?.keyBenefits || [],
        support: detail?.support || [],
        limitations: detail?.limitations || [],
        nonComplianceRisks: detail?.nonComplianceRisks || [],
        offers: detail?.offers || [],
        image: '',
        isActive: seed.isActive ?? true,
        order: seed.order ?? 0,
    } satisfies Service;
};

const Services = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingService, setEditingService] = useState<Service | null>(null);
    const [formData, setFormData] = useState<ServiceFormData>(emptyForm);
    const [consultationCtaForm, setConsultationCtaForm] = useState<ConsultationCtaFormData>(defaultConsultationCtaForm);
    const [savingConsultationCta, setSavingConsultationCta] = useState(false);
    const { toast } = useToast();

    const fetchServices = async () => {
        try {
            setLoading(true);
            const response: any = await api.get('/services');
            setServices(Array.isArray(response.data) ? response.data : []);
        } catch (error: any) {
            setServices([]);
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

    useEffect(() => {
        const existing = services.find((service) => service.slug === SERVICE_CONSULTATION_CTA_SLUG);
        setConsultationCtaForm(
            existing
                ? {
                      title: existing.title || defaultConsultationCtaForm.title,
                      shortDescription: existing.shortDescription || defaultConsultationCtaForm.shortDescription,
                      description: existing.description || defaultConsultationCtaForm.description,
                      consultationOverline: existing.consultationOverline || defaultConsultationCtaForm.consultationOverline,
                      consultationButtonText: existing.consultationButtonText || defaultConsultationCtaForm.consultationButtonText,
                      consultationButtonLink: existing.consultationButtonLink || defaultConsultationCtaForm.consultationButtonLink,
                      consultationWhatsappText: existing.consultationWhatsappText || defaultConsultationCtaForm.consultationWhatsappText,
                      consultationWhatsappLink: existing.consultationWhatsappLink || defaultConsultationCtaForm.consultationWhatsappLink,
                  }
                : defaultConsultationCtaForm
        );
    }, [services]);

    const catalog = useMemo(() => {
        const backendBySlug = new Map(services.map((service) => [service.slug, service]));

        return defaultServiceSeed.map((seed) => {
            const normalizedSeed = normalizeSeed(seed);
            const backendService = backendBySlug.get(normalizedSeed.slug || toSlug(normalizedSeed.title));
            const detailSeed = getDetailSeed(normalizedSeed);

            return backendService
                ? {
                      ...detailSeed,
                      ...backendService,
                  }
                : ({
                      _id: `seed-${normalizedSeed.slug || toSlug(normalizedSeed.title)}`,
                      ...detailSeed,
                      createdAt: '',
                      updatedAt: '',
                  } satisfies Service);
        });
    }, [services]);

    const catalogBySlug = useMemo(() => {
        return catalog.reduce<Record<string, Service>>((acc, service) => {
            acc[service.slug] = service;
            return acc;
        }, {});
    }, [catalog]);

    const groups = useMemo(() => {
        return serviceGroups.map((group) => {
            if ('subgroups' in group) {
                const servicesFromSubgroups = group.subgroups.flatMap((subcategory) => subcategory.slugs.map((slug) => catalogBySlug[slug]).filter(Boolean));
                return {
                    ...group,
                    services: servicesFromSubgroups.sort((a, b) => a.order - b.order),
                };
            }

            return {
                ...group,
                services: group.slugs.map((slug) => catalogBySlug[slug]).filter(Boolean).sort((a, b) => a.order - b.order),
            };
        });
    }, [catalogBySlug]);

    const resetForm = () => {
        setEditingService(null);
        setFormData(emptyForm);
    };

    const handleEdit = (service: Service) => {
        setEditingService(service);
        setFormData({
            title: service.title,
            slug: service.slug,
            shortDescription: service.shortDescription,
            description: service.description,
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
            slug: formData.slug || toSlug(formData.title),
            keyBenefits: formData.keyBenefits || [],
            support: formData.support || [],
            limitations: formData.limitations || [],
            nonComplianceRisks: formData.nonComplianceRisks || [],
            offers: formData.offers || [],
        };

        try {
            if (editingService && !editingService._id.startsWith('seed-')) {
                await api.put(`/services/${editingService._id}`, payload);
                toast({ title: 'Success', description: 'Service updated successfully' });
            } else {
                const existing = services.find((item) => item.slug === payload.slug);
                if (existing) {
                    await api.put(`/services/${existing._id}`, payload);
                    toast({ title: 'Success', description: 'Service updated successfully' });
                } else {
                    await api.post('/services', payload);
                    toast({ title: 'Success', description: 'Service created successfully' });
                }
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
        const missing = defaultServiceSeed
            .map((service) => normalizeSeed(service))
            .filter((service) => service.slug && !existingSlugs.has(service.slug));

        if (missing.length === 0) {
            toast({ title: 'Nothing to import', description: 'All frontend services are already present.' });
            return;
        }

        const failures: string[] = [];

        for (const service of missing) {
            try {
                await api.post('/services', getDetailSeed(service));
            } catch {
                failures.push(service.title);
            }
        }

        await fetchServices();
        toast({
            title: failures.length ? 'Partial success' : 'Success',
            description: failures.length
                ? `Imported ${missing.length - failures.length} services. Failed: ${failures.join(', ')}`
                : `Imported ${missing.length} services from the frontend catalog.`,
        });
    };

    const handleConsultationCtaSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSavingConsultationCta(true);

        const payload: ServiceFormData & Record<string, string> = {
            title: consultationCtaForm.title,
            slug: SERVICE_CONSULTATION_CTA_SLUG,
            shortDescription: consultationCtaForm.shortDescription,
            description: consultationCtaForm.description,
            image: '',
            consultationOverline: consultationCtaForm.consultationOverline,
            consultationButtonText: consultationCtaForm.consultationButtonText,
            consultationButtonLink: consultationCtaForm.consultationButtonLink,
            consultationWhatsappText: consultationCtaForm.consultationWhatsappText,
            consultationWhatsappLink: consultationCtaForm.consultationWhatsappLink,
            isActive: true,
            order: 0,
        };

        try {
            const existing = services.find((service) => service.slug === SERVICE_CONSULTATION_CTA_SLUG);
            if (existing) {
                await api.put(`/services/${existing._id}`, payload);
            } else {
                await api.post('/services', payload);
            }

            toast({
                title: 'Success',
                description: 'Service consultation CTA saved successfully',
            });
            fetchServices();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to save service consultation CTA',
                variant: 'destructive',
            });
        } finally {
            setSavingConsultationCta(false);
        }
    };

    const updateTextList = (field: keyof Pick<ServiceFormData, 'keyBenefits' | 'support' | 'limitations' | 'nonComplianceRisks' | 'offers'>, value: string) => {
        setFormData({ ...formData, [field]: fromLines(value) });
    };

    const renderList = (items?: string[], emptyMessage = 'Not provided yet.') => {
        if (!items || items.length === 0) {
            return <p className="text-xs text-muted-foreground">{emptyMessage}</p>;
        }

        return (
            <ul className="mt-2 space-y-2">
                {items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-600">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span className="text-justify">{item}</span>
                    </li>
                ))}
            </ul>
        );
    };

    const renderServiceCard = (service: Service) => {
        const editable = Boolean(services.find((item) => item.slug === service.slug));
        const detail = getDetailData(service.slug);

        return (
            <Card key={service.slug} className="overflow-hidden">
                <CardHeader className="p-0">
                    <div className="flex items-start justify-between gap-4 p-5">
                        <div>
                            <CardTitle className="text-lg">{service.title}</CardTitle>
                            <p className="mt-1 text-sm text-muted-foreground">{service.shortDescription}</p>
                            <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                                <span>Slug: {service.slug}</span>
                                <span>â€¢</span>
                                <span>Order: {service.order}</span>
                                <span>â€¢</span>
                                <span className={service.isActive ? 'text-green-600' : 'text-red-600'}>
                                    {service.isActive ? 'Active' : 'Inactive'}
                                </span>
                                {!editable && <span className="text-amber-600">Frontend seed only</span>}
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="icon" onClick={() => handleEdit(service)}>
                                <Edit className="h-4 w-4" />
                            </Button>
                            {editable ? (
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDelete(services.find((item) => item.slug === service.slug)!._id)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            ) : null}
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-4 px-5 pb-5">
                    <details className="rounded-xl border border-border bg-muted/20 p-4">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-foreground">
                            <span>View all content</span>
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </summary>

                        <div className="mt-4 space-y-4">
                            <div>
                                <p className="text-sm font-semibold text-foreground">Description</p>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground whitespace-pre-line text-justify">
                                    {detail?.description || service.description}
                                </p>
                            </div>

                            {contentBlocks.map((block) => (
                                <div key={block.key}>
                                    <p className="text-sm font-semibold text-foreground">{block.label}</p>
                                    {renderList((service as any)[block.key], 'Not provided yet.')}
                                </div>
                            ))}
                        </div>
                    </details>
                </CardContent>
            </Card>
        );
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Services</h1>
                    <p className="text-muted-foreground">
                        Edit the 5 main service categories and all of their sub-services here.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Button type="button" variant="outline" onClick={seedDefaultServices} className="hidden sm:inline-flex">
                        Import Frontend Catalog
                    </Button>
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                        <DialogTrigger asChild>
                            <Button onClick={resetForm}>
                                <Plus className="mr-2 h-4 w-4" />
                                Add Service
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>{editingService ? 'Edit Service' : 'Add New Service'}</DialogTitle>
                                <DialogDescription>
                                    {editingService ? 'Update service details' : 'Create a new service offering'}
                                </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="title">Title *</Label>
                                        <Input
                                            id="title"
                                            required
                                            value={formData.title}
                                            onChange={(e) =>
                                                setFormData((current) => ({
                                                    ...current,
                                                    title: e.target.value,
                                                    slug: current.slug ? current.slug : toSlug(e.target.value),
                                                }))
                                            }
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="slug">Slug *</Label>
                                        <Input
                                            id="slug"
                                            required
                                            value={formData.slug || ''}
                                            onChange={(e) => setFormData({ ...formData, slug: toSlug(e.target.value) })}
                                            placeholder="private-limited-company"
                                        />
                                    </div>
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

                                <div className="grid gap-4 md:grid-cols-2">
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

                                <div className="flex justify-end gap-2">
                                    <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button type="submit">{editingService ? 'Update' : 'Create'}</Button>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <Card className="border-primary/20">
                <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                            <CardTitle className="text-2xl">Service Consultation CTA</CardTitle>
                            <p className="mt-1 text-sm text-muted-foreground">
                                This single CTA is shown on every service detail page.
                            </p>
                        </div>
                        <Badge variant="outline">Shared</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleConsultationCtaSubmit} className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="ctaOverline">Overline</Label>
                                <Input
                                    id="ctaOverline"
                                    value={consultationCtaForm.consultationOverline}
                                    onChange={(e) =>
                                        setConsultationCtaForm({ ...consultationCtaForm, consultationOverline: e.target.value })
                                    }
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="ctaButtonText">Primary Button Text</Label>
                                <Input
                                    id="ctaButtonText"
                                    value={consultationCtaForm.consultationButtonText}
                                    onChange={(e) =>
                                        setConsultationCtaForm({ ...consultationCtaForm, consultationButtonText: e.target.value })
                                    }
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="ctaTitle">Title</Label>
                            <Input
                                id="ctaTitle"
                                value={consultationCtaForm.title}
                                onChange={(e) => setConsultationCtaForm({ ...consultationCtaForm, title: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="ctaDescription">Description</Label>
                            <Textarea
                                id="ctaDescription"
                                rows={4}
                                value={consultationCtaForm.description}
                                onChange={(e) =>
                                    setConsultationCtaForm({ ...consultationCtaForm, description: e.target.value, shortDescription: e.target.value })
                                }
                            />
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="ctaButtonLink">Primary Button Link</Label>
                                <Input
                                    id="ctaButtonLink"
                                    value={consultationCtaForm.consultationButtonLink}
                                    onChange={(e) =>
                                        setConsultationCtaForm({ ...consultationCtaForm, consultationButtonLink: e.target.value })
                                    }
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="ctaWhatsappText">WhatsApp Button Text</Label>
                                <Input
                                    id="ctaWhatsappText"
                                    value={consultationCtaForm.consultationWhatsappText}
                                    onChange={(e) =>
                                        setConsultationCtaForm({ ...consultationCtaForm, consultationWhatsappText: e.target.value })
                                    }
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="ctaWhatsappLink">WhatsApp Link</Label>
                            <Input
                                id="ctaWhatsappLink"
                                value={consultationCtaForm.consultationWhatsappLink}
                                onChange={(e) =>
                                    setConsultationCtaForm({ ...consultationCtaForm, consultationWhatsappLink: e.target.value })
                                }
                            />
                        </div>

                        <div className="flex justify-end">
                            <Button type="submit" disabled={savingConsultationCta}>
                                {savingConsultationCta ? 'Saving...' : 'Save Consultation CTA'}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="py-4 text-sm text-muted-foreground">
                    The 5 groups below match the frontend navigation. Each service card mirrors the exact frontend detail sections for that service.
                </CardContent>
            </Card>

            {loading ? (
                <Card>
                    <CardContent className="py-12 text-center">
                        <p className="text-muted-foreground">Loading services...</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-8">
                    {groups.map((group) => (
                        <Card key={group.title} className="border-border/70">
                            <CardHeader>
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div>
                                        <CardTitle className="text-2xl">{group.title}</CardTitle>
                                        <p className="mt-1 text-sm text-muted-foreground">{group.description}</p>
                                    </div>
                                    <Badge variant="secondary">{group.services.length} services</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {'subgroups' in group ? (
                                    <div className="space-y-8">
                                        {group.subgroups.map((subcategory) => (
                                            <div key={subcategory.title} className="space-y-4">
                                                <div className="flex items-center justify-between gap-3">
                                                    <h3 className="text-xl font-semibold text-foreground">{subcategory.title}</h3>
                                                    <Badge variant="secondary">{subcategory.slugs.length} services</Badge>
                                                </div>
                                                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                                                    {subcategory.slugs
                                                        .map((slug) => catalogBySlug[slug])
                                                        .filter(Boolean)
                                                        .sort((a, b) => a.order - b.order)
                                                        .map((service) => renderServiceCard(service))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                                        {group.services.map((service) => renderServiceCard(service))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Services;

