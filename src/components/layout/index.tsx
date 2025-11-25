import { ReactNode } from 'react';
import { Footer } from '../footer';
import { Navigation } from '../navigation';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
        </div>
    );
}
