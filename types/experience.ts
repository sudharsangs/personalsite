export interface Experience {
    id: string
    title: string
    company: string
    companyLogo: string
    companyUrl: string
    location: string
    type: 'Full Time' | 'Internship'
    period: {
      start: string
      end: string
    }
    achievements: string[]
    technologies: string[]
  }
  
  export interface ExperienceSectionProps {
    experiences: Experience[]
  }
  
  