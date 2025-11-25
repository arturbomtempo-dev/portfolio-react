import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageProvider } from '@/i18n/language-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { Container } from './components/app-container';

export function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <LanguageProvider>
                <TooltipProvider>
                    <BrowserRouter
                        future={{
                            v7_startTransition: true,
                            v7_relativeSplatPath: true,
                        }}
                    >
                        <Container />
                    </BrowserRouter>
                </TooltipProvider>
            </LanguageProvider>
        </QueryClientProvider>
    );
}
