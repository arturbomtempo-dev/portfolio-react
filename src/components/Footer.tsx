import { Github, Linkedin, Mail, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="glass-card border-t border-border/50 mt-20 py-7">
            <p className="text-sm text-muted-foreground text-center">
                © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
        </footer>
    );
};

export default Footer;
