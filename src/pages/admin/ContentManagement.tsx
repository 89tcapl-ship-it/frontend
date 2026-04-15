import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
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

const ContentManagement = () => {
    const [selectedPage, setSelectedPage] = useState('home');
    const [pageContent, setPageContent] = useState<PageContent | null>(null);
    const [loading, setLoading] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingSection, setEditingSection] = useState<PageSection | null>(null);
    const { toast } = useToast();

    const [formData, setFormData] = useState<PageSection>({
        sectionId: '',
        title: '',
        subtitle: '',
        content: '',
        buttonText: '',
        buttonLink: '',
        imageUrl: '',
        order: 0,
        isActive: true,
    });

    const pages = [
        { value: 'home', label: 'Home Page' },
        { value: 'about', label: 'About Page' },
        { value: 'contact', label: 'Contact Page' },
    ];

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (editingSection) {
                // Update existing section
                await api.put(`/content/${selectedPage}/sections/${editingSection.sectionId}`, formData);
                toast({ title: 'Success', description: 'Section updated successfully' });
            } else {
                // Add new section
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

    const handleEdit = (section: PageSection) => {
        setEditingSection(section);
        setFormData(section);
        setDialogOpen(true);
    };

    const resetForm = () => {
        setEditingSection(null);
        setFormData({
            sectionId: '',
            title: '',
            subtitle: '',
            content: '',
            buttonText: '',
            buttonLink: '',
            imageUrl: '',
            order: 0,
            isActive: true,
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Content Management</h1>
                    <p className="text-muted-foreground">Edit live website content</p>
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
                                    placeholder="e.g., hero, features, about"
                                    disabled={!!editingSection}
                                />
                                <p className="text-xs text-muted-foreground">
                                    Unique identifier for this section (cannot be changed after creation)
                                </p>
                            </div>

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

                            <div className="space-y-2">
                                <Label htmlFor="content">Content</Label>
                                <Textarea
                                    id="content"
                                    rows={4}
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
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

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="order">Display Order</Label>
                                    <Input
                                        id="order"
                                        type="number"
                                        value={formData.order}
                                        onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
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

            {/* Page Selector */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                        <Label>Select Page:</Label>
                        <Select value={selectedPage} onValueChange={setSelectedPage}>
                            <SelectTrigger className="w-64">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {pages.map((page) => (
                                    <SelectItem key={page.value} value={page.value}>
                                        {page.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            {/* Sections List */}
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
                                    <div className="flex items-start justify-between">
                                        <div className="space-y-1 flex-1">
                                            <div className="flex items-center gap-2">
                                                <CardTitle className="text-lg">{section.title || section.sectionId}</CardTitle>
                                                {!section.isActive && (
                                                    <span className="text-xs bg-muted px-2 py-1 rounded">Inactive</span>
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
