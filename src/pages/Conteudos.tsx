import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, FileText, Youtube } from 'lucide-react';
import { useState } from 'react';

type ContentType = 'all' | 'videos' | 'articles';

const Conteudos = () => {
    const [filter, setFilter] = useState<ContentType>('all');

    const contents = [
        {
            type: 'video',
            title: 'Introdução ao React Hooks',
            description:
                'Aprenda a usar os principais hooks do React de forma prática e eficiente.',
            thumbnail:
                'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
            url: '#',
            platform: 'YouTube',
            date: '2024-01-15',
        },
        {
            type: 'article',
            title: 'Clean Code em JavaScript',
            description:
                'Melhores práticas para escrever código limpo e manutenível em JavaScript.',
            thumbnail:
                'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=450&fit=crop',
            url: '#',
            platform: 'Medium',
            date: '2024-01-10',
        },
        {
            type: 'video',
            title: 'TypeScript Avançado',
            description:
                'Explorando recursos avançados do TypeScript para melhorar sua produtividade.',
            thumbnail:
                'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=450&fit=crop',
            url: '#',
            platform: 'YouTube',
            date: '2024-01-05',
        },
        {
            type: 'article',
            title: 'Arquitetura de Micro Frontend',
            description: 'Como implementar micro frontends em aplicações de grande escala.',
            thumbnail:
                'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=450&fit=crop',
            url: '#',
            platform: 'Medium',
            date: '2023-12-20',
        },
        {
            type: 'video',
            title: 'Performance Web Avançada',
            description: 'Técnicas avançadas para otimizar a performance de aplicações web.',
            thumbnail:
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
            url: '#',
            platform: 'YouTube',
            date: '2023-12-15',
        },
        {
            type: 'article',
            title: 'Testing com Jest e React Testing Library',
            description: 'Guia completo sobre testes em aplicações React.',
            thumbnail:
                'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=450&fit=crop',
            url: '#',
            platform: 'Medium',
            date: '2023-12-10',
        },
    ];

    const filteredContents = contents.filter((content) => {
        if (filter === 'all') return true;
        if (filter === 'videos') return content.type === 'video';
        if (filter === 'articles') return content.type === 'article';
        return true;
    });

    return (
        <div className="min-h-screen py-20 px-6 sm:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 glow-text">
                        Conteúdos
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Compartilho conhecimento através de vídeos e artigos sobre desenvolvimento
                        web, boas práticas e tecnologias modernas.
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
                        Todos
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
                        Vídeos
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
                        Artigos
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
                                                <span className="text-sm font-medium">Vídeo</span>
                                            </div>
                                        ) : (
                                            <div className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                                                <FileText className="w-4 h-4" />
                                                <span className="text-sm font-medium">Artigo</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
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
                                            {new Date(content.date).toLocaleDateString('pt-BR')}
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
};

export default Conteudos;
