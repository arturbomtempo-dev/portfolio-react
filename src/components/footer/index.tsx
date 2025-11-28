import { useLanguage } from '@/hooks/use-language';

export function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="glass-card border-t border-border/50 mt-20 py-7">
            <p className="text-sm text-muted-foreground text-center">
                {t.footer.rights.replace('{year}', currentYear.toString())}
            </p>
        </footer>
    );
}
