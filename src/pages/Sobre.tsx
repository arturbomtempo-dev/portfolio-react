import { Card } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { achievements, techCategories, testimonials, timeline } from '@/data/about/index';
import { GraduationCap, Quote, Briefcase } from 'lucide-react';

const Sobre = () => {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 glow-text">
                        Sobre Mim
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes.
                        Com mais de 5 anos de experiência no mercado, tenho me dedicado a construir
                        aplicações web e mobile que fazem a diferença na vida das pessoas. Meu foco
                        é sempre entregar código limpo, escalável e que atenda às necessidades reais
                        dos usuários.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-in">
                    {achievements.map((achievement, index) => (
                        <Card key={index} className="project-card text-center">
                            <achievement.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="text-xl font-heading font-semibold mb-2">
                                {achievement.title}
                            </h3>
                            <p className="text-muted-foreground">{achievement.description}</p>
                        </Card>
                    ))}
                </div>

                <div className="mb-16 animate-fade-in">
                    <h2 className="text-3xl font-heading font-bold mb-8 text-center">
                        Tecnologias
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {techCategories.map((category, index) => (
                            <Card key={index} className="project-card">
                                <div className="flex items-center gap-3 mb-4">
                                    <category.icon className="w-6 h-6 text-primary" />
                                    <h3 className="text-xl font-heading font-semibold">
                                        {category.title}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.techs.map((tech) => (
                                        <span key={tech} className="tech-badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="mb-16 animate-fade-in">
                    <h2 className="text-3xl font-heading font-bold mb-8 text-center">
                        Depoimentos
                    </h2>
                    <div className="px-4 sm:px-8 lg:px-12">
                        <Carousel
                            opts={{
                                align: 'start',
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {testimonials.map((testimonial, index) => (
                                    <CarouselItem key={index}>
                                        <Card className="project-card">
                                            <Quote className="w-10 h-10 text-primary/30 mb-4" />
                                            <p className="text-lg text-foreground/90 mb-6 italic leading-relaxed">
                                                "{testimonial.text}"
                                            </p>
                                            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <span className="text-primary font-heading font-bold text-lg">
                                                        {testimonial.name.charAt(0)}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="font-heading font-semibold">
                                                        {testimonial.name}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden sm:flex" />
                            <CarouselNext className="hidden sm:flex" />
                        </Carousel>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <GraduationCap className="w-8 h-8 text-primary" />
                            <h2 className="text-2xl font-heading font-bold">Educação</h2>
                        </div>
                        <div className="space-y-6">
                            {timeline.education.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative pl-8 border-l-2 border-primary/30"
                                >
                                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--accent-glow)/0.5)]" />
                                    <p className="text-sm text-primary mb-1">{item.year}</p>
                                    <h3 className="text-lg font-heading font-semibold mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground">{item.institution}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Briefcase className="w-8 h-8 text-primary" />
                            <h2 className="text-2xl font-heading font-bold">
                                Experiência Profissional
                            </h2>
                        </div>
                        <div className="space-y-6">
                            {timeline.professional.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative pl-8 border-l-2 border-primary/30"
                                >
                                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--accent-glow)/0.5)]" />
                                    <p className="text-sm text-primary mb-1">{item.year}</p>
                                    <h3 className="text-lg font-heading font-semibold mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground">{item.company}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sobre;
