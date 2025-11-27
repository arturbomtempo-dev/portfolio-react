import { getContent, Language } from '@/data';
import { createContext, useContext, useEffect, useState } from 'react';

type ContentType = ReturnType<typeof getContent>;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: ContentType['ui'];
    content: ContentType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        const saved = localStorage.getItem('language');
        return (saved as Language) || 'pt';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const content = getContent(language);

    const value = {
        language,
        setLanguage,
        t: content.ui,
        content,
    };

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};
