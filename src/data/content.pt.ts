import {
    Award,
    Code,
    Database,
    Layers,
    Palette,
    Server,
    Smartphone,
    Trophy,
    Users,
} from 'lucide-react';
import { Achievement, Content, Project, TechCategory, Testimonial, Timeline } from './types';

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
        fullDescription: `Uma ferramenta completa para gestão de tarefas e projetos, desenvolvida com foco em colaboração e produtividade.

Recursos principais:
- Sistema de arrastar e soltar para organização de tarefas
- Notificações em tempo real
- Atribuição de tarefas com prazos e prioridades
- Sistema de comentários e anexos
- Integração com calendário
- Relatórios de produtividade

A aplicação foi desenvolvida pensando em times ágeis e oferece uma interface intuitiva que facilita a comunicação e o acompanhamento de projetos.`,
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
- Acessibilidade (WCAG 2.1)
- Dark mode com transições suaves

O projeto demonstra habilidades em design de interface, desenvolvimento front-end e otimização de performance.`,
        allTechs: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
        liveUrl: '#',
        githubUrl: '#',
    },
];

export const contents: Content[] = [
    {
        type: 'video',
        title: 'Introdução ao React Hooks',
        description: 'Aprenda a usar os principais hooks do React de forma prática e eficiente.',
        thumbnail:
            'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
        url: '#',
        platform: 'YouTube',
        date: '2024-01-15',
    },
    {
        type: 'article',
        title: 'Clean Code em JavaScript',
        description: 'Melhores práticas para escrever código limpo e manutenível em JavaScript.',
        thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=450&fit=crop',
        url: '#',
        platform: 'Medium',
        date: '2024-01-10',
    },
    {
        type: 'video',
        title: 'TypeScript Avançado',
        description: 'Explorando recursos avançados do TypeScript para melhorar sua produtividade.',
        thumbnail:
            'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=450&fit=crop',
        url: '#',
        platform: 'YouTube',
        date: '2024-01-05',
    },
    {
        type: 'article',
        title: 'Arquitetura de Micro Frontend',
        description: 'Como implementar micro frontends em aplicações de grande escala.',
        thumbnail: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=450&fit=crop',
        url: '#',
        platform: 'Medium',
        date: '2023-12-20',
    },
    {
        type: 'video',
        title: 'Performance Web Avançada',
        description: 'Técnicas avançadas para otimizar a performance de aplicações web.',
        thumbnail:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
        url: '#',
        platform: 'YouTube',
        date: '2023-12-15',
    },
    {
        type: 'article',
        title: 'Testing com Jest e React Testing Library',
        description: 'Guia completo sobre testes em aplicações React.',
        thumbnail:
            'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=450&fit=crop',
        url: '#',
        platform: 'Medium',
        date: '2023-12-10',
    },
];

export const achievements: Achievement[] = [
    {
        icon: Trophy,
        title: '10+ Prêmios',
        description: 'Reconhecimentos recebidos',
    },
    {
        icon: Users,
        title: '4+ Anos',
        description: 'Anos de Experiência',
    },
    {
        icon: Award,
        title: '20+ Certificados',
        description: 'De cursos e palestras',
    },
];

export const techCategories: TechCategory[] = [
    {
        icon: Palette,
        title: 'Front-end',
        techs: [
            'HTML',
            'CSS',
            'JavaScript',
            'React.js',
            'Next.js',
            'Vite',
            'Tailwind CSS',
            'jQuery',
            'Bootstrap',
            'Sass',
            'styled-components',
        ],
    },
    {
        icon: Server,
        title: 'Back-end',
        techs: [
            'Node.js',
            'Express,js',
            'NestJS',
            'Java',
            'Spring Boot',
            'Maven',
            'PHP',
            'Python',
            'Django',
            'TypeScript',
            'Prisma',
            'C#',
            '.NET',
        ],
    },
    {
        icon: Database,
        title: 'Banco de Dados',
        techs: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'],
    },
    {
        icon: Smartphone,
        title: 'Mobile',
        techs: ['Swift', 'Kotlin'],
    },
];

export const testimonials: Testimonial[] = [
    {
        name: 'João Silva',
        role: 'CEO da TechStart',
        image: 'https://ui-avatars.com/api/?name=Joao+Silva&size=200&background=0ea5e9&color=fff',
        text: 'Trabalho excepcional! Entregou o projeto antes do prazo e superou todas as expectativas. Altamente recomendado.',
    },
    {
        name: 'Maria Santos',
        role: 'CTO da InnovaTech',
        image: 'https://ui-avatars.com/api/?name=Maria+Santos&size=200&background=8b5cf6&color=fff',
        text: 'Profissional extremamente competente e dedicado. A qualidade do código e atenção aos detalhes são impressionantes.',
    },
    {
        name: 'Carlos Oliveira',
        role: 'Product Manager',
        image: 'https://ui-avatars.com/api/?name=Carlos+Oliveira&size=200&background=10b981&color=fff',
        text: 'Excelente comunicação e capacidade de transformar ideias em soluções práticas. Foi um prazer trabalhar juntos.',
    },
];

export const timeline: Timeline = {
    education: [
        {
            year: '2023',
            title: 'Pós-graduação em Arquitetura de Software',
            institution: 'Universidade Federal',
            description:
                'Especialização focada em design de sistemas escaláveis, padrões arquiteturais e boas práticas de engenharia de software.',
            activities: [
                'Arquitetura de Microserviços e Design Patterns',
                'Cloud Computing e Infraestrutura como Código',
                'DevOps, CI/CD e Automação',
                'Domain-Driven Design (DDD)',
                'Segurança e Performance em Aplicações',
            ],
        },
        {
            year: '2020',
            title: 'Bacharelado em Ciência da Computação',
            institution: 'Universidade Estadual',
            description:
                'Formação sólida em fundamentos de computação, algoritmos, estruturas de dados e desenvolvimento de software.',
            activities: [
                'Algoritmos e Estruturas de Dados',
                'Programação Orientada a Objetos',
                'Banco de Dados e SQL',
                'Engenharia de Software e Metodologias Ágeis',
                'Desenvolvimento Web Full Stack',
                'Trabalho de Conclusão: Sistema de Gestão Acadêmica',
            ],
        },
        {
            year: '2018',
            title: 'Técnico em Desenvolvimento de Sistemas',
            institution: 'Instituto Técnico',
            description:
                'Curso técnico com foco em desenvolvimento prático de aplicações web e desktop.',
            activities: [
                'Lógica de Programação e Algoritmos',
                'HTML, CSS e JavaScript',
                'Desenvolvimento de Aplicações Desktop',
                'Banco de Dados Relacionais',
                'Projeto Final: Sistema de Controle de Estoque',
            ],
        },
    ],
    professional: [
        {
            year: '2022 - Atual',
            title: 'Desenvolvedor Full Stack Sênior',
            company: 'Tech Solutions Inc.',
            description:
                'Liderança técnica no desenvolvimento de soluções empresariais escaláveis, mentoria de equipe e definição de arquitetura.',
            activities: [
                'Arquitetura e desenvolvimento de aplicações React e Node.js',
                'Mentoria técnica de desenvolvedores júnior e pleno',
                'Definição de padrões de código e boas práticas',
                'Integração com serviços AWS (Lambda, S3, RDS)',
                'Code review e garantia de qualidade',
                'Otimização de performance e escalabilidade',
            ],
        },
        {
            year: '2020 - 2022',
            title: 'Desenvolvedor Full Stack',
            company: 'StartupXYZ',
            description:
                'Desenvolvimento de features completas do zero, da concepção à produção, em ambiente ágil de startup.',
            activities: [
                'Desenvolvimento de APIs RESTful com Node.js',
                'Criação de interfaces responsivas com React',
                'Implementação de testes automatizados',
                'Gestão de banco de dados PostgreSQL',
                'Deploy e manutenção em ambiente de produção',
                'Participação ativa em cerimônias ágeis (Scrum)',
            ],
        },
        {
            year: '2018 - 2020',
            title: 'Desenvolvedor Júnior',
            company: 'WebDev Agency',
            description:
                'Início da carreira profissional desenvolvendo sites e sistemas web para diversos clientes.',
            activities: [
                'Desenvolvimento de websites responsivos',
                'Manutenção e correção de bugs em sistemas legados',
                'Criação de layouts com HTML, CSS e JavaScript',
                'Integração com APIs de terceiros',
                'Suporte técnico a clientes',
            ],
        },
    ],
};

export const ui = {
    nav: {
        home: 'Início',
        about: 'Sobre',
        projects: 'Projetos',
        content: 'Conteúdos',
        contact: 'Contato',
    },
    home: {
        greeting: 'Eu sou',
        role: 'Desenvolvedor de Software',
        description:
            'Sempre tive o desejo de gerar impacto na vida das pessoas — e encontrei no desenvolvimento de software uma forma de transformar isso em realidade.',
        aboutButton: 'Sobre mim',
        contactButton: 'Entre em Contato',
    },
    about: {
        title: 'Sobre Mim',
        description:
            'Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Com mais de 4 anos de experiência, tenho me dedicado a construir aplicações web e mobile que fazem a diferença na vida das pessoas. Meu foco é sempre entregar código limpo, escalável e que atenda às necessidades reais dos usuários.',
        techTitle: 'Tecnologias',
        testimonialsTitle: 'Depoimentos',
        educationTitle: 'Educação',
        experienceTitle: 'Experiência Profissional',
    },
    projects: {
        title: 'Projetos',
        description:
            'Alguns dos projetos que desenvolvi ao longo da minha carreira. Cada um representa um desafio único e aprendizado contínuo.',
    },
    projectDetails: {
        backButton: 'Voltar para Projetos',
        viewProject: 'Ver Projeto',
        viewCode: 'Ver Código',
        aboutTitle: 'Sobre o Projeto',
        techTitle: 'Tecnologias Utilizadas',
    },
    content: {
        title: 'Conteúdos',
        description:
            'Compartilho conhecimento através de vídeos e artigos sobre desenvolvimento web, boas práticas e tecnologias modernas.',
        all: 'Todos',
        videos: 'Vídeos',
        articles: 'Artigos',
    },
    contact: {
        title: 'Entre em Contato',
        description:
            'Estou sempre aberto a novas oportunidades e colaborações. Entre em contato comigo através dos canais abaixo.',
        email: 'E-mail',
        phone: 'Telefone',
        location: 'Localização',
        sendMessage: 'Enviar Mensagem',
        name: 'Nome',
        namePlaceholder: 'Seu nome completo',
        emailPlaceholder: 'seu@email.com',
        message: 'Mensagem',
        messagePlaceholder: 'Escreva sua mensagem aqui...',
    },
    notFound: {
        title: '404',
        message: 'Ops! Página não encontrada',
        backButton: 'Voltar para Home',
    },
    footer: {
        rights: 'Todos os direitos reservados.',
    },
    contentBadges: {
        video: 'Vídeo',
        article: 'Artigo',
    },
    toast: {
        messageSent: 'Mensagem enviada!',
        thankYou: 'Obrigado pelo contato. Responderei em breve!',
        sending: 'Enviando...',
    },
};
