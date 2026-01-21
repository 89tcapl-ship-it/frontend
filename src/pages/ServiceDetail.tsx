import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import api from '@/lib/api';
import { SEO } from '@/hooks/useSEO';
import { Skeleton } from '@/components/ui/skeleton';
import { PageHero } from '@/components/shared/PageHero';

interface Service {
    _id: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    image: string;
    features: string[];
    isActive: boolean;
}

const ServiceDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [service, setService] = useState<Service | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchService = async () => {
            try {
                setLoading(true);
                const response: any = await api.get(`/services/${slug}`);
                setService(response.data);
            } catch (err: any) {
                setError(err.message || 'Failed to load service');
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchService();
        }
    }, [slug]);

    if (loading) {
        return (
            <Layout>
                <div className="container-custom section-padding">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <Skeleton className="h-12 w-3/4 rounded" />
                        <Skeleton className="h-6 w-1/2 rounded" />
                        <div className="space-y-4">
                            <Skeleton className="h-4 w-full rounded" />
                            <Skeleton className="h-4 w-full rounded" />
                            <Skeleton className="h-4 w-3/4 rounded" />
                        </div>
                        <Skeleton className="h-96 w-full rounded" />
                    </div>
                </div>
            </Layout>
        );
    }

    if (error || !service) {
        return (
            <Layout>
                <div className="container-custom section-padding">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
                        <p className="text-muted-foreground mb-8">
                            {error || 'The service you are looking for does not exist.'}
                        </p>
                        <Button asChild>
                            <Link to="/services">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Services
                            </Link>
                        </Button>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <SEO
                title={`${service.title} | 89T Corporate Advisors`}
                description={service.shortDescription}
                keywords={`${service.title}, business services, corporate advisory, Bangalore`}
            />

            <PageHero
                title={service.title}
                subtitle="Expert Service"
                pageName="services"
            />

            <article className="section-padding bg-background">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <Button asChild variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
                            <Link to="/services">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to All Services
                            </Link>
                        </Button>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {/* Main Content */}
                            <div className="md:col-span-2">
                                <div className="mb-8 rounded-xl overflow-hidden shadow-sm">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-auto object-cover max-h-[400px]"
                                    />
                                </div>
                                <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-img:rounded-lg">
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        rehypePlugins={[rehypeRaw, rehypeSanitize]}
                                    >
                                        {service.description}
                                    </ReactMarkdown>
                                </div>
                            </div>

                            {/* Sidebar / Features */}
                            <div className="md:col-span-1 space-y-8">
                                <div className="bg-surface p-6 rounded-xl border border-border">
                                    <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 text-center">
                                    <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Get in touch with our experts to discuss your specific requirements.
                                    </p>
                                    <Button asChild className="w-full">
                                        <Link to="/contact">Contact Us</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default ServiceDetail;
