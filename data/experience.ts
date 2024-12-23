import { Experience } from '@/types/experience'

export const experiences: Experience[] = [
  {
    id: "fubo",
    title: "Software Engineer - Web | Video AI Team",
    company: "Fubo",
    companyLogo: "/fubo.svg",
    companyUrl: "https://www.fubo.tv/",
    location: "Bengaluru",
    type: "Full Time",
    period: {
      start: "Oct 2022",
      end: "Present"
    },
    achievements: [
      "Developed a cutting-edge feature enabling real-time display of instant highlights generated by AI during live NBA games.",
      "Created a visualization platform that enabled 40% faster analysis of AI-generated sports videos, highlights, and moments.",
      "Implemented frame-accurate seeking in VideoJS for HLS and DASH videos, ensuring precise video playback and an improved user experience.",
      "Developed multiple POCs for VideoAI features using methodologies such as Server Driven UI and Micro Frontend Architecture."
    ],
    technologies: ["React", "TypeScript", "VideoJS", "GCP", "Docker", "Circle CI"]
  },
  {
    id: "winuall",
    title: "SDE 1",
    company: "Winuall",
    companyLogo: "/winuall.jpg",
    companyUrl: "https://winuall.com/",
    location: "Bengaluru",
    type: "Full Time",
    period: {
      start: "Dec 2020",
      end: "Oct 2022"
    },
    achievements: [
      "Built an Online Store for tutors to create an E-Commerce platform using ReactJS and styled-components, serving 2000+ tutors.",
      "Implemented user onboarding system with NextJS, successfully onboarding 3000+ paying users.",
      "Achieved 30% performance improvement through Code Splitting and Lazy Loading techniques.",
      "Migrated legacy React application to SSR, improving SEO score by 60%.",
      "Established CI/CD pipeline using Github Actions and Docker for automated deployments."
    ],
    technologies: ["React", "NextJS", "TypeScript", "Docker", "AWS", "Azure"]
  },
  {
    id: "teal",
    title: "Frontend Developer - Intern",
    company: "Terra Economics and Analytics Lab",
    companyLogo: "/teal.ico",
    companyUrl: "https://www.tealindia.in/",
    location: "Bengaluru",
    type: "Internship",
    period: {
      start: "Aug 2020",
      end: "Dec 2020"
    },
    achievements: [
      "Involved in building Tealcheck (B2C product) from scratch.",
      "Created and deployed Regcheck using Ghost CMS and Gatsby.",
      "Wrote E2E test cases using Cypress, achieving 90% test coverage."
    ],
    technologies: ["React", "Gatsby", "Ghost CMS", "Cypress"]
  },
  {
    id: "printrove",
    title: "Frontend Developer - Intern",
    company: "Printrove",
    companyLogo: "/printrove.png",
    companyUrl: "https://www.printrove.com/",
    location: "Chennai, India",
    type: "Internship",
    period: {
      start: "Jun 2020",
      end: "July 2020"
    },
    achievements: [
      "Developed a dashboard for Printrove's internal use, enabling 100% automation of the order processing system.",
      "Built a custom CMS for Printrove's website using React and Redux."
    ],
    technologies: ["React", "Redux"]
  }
]

