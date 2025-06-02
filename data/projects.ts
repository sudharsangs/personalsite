import {Projects} from "@/types/projects";

export const projects: Projects = [
    {
        title: 'Employee Management Mobile App',
        description: 'A mobile app for managing employees and their details.',
        image: '/projects/buildtek/cover.png',
        technologies: [
            {
                name: 'React Native',
                icon: '/skills/react.svg'
            },
            {
                name: 'TypeScript',
                icon: '/skills/typescript.svg'
            },
            {
                name: 'NodeJS',
                icon: '/skills/nodejs.svg'
            },
            {
               name: 'ExpressJS',
                icon: '/skills/express.svg'
            },
            {
                name: "MongoDB",
                icon: '/skills/mongodb.svg'
            }
        ],
        path: "/projects/independent/employee-management-app",
        slug: "employee-management-app",
        type: "independent",
        date: "2023",
        client: "BuildTek Construction",
        problemStatement: "BuildTek Construction needed a streamlined way to manage their growing workforce across multiple construction sites. Their paper-based systems were inefficient, leading to communication delays and difficulty tracking employee attendance and task completion.",
        solution: "I developed a comprehensive mobile application allowing supervisors to track attendance, assign tasks, and manage employee documentation. The app includes geolocation for site check-ins, push notifications for urgent updates, and a central database for all employee information.",
        features: [
            "Employee profile management with comprehensive details",
            "Daily attendance tracking with geolocation verification",
            "Project task assignments and progress monitoring",
            "Document storage for employee certifications and IDs",
            "Real-time notifications for approvals and task updates",
            "Analytics dashboard for workforce management"
        ],
        results: [
            "50% reduction in administrative time spent on employee management",
            "Improved workforce visibility with real-time location tracking",
            "Enhanced project management with clear task assignments and progress tracking",
            "Streamlined document management and compliance verification"
        ],
        additionalImages: [
            {
                url: '/projects/buildtek/login.png',
                alt: 'Employee Management App Login Screen',
                caption: 'Secure authentication for different user roles'
            },
            {
                url: '/projects/buildtek/dayplan1.png',
                alt: 'Daily Planning Interface',
                caption: 'Daily task planning and assignment interface'
            },
            {
                url: '/projects/buildtek/chat.png',
                alt: 'In-app Communication',
                caption: 'Built-in messaging system for team communication'
            },
            {
                url: '/projects/buildtek/notifications.png',
                alt: 'Notification Center',
                caption: 'Real-time notification system for important updates'
            }
        ]
    },
    {
        title: "Form to Sheets",
        description: "A project that gets google form and embeds it into a website.",
        image: '/projects/personal/form-to-sheets.png',
        technologies: [
            {
                name: 'React',
                icon: '/skills/react.svg'
            },
            {
                name: 'TypeScript',
                icon: '/skills/typescript.svg'
            },
            {
                name: 'NextJS',
                icon: '/skills/nextjs.svg'
            },
            {
                name: 'TailwindCSS',
                icon: '/skills/tailwind.svg'
            }
        ],
        path: "/projects/personal/form-to-sheets",
        slug: "form-to-sheets",
        type: "personal",
        date: "2023",
        liveUrl: "https://formtosheets.sudharsangs.dev",
        githubUrl: "https://github.com/sudharsangs/formtosheets",
        features: [
            "Seamless integration of Google Forms into any website",
            "Support for multiple frameworks, including React, Vue, HTML, and Svelte",
            "Effortless code generation for easy embedding",
            "Developer-friendly and user-centric design",
            "Real-time data integration for efficient data management",
            "Secure and robust infrastructure for data protection"
        ]
    },
    {
        title: "Learner's Module",
        description: "Single-handedly implemented a learner's module where students can learn the courses purchased by them",
        image: '/projects/winuall/learners-module-1.png',
        technologies: [
            {
                name: 'React',
                icon: '/skills/react.svg'
            },
            {
                name: 'Styled Components',
                icon: '/skills/styled-components.svg'
            },
            {
                name: 'Redux',
                icon: '/skills/redux.svg'
            }
        ],
        path: "/projects/work/winuall-learners-module",
        slug: "winuall-learners-module",
        type: "work",
        date: "2021",
        company: {
            name: "Winuall",
            url: "https://winuall.com",
            logo: "/winuall.jpg"
        },
        keyHighlights: [
            "Creation of a user-friendly learner's module with a wide range of learning resources",
            "Implementation of interactive features such as live classes and quizzes for an engaging learning experience",
            "Incorporation of user tracking capabilities to help learners monitor their progress and achievements"
        ],
        challenges: [
            "Optimizing the performance of video playback for users with varying internet connectivity",
            "Implementing a robust state management system to handle complex user interactions",
            "Creating an intuitive interface that accommodates various content types"
        ],
        solutions: [
            "Implemented adaptive streaming for videos to adjust quality based on network conditions",
            "Used Redux for state management with carefully designed reducers to optimize rendering",
            "Developed a flexible UI system that dynamically adapts to different content formats"
        ],
        outcomes: [
            "Improved user engagement by 45% through interactive learning features",
            "Reduced course abandonment rates by 30% with progress tracking",
            "Enhanced customer satisfaction with intuitive interface, resulting in positive feedback"
        ]
    }
]