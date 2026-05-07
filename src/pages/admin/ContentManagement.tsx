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
import { Plus, Edit, Trash2, FileEdit } from 'lucide-react';
import api from '@/lib/api';
import { useToast } from '@/hooks/use-toast';
import { ImageUpload } from '@/components/shared/ImageUpload';

interface PageSection {
    sectionId: string;
    title?: string;
    subtitle?: string;
    content?: string;
    buttonText?: string;
    buttonLink?: string;
    imageUrl?: string;
    order: number;
    isActive: boolean;
    _id?: string;
}

interface PageContent {
    _id: string;
    page: string;
    sections: PageSection[];
}

interface PageOption {
    value: string;
    label: string;
    hint: string;
}

interface PageGroup {
    title: string;
    description: string;
    items: PageOption[];
}

const pageGroups: PageGroup[] = [
    {
        title: 'Global',
        description: 'Shared content used across the site shell.',
        items: [
            { value: 'header', label: 'Header / Navigation', hint: 'Logo, menu labels, CTA text' },
            { value: 'footer', label: 'Footer', hint: 'Tagline, disclaimer, contact text' },
        ],
    },
    {
        title: 'Homepage',
        description: 'All homepage blocks are editable here.',
        items: [
            { value: 'home', label: 'Home Page', hint: 'Hero, service intro, about, CTA' },
            { value: 'about', label: 'About Page', hint: 'Intro, founders, approach' },
            { value: 'contact', label: 'Contact Page', hint: 'Contact info, map, form copy' },
        ],
    },
    {
        title: 'Services',
        description: 'The five main service areas shown in the navigation.',
        items: [
            { value: 'services', label: 'Services Overview', hint: 'Main services landing page' },
            { value: 'starting-business', label: 'Starting a Business', hint: 'Entity formation + allied registrations' },
            { value: 'support-services', label: 'Support Services', hint: 'Book keeping, payroll, CFO' },
            { value: 'compliances', label: 'Compliances', hint: 'GST, PF, ESI, PT, ITR, MCA' },
            { value: 'funding', label: 'Funding', hint: 'Funding, diligence, valuation, FDI' },
            { value: 'audits', label: 'Audits', hint: 'Statutory, tax, internal, TP, investigation' },
        ],
    },
];

const pageTemplates: Record<string, string[]> = {
    header: ['logo', 'about-link', 'starting-business-link', 'support-services-link', 'compliances-link', 'funding-link', 'audits-link', 'cta'],
    footer: ['tagline', 'disclaimer'],
    home: ['hero', 'services-intro', 'business-support', 'about', 'why-choose-us', 'cta'],
    about: ['intro', 'approach', 'founder-mahitha', 'founder-diwakar', 'founder-surendranath', 'founder-lokesh', 'founder-jyothi', 'approach-point-1', 'approach-point-2', 'approach-point-3'],
    contact: ['header', 'contact-email', 'contact-phone', 'contact-address', 'form', 'map'],
    services: ['header', 'starting-business', 'support-services', 'compliances', 'funding', 'audits'],
    'starting-business': ['header', 'entity-formation', 'allied-registrations'],
    'support-services': ['header'],
    compliances: ['header', 'gst-compliance', 'epf-compliance', 'esi-compliance', 'pt-compliance', 'itr-tds-compliance', 'mca-compliance', 'tax-compliances', 'regulatory-compliances'],
    funding: ['header'],
    audits: ['header'],
};

const emptyForm: PageSection = {
    sectionId: '',
    title: '',
    subtitle: '',
    content: '',
    buttonText: '',
    buttonLink: '',
    imageUrl: '',
    order: 0,
    isActive: true,
};

const ContentManagement = () => {
    const [selectedPage, setSelectedPage] = useState('home');
    const [pageContent, setPageContent] = useState<PageContent | null>(null);
    const [loading, setLoading] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingSection, setEditingSection] = useState<PageSection | null>(null);
    const { toast } = useToast();
    const [formData, setFormData] = useState<PageSection>(emptyForm);

    const selectedPageMeta = useMemo(() => {
        for (const group of pageGroups) {
            const item = group.items.find((entry) => entry.value === selectedPage);
            if (item) {
                return { group: group.title, ...item };
            }
        }
        return null;
    }, [selectedPage]);

    const fetchPageContent = async (page: string) => {
        try {
            setLoading(true);
            const response: any = await api.get(`/content/${page}`);
            setPageContent(response.data);
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to fetch page content',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPageContent(selectedPage);
    }, [selectedPage]);

    const resetForm = () => {
        setEditingSection(null);
        setFormData(emptyForm);
    };

    const handleEdit = (section: PageSection) => {
        setEditingSection(section);
        setFormData(section);
        setDialogOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (editingSection) {
                await api.put(`/content/${selectedPage}/sections/${editingSection.sectionId}`, formData);
                toast({ title: 'Success', description: 'Section updated successfully' });
            } else {
                await api.post(`/content/${selectedPage}/sections`, formData);
                toast({ title: 'Success', description: 'Section added successfully' });
            }
            setDialogOpen(false);
            resetForm();
            fetchPageContent(selectedPage);
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to save section',
                variant: 'destructive',
            });
        }
    };

    const handleDelete = async (sectionId: string) => {
        if (!confirm('Are you sure you want to delete this section?')) return;

        try {
            await api.delete(`/content/${selectedPage}/sections/${sectionId}`);
            toast({ title: 'Success', description: 'Section deleted successfully' });
            fetchPageContent(selectedPage);
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to delete section',
                variant: 'destructive',
            });
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Content Management</h1>
                    <p className="text-muted-foreground">
                        Edit the homepage, the five service pages, and the shared header/footer content.
                    </p>
                </div>

                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={resetForm}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Section
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>{editingSection ? 'Edit Section' : 'Add New Section'}</DialogTitle>
                            <DialogDescription>
                                {editingSection ? 'Update section content' : 'Create a new content section'}
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="sectionId">Section ID *</Label>
                                <Input
                                    id="sectionId"
                                    required
                                    value={formData.sectionId}
                                    onChange={(e) => setFormData({ ...formData, sectionId: e.target.value })}
                                    placeholder="hero, cta, header, etc."
                                    disabled={!!editingSection}
                                />
                                <p className="text-xs text-muted-foreground">
                                    Use one of the suggested section IDs for the selected page, or add a new one if needed.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subtitle">Subtitle</Label>
                                    <Input
                                        id="subtitle"
                                        value={formData.subtitle}
                                        onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content">Content</Label>
                                <Textarea
                                    id="content"
                                    rows={4}
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="buttonText">Button Text</Label>
                                    <Input
                                        id="buttonText"
                                        value={formData.buttonText}
                                        onChange={(e) => setFormData({ ...formData, buttonText: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="buttonLink">Button Link</Label>
                                    <Input
                                        id="buttonLink"
                                        value={formData.buttonLink}
                                        onChange={(e) => setFormData({ ...formData, buttonLink: e.target.value })}
                                    />
                                </div>
                            </div>

                            <ImageUpload
                                label="Section Image"
                                value={formData.imageUrl}
                                onChange={(url) => setFormData({ ...formData, imageUrl: url })}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                <Button type="submit">{editingSection ? 'Update' : 'Create'}</Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
                {pageGroups.map((group) => (
                    <Card key={group.title} className="border-border/70">
                        <CardHeader>
                            <CardTitle className="text-lg">{group.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">{group.description}</p>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {group.items.map((page) => {
                                const active = page.value === selectedPage;
                                return (
                                    <button
                                        key={page.value}
                                        type="button"
                                        onClick={() => setSelectedPage(page.value)}
                                        className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${active
                                            ? 'border-primary bg-primary/5'
                                            : 'border-border hover:bg-muted'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <div>
                                                <p className="font-medium text-foreground">{page.label}</p>
                                                <p className="text-xs text-muted-foreground">{page.hint}</p>
                                            </div>
                                            {active && <Badge>Open</Badge>}
                                        </div>
                                    </button>
                                );
                            })}
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="border-border/70">
                <CardHeader>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <CardTitle className="text-xl">{selectedPageMeta?.label || selectedPage}</CardTitle>
                            <p className="text-sm text-muted-foreground">
                                {selectedPageMeta?.hint || 'Selected content bucket'}
                            </p>
                        </div>
                        <Badge variant="secondary">{selectedPageMeta?.group || 'Content'}</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="rounded-xl border border-dashed border-border bg-muted/30 p-4">
                        <p className="text-sm font-medium text-foreground">Expected section IDs</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {(pageTemplates[selectedPage] || []).map((sectionId) => (
                                <Badge key={sectionId} variant="outline" className="text-xs">
                                    {sectionId}
                                </Badge>
                            ))}
                        </div>
                        <p className="mt-3 text-xs text-muted-foreground">
                            This list reflects the homepage blocks and the five service pages shown in the current frontend.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {loading ? (
                <Card>
                    <CardContent className="py-12 text-center">
                        <p className="text-muted-foreground">Loading content...</p>
                    </CardContent>
                </Card>
            ) : !pageContent || pageContent.sections.length === 0 ? (
                <Card>
                    <CardContent className="py-12 text-center">
                        <FileEdit className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">No content sections yet. Add your first section!</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-4">
                    {pageContent.sections
                        .sort((a, b) => a.order - b.order)
                        .map((section) => (
                            <Card key={section.sectionId}>
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="space-y-1 flex-1">
                                            <div className="flex items-center gap-2">
                                                <CardTitle className="text-lg">{section.title || section.sectionId}</CardTitle>
                                                {!section.isActive && (
                                                    <Badge variant="secondary">Inactive</Badge>
                                                )}
                                            </div>
                                            {section.subtitle && (
                                                <p className="text-sm text-muted-foreground">{section.subtitle}</p>
                                            )}
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="ghost" size="icon" onClick={() => handleEdit(section)}>
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => handleDelete(section.sectionId)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    {section.content && (
                                        <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">
                                            {section.content}
                                        </p>
                                    )}
                                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                                        <span>ID: {section.sectionId}</span>
                                        <span>•</span>
                                        <span>Order: {section.order}</span>
                                        {section.buttonText && (
                                            <>
                                                <span>•</span>
                                                <span>Button: {section.buttonText}</span>
                                            </>
                                        )}
                                        {section.imageUrl && (
                                            <>
                                                <span>•</span>
                                                <span>Has Image</span>
                                            </>
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

export default ContentManagement;
