export interface Technologies {
    name: string
    icon: string
}

export interface Project {
    title: string
    description: string
    image: string
    technologies: Technologies[]
    path: string
    slug: string
    github?: string
    type: 'personal' | 'independent' | 'work'
}

export type Projects = Project[]