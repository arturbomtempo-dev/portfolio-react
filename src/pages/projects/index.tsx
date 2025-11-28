import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Project } from '@/data/types';
import { useLanguage } from '@/hooks/use-language';
import { CheckCircle2, ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

export function Projects() {
    const { t, content, language } = useLanguage();
    const { projects } = content;
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="min-h-screen py-20 px-4 sm:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 glow-text">
                        {t.projects.title}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t.projects.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="project-card overflow-hidden h-full cursor-pointer group hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/10 transition-all duration-300"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="py-3 sm:py-4 sm:px-0">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ExternalLink className="w-5 h-5 text-primary ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                                <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.cardTechs.map((tech) => (
                                        <span key={tech} className="tech-badge text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                    <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto bg-card-glass backdrop-blur-xl border-border/50">
                        <DialogHeader className="space-y-4">
                            <DialogTitle className="text-2xl font-heading pr-8">
                                {selectedProject?.title}
                            </DialogTitle>
                            <DialogDescription className="text-base text-muted-foreground">
                                {selectedProject?.description}
                            </DialogDescription>
                            {(selectedProject?.liveUrl || selectedProject?.githubUrl) && (
                                <div className="flex gap-3 pt-1">
                                    {selectedProject?.liveUrl &&
                                        selectedProject.liveUrl !== '#' && (
                                            <Button
                                                onClick={() =>
                                                    window.open(selectedProject.liveUrl, '_blank')
                                                }
                                                size="sm"
                                                className="gap-2 bg-primary text-primary-foreground hover:bg-foreground hover:text-background"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span>
                                                    {language === 'pt'
                                                        ? 'Ver Projeto'
                                                        : language === 'en'
                                                          ? 'View Project'
                                                          : 'Ver Proyecto'}
                                                </span>
                                            </Button>
                                        )}
                                    {selectedProject?.githubUrl &&
                                        selectedProject.githubUrl !== '#' && (
                                            <Button
                                                onClick={() =>
                                                    window.open(selectedProject.githubUrl, '_blank')
                                                }
                                                size="sm"
                                                variant="outline"
                                                className="gap-2"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span>
                                                    {language === 'pt'
                                                        ? 'Ver Código'
                                                        : language === 'en'
                                                          ? 'View Code'
                                                          : 'Ver Código'}
                                                </span>
                                            </Button>
                                        )}
                                </div>
                            )}
                            <div className="relative overflow-hidden rounded-lg aspect-video border border-border/50">
                                <img
                                    src={selectedProject?.image}
                                    alt={selectedProject?.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </DialogHeader>
                        <div className="space-y-4 mt-4">
                            <div>
                                <h4 className="font-heading font-semibold mb-3 text-lg">
                                    {language === 'pt'
                                        ? 'Sobre o projeto:'
                                        : language === 'en'
                                          ? 'About the project:'
                                          : 'Acerca del proyecto:'}
                                </h4>
                                <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
                                    {selectedProject?.fullDescription}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-heading font-semibold mb-3 text-lg">
                                    {language === 'pt'
                                        ? 'Tecnologias utilizadas:'
                                        : language === 'en'
                                          ? 'Technologies used:'
                                          : 'Tecnologías utilizadas:'}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject?.allTechs.map((tech) => (
                                        <span key={tech} className="tech-badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
