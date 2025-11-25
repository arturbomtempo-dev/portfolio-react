import { NavLink } from '@/components/NavLink';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Sobre', path: '/sobre' },
        { name: 'Projetos', path: '/projetos' },
        { name: 'Conteúdos', path: '/conteudos' },
        { name: 'Contato', path: '/contato' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <NavLink
                        to="/"
                        className="text-xl font-heading font-bold text-foreground hover:text-primary transition-colors"
                    >
                        <span className="glow-text">
                            Portfólio<span className="text-primary">.</span>
                        </span>
                    </NavLink>

                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className="nav-link text-sm font-medium"
                                activeClassName="nav-link-active"
                                end={item.path === '/'}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden py-4 animate-fade-in border-t border-border/50 max-w-xs mx-auto">
                        <div className="flex flex-col gap-4 items-center">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className="nav-link text-sm font-medium py-2"
                                    activeClassName="nav-link-active"
                                    onClick={() => setIsMenuOpen(false)}
                                    end={item.path === '/'}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
