import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { Loader } from '../loader';
import { Layout } from '../layout';
import { AppRoutes } from '@/routes';

export function Container() {
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
