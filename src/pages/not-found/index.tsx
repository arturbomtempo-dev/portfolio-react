import { useLanguage } from '@/i18n/language-context';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function NotFound() {
    const location = useLocation();
    const { t } = useLanguage();

    useEffect(() => {
        console.error('404 Error: User attempted to access non-existent route:', location.pathname);
    }, [location.pathname]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted">
            <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold">{t.notFound.title}</h1>
                <p className="mb-4 text-xl text-muted-foreground">{t.notFound.message}</p>
                <a href="/" className="text-primary underline hover:text-primary/90">
                    {t.notFound.backButton}
                </a>
            </div>
        </div>
    );
}

export default NotFound;
