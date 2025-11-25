import { useLanguage } from '@/i18n/LanguageContext';
import { Globe } from 'lucide-react';
import { Button } from './ui/button';

const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'pt' ? 'en' : 'pt');
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2 hover:text-primary transition-colors"
            aria-label="Toggle language"
        >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">{language === 'pt' ? 'EN' : 'PT'}</span>
        </Button>
    );
};

export default LanguageToggle;
