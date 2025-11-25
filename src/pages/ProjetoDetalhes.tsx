import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects/index';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const ProjetoDetalhes = () => {
    const { id } = useParams();

    const project = projects.find((p) => p.id === id) || projects[0];

    return (
        <div className="min-h-screen py-20 px-4">
            <div className="container mx-auto max-w-5xl">
                <Link to="/projetos" className="back-link mb-8">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Voltar para Projetos</span>
                </Link>

                <div className="animate-fade-in">
                    <div className="mb-8">
                        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 glow-text">
                            {project.title}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-4">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <Button className="bg-primary hover:bg-primary-glow group">
                                        Ver Projeto
                                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Button>
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        variant="outline"
                                        className="border-primary/50 hover:bg-primary/10"
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        Ver Código
                                    </Button>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="mb-12">
                        <div className="rounded-xl overflow-hidden border border-border/50 shadow-card">
                            <img
                                src={project.image}
                                alt={`${project.title} - Screenshot`}
                                className="w-full h-auto"
                            />
                        </div>
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
                            {project.allTechs.map((tech: string) => (
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
