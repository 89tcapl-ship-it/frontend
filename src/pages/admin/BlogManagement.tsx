import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, FileText } from 'lucide-react';
import api from '@/lib/api';
import { BlogPost, BlogFormData } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { format } from 'date-fns';
import { ImageUpload } from '@/components/shared/ImageUpload';

const Blog = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
    const { toast } = useToast();
    const { user } = useAuth();

    const [formData, setFormData] = useState<BlogFormData>({
        title: '',
        excerpt: '',
        content: '',
        category: 'General',
        tags: [],
        status: 'draft',
    });

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const response: any = await api.get('/blog');
            setPosts(response.data);
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to fetch blog posts',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (editingPost) {
                await api.put(`/blog/${editingPost._id}`, formData);
                toast({ title: 'Success', description: 'Post updated successfully' });
            } else {
                await api.post('/blog', formData);
                toast({ title: 'Success', description: 'Post created successfully' });
            }
            setDialogOpen(false);
            resetForm();
            fetchPosts();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to save post',
                variant: 'destructive',
            });
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this post?')) return;

        try {
            await api.delete(`/blog/${id}`);
            toast({ title: 'Success', description: 'Post deleted successfully' });
            fetchPosts();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to delete post',
                variant: 'destructive',
            });
        }
    };

    const handleEdit = (post: BlogPost) => {
        setEditingPost(post);
        setFormData({
            title: post.title,
            excerpt: post.excerpt,
            content: post.content,
            category: post.category,
            tags: post.tags,
            status: post.status,
            featuredImage: post.featuredImage,
        });
        setDialogOpen(true);
    };

    const resetForm = () => {
        setEditingPost(null);
        setFormData({
            title: '',
            excerpt: '',
            content: '',
            category: 'General',
            tags: [],
            status: 'draft',
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Blog Posts</h1>
                    <p className="text-muted-foreground">Create and manage blog content</p>
                </div>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={resetForm}>
                            <Plus className="h-4 w-4 mr-2" />
                            New Post
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>{editingPost ? 'Edit Post' : 'Create New Post'}</DialogTitle>
                            <DialogDescription>
                                {editingPost ? 'Update blog post details' : 'Write a new blog post'}
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
                                <Label htmlFor="excerpt">Excerpt *</Label>
                                <Textarea
                                    id="excerpt"
                                    required
                                    rows={2}
                                    maxLength={300}
                                    value={formData.excerpt}
                                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                    placeholder="Brief summary (max 300 characters)"
                                />
                                <p className="text-xs text-muted-foreground">
                                    {formData.excerpt.length}/300 characters
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content">Content *</Label>
                                <Textarea
                                    id="content"
                                    required
                                    rows={10}
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    placeholder="Write your blog post content here..."
                                />
                            </div>

                            <ImageUpload
                                label="Featured Image"
                                value={formData.featuredImage}
                                onChange={(url) => setFormData({ ...formData, featuredImage: url })}
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Input
                                        id="category"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="status">Status</Label>
                                    <Select
                                        value={formData.status}
                                        onValueChange={(value: 'draft' | 'published') =>
                                            setFormData({ ...formData, status: value })
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="draft">Draft</SelectItem>
                                            <SelectItem value="published">Published</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="tags">Tags (comma-separated)</Label>
                                <Input
                                    id="tags"
                                    value={formData.tags?.join(', ')}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            tags: e.target.value.split(',').map((t) => t.trim()).filter(Boolean),
                                        })
                                    }
                                    placeholder="business, compliance, tax"
                                />
                            </div>

                            <div className="flex gap-2 justify-end">
                                <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit">{editingPost ? 'Update' : 'Create'}</Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {loading ? (
                <Card>
                    <CardContent className="py-12 text-center">
                        <p className="text-muted-foreground">Loading posts...</p>
                    </CardContent>
                </Card>
            ) : posts.length === 0 ? (
                <Card>
                    <CardContent className="py-12 text-center">
                        <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">No blog posts yet. Create your first post!</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-4">
                    {posts.map((post) => (
                        <Card key={post._id}>
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1 flex-1">
                                        <div className="flex items-center gap-2">
                                            <CardTitle className="text-xl">{post.title}</CardTitle>
                                            <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                                                {post.status}
                                            </Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="icon" onClick={() => handleEdit(post)}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" onClick={() => handleDelete(post._id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                    <span>By {post.author.name}</span>
                                    <span>•</span>
                                    <span>Category: {post.category}</span>
                                    {post.tags.length > 0 && (
                                        <>
                                            <span>•</span>
                                            <span>Tags: {post.tags.join(', ')}</span>
                                        </>
                                    )}
                                    <span>•</span>
                                    <span>
                                        {post.publishedAt
                                            ? `Published ${format(new Date(post.publishedAt), 'PPP')}`
                                            : `Created ${format(new Date(post.createdAt), 'PPP')}`}
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

export default Blog;
