import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import api from '@/lib/api';
import { User, AuthResponse } from '@/lib/types';

interface AuthContextType {
    user: User | null;
    token: string | null;
    loading: boolean;
    login: (email: string, password: string, turnstileToken?: string) => Promise<void>;
    logout: () => void;
    setupSuperAdmin: (name: string, email: string, password: string) => Promise<void>;
    isAuthenticated: boolean;
    isSuperAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    // Load user from localStorage on mount
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));

            // Verify token is still valid
            api.get('/auth/me')
                .then((response: any) => {
                    setUser(response.data);
                    localStorage.setItem('user', JSON.stringify(response.data));
                })
                .catch(() => {
                    // Token invalid, clear storage
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    setToken(null);
                    setUser(null);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (email: string, password: string, turnstileToken?: string) => {
        const response = await api.post('/auth/login', { email, password, turnstileToken }) as any;

        if (response.success && response.data) {
            const { user, token } = response.data;
            setUser(user);
            setToken(token);
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
        }
    };

    const setupSuperAdmin = async (name: string, email: string, password: string) => {
        const response = await api.post('/auth/setup', { name, email, password }) as any;

        if (response.success && response.data) {
            const { user, token } = response.data;
            setUser(user);
            setToken(token);
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    const value: AuthContextType = {
        user,
        token,
        loading,
        login,
        logout,
        setupSuperAdmin,
        isAuthenticated: !!user && !!token,
        isSuperAdmin: user?.role === 'super_admin',
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
