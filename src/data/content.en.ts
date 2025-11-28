import { Database, Palette, Presentation, Server, Smartphone, Trophy, Users } from 'lucide-react';
import { Achievement, Content, Project, TechCategory, Testimonial, Timeline } from './types';

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
        icon: Trophy,
        title: '10+ Awards',
        description: 'Recognition received',
        fullDescription:
            'Throughout my academic and professional journey, I have had the honor of receiving various awards and recognitions that validate my effort, dedication, and technical excellence. Each achievement represents an important milestone in my development as a developer and professional.',
        details: [
            'Undefeated winner of "The Best" award promoted by Colégio Cotemig',
            'Recognition for academic excellence in programming disciplines',
            'Awards in hackathons and development competitions',
            'Outstanding performance in academic projects and student initiatives',
            'Recognition for contributions to open source projects',
        ],
    },
    {
        icon: Users,
        title: '4+ Years',
        description: 'Years of Experience',
        fullDescription:
            'My professional journey began in 2023 and since then I have been accumulating valuable experiences in various areas of software development. I have worked with different technologies, methodologies, and teams, always seeking to deliver quality solutions and learn continuously.',
        details: [
            'Experience in full stack development focusing on React and Node.js',
            'Work in startups and medium to large companies',
            'Experience with agile methodologies (Scrum, Kanban)',
            'Experience in technical leadership and mentoring developers',
            'Participation in projects from different segments and complexities',
        ],
    },
    {
        icon: Presentation,
        title: '5+ Talks',
        description: 'Workshops and courses taught',
        fullDescription:
            'I believe that sharing knowledge is fundamental for the growth of the tech community. Therefore, I have been giving talks, workshops, and courses on software development, sharing experiences and helping other developers on their journey.',
        details: [
            'Talks at events like DevFest, meetups, and conferences',
            'Workshops on React.js, Next.js, and front-end development',
            'Backend courses with Java, Spring Boot, and Node.js',
            'Technical mentoring for new members of WebTech Network',
            'Presentations on best practices and software architecture',
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
        title: 'Database',
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
        role: 'Professor at PUC Minas',
        image: 'https://media.licdn.com/dms/image/v2/C4E03AQGl93rGXJtw5w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1637103746149?e=1766016000&v=beta&t=pRnLdHfXpjnl84MGMLNiWMy1bemOzczRa95D2fH7hNo',
        text: 'Artur is a dedicated, organized, studious, and highly competent professional. He values the quality of the systems he develops and seeks to delve deeply into the technologies he masters. An outstanding professional!',
    },
    {
        name: 'Eduarda Vieira',
        role: 'Web Developer at WebTech Network',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQHA-xE76bOPSA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711488086533?e=1766016000&v=beta&t=pMuG-rgLCUdK3b5CTxj_XpbL6EAJQF0QqQBLdLD5sZs',
        text: "During the second semester of Software Engineering, I had the opportunity to closely follow Artur Bomtempo's progress and learning. Since I met him, he has always shown great engagement and willingness to teach and help colleagues, combining a solid technical foundation with market experience and best practices. His logical reasoning, dedication, and commitment are clear differentials. He learns easily [...] and adapts quickly to challenges. Working with him on projects has been very enriching, both for the technical quality he delivers and the collaborative and committed way he works in a team.",
    },
    {
        name: 'Arthur Chagas',
        role: 'CTO at QuickFood Technologies',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQFqLuhATg7cLA/profile-displayphoto-scale_200_200/B4DZjtEP_4GQAk-/0/1756323971733?e=1766016000&v=beta&t=x4D8Ce8Q7NEs404auhbbRl7lOYqSF296UrmH98FxBh4',
        text: 'It is with great satisfaction that I recommend Artur for opportunities in the programming field. During our time working and studying together, I was able to observe his exceptional technical skills and his commitment to excellence. Artur is a talented programmer, capable of solving problems creatively and collaborating effectively in a team. His work ethic and clear communication make him a valuable colleague in any project. I do not hesitate to recommend him and I am sure he will continue to achieve success in his career.',
    },
    {
        name: 'Pedro Félix',
        role: 'Artificial Intelligence Intern at Hotmart',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQHKHKeUp1mbHA/profile-displayphoto-scale_200_200/B4DZmqKWpoGgAY-/0/1759496466179?e=1766016000&v=beta&t=a6jljiDWtUtaWBBART7EG_S4qmOZi4uQnn3cxI_46YE',
        text: 'Artur is extremely dedicated and has always shown commitment and maximum dedication in all tasks, whether simple or complex.',
    },
    {
        name: 'Lucas Sena',
        role: 'Software Developer at Samsung',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQGCRadSsNupDg/profile-displayphoto-scale_200_200/B4DZf7ewwkHkAc-/0/1752270836205?e=1766016000&v=beta&t=SLneRstpCQfujt060GNKf2JKfX0FQU2_g44RuNYguYw',
        text: 'From my experience with Artur, I can confidently say that he is an excellent professional and student. Very hardworking and dedicated, he seeks to learn and evolve daily — requirements of great importance for the technology field. In addition, he has a solid logical foundation and well-consolidated software development skills.',
    },
    {
        name: 'Letícia França',
        role: 'Designer at WebTech Network',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQF5IRhSKofZMg/profile-displayphoto-scale_200_200/B4DZqcOovOIAAc-/0/1763557674985?e=1766016000&v=beta&t=ovQTK2JERk9p27zLiJ43wVhpwSw8mPrd3dS5r9adWZ0',
        text: 'I have been following Artur since mid-2023, during Technical High School in Information Technology. He has always been very hardworking, committed, and studious. During this period, we developed a great friendship [...]. He has all my admiration for his perseverance and passion for what he does. It is a pleasure to have him as my great partner in projects!',
    },
    {
        name: 'Henrique Braga',
        role: 'Co-Founder at Vidas Vividas',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQG1pycCuwZr-w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1675865314571?e=1766016000&v=beta&t=1sepUnvz6ywCfEPXLQCEO7RkdzDtZEhz02ErJfHLM9Y',
        text: 'Artur worked with me at Vidas Vividas and proved to be very focused on what he does, executing everything with great dedication. Above all the good work, his greatest characteristic is having principles and being a relevant person in the work environment.',
    },
    {
        name: 'Pedro Henrique Oliveira',
        role: 'Co-Founder at Vidas Vividas',
        image: 'https://media.licdn.com/dms/image/v2/D4E03AQG6nEqA3Ar5Uw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710351455025?e=1766016000&v=beta&t=igz65h9sXYJ4e42Q9NO1Evz2CrYwKEXRObAq4k3-lPg',
        text: 'Having Artur on our team was a great pleasure. Always willing to learn and dedicate himself to activities! I wish you every success!',
    },
    {
        name: 'Thiago Porto',
        role: 'Data Analyst at Vidas Vividas',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQFvm99F0YTfKQ/profile-displayphoto-scale_200_200/B4DZq6v4jwJ4AY-/0/1764069706688?e=1766016000&v=beta&t=izE-JB7rtBqEVJHZwhuxXOCuCkWdlLxzekNIzlFs0WM',
        text: 'During the period that Artur interned with us at Vidas, his efficiency was noticeable, effectively solving all the demands assigned to him. I am grateful to have had the opportunity to have him as a work colleague. His friendliness and empathy allowed for a great working relationship.',
    },
    {
        name: 'Aquila Faria',
        role: 'Designer & Videomaker at Vidas Vividas',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQGgsrsN4qba8g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688704554164?e=1766016000&v=beta&t=o3Ou6PWtjmwQ-NM-7T8RxsqgagsPG48uGmDp4LZRlxk',
        text: 'Artur was quite coherent and responsible with his work during the period he was at Vidas. He really is — and will continue to become — a great professional!',
    },
    {
        name: 'Paulo Henrique',
        role: 'Professor at Cotemig',
        image: 'https://media.licdn.com/dms/image/v2/C4E03AQGN5rmNiOPhqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1557366845769?e=1766016000&v=beta&t=IyvCXzru0ickfB_K5IPatz2wC4lySsw3pbU5jKwdEZc',
        text: 'An extremely interested and proactive student and professional, focused on problem-solving and with great interest in innovation. Excellent developer and always learning new languages!',
    },
    {
        name: 'Eduardo Gonçalves',
        role: 'Professor at Cotemig',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQGHO-KMYxkX_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663711191169?e=1766016000&v=beta&t=XH8qlXwbKSNlgGM3OZTDZjeP8yQQe2e7XY_H8inbpGM',
        text: 'My former student Artur Bomtempo brilliantly performed all programming tasks throughout the course. Always attentive and participative, he created code often beyond what was requested by the exercises. Calm and reliable, I know he will be a talented programmer of great value to any company, in Brazil or even abroad. I will always be here to applaud his journey through the world of Information Technology.',
    },
    {
        name: 'Mario Camargos',
        role: 'Professor at Cotemig',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQFAaKoF6cMo6w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517287255764?e=1766016000&v=beta&t=stOeV6-Q49pgmqM7lkp3WGMeplhuZhDTYrfHBh-75FM',
        text: 'Artur Bomtempo is a special student, always standing out and the undefeated winner of "The Best" award promoted by Colégio Cotemig. He has already developed most of his skills and competencies as a developer, and it is noticeable that he will have a promising career. He stands out for his commitment, good logical reasoning, and always presenting the best solutions. Another differential is that he is constantly seeking to expand his knowledge, participating in all possible courses, inside and outside school, which keeps him always in a prominent position.',
    },
    {
        name: 'Artur Coelho',
        role: 'Professor at Cotemig',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQGeMwc9nMA2JQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1567173550989?e=1766016000&v=beta&t=Jv0-m20-j6zVtvCPxXqfzUu-HV-saWsRfwMwpwWb-EA',
        text: 'A very dedicated student, committed to the proposed activities, with ease in the technical area and great personal values. He has everything to grow personally and professionally.',
    },
];

export const timeline: Timeline = {
    education: [
        {
            year: '2025 - present',
            title: "Bachelor's Degree in Software Engineering",
            institution: 'PUC Minas',
            description:
                'Education focused on software development and modeling, with emphasis on analysis, architecture, requirements, quality, and applied mathematical foundations.',
            activities: [
                'Web Development with Spring Boot and Node.js',
                'Software Modeling (UML, requirements, and architecture)',
                'Quality, testing, and software maintenance',
                'Data Structures and Object-Oriented Programming',
                'Operating Systems Fundamentals',
            ],
        },
        {
            year: '2024',
            title: "Bachelor's Degree in Computer Science",
            institution: 'PUC Minas',
            description:
                'Education focused on theoretical and practical foundations of computing, with emphasis on algorithms, data structures, OOP, and software engineering principles.',
            activities: [
                'Algorithms and Data Structures',
                'Object-Oriented Programming',
                'Introduction to Software Engineering',
                'Web Development with HTML, CSS, JavaScript, and Java (Spark)',
                'Programming with Arduino',
            ],
        },
        {
            year: '2021 - 2023',
            title: 'Technical Degree in Information Technology',
            institution: 'Colégio Cotemig',
            description:
                'Technical education focused on practical development of web and mobile applications, with a deep dive into programming logic and computing fundamentals.',
            activities: [
                'Programming Logic in C#',
                'Web Development with HTML, CSS, and JavaScript',
                'Modeling and creation of relational databases',
                'Introduction to mobile development (Kotlin and Swift)',
                'Computer Networks Fundamentals',
            ],
        },
    ],
    professional: [
        {
            year: '2025 - present',
            title: 'Software Developer',
            company: 'dti digital',
            description:
                'Working on support and maintenance of corporate systems for the MRV client.',
            activities: [
                'Maintenance and evolution of applications with .NET on the backend',
                'Implementation of features and fixes using React.js',
                'Technical support for MRV systems within Enterprise Inari',
                'Collaboration in an agile environment focused on quality and efficiency',
            ],
        },
        {
            year: '2024 - present',
            title: 'Chapter Lead & Full Stack Developer',
            company: 'WebTech Network',
            description:
                'Technical leadership and full stack development in projects and training initiatives within WebTech.',
            activities: [
                'Development of interfaces and APIs with React.js, Next.js, Java, and Spring Boot',
                'Architecture definition and implementation of digital solutions for internal projects and partners',
                'Creation of technical and structured learning materials for new members',
                'Mentoring in Backend, Frontend, databases, and version control',
                'Conducting workshops, lectures, and technical guidance in projects such as DevFest, ASSPROM, and Journey Backend',
            ],
        },
        {
            year: '2025',
            title: 'Programming and Algorithms Monitor',
            company: 'PUC Minas',
            description:
                'Supporting students in learning Java, logic, OOP, and data structures, working as a monitor in the disciplines of Algorithms and Data Structures I and II and Modular Programming.',
            activities: [
                'Guidance in Java and Object-Oriented Programming',
                'Assistance in logic, algorithms, and implementation in C and C++',
                'Support in data structures and sorting techniques',
                'Application of SOLID principles, Design Patterns, and testing with JUnit',
                'Monitoring exercises, projects, and clarifying doubts',
            ],
        },
        {
            year: '2024',
            title: 'Full Stack Developer',
            company: 'PUCTec',
            description:
                'Full stack development of digital solutions for startups supported by the innovation hub.',
            activities: [
                'Implementation of frontend and backend features',
                'Creation of intuitive and functional interfaces',
                'Construction and maintenance of server architecture',
                'Technical support in developing scalable solutions',
            ],
        },
        {
            year: '2023-2024',
            title: 'CXO & Full Stack Developer',
            company: 'QuickFood Technologies',
            description:
                'Responsible for user experience and full stack development of the startup platform.',
            activities: [
                'Frontend and backend system development',
                'Construction and maintenance of chatbot using Blip and JavaScript',
                'Creation of conversational flows focused on efficiency and UX',
                'Continuous improvement of platform usability and performance',
                'Collaboration in product planning and solution definition',
            ],
        },
        {
            year: '2023-2024',
            title: 'Chatbot Developer',
            company: 'White Wall',
            description:
                'Development and maintenance of chatbots and conversational flows for different clients.',
            activities: [
                'Creation and maintenance of chatbots using Blip and JavaScript',
                'Construction of conversational flows focused on UX',
                'Integration with REST APIs and external resources',
                'Collaboration in remote teams using Git and GitHub',
            ],
        },
        {
            year: '2023',
            title: 'Web Developer',
            company: 'Vidas Empreendimentos',
            description:
                'Working on website development and digital solutions for marketing clients.',
            activities: [
                'Website creation in WordPress and HTML/CSS',
                'Development of chatbots for WhatsApp',
                'Support in web design and UX of digital solutions',
                'Task management using agile methodologies',
                'Creation of flowcharts and process documentation',
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
        newsletters: 'Newsletters',
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
        newsletter: 'Newsletter',
    },
    toast: {
        messageSent: 'Message sent!',
        thankYou: 'Thank you for contacting. I will reply soon!',
        sending: 'Sending...',
    },
};
