import { LanguageSelect } from '@/components/LanguageSelect';
import { NavLink } from '@/components/NavLink';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useLanguage();

    const navItems = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.about, path: '/sobre' },
        { name: t.nav.projects, path: '/projetos' },
        { name: t.nav.content, path: '/conteudos' },
        { name: t.nav.contact, path: '/contato' },
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

                    <div className="hidden md:flex items-center gap-6">
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
                        <LanguageSelect />
                    </div>

                    <div className="flex items-center gap-2 md:hidden">
                        <LanguageSelect />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
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
