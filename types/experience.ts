export interface Experience {
    id: string
    title: string
    company: string
    companyLogo: string
    companyUrl: string
    location: string
    type: 'Full Time' | 'Internship'
    description: string | React.ReactNode
    period: {
      start: string
      end: string
    }
    achievements: string[]
    technologies: string[]
    projects: string[]
    projectDescriptions?: Record<string, string>
  }
  
  export interface ExperienceSectionProps {
    experiences: Experience[]
  }
  
  