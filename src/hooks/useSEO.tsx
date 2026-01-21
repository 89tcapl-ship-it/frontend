import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
}

export const useSEO = ({
    title = '89T Corporate Advisors | Company Registration & Business Advisory',
    description = 'Expert corporate advisory services for startups and growing businesses. Specializing in company registration, MCA compliance, GST, taxation, and business advisory in Bangalore.',
    keywords = 'company registration, MCA compliance, GST services, income tax filing, business advisory, corporate advisors, startup registration, ROC filing, Bangalore',
    image = 'https://89tcapl.com/logo.png',
    url,
    type = 'website',
    author = '89T Corporate Advisors',
    publishedTime,
    modifiedTime,
}: SEOProps = {}) => {
    const location = useLocation();
    const currentUrl = url || `https://89tcapl.com${location.pathname}`;

    useEffect(() => {
        // Update title
        document.title = title;

        // Update or create meta tags
        const updateMetaTag = (name: string, content: string, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Primary meta tags
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);
        updateMetaTag('author', author);

        // Open Graph
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:image', image, true);
        updateMetaTag('og:url', currentUrl, true);
        updateMetaTag('og:type', type, true);

        // Twitter Card
        updateMetaTag('twitter:title', title, true);
        updateMetaTag('twitter:description', description, true);
        updateMetaTag('twitter:image', image, true);
        updateMetaTag('twitter:url', currentUrl, true);

        // Article specific
        if (publishedTime) {
            updateMetaTag('article:published_time', publishedTime, true);
        }
        if (modifiedTime) {
            updateMetaTag('article:modified_time', modifiedTime, true);
        }
        if (type === 'article') {
            updateMetaTag('article:author', author, true);
        }

        // Update canonical link
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = currentUrl;

    }, [title, description, keywords, image, currentUrl, type, author, publishedTime, modifiedTime]);
};

// Component version for easier use
export const SEO = (props: SEOProps) => {
    useSEO(props);
    return null;
};
