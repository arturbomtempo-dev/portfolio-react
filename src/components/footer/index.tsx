import { useLanguage } from '@/hooks/use-language';

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="glass-card border-t border-border/50 mt-20 py-7">
            <p className="text-sm text-muted-foreground text-center">
                © {new Date().getFullYear()} {t.footer.rights}
            </p>
        </footer>
    );
}
