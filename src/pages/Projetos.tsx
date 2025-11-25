import { Card } from '@/components/ui/card';
import { getContent } from '@/data/index';
import { useLanguage } from '@/i18n/LanguageContext';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projetos = () => {
    const { t, language } = useLanguage();
    const { projects } = getContent(language);

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
                                        {project.cardTechs.map((tech) => (
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
