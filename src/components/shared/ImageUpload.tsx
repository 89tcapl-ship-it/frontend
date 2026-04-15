import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import api from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

interface ImageUploadProps {
    value?: string;
    onChange: (url: string) => void;
    label?: string;
    accept?: string;
}

export function ImageUpload({ value, onChange, label = 'Upload Image', accept = 'image/*' }: ImageUploadProps) {
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState(value || '');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { toast } = useToast();

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;



        // Validate file size (20MB)
        if (file.size > 20 * 1024 * 1024) {
            toast({
                title: 'File too large',
                description: 'Image must be less than 20MB',
                variant: 'destructive',
            });
            return;
        }

        try {
            setUploading(true);

            // Create form data
            const formData = new FormData();
            formData.append('file', file);

            // Upload to server
            const response: any = await api.post('/upload', formData);

            const imageUrl = response.data.url;
            setPreview(imageUrl);
            onChange(imageUrl);

            toast({
                title: 'Success',
                description: 'Image uploaded successfully',
            });
        } catch (error: any) {
            toast({
                title: 'Upload failed',
                description: error.message || 'Failed to upload image',
                variant: 'destructive',
            });
        } finally {
            setUploading(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    const handleRemove = () => {
        setPreview('');
        onChange('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="space-y-2">
            <Label>{label}</Label>

            {preview ? (
                <div className="relative rounded-lg border border-border overflow-hidden">
                    <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-48 object-cover"
                    />
                    <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={handleRemove}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            ) : (
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                    <ImageIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-4">
                        Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground mb-4">
                        PNG, JPG, GIF up to 5MB
                    </p>
                    <Input
                        ref={fileInputRef}
                        type="file"
                        accept={accept}
                        onChange={handleFileSelect}
                        disabled={uploading}
                        className="hidden"
                        id="image-upload"
                    />
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                    >
                        <Upload className="h-4 w-4 mr-2" />
                        {uploading ? 'Uploading...' : 'Select Image'}
                    </Button>
                </div>
            )}
        </div>
    );
}
