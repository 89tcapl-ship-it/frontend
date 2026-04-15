import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import api from '@/lib/api';
import { Settings as SettingsType, SettingsFormData } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { ImageUpload } from '@/components/shared/ImageUpload';

const Settings = () => {
    const [settings, setSettings] = useState<SettingsType | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const { toast } = useToast();

    const [formData, setFormData] = useState<SettingsFormData>({
        siteName: '',
        siteDescription: '',
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
                contactEmail: response.data.contactEmail,
                contactPhone: response.data.contactPhone,
                address: response.data.address,
                companyInfo: response.data.companyInfo || {
                    cin: '',
                    incorporationDate: '',
                    status: '',
                },
                socialLinks: response.data.socialLinks,
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
                        </div>
                    </CardContent>
                </Card>

                {/* SEO Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle>SEO Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Open Graph Image</Label>
                            <ImageUpload
                                label="Upload OG Image (Recommended: 1200x630px)"
                                value={formData.ogImage}
                                onChange={(url) => setFormData({ ...formData, ogImage: url })}
                            />
                            <p className="text-xs text-muted-foreground">
                                This image will be displayed when your site is shared on social media platforms like Facebook, Twitter, and LinkedIn.
                            </p>
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
