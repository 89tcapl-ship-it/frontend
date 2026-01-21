// User types
export interface User {
    _id: string;
    name: string;
    email: string;
    role: 'super_admin' | 'admin';
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

// Contact types
export interface Contact {
    _id: string;
    fullName: string;
    email: string;
    phone: string;
    serviceInterest: string;
    message: string;
    status: 'new' | 'read' | 'replied' | 'archived';
    notes: string;
    createdAt: string;
    updatedAt: string;
}

export interface ContactFormData {
    fullName: string;
    email: string;
    phone: string;
    serviceInterest: string;
    message: string;
}

// Service types
export interface Service {
    _id: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    image: string;
    features: string[];
    isActive: boolean;
    order: number;
    createdAt: string;
    updatedAt: string;
}

export interface ServiceFormData {
    title: string;
    slug?: string;
    shortDescription: string;
    description: string;
    image?: string;
    features: string[];
    isActive?: boolean;
    order?: number;
}

// Blog types
export interface BlogPost {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    author: {
        _id: string;
        name: string;
        email: string;
    };
    category: string;
    tags: string[];
    status: 'draft' | 'published';
    publishedAt?: string;
    createdAt: string;
    updatedAt: string;
}

export interface BlogFormData {
    title: string;
    slug?: string;
    excerpt: string;
    content: string;
    featuredImage?: string;
    category?: string;
    tags?: string[];
    status?: 'draft' | 'published';
}

// Settings types
export interface Settings {
    _id: string;
    siteName: string;
    siteDescription: string;
    contactEmail: string;
    contactPhone: string;
    address: string;
    companyInfo?: {
        cin: string;
        incorporationDate: string;
        status: string;
    };
    socialLinks: {
        facebook: string;
        twitter: string;
        linkedin: string;
        instagram: string;
    };
    logo: string;
    favicon: string;
    ogImage?: string;
    updatedBy?: string;
    createdAt: string;
    updatedAt: string;
}

export interface SettingsFormData {
    siteName?: string;
    siteDescription?: string;
    contactEmail?: string;
    contactPhone?: string;
    address?: string;
    companyInfo?: {
        cin?: string;
        incorporationDate?: string;
        status?: string;
    };
    socialLinks?: {
        facebook?: string;
        twitter?: string;
        linkedin?: string;
        instagram?: string;
    };
    logo?: string;
    favicon?: string;
    ogImage?: string;
}

// API Response types
export interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data?: T;
    count?: number;
    total?: number;
    page?: number;
    pages?: number;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    data: {
        user: User;
        token: string;
    };
}

export interface SetupStatusResponse {
    success: boolean;
    data: {
        setupRequired: boolean;
    };
}

// Stats types
export interface InboxStats {
    total: number;
    new: number;
    read: number;
    replied: number;
    archived: number;
}
