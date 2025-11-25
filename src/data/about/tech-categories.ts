import { TechCategory } from '../types';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

export const techCategories: TechCategory[] = [
    {
        title: 'Front-end',
        icon: Globe,
        techs: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    },
    {
        title: 'Back-end',
        icon: Code,
        techs: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL'],
    },
    {
        title: 'Banco de Dados',
        icon: Database,
        techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'],
    },
    {
        title: 'Mobile',
        icon: Smartphone,
        techs: ['React Native', 'Flutter', 'Expo'],
    },
];
