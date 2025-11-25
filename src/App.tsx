import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageProvider } from '@/i18n/LanguageContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';
import Contato from './pages/Contato';
import Conteudos from './pages/Conteudos';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProjetoDetalhes from './pages/ProjetoDetalhes';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';

const queryClient = new QueryClient();

const App = () => (
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
                            <Route path="/sobre" element={<Sobre />} />
                            <Route path="/projetos" element={<Projetos />} />
                            <Route path="/projetos/:id" element={<ProjetoDetalhes />} />
                            <Route path="/conteudos" element={<Conteudos />} />
                            <Route path="/contato" element={<Contato />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </TooltipProvider>
        </LanguageProvider>
    </QueryClientProvider>
);

export default App;
