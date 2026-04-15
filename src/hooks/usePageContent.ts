import { useEffect, useState } from 'react';
import api from '@/lib/api';

export interface PageSection {
    sectionId: string;
    title?: string;
    subtitle?: string;
    content?: string;
    buttonText?: string;
    buttonLink?: string;
    imageUrl?: string;
    order: number;
    isActive: boolean;
}

export interface PageContent {
    _id: string;
    page: string;
    sections: PageSection[];
}

export const usePageContent = (pageName: string) => {
    const [content, setContent] = useState<PageContent | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                setLoading(true);
                const response: any = await api.get(`/content/${pageName}`);
                setContent(response.data);
                setError(null);
            } catch (err: any) {
                console.error(`Error fetching ${pageName} content:`, err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [pageName]);

    const getSection = (sectionId: string): PageSection | undefined => {
        return content?.sections.find(s => s.sectionId === sectionId && s.isActive);
    };

    const getSectionValue = (sectionId: string, field: keyof PageSection, defaultValue: any = '') => {
        const section = getSection(sectionId);
        return section?.[field] || defaultValue;
    };

    return {
        content,
        loading,
        error,
        getSection,
        getSectionValue,
    };
};

// Helper functions for direct usage with content object
export const getSectionContent = (content: PageContent | null, sectionId: string): string => {
    return content?.sections.find(s => s.sectionId === sectionId)?.content || '';
};

export const getSectionTitle = (content: PageContent | null, sectionId: string): string => {
    return content?.sections.find(s => s.sectionId === sectionId)?.title || '';
};

export const getSection = (content: PageContent | null, sectionId: string): PageSection | undefined => {
    return content?.sections.find(s => s.sectionId === sectionId);
};
