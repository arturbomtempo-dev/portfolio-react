import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export function ProjectDetails() {
    const { id } = useParams<{ id: string }>();
    const { t, content } = useLanguage();
    const { projects } = content;

    const project = projects.find((p) => p.id === id) || projects[0];

    return (
        <div className="min-h-screen py-20 px-4">
            <div className="container mx-auto max-w-5xl">
                <Link to="/projects" className="back-link mb-8">
                    <ArrowLeft className="h-4 w-4" />
                    <span>{t.projectDetails.backButton}</span>
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
                                        {t.projectDetails.viewProject}
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
                                        {t.projectDetails.viewCode}
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
                        <h2 className="text-2xl font-heading font-bold mb-4">
                            {t.projectDetails.aboutTitle}
                        </h2>
                        <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                            {project.fullDescription}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-heading font-bold mb-4">
                            {t.projectDetails.techTitle}
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
}
