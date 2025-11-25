import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { AppRoutes } from '@/routes';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from '../layout';
import { Loader } from '../loader';

export function Container() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [pathname]);

    return (
        <>
            <Loader />
            <Toaster />
            <Sonner />
            <Layout>
                <AppRoutes />
            </Layout>
        </>
    );
}
