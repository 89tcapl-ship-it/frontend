import { useMemo } from 'react';
import { defaultServiceSeed } from '@/data/defaultServiceSeed';

export interface PublicServiceSummary {
    title: string;
    slug?: string;
    shortDescription: string;
}

export const usePublicServicesCatalog = () => {
    const services = useMemo<PublicServiceSummary[]>(
        () => defaultServiceSeed.map((service) => ({
            title: service.title,
            slug: service.slug,
            shortDescription: service.shortDescription,
        })),
        []
    );

    const servicesBySlug = useMemo(() => {
        return services.reduce<Record<string, PublicServiceSummary>>((acc, service) => {
            if (service.slug) {
                acc[service.slug] = service;
            }
            return acc;
        }, {});
    }, [services]);

    const getServiceBySlug = (slug: string) => servicesBySlug[slug];

    return {
        services,
        servicesBySlug,
        getServiceBySlug,
    };
};
