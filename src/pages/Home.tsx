import { Button } from '@/components/ui/button';
import { ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 sm:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
                <div className="mb-8">
                    <div className="w-40 h-w-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_40px_hsl(var(--accent-glow)/0.3)]">
                        <img
                            src="https://avatars.githubusercontent.com/u/96635074?v=4"
                            alt="Profile photo of Artur Bomtempo Colen"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground mb-2">Eu sou</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4 glow-text">
                        Artur Bomtempo
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-heading font-semibold mb-6 text-primary">
                        Software Developer
                    </p>
                    <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Sempre tive o desejo de gerar impacto na vida das pessoas — e encontrei no
                        desenvolvimento de software uma forma de transformar isso em realidade.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/sobre" className="w-1/2 mx-auto sm:mx-0 sm:w-auto">
                        <Button size="lg" className="bg-primary hover:bg-primary-glow group w-full">
                            Sobre mim
                            <User className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link to="/contato" className="w-1/2 mx-auto sm:mx-0 sm:w-auto">
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary/50 hover:bg-primary/10 w-full"
                        >
                            Entre em Contato
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
