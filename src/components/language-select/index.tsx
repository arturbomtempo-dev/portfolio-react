import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/i18n/language-context';
import { Globe } from 'lucide-react';

const languageOptions = [
    { value: 'pt', label: 'PT' },
    { value: 'en', label: 'EN' },
    { value: 'es', label: 'ES' },
] as const;

export function LanguageSelect() {
    const { language, setLanguage } = useLanguage();

    return (
        <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[100px] gap-2">
                <Globe className="h-4 w-4" />
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {languageOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
