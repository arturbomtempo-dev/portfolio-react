import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Github, Instagram, Linkedin, Mail, Send, Youtube } from 'lucide-react';
import { useState } from 'react';

const Contato = () => {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

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
            href: 'mailto:seu@email.com',
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            toast({
                title: 'Mensagem enviada!',
                description: 'Obrigado pelo contato. Responderei em breve!',
            });
            setFormData({ name: '', email: '', message: '' });
            setIsLoading(false);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen py-20 px-6 sm:px-8">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 glow-text">
                        Entre em Contato
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Tem alguma ideia de projeto ou quer apenas trocar uma ideia? Ficarei feliz
                        em conversar com você!
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
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Nome
                            </label>
                            <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Seu nome"
                                required
                                className="bg-muted/30 border-border/50 focus:border-primary"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="seu@email.com"
                                required
                                className="bg-muted/30 border-border/50 focus:border-primary"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Mensagem
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Escreva sua mensagem aqui..."
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
                                'Enviando...'
                            ) : (
                                <>
                                    Enviar Mensagem
                                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Contato;
