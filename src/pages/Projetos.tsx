import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projetos = () => {
    const projects = [
        {
            id: 'ecommerce-platform',
            title: 'Plataforma E-commerce',
            description:
                'Uma solução completa de e-commerce com painel administrativo, gateway de pagamento e sistema de gestão de estoque.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
            techs: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        },
        {
            id: 'task-manager',
            title: 'Gerenciador de Tarefas',
            description:
                'Aplicativo de produtividade com recursos de colaboração em equipe, drag-and-drop e sincronização em tempo real.',
            image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
            techs: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
        },
        {
            id: 'fitness-tracker',
            title: 'Fitness Tracker',
            description:
                'App mobile para rastreamento de exercícios, dieta e métricas de saúde com gráficos e metas personalizadas.',
            image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
            techs: ['React Native', 'Firebase', 'Charts'],
        },
        {
            id: 'portfolio-generator',
            title: 'Gerador de Portfólio',
            description:
                'Ferramenta SaaS que permite criar portfólios profissionais personalizados com templates e integração com GitHub.',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
            techs: ['Vue.js', 'Python', 'FastAPI', 'MongoDB'],
        },
        {
            id: 'crypto-dashboard',
            title: 'Dashboard de Criptomoedas',
            description:
                'Painel em tempo real para acompanhamento de preços, carteiras e análises do mercado de criptomoedas.',
            image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop',
            techs: ['React', 'GraphQL', 'WebSockets'],
        },
        {
            id: 'booking-system',
            title: 'Sistema de Reservas',
            description:
                'Plataforma de agendamento online com calendário integrado, notificações e pagamentos automatizados.',
            image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop',
            techs: ['Next.js', 'Node.js', 'PostgreSQL'],
        },
    ];

    return (
        <div className="min-h-screen py-20 px-4 sm:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 glow-text">
                        Projetos
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Alguns dos projetos que desenvolvi ao longo da minha carreira. Cada um
                        representa um desafio único e aprendizado contínuo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                    {projects.map((project) => (
                        <Link key={project.id} to={`/projetos/${project.id}`}>
                            <Card className="project-card overflow-hidden h-full">
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                                </div>
                                <div className="py-3 sm:py-4 sm:px-0">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-heading font-semibold">
                                            {project.title}
                                        </h3>
                                        <ExternalLink className="w-5 h-5 text-primary ml-2" />
                                    </div>
                                    <p className="text-muted-foreground mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techs.map((tech) => (
                                            <span key={tech} className="tech-badge text-xs">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projetos;
