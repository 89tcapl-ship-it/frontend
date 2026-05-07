import { useEffect, useMemo, useState } from 'react';
import api from '@/lib/api';
import type { Service } from '@/lib/types';

export const useServicesCatalog = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                const response: any = await api.get('/services');
                setServices(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Failed to fetch services:', error);
                setServices([]);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    const servicesBySlug = useMemo(() => {
        return services.reduce<Record<string, Service>>((acc, service) => {
            acc[service.slug] = service;
            return acc;
        }, {});
    }, [services]);

    const getServiceBySlug = (slug: string) => servicesBySlug[slug];

    return {
        services,
        servicesBySlug,
        loading,
        getServiceBySlug,
    };
};
