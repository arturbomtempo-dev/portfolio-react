import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/hooks/use-language';
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
            <SelectTrigger className="w-[85px] gap-1.5 text-sm">
                <Globe className="h-3.5 w-3.5" />
                <SelectValue />
            </SelectTrigger>
            <SelectContent className="min-w-[85px]">
                {languageOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="text-sm">
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
