import { getContent, Language } from '@/data';
import { createContext, useEffect, useState } from 'react';

type ContentType = ReturnType<typeof getContent>;

export interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: ContentType['ui'];
    content: ContentType;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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
