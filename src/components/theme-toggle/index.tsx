import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/theme-context';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative w-9 h-9 rounded-lg transition-all duration-300 hover:bg-accent/10"
            aria-label="Alternar tema"
        >
            <Sun
                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0"
                strokeWidth={2}
            />
            <Moon
                className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100"
                strokeWidth={2}
            />
        </Button>
    );
}
