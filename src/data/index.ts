import { Language } from '@/i18n/translations';
import * as pt from './content.pt';
import * as en from './content.en';
import * as es from './content.es';

export * from './types';

export const getContent = (language: Language) => {
    switch (language) {
        case 'pt':
            return pt;
        case 'en':
            return en;
        case 'es':
            return es;
        default:
            return pt;
    }
};
