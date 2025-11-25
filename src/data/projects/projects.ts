import { Project } from '../types';

export const projects: Project[] = [
    {
        id: 'ecommerce-platform',
        title: 'Plataforma E-commerce',
        description:
            'Uma solução completa de e-commerce desenvolvida para transformar a experiência de compra online.',
        image: 'https://raw.githubusercontent.com/arturbomtempo-dev/devfest-bh-website/main/resources/screenshots/main-section.png',
        cardTechs: ['React', 'Node.js', 'PostgreSQL'],
        fullDescription: `Este projeto foi desenvolvido para uma empresa de médio porte que precisava modernizar sua presença online. O desafio principal foi criar uma experiência de usuário fluida enquanto mantinha alta performance e segurança.

Implementei funcionalidades avançadas como:
- Carrinho de compras com persistência
- Sistema de cupons e descontos
- Integração com múltiplos métodos de pagamento
- Dashboard administrativo com analytics em tempo real
- Sistema de reviews e avaliações
- Notificações por email automatizadas
- Gerenciamento de múltiplos vendedores

O resultado foi um aumento de 150% nas vendas online nos primeiros 3 meses após o lançamento.`,
        allTechs: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        id: 'task-manager',
        title: 'Gerenciador de Tarefas',
        description:
            'Aplicativo completo de produtividade focado em colaboração em equipe e gestão eficiente de projetos.',
        image: 'https://raw.githubusercontent.com/arturbomtempo-dev/devfest-bh-website/main/resources/screenshots/main-section.png',
        cardTechs: ['Next.js', 'TypeScript', 'Supabase'],
        fullDescription: `Uma ferramenta completa para gestão de tarefas e projetos, desenvolvida com foco em colaboração e produtividade. Inclui recursos como arrastar e soltar, notificações em tempo real, atribuição de tarefas, prazos e prioridades, sistema de comentários e anexos, além de integração com calendário.`,
        allTechs: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        id: 'portfolio-website',
        title: 'Portfolio Pessoal',
        description:
            'Site de portfólio moderno e responsivo desenvolvido com as melhores práticas de desenvolvimento web.',
        image: 'https://raw.githubusercontent.com/arturbomtempo-dev/devfest-bh-website/main/resources/screenshots/main-section.png',
        cardTechs: ['React', 'TypeScript', 'Tailwind CSS'],
        fullDescription: `Um portfólio pessoal desenvolvido com foco em design minimalista e performance. O site apresenta animações suaves, design responsivo e otimização para SEO.

Características principais:
- Design moderno e clean
- Animações suaves com Framer Motion
- Totalmente responsivo
- Otimizado para performance
- Acessibilidade (WCAG 2.1)`,
        allTechs: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
        liveUrl: '#',
        githubUrl: '#',
    },
];
