import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import api from '@/lib/api';
import { format } from 'date-fns';

interface BlogPost {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage?: string;
    author: {
        _id: string;
        name: string;
    };
    category: string;
    tags: string[];
    status: 'draft' | 'published';
    publishedAt?: string;
    createdAt: string;
}

const BlogDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const response: any = await api.get(`/blog/${id}`);
                setPost(response.data);
            } catch (err: any) {
                setError(err.message || 'Failed to load blog post');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPost();
        }
    }, [id]);

    if (loading) {
        return (
            <Layout>
                <div className="container-custom section-padding">
                    <div className="max-w-4xl mx-auto">
                        <div className="h-8 w-32 bg-muted animate-pulse rounded mb-8" />
                        <div className="h-12 w-3/4 bg-muted animate-pulse rounded mb-4" />
                        <div className="h-6 w-1/2 bg-muted animate-pulse rounded mb-8" />
                        <div className="h-96 w-full bg-muted animate-pulse rounded mb-8" />
                        <div className="space-y-4">
                            <div className="h-4 w-full bg-muted animate-pulse rounded" />
                            <div className="h-4 w-full bg-muted animate-pulse rounded" />
                            <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }

    if (error || !post) {
        return (
            <Layout>
                <div className="container-custom section-padding">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
                        <p className="text-muted-foreground mb-8">
                            {error || 'The blog post you are looking for does not exist.'}
                        </p>
                        <Button asChild>
                            <Link to="/blog">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Blog
                            </Link>
                        </Button>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <article className="section-padding bg-background">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        {/* Back Button */}
                        <Button asChild variant="ghost" className="mb-8">
                            <Link to="/blog">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Blog
                            </Link>
                        </Button>

                        {/* Post Header */}
                        <header className="mb-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <Badge variant="secondary">{post.category}</Badge>
                                {post.tags.map((tag) => (
                                    <Badge key={tag} variant="outline">
                                        <Tag className="h-3 w-3 mr-1" />
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                                {post.title}
                            </h1>

                            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span>{post.author.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>
                                        {post.publishedAt
                                            ? format(new Date(post.publishedAt), 'MMMM d, yyyy')
                                            : format(new Date(post.createdAt), 'MMMM d, yyyy')}
                                    </span>
                                </div>
                            </div>
                        </header>

                        {/* Featured Image */}
                        {post.featuredImage && (
                            <div className="mb-8 rounded-xl overflow-hidden">
                                <img
                                    src={post.featuredImage}
                                    alt={post.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        )}

                        {/* Post Content - Markdown Rendered */}
                        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-img:rounded-lg">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                            >
                                {post.content}
                            </ReactMarkdown>
                        </div>

                        {/* Post Footer */}
                        <footer className="mt-12 pt-8 border-t border-border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Written by</p>
                                    <p className="font-semibold text-foreground">{post.author.name}</p>
                                </div>
                                <Button asChild>
                                    <Link to="/contact">Get in Touch</Link>
                                </Button>
                            </div>
                        </footer>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default BlogDetail;
