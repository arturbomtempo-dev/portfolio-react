import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ContentType } from '@/data/types';
import { useLanguage } from '@/hooks/use-language';
import { ExternalLink, FileText, Mail, Youtube } from 'lucide-react';
import { useState } from 'react';

function formatDate(dateString: string, locale: string): string {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);

    return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
}

export function Contents() {
    const [filter, setFilter] = useState<ContentType>('all');
    const { t, content, language } = useLanguage();
    const { contents } = content;

    const filteredContents = contents.filter((content) => {
        if (filter === 'all') return true;
        if (filter === 'videos') return content.type === 'video';
        if (filter === 'articles') return content.type === 'article';
        if (filter === 'newsletters') return content.type === 'newsletter';
        return true;
    });

    return (
        <div className="min-h-screen py-20 px-6 sm:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 glow-text">
                        {t.content.title}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t.content.description}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
                    <Button
                        variant={filter === 'all' ? 'default' : 'outline'}
                        onClick={() => setFilter('all')}
                        className={
                            filter === 'all'
                                ? 'bg-primary hover:bg-primary-glow'
                                : 'border-primary/50 hover:bg-primary/10'
                        }
                    >
                        {t.content.all}
                    </Button>
                    <Button
                        variant={filter === 'videos' ? 'default' : 'outline'}
                        onClick={() => setFilter('videos')}
                        className={
                            filter === 'videos'
                                ? 'bg-primary hover:bg-primary-glow'
                                : 'border-primary/50 hover:bg-primary/10'
                        }
                    >
                        <Youtube className="mr-2 h-4 w-4" />
                        {t.content.videos}
                    </Button>
                    <Button
                        variant={filter === 'articles' ? 'default' : 'outline'}
                        onClick={() => setFilter('articles')}
                        className={
                            filter === 'articles'
                                ? 'bg-primary hover:bg-primary-glow'
                                : 'border-primary/50 hover:bg-primary/10'
                        }
                    >
                        <FileText className="mr-2 h-4 w-4" />
                        {t.content.articles}
                    </Button>
                    <Button
                        variant={filter === 'newsletters' ? 'default' : 'outline'}
                        onClick={() => setFilter('newsletters')}
                        className={
                            filter === 'newsletters'
                                ? 'bg-primary hover:bg-primary-glow'
                                : 'border-primary/50 hover:bg-primary/10'
                        }
                    >
                        <Mail className="mr-2 h-4 w-4" />
                        {t.content.newsletters}
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                    {filteredContents.map((content, index) => (
                        <a key={index} href={content.url} target="_blank" rel="noopener noreferrer">
                            <Card className="project-card overflow-hidden h-full">
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={content.thumbnail}
                                        alt={content.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4">
                                        {content.type === 'video' ? (
                                            <div className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                                                <Youtube className="w-4 h-4" />
                                                <span className="text-sm font-medium">
                                                    {t.contentBadges.video}
                                                </span>
                                            </div>
                                        ) : content.type === 'article' ? (
                                            <div className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                                                <FileText className="w-4 h-4" />
                                                <span className="text-sm font-medium">
                                                    {t.contentBadges.article}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                                                <Mail className="w-4 h-4" />
                                                <span className="text-sm font-medium">
                                                    {t.contentBadges.newsletter}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="py-3 sm:py-4 sm:px-0">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-heading font-semibold line-clamp-2">
                                            {content.title}
                                        </h3>
                                        <ExternalLink className="w-5 h-5 text-primary ml-2" />
                                    </div>
                                    <p className="text-muted-foreground mb-4 line-clamp-2">
                                        {content.description}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <span>{content.platform}</span>
                                        <span>
                                            {formatDate(
                                                content.date,
                                                language === 'pt'
                                                    ? 'pt-BR'
                                                    : language === 'en'
                                                      ? 'en-US'
                                                      : 'es-ES'
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
