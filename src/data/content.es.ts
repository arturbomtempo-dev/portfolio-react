import { Database, Palette, Presentation, Server, Smartphone, Trophy, Users } from 'lucide-react';
import { Achievement, Content, Project, TechCategory, Testimonial, Timeline } from './types';

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
        icon: Trophy,
        title: '10+ Premios',
        description: 'Reconocimientos recibidos',
        fullDescription:
            'A lo largo de mi trayectoria académica y profesional, he tenido el honor de recibir diversos premios y reconocimientos que validan mi esfuerzo, dedicación y excelencia técnica. Cada logro representa un hito importante en mi desarrollo como desarrollador y profesional.',
        details: [
            'Ganador invicto del premio "The Best" promovido por Colégio Cotemig',
            'Reconocimiento por excelencia académica en disciplinas de programación',
            'Premios en hackathons y competiciones de desarrollo',
            'Destaque en proyectos académicos e iniciativas estudiantiles',
            'Reconocimiento por contribuciones en proyectos open source',
        ],
    },
    {
        icon: Users,
        title: '4+ Años',
        description: 'Años de Experiencia',
        fullDescription:
            'Mi trayectoria profesional comenzó en 2023 y desde entonces vengo acumulando experiencias valiosas en diversas áreas del desarrollo de software. He trabajado con diferentes tecnologías, metodologías y equipos, siempre buscando entregar soluciones de calidad y aprender continuamente.',
        details: [
            'Experiencia en desarrollo full stack con enfoque en React y Node.js',
            'Actuación en startups y empresas de mediano y gran porte',
            'Trabajo con metodologías ágiles (Scrum, Kanban)',
            'Experiencia en liderazgo técnico y mentoría de desarrolladores',
            'Participación en proyectos de diferentes segmentos y complejidades',
        ],
    },
    {
        icon: Presentation,
        title: '5+ Charlas',
        description: 'Workshops y cursos impartidos',
        fullDescription:
            'Creo que compartir conocimiento es fundamental para el crecimiento de la comunidad tech. Por eso, vengo impartiendo charlas, workshops y cursos sobre desarrollo de software, compartiendo experiencias y ayudando a otros desarrolladores en su trayectoria.',
        details: [
            'Charlas en eventos como DevFest, meetups y conferencias',
            'Workshops de React.js, Next.js y desarrollo front-end',
            'Cursos de Backend con Java, Spring Boot y Node.js',
            'Mentoría técnica para nuevos integrantes de WebTech Network',
            'Presentaciones sobre buenas prácticas y arquitectura de software',
        ],
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
            'Express.js',
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
        title: 'Base de Datos',
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
        role: 'Profesor en PUC Minas',
        image: 'https://media.licdn.com/dms/image/v2/C4E03AQGl93rGXJtw5w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1637103746149?e=1766016000&v=beta&t=pRnLdHfXpjnl84MGMLNiWMy1bemOzczRa95D2fH7hNo',
        text: 'Artur es un profesional dedicado, organizado, estudioso y muy competente. Valora la calidad de los sistemas que desarrolla y busca profundizar en las tecnologías que domina. ¡Un profesional excelente!',
    },
    {
        name: 'Eduarda Vieira',
        role: 'Desarrolladora Web en WebTech Network',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQHA-xE76bOPSA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711488086533?e=1766016000&v=beta&t=pMuG-rgLCUdK3b5CTxj_XpbL6EAJQF0QqQBLdLD5sZs',
        text: 'Durante el segundo semestre de Ingeniería de Software, tuve la oportunidad de seguir de cerca el progreso y aprendizaje de Artur Bomtempo. Desde que lo conocí, siempre ha demostrado mucho compromiso y disposición para enseñar y ayudar a los compañeros, combinando una base técnica sólida con experiencia de mercado y buenas prácticas. Su raciocinio lógico, dedicación y compromiso son diferenciales claros. Aprende con facilidad [...] y se adapta rápidamente a los desafíos. Trabajar con él en proyectos ha sido muy enriquecedor, tanto por la calidad técnica que entrega como por la forma colaborativa y comprometida con la que actúa en equipo.',
    },
    {
        name: 'Arthur Chagas',
        role: 'CTO en QuickFood Technologies',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQFqLuhATg7cLA/profile-displayphoto-scale_200_200/B4DZjtEP_4GQAk-/0/1756323971733?e=1766016000&v=beta&t=x4D8Ce8Q7NEs404auhbbRl7lOYqSF296UrmH98FxBh4',
        text: 'Es con gran satisfacción que recomiendo a Artur para oportunidades en el área de programación. Durante nuestro tiempo de trabajo y estudio juntos, pude observar sus habilidades técnicas excepcionales y su compromiso con la excelencia. Artur es un programador talentoso, capaz de resolver problemas de forma creativa y colaborar efectivamente en equipo. Su ética de trabajo y su comunicación clara lo hacen un colega valioso en cualquier proyecto. No dudo en recomendarlo y estoy seguro de que continuará alcanzando éxito en su carrera.',
    },
    {
        name: 'Pedro Félix',
        role: 'Pasante de Inteligencia Artificial en Hotmart',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQHKHKeUp1mbHA/profile-displayphoto-scale_200_200/B4DZmqKWpoGgAY-/0/1759496466179?e=1766016000&v=beta&t=a6jljiDWtUtaWBBART7EG_S4qmOZi4uQnn3cxI_46YE',
        text: 'Artur es extremadamente dedicado y siempre ha demostrado empeño y máxima dedicación en todas las tareas, sean simples o complejas.',
    },
    {
        name: 'Lucas Sena',
        role: 'Desarrollador de Software en Samsung',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQGCRadSsNupDg/profile-displayphoto-scale_200_200/B4DZf7ewwkHkAc-/0/1752270836205?e=1766016000&v=beta&t=SLneRstpCQfujt060GNKf2JKfX0FQU2_g44RuNYguYw',
        text: 'Por la experiencia que tengo con Artur, puedo afirmar con seguridad que es un excelente profesional y estudiante. Muy esforzado y dedicado, busca aprender y evolucionar diariamente — requisitos de gran importancia para el área de tecnología. Además, posee una base lógica sólida y habilidades de desarrollo de software bien consolidadas.',
    },
    {
        name: 'Letícia França',
        role: 'Diseñadora en WebTech Network',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQF5IRhSKofZMg/profile-displayphoto-scale_200_200/B4DZqcOovOIAAc-/0/1763557674985?e=1766016000&v=beta&t=ovQTK2JERk9p27zLiJ43wVhpwSw8mPrd3dS5r9adWZ0',
        text: 'Acompaño a Artur desde mediados de 2023, en la Enseñanza Media Técnica en Informática. Siempre se ha mostrado muy esforzado, comprometido y estudioso. A lo largo de este período, desarrollamos una gran amistad [...]. Tiene toda mi admiración por su perseverancia y pasión por lo que hace. ¡Es una satisfacción tenerlo como mi gran compañero en proyectos!',
    },
    {
        name: 'Henrique Braga',
        role: 'Co-Fundador en Vidas Vividas',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQG1pycCuwZr-w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1675865314571?e=1766016000&v=beta&t=1sepUnvz6ywCfEPXLQCEO7RkdzDtZEhz02ErJfHLM9Y',
        text: 'Artur trabajó conmigo en Vidas Vividas y demostró ser muy enfocado en lo que hace, ejecutando todo con mucha dedicación. Por encima de todo el buen trabajo, su mayor característica es tener principios y ser una persona relevante en el ambiente de trabajo.',
    },
    {
        name: 'Pedro Henrique Oliveira',
        role: 'Co-Fundador en Vidas Vividas',
        image: 'https://media.licdn.com/dms/image/v2/D4E03AQG6nEqA3Ar5Uw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710351455025?e=1766016000&v=beta&t=igz65h9sXYJ4e42Q9NO1Evz2CrYwKEXRObAq4k3-lPg',
        text: '¡Tener a Artur en nuestro equipo fue un gran placer. Siempre dispuesto a aprender y a dedicarse a las actividades! ¡Le deseo todo el éxito!',
    },
    {
        name: 'Thiago Porto',
        role: 'Analista de Datos en Vidas Vividas',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQFvm99F0YTfKQ/profile-displayphoto-scale_200_200/B4DZq6v4jwJ4AY-/0/1764069706688?e=1766016000&v=beta&t=izE-JB7rtBqEVJHZwhuxXOCuCkWdlLxzekNIzlFs0WM',
        text: 'En el período en que Artur hizo prácticas con nosotros en Vidas, fue perceptible su eficiencia, resolviendo de manera eficaz todas las demandas que le eran asignadas. Estoy agradecido por haber tenido la oportunidad de tenerlo como compañero de trabajo. Su simpatía y empatía permitieron una excelente convivencia.',
    },
    {
        name: 'Aquila Faria',
        role: 'Diseñador & Videomaker en Vidas Vividas',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQGgsrsN4qba8g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688704554164?e=1766016000&v=beta&t=o3Ou6PWtjmwQ-NM-7T8RxsqgagsPG48uGmDp4LZRlxk',
        text: 'Artur se mostró bastante coherente y responsable con su trabajo durante el período en que estuvo en Vidas. ¡Realmente es — y continuará siendo — un gran profesional!',
    },
    {
        name: 'Paulo Henrique',
        role: 'Profesor en Cotemig',
        image: 'https://media.licdn.com/dms/image/v2/C4E03AQGN5rmNiOPhqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1557366845769?e=1766016000&v=beta&t=IyvCXzru0ickfB_K5IPatz2wC4lySsw3pbU5jKwdEZc',
        text: 'Un estudiante y profesional extremadamente interesado y proactivo, enfocado en la resolución de problemas y con gran interés en innovación. ¡Excelente desarrollador y siempre aprendiendo nuevos lenguajes!',
    },
    {
        name: 'Eduardo Gonçalves',
        role: 'Profesor en Cotemig',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQGHO-KMYxkX_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663711191169?e=1766016000&v=beta&t=XH8qlXwbKSNlgGM3OZTDZjeP8yQQe2e7XY_H8inbpGM',
        text: 'Mi ex alumno Artur Bomtempo desempeñó de forma brillante todas las tareas de programación a lo largo del curso. Siempre atento y participativo, creó códigos muchas veces más allá de lo solicitado por los ejercicios. Tranquilo y confiable, sé que será un programador talentoso y de gran valor para cualquier empresa, en Brasil o incluso en el extranjero. Siempre estaré aquí para aplaudir su camino por el mundo de la Tecnología de la Información.',
    },
    {
        name: 'Mario Camargos',
        role: 'Profesor en Cotemig',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQFAaKoF6cMo6w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517287255764?e=1766016000&v=beta&t=stOeV6-Q49pgmqM7lkp3WGMeplhuZhDTYrfHBh-75FM',
        text: 'Artur Bomtempo es un estudiante especial, siempre destacado y ganador invicto del premio "The Best", promovido por el Colégio Cotemig. Ya ha desarrollado gran parte de sus habilidades y competencias como desarrollador, y es notable que tendrá una carrera prometedora. Se destaca por su empeño, buen raciocinio lógico y por siempre presentar las mejores soluciones. Otro diferencial es que está constantemente buscando ampliar su conocimiento, participando de todos los cursos posibles, dentro y fuera de la escuela, lo que lo mantiene siempre en posición destacada.',
    },
    {
        name: 'Artur Coelho',
        role: 'Profesor en Cotemig',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQGeMwc9nMA2JQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1567173550989?e=1766016000&v=beta&t=Jv0-m20-j6zVtvCPxXqfzUu-HV-saWsRfwMwpwWb-EA',
        text: 'Estudiante muy dedicado y comprometido con las actividades propuestas, con facilidad en el área técnica y excelentes valores personales. Tiene todo para crecer personal y profesionalmente.',
    },
];

export const timeline: Timeline = {
    education: [
        {
            year: '2025 - presente',
            title: 'Licenciatura en Ingeniería de Software',
            institution: 'PUC Minas',
            description:
                'Formación enfocada en el desarrollo y modelado de software, con énfasis en análisis, arquitectura, requisitos, calidad y fundamentos matemáticos aplicados.',
            activities: [
                'Desarrollo Web con Spring Boot y Node.js',
                'Modelado de Software (UML, requisitos y arquitectura)',
                'Calidad, pruebas y mantenimiento de software',
                'Estructuras de Datos y Programación Orientada a Objetos',
                'Fundamentos de Sistemas Operativos',
            ],
        },
        {
            year: '2024',
            title: 'Licenciatura en Ciencias de la Computación',
            institution: 'PUC Minas',
            description:
                'Formación enfocada en fundamentos teóricos y prácticos de la computación, con énfasis en algoritmos, estructuras de datos, POO y principios de ingeniería de software.',
            activities: [
                'Algoritmos y Estructuras de Datos',
                'Programación Orientada a Objetos',
                'Introducción a la Ingeniería de Software',
                'Desarrollo Web con HTML, CSS, JavaScript y Java (Spark)',
                'Programación con Arduino',
            ],
        },
        {
            year: '2021 - 2023',
            title: 'Técnico en Informática',
            institution: 'Colégio Cotemig',
            description:
                'Formación técnica enfocada en el desarrollo práctico de aplicaciones web y móviles, con profundización en lógica de programación y fundamentos de computación.',
            activities: [
                'Lógica de Programación en C#',
                'Desarrollo Web con HTML, CSS y JavaScript',
                'Modelado y creación de bases de datos relacionales',
                'Introducción al desarrollo móvil (Kotlin y Swift)',
                'Fundamentos de Redes de Computadores',
            ],
        },
    ],
    professional: [
        {
            year: '2025 - presente',
            title: 'Desarrollador de Software',
            company: 'dti digital',
            description:
                'Trabajo en soporte y mantenimiento de sistemas corporativos para el cliente MRV.',
            activities: [
                'Mantenimiento y evolución de aplicaciones con .NET en el backend',
                'Implementación de funcionalidades y correcciones usando React.js',
                'Soporte técnico a los sistemas de MRV dentro de Enterprise Inari',
                'Colaboración en ambiente ágil con enfoque en calidad y eficiencia',
            ],
        },
        {
            year: '2024 - presente',
            title: 'Chapter Lead & Desarrollador Full Stack',
            company: 'WebTech Network',
            description:
                'Liderazgo técnico y desarrollo full stack en proyectos e iniciativas de formación dentro de WebTech.',
            activities: [
                'Desarrollo de interfaces y APIs con React.js, Next.js, Java y Spring Boot',
                'Definición de arquitectura e implementación de soluciones digitales para proyectos internos y socios',
                'Creación de materiales técnicos y estructurados de aprendizaje para nuevos integrantes',
                'Mentoría en Backend, Frontend, bases de datos y control de versiones',
                'Conducción de workshops, charlas y orientación técnica en proyectos como DevFest, ASSPROM y Journey Backend',
            ],
        },
        {
            year: '2025',
            title: 'Monitor de Programación y Algoritmos',
            company: 'PUC Minas',
            description:
                'Apoyo a estudiantes en el aprendizaje de Java, lógica, POO y estructuras de datos, actuando como monitor en las disciplinas de Algoritmos y Estructuras de Datos I y II y Programación Modular.',
            activities: [
                'Orientación en Java y Programación Orientada a Objetos',
                'Auxilio en lógica, algoritmos e implementación en C y C++',
                'Soporte en estructuras de datos y técnicas de ordenamiento',
                'Aplicación de principios SOLID, Design Patterns y pruebas con JUnit',
                'Acompañamiento de ejercicios, proyectos y aclaración de dudas',
            ],
        },
        {
            year: '2024',
            title: 'Desarrollador Full Stack',
            company: 'PUCTec',
            description:
                'Desarrollo full stack de soluciones digitales para startups apoyadas por el hub de innovación.',
            activities: [
                'Implementación de funcionalidades en frontend y backend',
                'Creación de interfaces intuitivas y funcionales',
                'Construcción y mantenimiento de la arquitectura de servidores',
                'Apoyo técnico en el desarrollo de soluciones escalables',
            ],
        },
        {
            year: '2023-2024',
            title: 'CXO & Desarrollador Full Stack',
            company: 'QuickFood Technologies',
            description:
                'Responsable de la experiencia del usuario y del desarrollo full stack de la plataforma de la startup.',
            activities: [
                'Desarrollo frontend y backend del sistema',
                'Construcción y mantenimiento del chatbot usando Blip y JavaScript',
                'Creación de flujos conversacionales enfocados en eficiencia y UX',
                'Mejora continua de la usabilidad y rendimiento de la plataforma',
                'Colaboración en la planificación de producto y definición de soluciones',
            ],
        },
        {
            year: '2023-2024',
            title: 'Desarrollador de Chatbot',
            company: 'White Wall',
            description:
                'Desarrollo y mantenimiento de chatbots y flujos conversacionales para diferentes clientes.',
            activities: [
                'Creación y mantenimiento de chatbots usando Blip y JavaScript',
                'Construcción de flujos conversacionales enfocados en UX',
                'Integración con APIs REST y recursos externos',
                'Colaboración en equipos remotos utilizando Git y GitHub',
            ],
        },
        {
            year: '2023',
            title: 'Desarrollador Web',
            company: 'Vidas Empreendimentos',
            description:
                'Trabajo en el desarrollo de sitios web y soluciones digitales para clientes del área de marketing.',
            activities: [
                'Creación de sitios web en WordPress y HTML/CSS',
                'Desarrollo de chatbots para WhatsApp',
                'Apoyo en diseño web y UX de las soluciones digitales',
                'Gestión de tareas usando metodologías ágiles',
                'Elaboración de diagramas de flujo y documentación de procesos',
            ],
        },
    ],
};

export const ui = {
    nav: {
        home: 'Inicio',
        about: 'Acerca de',
        projects: 'Proyectos',
        content: 'Contenidos',
        contact: 'Contacto',
    },
    home: {
        greeting: 'Soy',
        role: 'Desarrollador de Software',
        description:
            'Siempre he tenido el deseo de generar impacto en la vida de las personas — y encontré en el desarrollo de software una forma de convertir eso en realidad.',
        aboutButton: 'Acerca de mí',
        contactButton: 'Contáctame',
    },
    about: {
        title: 'Acerca de Mí',
        description:
            'Soy un desarrollador apasionado por crear soluciones innovadoras y eficientes. Con más de 5 años de experiencia en el mercado, me he dedicado a construir aplicaciones web y móviles que marcan la diferencia en la vida de las personas. Mi enfoque es siempre entregar código limpio, escalable y que satisfaga las necesidades reales de los usuarios.',
        techTitle: 'Tecnologías',
        testimonialsTitle: 'Testimonios',
        educationTitle: 'Educación',
        experienceTitle: 'Experiencia Profesional',
    },
    projects: {
        title: 'Proyectos',
        description:
            'Algunos de los proyectos que he desarrollado a lo largo de mi carrera. Cada uno representa un desafío único y aprendizaje continuo.',
    },
    projectDetails: {
        backButton: 'Volver a Proyectos',
        viewProject: 'Ver Proyecto',
        viewCode: 'Ver Código',
        aboutTitle: 'Acerca del Proyecto',
        techTitle: 'Tecnologías Utilizadas',
    },
    content: {
        title: 'Contenidos',
        description:
            'Comparto conocimientos a través de videos y artículos sobre desarrollo web, buenas prácticas y tecnologías modernas.',
        all: 'Todos',
        videos: 'Videos',
        articles: 'Artículos',
    },
    contact: {
        title: 'Contáctame',
        description:
            'Siempre estoy abierto a nuevas oportunidades y colaboraciones. Contáctame a través de los canales a continuación.',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        location: 'Ubicación',
        sendMessage: 'Enviar Mensaje',
        name: 'Nombre',
        namePlaceholder: 'Tu nombre completo',
        emailPlaceholder: 'tu@email.com',
        message: 'Mensaje',
        messagePlaceholder: 'Escribe tu mensaje aquí...',
    },
    notFound: {
        title: '404',
        message: '¡Ups! Página no encontrada',
        backButton: 'Volver al Inicio',
    },
    footer: {
        rights: 'Todos los derechos reservados.',
    },
    contentBadges: {
        video: 'Video',
        article: 'Artículo',
    },
    toast: {
        messageSent: '¡Mensaje enviado!',
        thankYou: 'Gracias por contactar. ¡Responderé pronto!',
        sending: 'Enviando...',
    },
};
