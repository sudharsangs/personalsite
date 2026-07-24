import { Projects } from "@/types/projects";

export const projects: Projects = [
  {
    title: "FactoStack Manufacturing Platform",
    description:
      "Built the core operations platform for Indian MSMEs at FactoStack, turning Excel, WhatsApp, WIP, procurement, GST, and compliance-heavy factory workflows into one multi-module product.",
    image: "/projects/personal/factostack-platform/executive-dashboard.png",
    technologies: [
      {
        name: "React",
        icon: "/skills/react.svg",
      },
      {
        name: "TypeScript",
        icon: "/skills/typescript.svg",
      },
      {
        name: "NestJS",
        icon: "/skills/nest-js.svg",
      },
      {
        name: "PostgreSQL",
        icon: "/skills/postgres.svg",
      },
      {
        name: "Amazon Lightsail Instance",
        icon: "/skills/lightsail.svg",
      },
      {
        name: "Amazon Lightsail DB",
        icon: "/skills/lightsail.svg",
      },
      {
        name: "Amazon Lightsail Storage",
        icon: "/skills/lightsail.svg",
      },
      {
        name: "Docker",
        icon: "/skills/docker.svg",
      },
      {
        name: "AWS ECR",
        icon: "/skills/ecr.svg",
      },
    ],
    liveUrl: "https://app.factostack.com",
    path: "/projects/personal/factostack-platform",
    slug: "factostack-platform",
    type: "personal",
    date: "2025-2026",
    company: {
      name: "FactoStack",
      url: "https://app.factostack.com",
      logo: "/factostack.svg",
    },
  },
  {
    title: "QuickPicks by Unlocker",
    description:
      "Built a mobile-first sports picks product for creating, selling, and delivering paid picks in seconds with instant checkout, creator bio pages, and analytics.",
    image: "/projects/independent/unlocker/unlocker-quickpicks.png",
    technologies: [
      {
        name: "NextJS",
        icon: "/skills/nextjs.svg",
      },
      {
        name: "TypeScript",
        icon: "/skills/typescript.svg",
      },
      {
        name: "TailwindCSS",
        icon: "/skills/tailwind.svg",
      },
      {
        name: "NodeJS",
        icon: "/skills/nodejs.svg",
      },
      {
        name: "PostgreSQL",
        icon: "/skills/postgres.svg",
      },
    ],
    liveUrl: "https://unlocker.club",
    path: "/projects/independent/quickpicks",
    slug: "quickpicks",
    type: "independent",
    date: "2026",
  },
  {
    title: "FactoStack Marketing Website",
    description:
      "Built FactoStack's marketing and SEO engine with solution pages, comparison pages, free tools, structured metadata, blog content, and conversion paths into trial, demo, and WhatsApp flows.",
    image: "/projects/personal/factostack-website/cover.png",
    technologies: [
      {
        name: "NextJS",
        icon: "/skills/nextjs.svg",
      },
      {
        name: "TypeScript",
        icon: "/skills/typescript.svg",
      },
      {
        name: "TailwindCSS",
        icon: "/skills/tailwind.svg",
      },
      {
        name: "React",
        icon: "/skills/react.svg",
      },
    ],
    liveUrl: "https://factostack.com",
    path: "/projects/personal/factostack-website",
    slug: "factostack-website",
    type: "personal",
    date: "2025-2026",
  },
  {
    title: "Unlocker - Sports Experts Marketplace",
    description:
      "Built the MVP of a subscription-based sports experts marketplace using Next.js + TypeScript with an Express.js + PostgreSQL backend. Implemented subscriptions, expert monetization, and verified performance analytics.",
    image: "/projects/independent/unlocker/unlocker-marketplace.png",
    technologies: [
      {
        name: "NextJS",
        icon: "/skills/nextjs.svg",
      },
      {
        name: "TypeScript",
        icon: "/skills/typescript.svg",
      },
      {
        name: "TailwindCSS",
        icon: "/skills/tailwind.svg",
      },
      {
        name: "React",
        icon: "/skills/react.svg",
      },
      {
        name: "Express",
        icon: "/skills/express.svg",
      },
      {
        name: "NodeJS",
        icon: "/skills/nodejs.svg",
      },
      {
        name: "PostgreSQL",
        icon: "/skills/postgres.svg",
      },
    ],
    liveUrl: "https://marketplace.unlocker.club",
    path: "/projects/independent/unlocker",
    slug: "unlocker",
    type: "independent",
  },
  {
    title: "Next.js Multitenant SaaS Boilerplate",
    description:
      "Production-ready Next.js boilerplate for building multi-tenant SaaS apps with a scalable foundation.",
    technologies: [
      { name: "NextJS", icon: "/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "TailwindCSS", icon: "/skills/tailwind.svg" },
      { name: "PostgreSQL", icon: "/skills/postgres.svg" },
    ],
    path: "/projects/personal/nextjs-multitenant-saas-boilerplate",
    github:
      "https://github.com/sudharsangs/nextjs-multitenant-saas-boilerplate",
    slug: "nextjs-multitenant-saas-boilerplate",
    type: "personal",
    image: "/projects/personal/multi-tenant-saas.png",
  },
  {
    title: "Form to Sheets",
    description:
      "A developer tool that generates clean embed code for Google Forms, supporting React, Vue, Svelte, and plain HTML integrations.",
    image: "/projects/personal/form-to-sheets.png",
    technologies: [
      {
        name: "React",
        icon: "/skills/react.svg",
      },
      {
        name: "TypeScript",
        icon: "/skills/typescript.svg",
      },
      {
        name: "NextJS",
        icon: "/skills/nextjs.svg",
      },
      {
        name: "TailwindCSS",
        icon: "/skills/tailwind.svg",
      },
    ],
    path: "/projects/personal/form-to-sheets",
    slug: "form-to-sheets",
    type: "personal",
    date: "2023",
    liveUrl: "https://formtosheets.vercel.app",
    github: "https://github.com/sudharsangs/formtosheets",
    features: [
      "Seamless integration of Google Forms into any website",
      "Support for multiple frameworks, including React, Vue, HTML, and Svelte",
      "Effortless code generation for easy embedding",
      "Developer-friendly and user-centric design",
      "Real-time data integration for efficient data management",
      "Secure and robust infrastructure for data protection",
    ],
    additionalImages: [
      {
        url: "/projects/personal/form-to-sheets.png",
        alt: "Form to Sheets interface",
        caption: "User-friendly interface for embedding Google Forms",
      },
    ],
  },
  {
    title: "Reddit Job Notify",
    description:
      "A Go service that monitors Reddit subreddits for freelance job opportunities and delivers real-time Telegram notifications, with smart keyword filtering, priority categorization, and optional Google Sheets logging.",
    image: "/projects/personal/reddit-job-notify.png",
    technologies: [
      {
        name: "Go",
        icon: "/skills/go.svg",
      },
      {
        name: "Docker",
        icon: "/skills/docker.svg",
      },
    ],
    path: "/projects/personal/reddit-job-notify",
    slug: "reddit-job-notify",
    type: "personal",
    github: "https://github.com/sudharsangs/reddit-job-notify-telegram-bot",
    features: [
      "Multi-subreddit monitoring with configurable scan intervals",
      "Smart post filtering using hiring language detection and tech keyword matching",
      "Priority-based Telegram notifications for high-signal opportunities",
      "Optional Google Sheets logging for tracking opportunities over time",
      "Duplicate prevention through persistent post tracking",
      "Categorization by job type for targeted alerts",
    ],
  },
  {
    title: "Table to CSV",
    description:
      "A lightweight browser extension and utility for extracting HTML tables as CSV files, useful for developers and data analysts working in the browser.",
    technologies: [
      {
        name: "HTML",
        icon: "/skills/html.svg",
      },
      {
        name: "CSS",
        icon: "/skills/css.svg",
      },
      {
        name: "TypeScript",
        icon: "/skills/typescript.svg",
      },
      {
        name: "JavaScript",
        icon: "/skills/javascript.svg",
      },
    ],
    image: "/projects/personal/table-to-csv.gif",
    path: "/projects/personal/table-to-csv",
    slug: "table-to-csv",
    type: "personal",
    github: "https://github.com/sudharsangs/table-to-csv",
  },
  {
    title: "Plumbing E-Commerce Platform",
    description:
      "Took a 15-year-old plumbing supplier online with a custom storefront, inventory and order workflows, and service booking built around the realities of the business.",
    image: "/projects/plumbing/cover.png",
    technologies: [
      {
        name: "Svelte",
        icon: "/skills/svelte.png",
      },
      {
        name: "TypeScript",
        icon: "/skills/typescript.svg",
      },
      {
        name: "PostgreSQL",
        icon: "/skills/postgres.svg",
      },
      {
        name: "TailwindCSS",
        icon: "/skills/tailwind.svg",
      },
      {
        name: "NodeJS",
        icon: "/skills/nodejs.svg",
      },
    ],
    path: "/projects/independent/plumbing-ecommerce",
    slug: "plumbing-e-commerce",
    type: "independent",
    date: "2023",
    client: "Dygus Plumbing Supplies",
    features: [
      "Comprehensive product catalog with advanced filtering options",
      "Service booking system with availability calendar",
      "Product compatibility checker for plumbing components",
      "Integrated inventory management system",
      "Customer account portal for order tracking and service history",
      "Professional plumber dashboard for service management",
      "Technical specification documentation for all products",
      "Quote generator for large projects",
    ],
    problemStatement:
      "Traditional plumbing supply businesses struggle with offering both products and services online. Their customers need technical compatibility information and often require professional installation, which typical e-commerce platforms don't support well.",
    solution:
      "This custom e-commerce platform combines product sales with service bookings, featuring compatibility checks and detailed technical specifications to ensure customers purchase the right products for their needs.",
    results: [
      "120% increase in online sales within the first six months",
      "35% of product orders now include installation service bookings",
      "Reduced product returns by 40% due to compatibility checker",
      "Expanded customer base beyond local service area through nationwide shipping",
    ],
    additionalImages: [
      {
        url: "/projects/plumbing/cover.png",
        alt: "Plumbing E-Commerce Homepage",
        caption: "Main storefront showcasing products and services",
      },
      {
        url: "/projects/plumbing/DYGUS-0.png",
        alt: "Product Listing Page",
        caption: "Catalog view with filtering options",
      },
      {
        url: "/projects/plumbing/DYGUS-1.png",
        alt: "Product Detail Page",
        caption: "Detailed product information with specifications",
      },
      {
        url: "/projects/plumbing/DYGUS-2.png",
        alt: "Service Booking Interface",
        caption: "Service scheduling and booking system",
      },
      {
        url: "/projects/plumbing/DYGUS-3.png",
        alt: "Shopping Cart",
        caption: "Cart with both products and services",
      },
      {
        url: "/projects/plumbing/DYGUS-4.png",
        alt: "Checkout Process",
        caption: "Streamlined checkout flow",
      },
      {
        url: "/projects/plumbing/DYGUS-5.png",
        alt: "Customer Dashboard",
        caption: "User account management interface",
      },
    ],
  },
  {
    title: "Employee Management Mobile App",
    description:
      "Built a field workforce management app for BuildTek Polymers. Geolocation-based attendance, task assignment, document storage, and a supervisor dashboard replacing paper-based tracking for an on-site factory team.",
    image: "/projects/buildtek/cover.png",
    technologies: [
      {
        name: "React Native",
        icon: "/skills/react.svg",
      },
      {
        name: "TypeScript",
        icon: "/skills/typescript.svg",
      },
      {
        name: "NodeJS",
        icon: "/skills/nodejs.svg",
      },
      {
        name: "ExpressJS",
        icon: "/skills/express.svg",
      },
      {
        name: "MongoDB",
        icon: "/skills/mongodb.svg",
      },
    ],
    path: "/projects/independent/employee-management",
    slug: "employee-management-app",
    type: "independent",
    date: "2023",
    client: "BuildTek Polymers Pvt Ltd",
    problemStatement:
      "BuildTek needed a mobile solution to manage their workforce efficiently, including tracking attendance, assigning tasks, and maintaining employee records. The existing manual processes were time-consuming and prone to errors.",
    solution:
      "I developed a comprehensive mobile application allowing supervisors to track attendance, assign tasks, and manage employee documentation. The app includes geolocation for site check-ins, push notifications for urgent updates, and a central database for all employee information.",
    features: [
      "Employee profile management with comprehensive details",
      "Daily attendance tracking with geolocation verification",
      "Project task assignments and progress monitoring",
      "Document storage for employee certifications and IDs",
      "Real-time notifications for approvals and task updates",
      "Analytics dashboard for workforce management",
    ],
    results: [
      "50% reduction in administrative time spent on employee management",
      "Improved workforce visibility with real-time location tracking",
      "Enhanced project management with clear task assignments and progress tracking",
      "Streamlined document management and compliance verification",
    ],
    additionalImages: [
      {
        url: "/projects/buildtek/login.png",
        alt: "Employee Management App Login Screen",
        caption: "Secure authentication for different user roles",
      },
      {
        url: "/projects/buildtek/dayplan1.png",
        alt: "Daily Planning Interface",
        caption: "Daily task planning and assignment interface",
      },
      {
        url: "/projects/buildtek/dayplan2.png",
        alt: "Task Details View",
        caption: "Detailed view of assigned tasks with progress tracking",
      },
      {
        url: "/projects/buildtek/dayplan3.png",
        alt: "Calendar View",
        caption: "Monthly calendar view for planning and scheduling",
      },
      {
        url: "/projects/buildtek/chat.png",
        alt: "In-app Communication",
        caption: "Built-in messaging system for team communication",
      },
      {
        url: "/projects/buildtek/notifications.png",
        alt: "Notification Center",
        caption: "Real-time notification system for important updates",
      },
      {
        url: "/projects/buildtek/approvals.png",
        alt: "Approval Workflow",
        caption: "Streamlined approval process for documents and requests",
      },
      {
        url: "/projects/buildtek/lead1.png",
        alt: "Team Management",
        caption: "Supervisor interface for team management",
      },
      {
        url: "/projects/buildtek/lead2.png",
        alt: "Employee Directory",
        caption: "Searchable employee directory with quick actions",
      },
      {
        url: "/projects/buildtek/lead3.png",
        alt: "Performance Analytics",
        caption: "Performance tracking and analytics dashboard",
      },
      {
        url: "/projects/buildtek/lead4.png",
        alt: "Document Repository",
        caption: "Secure document storage and management system",
      },
    ],
  },
  {
    title: "Program Pages",
    description:
      "Designed and built canonical program pages for Molotov TV, consolidating dozens of fragmented legacy URLs per title into a single authoritative page, wired up with schema.org microdata, deeplinks into the streaming app, and LCP optimizations targeting French streaming audiences.",
    image: "/projects/molotov/evergreen.gif",
    technologies: [
      { name: "React", icon: "/skills/react.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "CSS Modules", icon: "/skills/css.svg" },
      { name: "Webpack", icon: "/skills/javascript.svg" },
    ],
    path: "/projects/work/molotov-evergreen-program-pages",
    slug: "molotov-evergreen-program-pages",
    type: "work",
    date: "2025-2026",
    company: {
      name: "Molotov by Fubo",
      url: "https://www.molotov.tv",
      logo: "/molotov.png",
    },
    keyHighlights: [
      "Multi-channel tabbed scheduling showing upcoming airings across all channels",
      "One-click Watch/Record deeplinks into the Molotov streaming app",
      "301 redirects collapsing fragmented legacy URLs into a single canonical URL per title",
      "Movie/TVSeries schema.org microdata enabling Google Rich Results eligibility",
      "BreadcrumbList schema for structured navigation context in SERPs",
      "Hero image LCP optimization using fetchpriority='high' for improved Core Web Vitals",
    ],
    outcomes: [
      "Consolidated fragmented URLs into single canonical program pages",
      "Google Rich Results eligibility via Movie/TVSeries microdata",
      "Improved LCP scores through image priority optimizations",
    ],
  },
  {
    title: "Program List Pages",
    description:
      "Rebuilt Molotov's category and genre listing pages from the ground up: server-rendered filter links for full crawlability, dual pagination, structured data for Carousel Rich Results, and editorial content headers. The work covered every listing page across the platform.",
    image: "/projects/molotov/program-list.gif",
    technologies: [
      { name: "React", icon: "/skills/react.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "CSS Modules", icon: "/skills/css.svg" },
      { name: "Webpack", icon: "/skills/javascript.svg" },
    ],
    path: "/projects/work/molotov-program-list-pages",
    slug: "molotov-program-list-pages",
    type: "work",
    date: "2026",
    liveUrl: "https://www.molotov.tv/fr_fr/cat/1/movies",
    company: {
      name: "Molotov by Fubo",
      url: "https://www.molotov.tv",
      logo: "/molotov.png",
    },
    keyHighlights: [
      "Server-rendered category filter links replacing JS-only filters for full Googlebot crawlability",
      "Editorial content headers with keyword-rich introductory copy on each listing page",
      "Dual pagination: numbered page links and infinite scroll side by side",
      "Distinct title tags per page with rel='next'/rel='prev' pagination signals",
      "FAQ accordions sourced from API: dynamic content crawlable by search engines",
      "ItemList + Movie/TVSeries schema making listing pages eligible for Google Carousel Rich Results",
      "WebP image conversion across all thumbnails and 301 redirects from legacy listing URLs",
    ],
    outcomes: [
      "Complete SEO infrastructure on all listing pages",
      "Carousel Rich Result eligibility via ItemList schema",
      "Reduced HTML payload through image format optimization",
      "Improved crawlability with SSR filter links",
    ],
  },
  {
    title: "Navigation Bar Redesign",
    description:
      "Rebuilt Molotov's navigation bar from scratch: separate mobile and desktop architectures, API-driven content, ARIA accessibility, and post-launch bug fixes that eliminated 50,000+ 404 errors across Google Search Console.",
    image: "/projects/molotov/menu.gif",
    technologies: [
      { name: "React", icon: "/skills/react.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "CSS Modules", icon: "/skills/css.svg" },
    ],
    path: "/projects/work/molotov-navbar-redesign",
    slug: "molotov-navbar-redesign",
    type: "work",
    date: "2025",
    company: {
      name: "Molotov by Fubo",
      url: "https://www.molotov.tv",
      logo: "/molotov.png",
    },
    keyHighlights: [
      "Separate mobile and desktop navbar architectures optimized for each breakpoint's interaction patterns",
      "Link obfuscation for anti-scraping compliance while keeping all links crawlable as static anchor tags",
      "Custom scrollbar for desktop megamenu handling deep category hierarchies gracefully",
      "Signed-in and signed-out account states with seamless transitions based on session",
      "CMS-driven navigation content via API integration: no deployment needed for menu updates",
      "Full ARIA roles, labels, and keyboard navigation for WCAG accessibility compliance",
    ],
    outcomes: [
      "Crawlable <a> links replaced JS-dependent navigation",
      "Eliminated 50,000+ 404 URLs by fixing subscription button URL",
      "Ligue 1 logo 97% file size reduction",
      "Improved accessibility scores with ARIA roles",
    ],
  },
  {
    title: "Learner's Module",
    description:
      "Built Winuall's learner experience from scratch: course playback, live class access, quizzes, and progress tracking. Sole implementation across the full frontend surface.",
    image: "/projects/winuall/winuall-learners-module-1.png",
    technologies: [
      {
        name: "React",
        icon: "/skills/react.svg",
      },
      {
        name: "Styled Components",
        icon: "/skills/styled-components.svg",
      },
      {
        name: "Redux",
        icon: "/skills/redux.svg",
      },
    ],
    path: "/projects/work/winuall-learners-module",
    slug: "winuall-learners-module",
    type: "work",
    date: "2021",
    company: {
      name: "Winuall",
      url: "https://winuall.com",
      logo: "/winuall.jpg",
    },
    keyHighlights: [
      "Creation of a user-friendly learner's module with a wide range of learning resources",
      "Implementation of interactive features such as live classes and quizzes for an engaging learning experience",
      "Incorporation of user tracking capabilities to help learners monitor their progress and achievements",
    ],
    challenges: [
      "Optimizing the performance of video playback for users with varying internet connectivity",
      "Implementing a robust state management system to handle complex user interactions",
      "Creating an intuitive interface that accommodates various content types",
    ],
    solutions: [
      "Implemented adaptive streaming for videos to adjust quality based on network conditions",
      "Used Redux for state management with carefully designed reducers to optimize rendering",
      "Developed a flexible UI system that dynamically adapts to different content formats",
    ],
    outcomes: [
      "Improved user engagement by 45% through interactive learning features",
      "Reduced course abandonment rates by 30% with progress tracking",
      "Enhanced customer satisfaction with intuitive interface, resulting in positive feedback",
    ],
    additionalImages: [
      {
        url: "/projects/winuall/winuall-learners-module-1.png",
        alt: "Learner Module Dashboard",
        caption: "Main dashboard showing available courses and progress",
      },
      {
        url: "/projects/winuall/winuall-learners-module-2.png",
        alt: "Course Content View",
        caption: "Interactive content viewing experience with navigation",
      },
      {
        url: "/projects/winuall/winuall-learners-module-3.png",
        alt: "Assessment Interface",
        caption: "Quiz and assessment interface for student evaluations",
      },
    ],
  },
  {
    title: "Winuall Apps - Micro Frontend Architecture",
    description:
      "Introduced a micro-frontend foundation so Winuall could integrate and evolve multiple product modules without coupling every team and release.",
    image: "/projects/winuall/winuall-apps.png",
    technologies: [
      {
        name: "React",
        icon: "/skills/react.svg",
      },
      {
        name: "Styled Components",
        icon: "/skills/styled-components.svg",
      },
      {
        name: "TypeScript",
        icon: "/skills/typescript.svg",
      },
    ],
    path: "/projects/work/winuall-apps",
    slug: "winuall-apps",
    type: "work",
    date: "2021-2022",
    company: {
      name: "Winuall",
      url: "https://winuall.com",
      logo: "/winuall.jpg",
    },
    keyHighlights: [
      "Implemented Micro Frontend Architecture to enable seamless integration of external SPAs into the main project",
      "Developed federated code to enhance developer experience and maintainability",
      "Created essential plugins like Google Analytics, Facebook Pixel, Google Drive integration, and user-facing plugins for simplified integrations",
    ],
    outcomes: [
      "Improved platform flexibility by allowing independent deployment of micro frontends",
      "Enhanced developer productivity through modular architecture and clear boundaries",
      "Reduced time-to-market for new features by enabling parallel development across teams",
      "Created a more scalable system that could grow with business requirements",
    ],
    additionalImages: [
      {
        url: "/projects/winuall/winuall-apps.png",
        alt: "Winuall Apps Architecture",
        caption:
          "Interface showcasing the micro frontend integration capabilities",
      },
    ],
  },
  {
    title: "Winuall Online Store",
    description:
      "Built a multi-tenant commerce product that let tutors launch branded storefronts and sell courses, assessments, materials, and physical products.",
    image: "/projects/winuall/winuall-store-1.png",
    technologies: [
      {
        name: "React",
        icon: "/skills/react.svg",
      },
      {
        name: "TypeScript",
        icon: "/skills/typescript.svg",
      },
      {
        name: "Styled Components",
        icon: "/skills/styled-components.svg",
      },
      {
        name: "Redux",
        icon: "/skills/redux.svg",
      },
    ],
    path: "/projects/work/winuall-online-store",
    slug: "winuall-online-store",
    type: "work",
    date: "2021-2022",
    company: {
      name: "Winuall",
      url: "https://winuall.com",
      logo: "/winuall.jpg",
    },
    keyHighlights: [
      "Built a customizable e-commerce platform for educational content with dynamic filtering options",
      "Implemented secure payment processing with multiple gateway integrations",
      "Created an analytics dashboard giving coaching centers insights into sales and customer behavior",
    ],
    challenges: [
      "Designing a flexible product schema that could handle diverse educational content types",
      "Scaling to support thousands of concurrent users during sale events",
      "Ensuring seamless integration between the store and learning platform",
    ],
    outcomes: [
      "Enabled 500+ coaching centers to digitize and sell their educational content",
      "Processed over ₹10 million in transactions within the first six months",
      "Achieved 99.9% uptime during major sale events with thousands of concurrent users",
      "Reduced average checkout time by 40% through UI/UX optimizations",
    ],
    additionalImages: [
      {
        url: "/projects/winuall/winuall-store-1.png",
        alt: "Winuall Online Store Screenshot",
        caption: "Course listing page with filtering options",
      },
      {
        url: "/projects/winuall/winuall-store-2.png",
        alt: "Product Detail Page",
        caption:
          "Detailed view of an educational product with enrollment options",
      },
      {
        url: "/projects/winuall/winuall-store-3.png",
        alt: "Checkout Process",
        caption: "Streamlined checkout process with payment options",
      },
    ],
  },
  {
    title: "Winuall Registration System",
    description:
      "Rebuilt Winuall's registration and onboarding flow, guiding 3,000+ paying users from account creation through plan selection and product setup.",
    image: "/projects/winuall/winuall-reg-1.png",
    technologies: [
      {
        name: "NextJS",
        icon: "/skills/nextjs.svg",
      },
      {
        name: "TypeScript",
        icon: "/skills/typescript.svg",
      },
      {
        name: "TailwindCSS",
        icon: "/skills/tailwind.svg",
      },
    ],
    path: "/projects/work/winuall-marketing-site",
    slug: "winuall-markeing-site",
    type: "work",
    date: "2022",
    company: {
      name: "Winuall",
      url: "https://winuall.com",
      logo: "/winuall.jpg",
    },
    keyHighlights: [
      "Designed a multi-step registration process with progressive information collection",
      "Implemented real-time validation with helpful error messages",
      "Created a seamless onboarding flow guiding new users through platform features",
    ],
    outcomes: [
      "Increased registration completion rate by 35%",
      "Reduced onboarding support tickets by 40%",
      "Successfully onboarded 3000+ paying users through the new system",
    ],
    additionalImages: [
      {
        url: "/projects/winuall/winuall-reg-1.png",
        alt: "Registration Landing Page",
        caption: "Initial registration page with simplified form",
      },
      {
        url: "/projects/winuall/winuall-reg-2.png",
        alt: "Personal Information Form",
        caption: "Step for collecting user details with validation",
      },
      {
        url: "/projects/winuall/winuall-reg-3.png",
        alt: "Institution Selection",
        caption: "Institution selection and configuration step",
      },
      {
        url: "/projects/winuall/winuall-reg-4.png",
        alt: "Plan Selection",
        caption: "Subscription plan selection with feature comparison",
      },
      {
        url: "/projects/winuall/winuall-reg-5.png",
        alt: "Payment Process",
        caption: "Secure payment processing interface",
      },
      {
        url: "/projects/winuall/winuall-reg-6.png",
        alt: "Onboarding Tutorial",
        caption: "First-time user tutorial explaining key features",
      },
      {
        url: "/projects/winuall/winuall-reg-7.png",
        alt: "Dashboard Introduction",
        caption: "Interactive introduction to the dashboard",
      },
      {
        url: "/projects/winuall/winuall-reg-8.png",
        alt: "Completion Screen",
        caption: "Registration completion with next steps",
      },
    ],
  },
  {
    title: "TapX",
    description:
      "A focused browser extension that lets shoppers search Amazon.in from any webpage without breaking their current browsing flow.",
    image: "/projects/personal/tapx.png",
    technologies: [
      {
        name: "Svelte",
        icon: "/skills/svelte.png",
      },
      {
        name: "Go Fiber",
        icon: "/skills/go-fiber.svg",
      },
      {
        name: "Colly",
        icon: "/skills/go.svg",
      },
    ],
    path: "/projects/personal/tapx",
    slug: "tapx",
    type: "personal",
    date: "2023",
    github: "https://github.com/sudharsangs/tapx",
    features: [
      'Effortless searching: Select text on any webpage, right-click, and choose the "Search on Amazon" option',
      "Top results: Instantly access the top Amazon.in search results",
      "Powered by Svelte for a smooth and responsive user interface",
      "Backend with Go Fiber and Colly for efficient processing and accurate search results",
    ],
    problemStatement:
      "Online shopping often requires navigating to Amazon.in separately when you find a product mentioned on other websites, breaking your browsing flow and making comparison shopping more time-consuming.",
    solution:
      "TapX streamlines the process by allowing users to search for products on Amazon.in directly from any webpage with a simple text selection and right-click, saving time and enhancing the shopping experience.",
    additionalImages: [
      {
        url: "/projects/personal/tapx.png",
        alt: "TapX browser extension",
        caption: "TapX browser extension interface",
      },
    ],
  },
  {
    title: "Regcheck",
    description:
      "A Gatsby and Ghost publishing product that made real-estate regulations across Indian cities easier to maintain, search, and navigate.",
    image: "/projects/internship/regcheck-1.png",
    technologies: [
      {
        name: "React",
        icon: "/skills/react.svg",
      },
      {
        name: "GatsbyJS",
        icon: "/skills/react.svg",
      },
      {
        name: "GraphQL",
        icon: "/skills/graphql.svg",
      },
      {
        name: "NodeJS",
        icon: "/skills/nodejs.svg",
      },
    ],
    path: "/projects/internship/regcheck",
    slug: "regcheck",
    type: "work",
    date: "2020",
    company: {
      name: "Terra Economics and Analytics Lab",
      url: "https://tealindia.in/",
      logo: "/teal.ico",
    },
    keyHighlights: [
      "Development of a dynamic Gatsby site for easy access to real estate regulations",
      "Integration with Ghost CMS for centralized content management",
      "Utilization of GraphQL and Gatsby to render content from CMS",
      "Custom functionality enhancements using Node.js Handlebars for CMS optimization",
    ],
    features: [
      "Comprehensive real estate regulation database for metropolitan cities",
      "Centralized content management via Ghost CMS",
      "Efficient data rendering using GraphQL and Gatsby",
      "Custom CMS enhancements with Node.js Handlebars",
    ],
    outcomes: [
      "Provided easy access to complex real estate regulations across India",
      "Enabled efficient management of regulatory information through CMS",
      "Created a fast, optimized platform for stakeholders to navigate the regulatory landscape",
    ],
    additionalImages: [
      {
        url: "/projects/internship/regcheck-1.png",
        alt: "Regcheck Homepage",
        caption: "Main landing page with real estate regulation information",
      },
      {
        url: "/projects/internship/regcheck-2.png",
        alt: "Regulation Details",
        caption: "Detailed view of real estate regulations",
      },
      {
        url: "/projects/internship/regcheck-3.png",
        alt: "Metropolitan City Selection",
        caption: "Interface for selecting metropolitan cities",
      },
      {
        url: "/projects/internship/regcheck-4.png",
        alt: "Content Management",
        caption: "Ghost CMS integration for content management",
      },
      {
        url: "/projects/internship/regcheck-5.png",
        alt: "Analytics Dashboard",
        caption: "Data analytics for real estate regulations",
      },
    ],
  },
  {
    title: "No Paper Exams",
    description:
      "Built the full-stack digital exam platform for an early-stage EdTech startup, covering exam creation, secure proctoring, auto-grading, and analytics.",
    image: "",
    technologies: [
      {
        name: "React",
        icon: "/skills/react.svg",
      },
      {
        name: "TypeScript",
        icon: "/skills/typescript.svg",
      },
      {
        name: "NodeJS",
        icon: "/skills/nodejs.svg",
      },
      {
        name: "MongoDB",
        icon: "/skills/mongodb.svg",
      },
    ],
    path: "/projects/independent/no-paper-exams",
    slug: "no-paper-exams",
    type: "independent",
    date: "2023",
    client: "Early stage EduTech Startup",
    problemStatement:
      "Educational institutions face challenges with traditional paper-based exams, including high printing costs, logistical issues, and difficulties in grading and storing exam papers.",
    solution:
      "No Paper Exams provides a comprehensive digital solution for exam creation, delivery, and evaluation, significantly reducing costs and improving efficiency in the assessment process.",
    features: [
      "Easy-to-use exam creation interface with various question types",
      "Secure exam environment with anti-cheating measures",
      "Automated grading for objective questions",
      "Digital annotation tools for subjective evaluation",
      "Comprehensive analytics and reporting",
      "Integration with learning management systems",
      "Multi-device support for exam access",
    ],
    results: [
      "Reduced exam administration costs by 70%",
      "Decreased grading time by 60%",
      "Improved accuracy in assessment scoring",
      "Enhanced security and reduced instances of exam malpractice",
    ],
  },
  {
    title: "Printrove Admin Panel",
    description:
      "An internal operations dashboard for managing merchants, orders, production workflows, permissions, and reporting across Printrove.",
    image: "",
    technologies: [
      {
        name: "React",
        icon: "/skills/react.svg",
      },
      {
        name: "Redux",
        icon: "/skills/redux.svg",
      },
      {
        name: "JavaScript",
        icon: "/skills/javascript.svg",
      },
      {
        name: "CSS",
        icon: "/skills/css.svg",
      },
    ],
    path: "/projects/internship/printrove-admin-panel",
    slug: "printrove-admin-panel",
    type: "work",
    date: "2020",
    company: {
      name: "Printrove",
      url: "https://printrove.com",
      logo: "/printrove.png",
    },
    keyHighlights: [
      "Built a robust admin dashboard for comprehensive platform management",
      "Created tools for merchant approval workflow and content moderation",
      "Implemented detailed analytics and reporting features",
      "Developed order management and fulfillment tracking system",
    ],
    features: [
      "Merchant management with approval workflows",
      "Order tracking and fulfillment management",
      "Content moderation tools for product listings",
      "Financial reporting and transaction history",
      "User management and access control",
      "Platform analytics dashboard",
      "System configuration and settings management",
    ],
    outcomes: [
      "Streamlined merchant onboarding process by 40%",
      "Improved order fulfillment efficiency by 25%",
      "Enhanced platform security through effective moderation tools",
      "Provided valuable insights through comprehensive analytics",
    ],
  },
  {
    title: "Printrove Merchant Panel",
    description:
      "The working surface Printrove merchants used to create products, manage orders, customize storefronts, and understand sales.",
    image: "",
    technologies: [
      {
        name: "React",
        icon: "/skills/react.svg",
      },
      {
        name: "Redux",
        icon: "/skills/redux.svg",
      },
      {
        name: "JavaScript",
        icon: "/skills/javascript.svg",
      },
      {
        name: "CSS",
        icon: "/skills/css.svg",
      },
    ],
    path: "/projects/internship/printrove-merchant-panel",
    slug: "printrove-merchant-panel",
    type: "work",
    date: "2020",
    company: {
      name: "Printrove",
      url: "https://printrove.com",
      logo: "/printrove.png",
    },
    keyHighlights: [
      "Created a comprehensive merchant dashboard for product and order management",
      "Implemented product design tools with mockup generation capabilities",
      "Developed sales analytics and performance tracking features",
      "Built an order management system with fulfillment status tracking",
    ],
    features: [
      "Product creation and management interface",
      "Design uploading and mockup generation tools",
      "Order tracking and management system",
      "Sales analytics and performance metrics",
      "Financial reporting and payout tracking",
      "Integration with various e-commerce platforms",
      "Customer communication tools",
    ],
    outcomes: [
      "Enabled 500+ merchants to successfully manage their print-on-demand business",
      "Increased merchant product creation efficiency by 60%",
      "Improved order tracking transparency for better customer service",
      "Enhanced business decision-making through detailed analytics",
    ],
  },
];
