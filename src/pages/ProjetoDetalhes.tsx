import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const ProjetoDetalhes = () => {
    const { id } = useParams();

    const projectsData: Record<string, any> = {
        'ecommerce-platform': {
            title: 'Plataforma E-commerce',
            description:
                'Uma solução completa de e-commerce desenvolvida para transformar a experiência de compra online. O projeto inclui um painel administrativo robusto para gestão de produtos, pedidos e clientes, integração completa com gateway de pagamento Stripe, sistema avançado de gestão de estoque com alertas automáticos, e um design responsivo que funciona perfeitamente em todos os dispositivos.',
            fullDescription: `Este projeto foi desenvolvido para uma empresa de médio porte que precisava modernizar sua presença online. O desafio principal foi criar uma experiência de usuário fluida enquanto mantinha alta performance e segurança.

Implementei funcionalidades avançadas como:
- Carrinho de compras com persistência
- Sistema de cupons e descontos
- Integração com múltiplos métodos de pagamento
- Dashboard administrativo com analytics em tempo real
- Sistema de reviews e avaliações
- Notificações por email automatizadas
- Gerenciamento de múltiplos vendedores

O resultado foi um aumento de 150% nas vendas online nos primeiros 3 meses após o lançamento.`,
            images: [
                'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop',
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
                'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop',
            ],
            techs: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
            liveUrl: '#',
            githubUrl: '#',
        },
        'task-manager': {
            title: 'Gerenciador de Tarefas',
            description:
                'Aplicativo completo de produtividade focado em colaboração em equipe e gestão eficiente de projetos.',
            fullDescription: `Uma ferramenta completa para gestão de tarefas e projetos, desenvolvida com foco em colaboração e produtividade. Inclui recursos como arrastar e soltar, notificações em tempo real, atribuição de tarefas, prazos e prioridades, sistema de comentários e anexos, além de integração com calendário.`,
            images: [
                'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop',
                'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop',
            ],
            techs: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
            liveUrl: '#',
            githubUrl: '#',
        },
    };

    const project = projectsData[id || ''] || projectsData['ecommerce-platform'];

    return (
        <div className="min-h-screen py-20 px-4">
            <div className="container mx-auto max-w-5xl">
                <Link to="/projetos">
                    <Button variant="ghost" className="mb-8 group">
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Voltar para Projetos
                    </Button>
                </Link>

                <div className="animate-fade-in">
                    <div className="mb-8">
                        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 glow-text">
                            {project.title}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-4">
                            <Button className="bg-primary hover:bg-primary-glow group">
                                Ver Projeto
                                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Button>
                            <Button
                                variant="outline"
                                className="border-primary/50 hover:bg-primary/10"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                Ver Código
                            </Button>
                        </div>
                    </div>

                    <div className="mb-12 space-y-6">
                        {project.images.map((image: string, index: number) => (
                            <div
                                key={index}
                                className="rounded-xl overflow-hidden border border-border/50 shadow-card"
                            >
                                <img
                                    src={image}
                                    alt={`${project.title} - Screenshot ${index + 1}`}
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-heading font-bold mb-4">Sobre o Projeto</h2>
                        <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                            {project.fullDescription}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-heading font-bold mb-4">
                            Tecnologias Utilizadas
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {project.techs.map((tech: string) => (
                                <span key={tech} className="tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjetoDetalhes;
