import React from 'react';
import { projects } from '@/data/projects';
import { Metadata } from 'next';
import { Briefcase, User, LoaderPinwheel } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from '@/components/ui/card';
import { fonts } from '@/lib/constants';
import ProjectNavButtons from '@/components/modules/project-nav-buttons';

export const metadata: Metadata = {
  title: 'Sudharsan GS | Projects',
  description: 'View all projects by Sudharsan GS, a software engineer specializing in web development with React, NextJS and TypeScript.',
};

const ProjectsPage: React.FC = () => {
  const personalProjects = projects.filter(project => project.type === 'personal');
  const workProjects = projects.filter(project => project.type === 'work');
  const independentProjects = projects.filter(project => project.type === 'independent');

  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600" style={{ fontFamily: fonts.SpaceGrotesk }}>
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects I&apos;ve worked on during my professional career,
            freelance work, and personal experiments.
          </p>
        </div>

        {/* Filter Navigation */}
        <ProjectNavButtons />

        {/* All Projects Section */}
        <section id="all-projects" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: fonts.SpaceGrotesk }}>All Projects</h2>
            <div className="h-[1px] flex-grow mx-4 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            <Badge className="bg-emerald-900/20 text-emerald-400 border border-emerald-800/30">
              {projects.length} Projects
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </section>

        {/* Work Projects Section */}
        {workProjects.length > 0 && (
          <section id="work-projects" className="mb-16 scroll-mt-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: fonts.SpaceGrotesk }}>Work Projects</h2>
              <div className="h-[1px] flex-grow mx-4 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              <Badge className="bg-blue-900/20 text-blue-400 border border-blue-800/30">
                {workProjects.length} Projects
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {workProjects.map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
              ))}
            </div>
          </section>
        )}

        {/* Independent Projects Section */}
        {independentProjects.length > 0 && (
          <section id="independent-projects" className="mb-16 scroll-mt-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: fonts.SpaceGrotesk }}>Independent Projects</h2>
              <div className="h-[1px] flex-grow mx-4 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              <Badge className="bg-amber-900/20 text-amber-400 border border-amber-800/30">
                {independentProjects.length} Projects
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {independentProjects.map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
              ))}
            </div>
          </section>
        )}

        {/* Personal Projects Section */}
        {personalProjects.length > 0 && (
          <section id="personal-projects" className="mb-16 scroll-mt-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: fonts.SpaceGrotesk }}>Personal Projects</h2>
              <div className="h-[1px] flex-grow mx-4 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              <Badge className="bg-emerald-900/20 text-emerald-400 border border-emerald-800/30">
                {personalProjects.length} Projects
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalProjects.map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: Array<{ name: string; icon: string }>;
  type: string;
  github?: string;
  path: string;
  slug: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  type,
  github,
  path,
}) => {
  const typeIcons: Record<string, React.ElementType> = {
    personal: User,
    independent: LoaderPinwheel,
    work: Briefcase
  };

  const TypeIcon = typeIcons[type as keyof typeof typeIcons];

  return (
    <div className="group">
      <Card className="h-full transition-all duration-300 overflow-hidden bg-gray-900/20 backdrop-blur-sm border-gray-800/50 hover:border-emerald-900/30 hover:shadow-lg hover:shadow-emerald-900/10 group-hover:translate-y-[-5px]">
        <div className='relative overflow-hidden group h-48'>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 z-10 group-hover:opacity-40 transition-opacity duration-300" />
          
          <div className="absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-500">
            <Image
              src={image}
              alt={`${title} project screenshot`}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="font-bold text-xl text-white drop-shadow-md" style={{ fontFamily: fonts.SpaceGrotesk }}>
              {title}
            </h3>
          </div>

          <div className="absolute top-4 right-4 z-20">
            <Badge className="flex items-center gap-1" 
              variant={type === "personal" ? "default" : type === "independent" ? "destructive" : "secondary"}
              style={{ 
                backgroundColor: type === "personal" ? "rgba(16, 185, 129, 0.2)" : 
                               type === "independent" ? "rgba(245, 158, 11, 0.2)" : 
                               "rgba(14, 165, 233, 0.2)",
                color: type === "personal" ? "#10b981" : 
                      type === "independent" ? "#f59e0b" : 
                      "#0ea5e9",
                borderColor: type === "personal" ? "rgba(16, 185, 129, 0.3)" : 
                            type === "independent" ? "rgba(245, 158, 11, 0.3)" : 
                            "rgba(14, 165, 233, 0.3)",
                backdropFilter: "blur(4px)"
              }}
            >
              <TypeIcon className="w-3 h-3" />
              <span className="capitalize">{type}</span>
            </Badge>
          </div>
        </div>

        <CardContent className="px-6 py-5">
          <p className="text-sm text-gray-300 mb-4 line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {technologies.slice(0, 3).map((tech, i) => (
              <div
                key={i}
                className="inline-flex items-center bg-gray-800/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs border border-gray-700/30 hover:translate-y-[-2px] transition-transform duration-200"
              >
                <Image src={tech.icon} alt={tech.name} width={12} height={12} className="mr-1" />
                <span className="text-gray-300">{tech.name}</span>
              </div>
            ))}
            {technologies.length > 3 && (
              <Badge variant="outline" className="text-xs bg-gray-800/20 backdrop-blur-sm">
                +{technologies.length - 3} more
              </Badge>
            )}
          </div>

          <div className="flex gap-2">
            <Link href={path} className="flex-1">
              <Button variant="default" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 flex items-center justify-center gap-1">
                <span>View Details</span>
              </Button>
            </Link>
            {github && (
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectsPage;