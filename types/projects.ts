export interface Technologies {
    name: string
    icon: string
}

export interface ImageDetail {
    url: string
    alt: string
    caption?: string
}

export interface Company {
    name: string
    url: string
    logo: string
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
    date?: string
    liveUrl?: string
    githubUrl?: string
    client?: string
    company?: Company
    problemStatement?: string
    solution?: string
    features?: string[]
    keyHighlights?: string[]
    challenges?: string[]
    solutions?: string[]
    results?: string[]
    outcomes?: string[]
    additionalImages?: ImageDetail[]
}

export type Projects = Project[]