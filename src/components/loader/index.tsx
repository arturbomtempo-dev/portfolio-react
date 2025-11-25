import { useEffect, useState } from 'react';

export function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0d0d0d] to-[#0a0a0a] transition-opacity duration-500 ease-out"
            style={{ opacity: isLoading ? 1 : 0 }}
        >
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary/10 border-t-primary" />
        </div>
    );
}
