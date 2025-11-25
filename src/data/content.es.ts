import { Project, Content, Achievement, TechCategory, Testimonial, Timeline } from './types';
import { Code, Users, Award, Layers, Database, Palette } from 'lucide-react';

export const projects: Project[] = [
    {
        id: 'ecommerce-platform',
        title: 'Plataforma E-Commerce',
        description:
            'Una solución completa de comercio electrónico desarrollada para transformar la experiencia de compra en línea.',
        image: 'https://raw.githubusercontent.com/arturbomtempo-dev/devfest-bh-website/main/resources/screenshots/main-section.png',
        cardTechs: ['React', 'Node.js', 'PostgreSQL'],
        fullDescription: `Este proyecto fue desarrollado para una empresa de tamaño mediano que necesitaba modernizar su presencia en línea. El desafío principal fue crear una experiencia de usuario fluida mientras se mantenía alto rendimiento y seguridad.

Implementé funcionalidades avanzadas como:
- Carrito de compras con persistencia
- Sistema de cupones y descuentos
- Integración con múltiples métodos de pago
- Panel administrativo con analíticas en tiempo real
- Sistema de reseñas y calificaciones
- Notificaciones por correo electrónico automatizadas
- Gestión de múltiples vendedores

El resultado fue un aumento del 150% en las ventas en línea en los primeros 3 meses después del lanzamiento.`,
        allTechs: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        id: 'task-manager',
        title: 'Gestor de Tareas',
        description:
            'Aplicación completa de productividad enfocada en la colaboración en equipo y gestión eficiente de proyectos.',
        image: 'https://raw.githubusercontent.com/arturbomtempo-dev/devfest-bh-website/main/resources/screenshots/main-section.png',
        cardTechs: ['Next.js', 'TypeScript', 'Supabase'],
        fullDescription: `Una herramienta completa para gestión de tareas y proyectos, desarrollada con enfoque en colaboración y productividad.

Características principales:
- Sistema de arrastrar y soltar para organización de tareas
- Notificaciones en tiempo real
- Asignación de tareas con plazos y prioridades
- Sistema de comentarios y adjuntos
- Integración con calendario
- Informes de productividad

La aplicación fue desarrollada pensando en equipos ágiles y ofrece una interfaz intuitiva que facilita la comunicación y el seguimiento de proyectos.`,
        allTechs: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        id: 'portfolio-website',
        title: 'Portfolio Personal',
        description:
            'Sitio de portafolio moderno y responsive desarrollado con las mejores prácticas de desarrollo web.',
        image: 'https://raw.githubusercontent.com/arturbomtempo-dev/devfest-bh-website/main/resources/screenshots/main-section.png',
        cardTechs: ['React', 'TypeScript', 'Tailwind CSS'],
        fullDescription: `Un portafolio personal desarrollado con enfoque en diseño minimalista y rendimiento. El sitio presenta animaciones suaves, diseño responsive y optimización para SEO.

Características principales:
- Diseño moderno y limpio
- Animaciones suaves con Framer Motion
- Totalmente responsive
- Optimizado para rendimiento
- Accesibilidad (WCAG 2.1)
- Modo oscuro con transiciones suaves

El proyecto demuestra habilidades en diseño de interfaz, desarrollo front-end y optimización de rendimiento.`,
        allTechs: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
        liveUrl: '#',
        githubUrl: '#',
    },
];

export const contents: Content[] = [
    {
        type: 'video',
        title: 'Introducción a React Hooks',
        description: 'Aprende a usar los principales hooks de React de forma práctica y eficiente.',
        thumbnail:
            'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
        url: '#',
        platform: 'YouTube',
        date: '2024-01-15',
    },
    {
        type: 'article',
        title: 'Código Limpio en JavaScript',
        description: 'Mejores prácticas para escribir código limpio y mantenible en JavaScript.',
        thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=450&fit=crop',
        url: '#',
        platform: 'Medium',
        date: '2024-01-10',
    },
    {
        type: 'video',
        title: 'TypeScript Avanzado',
        description: 'Explorando recursos avanzados de TypeScript para mejorar tu productividad.',
        thumbnail:
            'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=450&fit=crop',
        url: '#',
        platform: 'YouTube',
        date: '2024-01-05',
    },
    {
        type: 'article',
        title: 'Arquitectura de Micro Frontend',
        description: 'Cómo implementar micro frontends en aplicaciones de gran escala.',
        thumbnail: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=450&fit=crop',
        url: '#',
        platform: 'Medium',
        date: '2023-12-20',
    },
    {
        type: 'video',
        title: 'Rendimiento Web Avanzado',
        description: 'Técnicas avanzadas para optimizar el rendimiento de aplicaciones web.',
        thumbnail:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
        url: '#',
        platform: 'YouTube',
        date: '2023-12-15',
    },
    {
        type: 'article',
        title: 'Testing con Jest y React Testing Library',
        description: 'Guía completa sobre pruebas en aplicaciones React.',
        thumbnail:
            'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=450&fit=crop',
        url: '#',
        platform: 'Medium',
        date: '2023-12-10',
    },
];

export const achievements: Achievement[] = [
    {
        icon: Code,
        title: '50+ Proyectos',
        description: 'Proyectos desarrollados y entregados',
    },
    {
        icon: Users,
        title: '30+ Clientes',
        description: 'Clientes satisfechos',
    },
    {
        icon: Award,
        title: '5+ Años',
        description: 'Años de experiencia',
    },
];

export const techCategories: TechCategory[] = [
    {
        icon: Layers,
        title: 'Frontend',
        techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
    },
    {
        icon: Database,
        title: 'Backend',
        techs: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
        icon: Palette,
        title: 'Diseño',
        techs: ['Figma', 'Adobe XD', 'Framer Motion', 'GSAP'],
    },
    {
        icon: Code,
        title: 'Herramientas',
        techs: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest'],
    },
];

export const testimonials: Testimonial[] = [
    {
        name: 'João Silva',
        role: 'CEO en TechStart',
        text: '¡Trabajo excepcional! Entregó el proyecto antes de tiempo y superó todas las expectativas. Altamente recomendado.',
    },
    {
        name: 'Maria Santos',
        role: 'CTO en InnovaTech',
        text: 'Profesional extremadamente competente y dedicado. La calidad del código y atención al detalle son impresionantes.',
    },
    {
        name: 'Carlos Oliveira',
        role: 'Product Manager',
        text: 'Excelente comunicación y capacidad para transformar ideas en soluciones prácticas. Fue un placer trabajar juntos.',
    },
];

export const timeline: Timeline = {
    education: [
        {
            year: '2023',
            title: 'Posgrado en Arquitectura de Software',
            institution: 'Universidad Federal',
            description:
                'Especialización enfocada en diseño de sistemas escalables, patrones arquitectónicos y mejores prácticas de ingeniería de software.',
            activities: [
                'Arquitectura de Microservicios y Patrones de Diseño',
                'Computación en la Nube e Infraestructura como Código',
                'DevOps, CI/CD y Automatización',
                'Domain-Driven Design (DDD)',
                'Seguridad y Rendimiento en Aplicaciones',
            ],
        },
        {
            year: '2020',
            title: 'Licenciatura en Ciencias de la Computación',
            institution: 'Universidad Estatal',
            description:
                'Formación sólida en fundamentos de computación, algoritmos, estructuras de datos y desarrollo de software.',
            activities: [
                'Algoritmos y Estructuras de Datos',
                'Programación Orientada a Objetos',
                'Base de Datos y SQL',
                'Ingeniería de Software y Metodologías Ágiles',
                'Desarrollo Web Full Stack',
                'Proyecto Final: Sistema de Gestión Académica',
            ],
        },
        {
            year: '2018',
            title: 'Técnico en Desarrollo de Sistemas',
            institution: 'Instituto Técnico',
            description:
                'Curso técnico enfocado en desarrollo práctico de aplicaciones web y de escritorio.',
            activities: [
                'Lógica de Programación y Algoritmos',
                'HTML, CSS y JavaScript',
                'Desarrollo de Aplicaciones de Escritorio',
                'Bases de Datos Relacionales',
                'Proyecto Final: Sistema de Control de Inventario',
            ],
        },
    ],
    professional: [
        {
            year: '2022 - Actual',
            title: 'Desarrollador Full Stack Senior',
            company: 'Tech Solutions Inc.',
            description:
                'Liderazgo técnico en el desarrollo de soluciones empresariales escalables, mentoría de equipo y definición de arquitectura.',
            activities: [
                'Arquitectura y desarrollo de aplicaciones React y Node.js',
                'Mentoría técnica de desarrolladores junior y semi-senior',
                'Definición de estándares de código y mejores prácticas',
                'Integración con servicios AWS (Lambda, S3, RDS)',
                'Revisión de código y garantía de calidad',
                'Optimización de rendimiento y escalabilidad',
            ],
        },
        {
            year: '2020 - 2022',
            title: 'Desarrollador Full Stack',
            company: 'StartupXYZ',
            description:
                'Desarrollo de funcionalidades completas desde cero, desde la concepción hasta producción, en ambiente ágil de startup.',
            activities: [
                'Desarrollo de APIs RESTful con Node.js',
                'Creación de interfaces responsivas con React',
                'Implementación de pruebas automatizadas',
                'Gestión de base de datos PostgreSQL',
                'Despliegue y mantenimiento en ambiente de producción',
                'Participación activa en ceremonias ágiles (Scrum)',
            ],
        },
        {
            year: '2018 - 2020',
            title: 'Desarrollador Junior',
            company: 'WebDev Agency',
            description:
                'Inicio de carrera profesional desarrollando sitios web y sistemas web para diversos clientes.',
            activities: [
                'Desarrollo de sitios web responsivos',
                'Mantenimiento y corrección de errores en sistemas legacy',
                'Creación de layouts con HTML, CSS y JavaScript',
                'Integración con APIs de terceros',
                'Soporte técnico a clientes',
            ],
        },
    ],
};
