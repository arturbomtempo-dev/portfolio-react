import { Project, Content, Achievement, TechCategory, Testimonial, Timeline } from './types';
import { Code, Users, Award, Layers, Database, Palette } from 'lucide-react';

export const projects: Project[] = [
    {
        id: 'ecommerce-platform',
        title: 'E-Commerce Platform',
        description:
            'A complete e-commerce solution developed to transform the online shopping experience.',
        image: 'https://raw.githubusercontent.com/arturbomtempo-dev/devfest-bh-website/main/resources/screenshots/main-section.png',
        cardTechs: ['React', 'Node.js', 'PostgreSQL'],
        fullDescription: `This project was developed for a medium-sized company that needed to modernize its online presence. The main challenge was to create a fluid user experience while maintaining high performance and security.

I implemented advanced features such as:
- Persistent shopping cart
- Coupon and discount system
- Integration with multiple payment methods
- Administrative dashboard with real-time analytics
- Review and rating system
- Automated email notifications
- Multi-vendor management

The result was a 150% increase in online sales in the first 3 months after launch.`,
        allTechs: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        id: 'task-manager',
        title: 'Task Manager',
        description:
            'Complete productivity application focused on team collaboration and efficient project management.',
        image: 'https://raw.githubusercontent.com/arturbomtempo-dev/devfest-bh-website/main/resources/screenshots/main-section.png',
        cardTechs: ['Next.js', 'TypeScript', 'Supabase'],
        fullDescription: `A complete tool for task and project management, developed with a focus on collaboration and productivity.

Key features:
- Drag and drop system for task organization
- Real-time notifications
- Task assignment with deadlines and priorities
- Comments and attachments system
- Calendar integration
- Productivity reports

The application was developed with agile teams in mind and offers an intuitive interface that facilitates communication and project tracking.`,
        allTechs: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        id: 'portfolio-website',
        title: 'Personal Portfolio',
        description:
            'Modern and responsive portfolio website developed with web development best practices.',
        image: 'https://raw.githubusercontent.com/arturbomtempo-dev/devfest-bh-website/main/resources/screenshots/main-section.png',
        cardTechs: ['React', 'TypeScript', 'Tailwind CSS'],
        fullDescription: `A personal portfolio developed with a focus on minimalist design and performance. The site features smooth animations, responsive design, and SEO optimization.

Key features:
- Modern and clean design
- Smooth animations with Framer Motion
- Fully responsive
- Performance optimized
- Accessibility (WCAG 2.1)
- Dark mode with smooth transitions

The project demonstrates skills in interface design, front-end development, and performance optimization.`,
        allTechs: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
        liveUrl: '#',
        githubUrl: '#',
    },
];

export const contents: Content[] = [
    {
        type: 'video',
        title: 'Introduction to React Hooks',
        description: 'Learn to use the main React hooks in a practical and efficient way.',
        thumbnail:
            'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
        url: '#',
        platform: 'YouTube',
        date: '2024-01-15',
    },
    {
        type: 'article',
        title: 'Clean Code in JavaScript',
        description: 'Best practices for writing clean and maintainable JavaScript code.',
        thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=450&fit=crop',
        url: '#',
        platform: 'Medium',
        date: '2024-01-10',
    },
    {
        type: 'video',
        title: 'Advanced TypeScript',
        description: 'Exploring advanced TypeScript features to improve your productivity.',
        thumbnail:
            'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=450&fit=crop',
        url: '#',
        platform: 'YouTube',
        date: '2024-01-05',
    },
    {
        type: 'article',
        title: 'Micro Frontend Architecture',
        description: 'How to implement micro frontends in large-scale applications.',
        thumbnail: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=450&fit=crop',
        url: '#',
        platform: 'Medium',
        date: '2023-12-20',
    },
    {
        type: 'video',
        title: 'Advanced Web Performance',
        description: 'Advanced techniques to optimize web application performance.',
        thumbnail:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
        url: '#',
        platform: 'YouTube',
        date: '2023-12-15',
    },
    {
        type: 'article',
        title: 'Testing with Jest and React Testing Library',
        description: 'Complete guide on testing React applications.',
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
        title: '50+ Projects',
        description: 'Developed and delivered projects',
    },
    {
        icon: Users,
        title: '30+ Clients',
        description: 'Satisfied clients',
    },
    {
        icon: Award,
        title: '5+ Years',
        description: 'Years of experience',
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
        title: 'Design',
        techs: ['Figma', 'Adobe XD', 'Framer Motion', 'GSAP'],
    },
    {
        icon: Code,
        title: 'Tools',
        techs: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest'],
    },
];

export const testimonials: Testimonial[] = [
    {
        name: 'John Silva',
        role: 'CEO at TechStart',
        text: 'Exceptional work! Delivered the project ahead of schedule and exceeded all expectations. Highly recommended.',
    },
    {
        name: 'Mary Santos',
        role: 'CTO at InnovaTech',
        text: 'Extremely competent and dedicated professional. The code quality and attention to detail are impressive.',
    },
    {
        name: 'Charles Oliveira',
        role: 'Product Manager',
        text: 'Excellent communication and ability to transform ideas into practical solutions. It was a pleasure working together.',
    },
];

export const timeline: Timeline = {
    education: [
        {
            year: '2023',
            title: 'Postgraduate in Software Architecture',
            institution: 'Federal University',
            description:
                'Specialization focused on scalable system design, architectural patterns, and software engineering best practices.',
            activities: [
                'Microservices Architecture and Design Patterns',
                'Cloud Computing and Infrastructure as Code',
                'DevOps, CI/CD and Automation',
                'Domain-Driven Design (DDD)',
                'Security and Performance in Applications',
            ],
        },
        {
            year: '2020',
            title: 'Bachelor in Computer Science',
            institution: 'State University',
            description:
                'Solid foundation in computer science fundamentals, algorithms, data structures, and software development.',
            activities: [
                'Algorithms and Data Structures',
                'Object-Oriented Programming',
                'Database and SQL',
                'Software Engineering and Agile Methodologies',
                'Full Stack Web Development',
                'Final Project: Academic Management System',
            ],
        },
        {
            year: '2018',
            title: 'Technical in Systems Development',
            institution: 'Technical Institute',
            description:
                'Technical course focused on practical development of web and desktop applications.',
            activities: [
                'Programming Logic and Algorithms',
                'HTML, CSS and JavaScript',
                'Desktop Application Development',
                'Relational Databases',
                'Final Project: Inventory Control System',
            ],
        },
    ],
    professional: [
        {
            year: '2022 - Present',
            title: 'Senior Full Stack Developer',
            company: 'Tech Solutions Inc.',
            description:
                'Technical leadership in developing scalable enterprise solutions, team mentoring, and architecture definition.',
            activities: [
                'Architecture and development of React and Node.js applications',
                'Technical mentoring of junior and mid-level developers',
                'Definition of code standards and best practices',
                'Integration with AWS services (Lambda, S3, RDS)',
                'Code review and quality assurance',
                'Performance optimization and scalability',
            ],
        },
        {
            year: '2020 - 2022',
            title: 'Full Stack Developer',
            company: 'StartupXYZ',
            description:
                'Development of complete features from scratch, from conception to production, in agile startup environment.',
            activities: [
                'Development of RESTful APIs with Node.js',
                'Creation of responsive interfaces with React',
                'Implementation of automated tests',
                'PostgreSQL database management',
                'Deployment and maintenance in production environment',
                'Active participation in agile ceremonies (Scrum)',
            ],
        },
        {
            year: '2018 - 2020',
            title: 'Junior Developer',
            company: 'WebDev Agency',
            description:
                'Beginning of professional career developing websites and web systems for various clients.',
            activities: [
                'Development of responsive websites',
                'Maintenance and bug fixes in legacy systems',
                'Layout creation with HTML, CSS and JavaScript',
                'Integration with third-party APIs',
                'Technical support to clients',
            ],
        },
    ],
};

export const ui = {
    nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        content: 'Content',
        contact: 'Contact',
    },
    home: {
        greeting: 'I am',
        role: 'Software Developer',
        description:
            "I have always had the desire to make an impact on people's lives — and I found in software development a way to turn that into reality.",
        aboutButton: 'About me',
        contactButton: 'Get in Touch',
    },
    about: {
        title: 'About Me',
        description:
            "I am a developer passionate about creating innovative and efficient solutions. With over 5 years of experience in the market, I have been dedicated to building web and mobile applications that make a difference in people's lives. My focus is always on delivering clean, scalable code that meets users' real needs.",
        techTitle: 'Technologies',
        testimonialsTitle: 'Testimonials',
        educationTitle: 'Education',
        experienceTitle: 'Professional Experience',
    },
    projects: {
        title: 'Projects',
        description:
            'Some of the projects I have developed throughout my career. Each one represents a unique challenge and continuous learning.',
    },
    projectDetails: {
        backButton: 'Back to Projects',
        viewProject: 'View Project',
        viewCode: 'View Code',
        aboutTitle: 'About the Project',
        techTitle: 'Technologies Used',
    },
    content: {
        title: 'Content',
        description:
            'I share knowledge through videos and articles about web development, best practices, and modern technologies.',
        all: 'All',
        videos: 'Videos',
        articles: 'Articles',
    },
    contact: {
        title: 'Get in Touch',
        description:
            'I am always open to new opportunities and collaborations. Contact me through the channels below.',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        sendMessage: 'Send Message',
        name: 'Name',
        namePlaceholder: 'Your full name',
        emailPlaceholder: 'your@email.com',
        message: 'Message',
        messagePlaceholder: 'Write your message here...',
    },
    notFound: {
        title: '404',
        message: 'Oops! Page not found',
        backButton: 'Back to Home',
    },
    footer: {
        rights: 'All rights reserved.',
    },
    contentBadges: {
        video: 'Video',
        article: 'Article',
    },
    toast: {
        messageSent: 'Message sent!',
        thankYou: 'Thank you for contacting. I will reply soon!',
        sending: 'Sending...',
    },
};
