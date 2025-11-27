import { Card } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Education, Experience } from '@/data/types';
import { useLanguage } from '@/i18n/language-context';
import { Briefcase, CheckCircle2, GraduationCap, Quote } from 'lucide-react';
import { useState } from 'react';

export function About() {
    const { t, content, language } = useLanguage();
    const { achievements, techCategories, testimonials, timeline } = content;
    const [selectedEducation, setSelectedEducation] = useState<Education | null>(null);
    const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

    return (
        <div className="min-h-screen py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 glow-text">
                        {t.about.title}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        {t.about.description}
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
                        {t.about.techTitle}
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
                        {t.about.testimonialsTitle}
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
                            <h2 className="text-2xl font-heading font-bold">
                                {t.about.educationTitle}
                            </h2>
                        </div>
                        <div className="space-y-6">
                            {timeline.education.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative pl-8 cursor-pointer group transition-all hover:bg-muted/30 rounded-r-lg pr-4 py-2"
                                    onClick={() => setSelectedEducation(item)}
                                >
                                    <div className="absolute left-0 top-4 bottom-0 w-0.5 bg-primary/30 group-hover:bg-primary/60 transition-colors" />
                                    <div className="absolute left-0 top-4 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--accent-glow)/0.5)] group-hover:scale-125 transition-transform" />
                                    <p className="text-sm text-primary mb-1">{item.year}</p>
                                    <h3 className="text-lg font-heading font-semibold mb-1 group-hover:text-primary transition-colors">
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
                                {t.about.experienceTitle}
                            </h2>
                        </div>
                        <div className="space-y-6">
                            {timeline.professional.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative pl-8 cursor-pointer group transition-all hover:bg-muted/30 rounded-r-lg pr-4 py-2"
                                    onClick={() => setSelectedExperience(item)}
                                >
                                    <div className="absolute left-0 top-4 bottom-0 w-0.5 bg-primary/30 group-hover:bg-primary/60 transition-colors" />
                                    <div className="absolute left-0 top-4 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--accent-glow)/0.5)] group-hover:scale-125 transition-transform" />
                                    <p className="text-sm text-primary mb-1">{item.year}</p>
                                    <h3 className="text-lg font-heading font-semibold mb-1 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground">{item.company}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Dialog open={!!selectedEducation} onOpenChange={() => setSelectedEducation(null)}>
                    <DialogContent className="sm:max-w-[600px] bg-card-glass backdrop-blur-xl border-border/50">
                        <DialogHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <GraduationCap className="w-6 h-6 text-primary" />
                                <span className="text-sm text-primary font-medium">
                                    {selectedEducation?.year}
                                </span>
                            </div>
                            <DialogTitle className="text-2xl font-heading">
                                {selectedEducation?.title}
                            </DialogTitle>
                            <DialogDescription className="text-base text-muted-foreground">
                                {selectedEducation?.institution}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 mt-4">
                            <p className="text-foreground/90 leading-relaxed">
                                {selectedEducation?.description}
                            </p>
                            <div>
                                <h4 className="font-heading font-semibold mb-3 text-lg">
                                    {language === 'pt'
                                        ? 'O que aprendi:'
                                        : language === 'en'
                                          ? 'What I learned:'
                                          : 'Lo que aprendí:'}
                                </h4>
                                <ul className="space-y-2">
                                    {selectedEducation?.activities.map((activity, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2 text-foreground/80"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span>{activity}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>

                <Dialog
                    open={!!selectedExperience}
                    onOpenChange={() => setSelectedExperience(null)}
                >
                    <DialogContent className="sm:max-w-[600px] bg-card-glass backdrop-blur-xl border-border/50">
                        <DialogHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <Briefcase className="w-6 h-6 text-primary" />
                                <span className="text-sm text-primary font-medium">
                                    {selectedExperience?.year}
                                </span>
                            </div>
                            <DialogTitle className="text-2xl font-heading">
                                {selectedExperience?.title}
                            </DialogTitle>
                            <DialogDescription className="text-base text-muted-foreground">
                                {selectedExperience?.company}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 mt-4">
                            <p className="text-foreground/90 leading-relaxed">
                                {selectedExperience?.description}
                            </p>
                            <div>
                                <h4 className="font-heading font-semibold mb-3 text-lg">
                                    {language === 'pt'
                                        ? 'Atividades e responsabilidades:'
                                        : language === 'en'
                                          ? 'Activities and responsibilities:'
                                          : 'Actividades y responsabilidades:'}
                                </h4>
                                <ul className="space-y-2">
                                    {selectedExperience?.activities.map((activity, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2 text-foreground/80"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span>{activity}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
