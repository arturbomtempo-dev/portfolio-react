import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/i18n/language-context';
import { zodResolver } from '@hookform/resolvers/zod';
import { Github, Instagram, Linkedin, Mail, Send, Youtube } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const contactSchema = z.object({
    name: z
        .string()
        .min(1, 'O nome é obrigatório')
        .min(5, 'O nome deve ter no mínimo 5 caracteres'),
    email: z
        .string()
        .min(1, 'O e-mail é obrigatório')
        .email('Formato de e-mail inválido'),
    message: z
        .string()
        .min(1, 'A mensagem é obrigatória')
        .min(50, 'A mensagem deve ter no mínimo 50 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
    const { t } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsLoading(true);

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('message', data.message);

        try {
            const response = await fetch('https://formsubmit.co/arturbcolen@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                toast.success('Mensagem enviada com sucesso!', {
                    description: 'Obrigado pelo contato. Responderei em breve!',
                });
                reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            toast.error('Erro ao enviar mensagem', {
                description: 'Por favor, tente novamente mais tarde.',
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
                    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
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
                                {...register('name')}
                                placeholder={t.contact.namePlaceholder}
                                className={`bg-muted/30 transition-colors ${
                                    errors.name
                                        ? 'border-red-500 focus-visible:ring-red-500'
                                        : 'border-border/50 focus-visible:ring-primary'
                                }`}
                                aria-invalid={errors.name ? 'true' : 'false'}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1" role="alert">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                {t.contact.email}
                            </label>
                            <Input
                                id="email"
                                type="email"
                                {...register('email')}
                                placeholder={t.contact.emailPlaceholder}
                                className={`bg-muted/30 transition-colors ${
                                    errors.email
                                        ? 'border-red-500 focus-visible:ring-red-500'
                                        : 'border-border/50 focus-visible:ring-primary'
                                }`}
                                aria-invalid={errors.email ? 'true' : 'false'}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1" role="alert">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                {t.contact.message}
                            </label>
                            <Textarea
                                id="message"
                                {...register('message')}
                                placeholder={t.contact.messagePlaceholder}
                                rows={6}
                                className={`bg-muted/30 resize-none transition-colors ${
                                    errors.message
                                        ? 'border-red-500 focus-visible:ring-red-500'
                                        : 'border-border/50 focus-visible:ring-primary'
                                }`}
                                aria-invalid={errors.message ? 'true' : 'false'}
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1" role="alert">
                                    {errors.message.message}
                                </p>
                            )}
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
