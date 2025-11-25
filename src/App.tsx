import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageProvider } from '@/i18n/language-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { Loader } from './components/loader';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Contents } from './pages/contents';
import { Home } from './pages/home';
import { NotFound } from './pages/not-found';
import { ProjectDetails } from './pages/project-details';
import { Projects } from './pages/projects';

export function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <LanguageProvider>
                <TooltipProvider>
                    <Loader />
                    <Toaster />
                    <Sonner />
                    <BrowserRouter>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/projects/:id" element={<ProjectDetails />} />
                                <Route path="/contents" element={<Contents />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Layout>
                    </BrowserRouter>
                </TooltipProvider>
            </LanguageProvider>
        </QueryClientProvider>
    );
}
