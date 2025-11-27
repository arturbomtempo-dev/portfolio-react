import { LanguageContext, LanguageContextType } from '@/contexts/language-context';
import { useContext } from 'react';

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    
    return context;
};
