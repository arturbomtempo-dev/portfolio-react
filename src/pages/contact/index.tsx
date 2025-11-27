import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/i18n/language-context';
import { Github, Instagram, Linkedin, Mail, Send, Youtube } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
    const { toast } = useToast();
    const { t } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formsubmit.co/arturbcolen@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                toast({
                    title: t.toast.messageSent,
                    description: t.toast.thankYou,
                });
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            toast({
                title: 'Erro ao enviar mensagem',
                description: 'Por favor, tente novamente mais tarde.',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-primary' },
        {
            icon: Linkedin,
            href: '#',
            label: 'LinkedIn',
            color: 'hover:text-blue-500',
        },
        {
            icon: Mail,
            href: 'mailto:arturbcolen@gmail.com',
            label: 'Email',
            color: 'hover:text-red-500',
        },
        {
            icon: Instagram,
            href: '#',
            label: 'Instagram',
            color: 'hover:text-pink-500',
        },
        { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-600' },
    ];

    return (
        <div className="min-h-screen py-20 px-6 sm:px-8">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 glow-text">
                        {t.contact.title}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t.contact.description}
                    </p>
                </div>

                <div className="flex justify-center gap-6 mb-12 animate-fade-in">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-muted-foreground transition-all duration-300 ${link.color} hover:scale-110`}
                            aria-label={link.label}
                        >
                            <link.icon size={28} />
                        </a>
                    ))}
                </div>

                <Card className="project-card p-6 sm:p-8 animate-fade-in max-w-full sm:max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Hidden fields for FormSubmit configuration */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input
                            type="hidden"
                            name="_subject"
                            value="Nova mensagem do portfólio!"
                        />
                        <input
                            type="hidden"
                            name="_autoresponse"
                            value="Obrigado pela sua mensagem! Entrarei em contato em breve."
                        />

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                {t.contact.name}
                            </label>
                            <Input
                                id="name"
                                name="name"
                                placeholder={t.contact.namePlaceholder}
                                required
                                className="bg-muted/30 border-border/50 focus:border-primary"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                {t.contact.email}
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder={t.contact.emailPlaceholder}
                                required
                                className="bg-muted/30 border-border/50 focus:border-primary"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                {t.contact.message}
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder={t.contact.messagePlaceholder}
                                required
                                rows={6}
                                className="bg-muted/30 border-border/50 focus:border-primary resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-primary-glow group"
                            size="lg"
                        >
                            {isLoading ? (
                                t.toast.sending
                            ) : (
                                <>
                                    {t.contact.sendMessage}
                                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}
