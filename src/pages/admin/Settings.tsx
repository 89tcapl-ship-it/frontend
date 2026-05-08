import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import api from '@/lib/api';
import { Settings as SettingsType, SettingsFormData } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
    const [settings, setSettings] = useState<SettingsType | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const { toast } = useToast();

    const [formData, setFormData] = useState<SettingsFormData>({
        siteName: '',
        siteDescription: '',
        headerCtaText: '',
        headerCtaLink: '',
        contactEmail: '',
        contactPhone: '',
        address: '',
        companyInfo: {
            cin: '',
            incorporationDate: '',
            status: '',
        },
        socialLinks: {
            facebook: '',
            twitter: '',
            linkedin: '',
            instagram: '',
            youtube: '',
            whatsapp: '',
            showFacebook: true,
            showLinkedin: true,
            showYoutube: true,
            showWhatsapp: true,
        },
        ogImage: '',
    });

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            setLoading(true);
            const response: any = await api.get('/settings');
            setSettings(response.data);
            setFormData({
                siteName: response.data.siteName,
                siteDescription: response.data.siteDescription,
                headerCtaText: response.data.headerCtaText || '',
                headerCtaLink: response.data.headerCtaLink || '',
                contactEmail: response.data.contactEmail,
                contactPhone: response.data.contactPhone,
                address: response.data.address,
                companyInfo: response.data.companyInfo || {
                    cin: '',
                    incorporationDate: '',
                    status: '',
                },
                socialLinks: {
                    facebook: response.data.socialLinks?.facebook || '',
                    twitter: response.data.socialLinks?.twitter || '',
                    linkedin: response.data.socialLinks?.linkedin || '',
                    instagram: response.data.socialLinks?.instagram || '',
                    youtube: response.data.socialLinks?.youtube || '',
                    whatsapp: response.data.socialLinks?.whatsapp || '',
                    showFacebook: response.data.socialLinks?.showFacebook ?? true,
                    showLinkedin: response.data.socialLinks?.showLinkedin ?? true,
                    showYoutube: response.data.socialLinks?.showYoutube ?? true,
                    showWhatsapp: response.data.socialLinks?.showWhatsapp ?? true,
                },
                ogImage: response.data.ogImage || '',
            });
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to fetch settings',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            await api.put('/settings', formData);
            toast({
                title: 'Success',
                description: 'Settings updated successfully',
            });
            fetchSettings();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to update settings',
                variant: 'destructive',
            });
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold">Settings</h1>
                    <p className="text-muted-foreground">Configure your site settings</p>
                </div>
                <Card>
                    <CardContent className="py-12 text-center">
                        <p className="text-muted-foreground">Loading settings...</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Settings</h1>
                <p className="text-muted-foreground">Configure your site settings</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* General Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle>General Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="siteName">Site Name</Label>
                            <Input
                                id="siteName"
                                value={formData.siteName}
                                onChange={(e) => setFormData({ ...formData, siteName: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="siteDescription">Site Description</Label>
                            <Textarea
                                id="siteDescription"
                                rows={3}
                                value={formData.siteDescription}
                                onChange={(e) => setFormData({ ...formData, siteDescription: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="headerCtaText">Header CTA Text</Label>
                                <Input
                                    id="headerCtaText"
                                    value={formData.headerCtaText}
                                    onChange={(e) => setFormData({ ...formData, headerCtaText: e.target.value })}
                                    placeholder="+918958889589"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="headerCtaLink">Header CTA Link</Label>
                                <Input
                                    id="headerCtaLink"
                                    value={formData.headerCtaLink}
                                    onChange={(e) => setFormData({ ...formData, headerCtaLink: e.target.value })}
                                    placeholder="/contact"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="contactEmail">Contact Email</Label>
                            <Input
                                id="contactEmail"
                                type="email"
                                value={formData.contactEmail}
                                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="contactPhone">Contact Phone</Label>
                            <Input
                                id="contactPhone"
                                type="tel"
                                value={formData.contactPhone}
                                onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Textarea
                                id="address"
                                rows={3}
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Social Media Links */}
                <Card>
                    <CardHeader>
                        <CardTitle>Social Media Links</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="facebook">Facebook</Label>
                                <Input
                                    id="facebook"
                                    type="url"
                                    value={formData.socialLinks?.facebook}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            socialLinks: { ...formData.socialLinks!, facebook: e.target.value },
                                        })
                                    }
                                    placeholder="https://facebook.com/yourpage"
                                />
                            </div>
                            <div className="flex items-center justify-between rounded-xl border border-border/70 px-4 py-3">
                                <div>
                                    <Label htmlFor="showFacebook" className="text-sm font-medium">Show Facebook Icon</Label>
                                    <p className="text-xs text-muted-foreground">Hide or show the Facebook icon in the footer.</p>
                                </div>
                                <Switch
                                    id="showFacebook"
                                    checked={formData.socialLinks?.showFacebook ?? true}
                                    onCheckedChange={(checked) =>
                                        setFormData({
                                            ...formData,
                                            socialLinks: { ...formData.socialLinks!, showFacebook: checked },
                                        })
                                    }
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="twitter">Twitter</Label>
                                <Input
                                    id="twitter"
                                    type="url"
                                    value={formData.socialLinks?.twitter}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            socialLinks: { ...formData.socialLinks!, twitter: e.target.value },
                                        })
                                    }
                                    placeholder="https://twitter.com/yourhandle"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="linkedin">LinkedIn</Label>
                                <Input
                                    id="linkedin"
                                    type="url"
                                    value={formData.socialLinks?.linkedin}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            socialLinks: { ...formData.socialLinks!, linkedin: e.target.value },
                                        })
                                    }
                                    placeholder="https://linkedin.com/company/yourcompany"
                                />
                            </div>
                            <div className="flex items-center justify-between rounded-xl border border-border/70 px-4 py-3">
                                <div>
                                    <Label htmlFor="showLinkedin" className="text-sm font-medium">Show LinkedIn Icon</Label>
                                    <p className="text-xs text-muted-foreground">Hide or show the LinkedIn icon in the footer.</p>
                                </div>
                                <Switch
                                    id="showLinkedin"
                                    checked={formData.socialLinks?.showLinkedin ?? true}
                                    onCheckedChange={(checked) =>
                                        setFormData({
                                            ...formData,
                                            socialLinks: { ...formData.socialLinks!, showLinkedin: checked },
                                        })
                                    }
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="instagram">Instagram</Label>
                                <Input
                                    id="instagram"
                                    type="url"
                                    value={formData.socialLinks?.instagram}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            socialLinks: { ...formData.socialLinks!, instagram: e.target.value },
                                        })
                                    }
                                    placeholder="https://instagram.com/yourhandle"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="youtube">YouTube</Label>
                                <Input
                                    id="youtube"
                                    type="url"
                                    value={formData.socialLinks?.youtube}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            socialLinks: { ...formData.socialLinks!, youtube: e.target.value },
                                        })
                                    }
                                    placeholder="https://youtube.com/@yourchannel"
                                />
                            </div>
                            <div className="flex items-center justify-between rounded-xl border border-border/70 px-4 py-3">
                                <div>
                                    <Label htmlFor="showYoutube" className="text-sm font-medium">Show YouTube Icon</Label>
                                    <p className="text-xs text-muted-foreground">Hide or show the YouTube icon in the footer.</p>
                                </div>
                                <Switch
                                    id="showYoutube"
                                    checked={formData.socialLinks?.showYoutube ?? true}
                                    onCheckedChange={(checked) =>
                                        setFormData({
                                            ...formData,
                                            socialLinks: { ...formData.socialLinks!, showYoutube: checked },
                                        })
                                    }
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="whatsapp">WhatsApp</Label>
                                <Input
                                    id="whatsapp"
                                    type="url"
                                    value={formData.socialLinks?.whatsapp}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            socialLinks: { ...formData.socialLinks!, whatsapp: e.target.value },
                                        })
                                    }
                                    placeholder="https://wa.me/917019557994"
                                />
                            </div>
                            <div className="flex items-center justify-between rounded-xl border border-border/70 px-4 py-3">
                                <div>
                                    <Label htmlFor="showWhatsapp" className="text-sm font-medium">Show WhatsApp Icon</Label>
                                    <p className="text-xs text-muted-foreground">Hide or show the WhatsApp icon in the footer.</p>
                                </div>
                                <Switch
                                    id="showWhatsapp"
                                    checked={formData.socialLinks?.showWhatsapp ?? true}
                                    onCheckedChange={(checked) =>
                                        setFormData({
                                            ...formData,
                                            socialLinks: { ...formData.socialLinks!, showWhatsapp: checked },
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-end">
                    <Button type="submit" disabled={saving}>
                        {saving ? 'Saving...' : 'Save Settings'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Settings;
