import Image from 'next/image'
import { Github, ExternalLink, Briefcase, User, Code } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  technologies: Array<{name: string, icon: React.ElementType}>
  liveUrl: string
  githubUrl: string
  type: 'personal' | 'independent' | 'work'
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  technologies,
  liveUrl,
  githubUrl,
  type
}: ProjectCardProps) {
  const typeIcons = {
    personal: User,
    independent: Code,
    work: Briefcase
  }

  const TypeIcon = typeIcons[type]

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={`${title} project screenshot`}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-2 right-2 flex items-center gap-1" variant="secondary">
          <TypeIcon className="w-4 h-4" />
          <span className="capitalize">{type}</span>
        </Badge>
      </div>
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-base mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <span
                key={index}
                className="inline-flex items-center bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                <Icon className="w-4 h-4 mr-1" />
                {tech.name}
              </span>
            )
          })}
        </div>
        <div className="flex justify-between">
          <Button variant="outline" className="flex items-center" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Site
            </a>
          </Button>
          <Button variant="outline" className="flex items-center" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

