import { Award, Database, Palette, Server, Smartphone, Trophy, Users } from 'lucide-react';
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
        name: 'Hugo de Paula',
        role: 'Professor na PUC Minas',
        image: 'https://media.licdn.com/dms/image/v2/C4E03AQGl93rGXJtw5w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1637103746149?e=1766016000&v=beta&t=pRnLdHfXpjnl84MGMLNiWMy1bemOzczRa95D2fH7hNo',
        text: 'O Artur é um profissional dedicado, organizado, estudioso e muito competente. Preza pela qualidade dos sistemas que desenvolve e busca se aprofundar nas tecnologias que domina. Um ótimo profissional!',
    },
    {
        name: 'Eduarda Vieira',
        role: 'Desenvolvedora Web no WebTech Network',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQHA-xE76bOPSA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711488086533?e=1766016000&v=beta&t=pMuG-rgLCUdK3b5CTxj_XpbL6EAJQF0QqQBLdLD5sZs',
        text: 'Durante o segundo semestre de Engenharia de Software, tive a oportunidade de acompanhar de perto o progresso e aprendizado do Artur Bomtempo. Desde que o conheci, ele sempre demonstrou muito engajamento e disposição para ensinar e ajudar os colegas, unindo uma base técnica sólida com experiência de mercado e boas práticas. Seu raciocínio lógico, dedicação e comprometimento são diferenciais claros. Ele aprende com facilidade [...] e se adapta rapidamente aos desafios. Trabalhar com ele em projetos tem sido muito enriquecedor, tanto pela qualidade técnica que entrega quanto pela forma colaborativa e comprometida com que atua em equipe.',
    },
    {
        name: 'Arthur Chagas',
        role: 'CTO na QuickFood Technologies',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQFqLuhATg7cLA/profile-displayphoto-scale_200_200/B4DZjtEP_4GQAk-/0/1756323971733?e=1766016000&v=beta&t=x4D8Ce8Q7NEs404auhbbRl7lOYqSF296UrmH98FxBh4',
        text: 'É com grande satisfação que recomendo o Artur para oportunidades na área de programação. Durante nosso tempo de trabalho e estudo juntos, pude observar suas habilidades técnicas excepcionais e seu compromisso com a excelência. Artur é um programador talentoso, capaz de resolver problemas de forma criativa e colaborar efetivamente em equipe. Sua ética de trabalho e sua comunicação clara o tornam um colega valioso em qualquer projeto. Não hesito em recomendá-lo e tenho certeza de que ele continuará a alcançar sucesso em sua carreira.',
    },
    {
        name: 'Pedro Félix',
        role: 'Artificial Intelligence Intern na Hotmart',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQHKHKeUp1mbHA/profile-displayphoto-scale_200_200/B4DZmqKWpoGgAY-/0/1759496466179?e=1766016000&v=beta&t=a6jljiDWtUtaWBBART7EG_S4qmOZi4uQnn3cxI_46YE',
        text: 'O Artur é extremamente dedicado e sempre demonstrou empenho e máxima dedicação em todas as tarefas, sejam elas simples ou complexas.',
    },
    {
        name: 'Lucas Sena',
        role: 'Desenvolvedor de Software na Samsung',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQGCRadSsNupDg/profile-displayphoto-scale_200_200/B4DZf7ewwkHkAc-/0/1752270836205?e=1766016000&v=beta&t=SLneRstpCQfujt060GNKf2JKfX0FQU2_g44RuNYguYw',
        text: 'Pela experiência que tenho com o Artur, posso afirmar com segurança que ele é um excelente profissional e aluno. Muito esforçado e dedicado, ele busca aprender e evoluir diariamente — requisitos de grande importância para a área de tecnologia. Além disso, possui uma base lógica sólida e habilidades de desenvolvimento de software bem consolidadas.',
    },
    {
        name: 'Letícia França',
        role: 'Designer no WebTech Network',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQF5IRhSKofZMg/profile-displayphoto-scale_200_200/B4DZqcOovOIAAc-/0/1763557674985?e=1766016000&v=beta&t=ovQTK2JERk9p27zLiJ43wVhpwSw8mPrd3dS5r9adWZ0',
        text: 'Acompanho o Artur desde a metade de 2023, no Ensino Médio Técnico em Informática. Ele sempre se mostrou muito esforçado, empenhado e estudioso. Ao longo desse período, desenvolvemos uma grande amizade [...]. Ele tem toda a minha admiração pela perseverança e pela paixão pelo que faz. É uma satisfação tê-lo como meu grande parceiro em projetos!',
    },
    {
        name: 'Henrique Braga',
        role: 'Co-Founder no Vidas Vividas',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQG1pycCuwZr-w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1675865314571?e=1766016000&v=beta&t=1sepUnvz6ywCfEPXLQCEO7RkdzDtZEhz02ErJfHLM9Y',
        text: 'Artur trabalhou comigo no Vidas Vividas e demonstrou ser muito focado no que faz, executando tudo com muita dedicação. Acima de todo o bom trabalho, sua maior característica é ter princípios e ser uma pessoa relevante no ambiente de trabalho.',
    },
    {
        name: 'Pedro Henrique Oliveira',
        role: 'Co-Founder no Vidas Vividas',
        image: 'https://media.licdn.com/dms/image/v2/D4E03AQG6nEqA3Ar5Uw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710351455025?e=1766016000&v=beta&t=igz65h9sXYJ4e42Q9NO1Evz2CrYwKEXRObAq4k3-lPg',
        text: 'Ter o Artur no nosso time foi um grande prazer. Sempre disposto a aprender e a se dedicar às atividades! Desejo todo sucesso!',
    },
    {
        name: 'Thiago porto',
        role: 'Analista de Dados no Vidas Vividas',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQFvm99F0YTfKQ/profile-displayphoto-scale_200_200/B4DZq6v4jwJ4AY-/0/1764069706688?e=1766016000&v=beta&t=izE-JB7rtBqEVJHZwhuxXOCuCkWdlLxzekNIzlFs0WM',
        text: 'No período em que o Artur estagiou conosco no Vidas, foi perceptível sua eficiência, solucionando de maneira eficaz todas as demandas que lhe eram atribuídas. Sou grato por ter tido a oportunidade de tê-lo como companheiro de trabalho. Sua simpatia e empatia permitiram um ótimo convívio.',
    },
    {
        name: 'Aquila Faria',
        role: 'Designer & Videomaker no Vidas Vividas',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQGgsrsN4qba8g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688704554164?e=1766016000&v=beta&t=o3Ou6PWtjmwQ-NM-7T8RxsqgagsPG48uGmDp4LZRlxk',
        text: 'Artur se mostrou bastante coerente e responsável com seu trabalho durante o período em que esteve no Vidas. Realmente é — e continuará se tornando — um grande profissional!',
    },
    {
        name: 'Paulo Henrique',
        role: 'Professor no Colégio Cotemig',
        image: 'https://media.licdn.com/dms/image/v2/C4E03AQGN5rmNiOPhqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1557366845769?e=1766016000&v=beta&t=IyvCXzru0ickfB_K5IPatz2wC4lySsw3pbU5jKwdEZc',
        text: 'Um aluno e profissional extremamente interessado e proativo, focado na resolução de problemas e com grande interesse em inovação. Excelente desenvolvedor e sempre aprendendo novas linguagens!',
    },
    {
        name: 'Eduardo Gonçalves',
        role: 'Professor no Cotemig',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQGHO-KMYxkX_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663711191169?e=1766016000&v=beta&t=XH8qlXwbKSNlgGM3OZTDZjeP8yQQe2e7XY_H8inbpGM',
        text: 'O meu ex-aluno Artur Bomtempo desempenhou de forma brilhante todas as tarefas de programação ao longo do curso. Sempre atento e participativo, criou códigos muitas vezes além do solicitado pelos exercícios. Tranquilo e confiável, sei que será um programador talentoso e de grande valia para qualquer empresa, no Brasil ou até mesmo no exterior. Estarei sempre aqui para aplaudir sua caminhada pelo mundo da Tecnologia da Informação.',
    },
    {
        name: 'Mario Camargos',
        role: 'Professor no Cotemig',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQFAaKoF6cMo6w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517287255764?e=1766016000&v=beta&t=stOeV6-Q49pgmqM7lkp3WGMeplhuZhDTYrfHBh-75FM',
        text: 'O Artur Bomtempo é um aluno especial, sempre em destaque e ganhador invicto do prêmio ‘The Best’, promovido pelo Colégio Cotemig. Já desenvolveu grande parte de suas habilidades e competências como desenvolvedor, e é notável que terá uma carreira promissora. Ele se destaca pelo empenho, pelo bom raciocínio lógico e por sempre apresentar as melhores soluções. Outro diferencial é que está constantemente buscando ampliar seu conhecimento, participando de todos os cursos possíveis, dentro e fora da escola, o que o mantém sempre em posição de destaque.',
    },
    {
        name: 'Artur Coelho',
        role: 'Professor no Cotemig',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQGeMwc9nMA2JQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1567173550989?e=1766016000&v=beta&t=Jv0-m20-j6zVtvCPxXqfzUu-HV-saWsRfwMwpwWb-EA',
        text: 'Aluno muito dedicado e comprometido com as atividades propostas, com facilidade na área técnica e ótimos valores pessoais. Tem tudo para crescer pessoal e profissionalmente.',
    },
];

export const timeline: Timeline = {
    education: [
        {
            year: '2025 - o momento',
            title: 'Bacharelado em Engenharia de Software',
            institution: 'PUC Minas',
            description:
                'Formação voltada para o desenvolvimento e modelagem de software, com ênfase em análise, arquitetura, requisitos, qualidade e fundamentos matemáticos aplicados.',
            activities: [
                'Desenvolvimento Web com Spring Boot e Node.js',
                'Modelagem de Software (UML, requisitos e arquitetura)',
                'Qualidade, testes e manutenção de software',
                'Estruturas de Dados e Programação Orientada a Objetos',
                'Fundamentos de Sistemas Operacionais',
            ],
        },
        {
            year: '2024',
            title: 'Bacharelado em Ciência da Computação',
            institution: 'PUC Minas',
            description:
                'Formação voltada para fundamentos teóricos e práticos da computação, com ênfase em algoritmos, estruturas de dados, POO e princípios de engenharia de software.',
            activities: [
                'Algoritmos e Estruturas de Dados',
                'Programação Orientada a Objetos',
                'Introdução à Engenharia de Software',
                'Desenvolvimento Web com HTML, CSS, JavaScript e Java (Spark)',
                'Programação com Arduino',
            ],
        },
        {
            year: '2021 - 2023',
            title: 'Técnico em Informática',
            institution: 'Colégio Cotemig',
            description:
                'Formação técnica focada no desenvolvimento prático de aplicações webe mobile, com aprofundamento em lógica de programação e fundamentos de computação.',
            activities: [
                'Lógica de Programação em C#',
                'Desenvolvimento Web com HTML, CSS e JavaScript',
                'Modelagem e criação de bancos de dados relacionais',
                'Introdução ao desenvolvimento mobile (Kotlin e Swift)',
                'Fundamentos de Redes de Computadores',
            ],
        },
    ],
    professional: [
        {
            year: '2025 - o momento',
            title: 'Software Developer',
            company: 'dti digital',
            description:
                'Atuação no suporte e manutenção de sistemas corporativos para o cliente MRV.',
            activities: [
                'Manutenção e evolução de aplicações com .NET no back-end',
                'Implementação de funcionalidades e correções usando React.js',
                'Suporte técnico aos sistemas da MRV dentro da Enterprise Inari',
                'Colaboração em ambiente ágil com foco em qualidade e eficiência',
            ],
        },
        {
            year: '2024 - o momento',
            title: 'Chapter Lead & Desenvolvedor Full Stack',
            company: 'WebTech Network',
            description:
                'Liderança técnica e desenvolvimento full stack em projetos e iniciativas de formação dentro do WebTech.',
            activities: [
                'Desenvolvimento de interfaces e APIs com React.js, Next.js, Java e Spring Boot',
                'Definição de arquitetura e implementação de soluções digitais para projetos internos e parceiros',
                'Criação de materiais técnicos e estruturados de aprendizado para novos integrantes',
                'Mentoria em Back-end, Front-end, bancos de dados e versionamento',
                'Condução de workshops, palestras e orientação técnica em projetos como DevFest, ASSPROM e Journey Back-end',
            ],
        },
        {
            year: '2025',
            title: 'Monitor de Programação e Algoritmos',
            company: 'PUC Minas',
            description:
                'Apoio aos estudantes no aprendizado de Java, lógica, POO e estruturas de dados, atuando como monitor nas disciplinas de Algoritmos e Estruturas de Dados I e II e Programação Modular.',
            activities: [
                'Orientação em Java e Programação Orientada a Objetos',
                'Auxílio em lógica, algoritmos e implementação em C e C++',
                'Suporte em estruturas de dados e técnicas de ordenação',
                'Aplicação de princípios SOLID, Design Patterns e testes com JUnit',
                'Acompanhamento de exercícios, projetos e esclarecimento de dúvidas',
            ],
        },
        {
            year: '2024',
            title: 'Desenvolvedor Full Stack',
            company: 'PUCTec',
            description:
                'Desenvolvimento full stack de soluções digitais para startups apoiadas pelo hub de inovação.',
            activities: [
                'Implementação de funcionalidades no front-end e back-end',
                'Criação de interfaces intuitivas e funcionais',
                'Construção e manutenção da arquitetura de servidores',
                'Apoio técnico no desenvolvimento de soluções escaláveis',
            ],
        },
        {
            year: '2023-2024',
            title: 'CXO & Desenvolvedor Full Stack',
            company: 'QuickFood Technologies',
            description:
                'Responsável pela experiência do usuário e pelo desenvolvimento full stack da plataforma da startup.',
            activities: [
                'Desenvolvimento front-end e back-end do sistema',
                'Construção e manutenção do chatbot usando Blip e JavaScript',
                'Criação de fluxos conversacionais focados em eficiência e UX',
                'Aprimoramento contínuo da usabilidade e performance da plataforma',
                'Colaboração no planejamento de produto e definição de soluções',
            ],
        },
        {
            year: '2023-2024',
            title: 'Desenvolvedor de Chatbot',
            company: 'White Wall',
            description:
                'Desenvolvimento e manutenção de chatbots e fluxos conversacionais para diferentes clientes.',
            activities: [
                'Criação e manutenção de chatbots usando Blip e JavaScript',
                'Construção de fluxos conversacionais focados em UX',
                'Integração com APIs REST e recursos externos',
                'Colaboração em times remotos utilizando Git e GitHub',
            ],
        },
        {
            year: '2023',
            title: 'Desenvolvedor Web',
            company: 'Vidas Empreendimentos',
            description:
                'Atuação no desenvolvimento de sites e soluções digitais para clientes da área de marketing.',
            activities: [
                'Criação de sites em WordPress e HTML/CSS',
                'Desenvolvimento de chatbots para WhatsApp',
                'Apoio no web design e UX das soluções digitais',
                'Gerenciamento de tarefas usando metodologias ágeis',
                'Elaboração de fluxogramas e documentação de processos',
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
