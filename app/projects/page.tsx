"use client";
import React from 'react';
import { projects } from '@/data/projects';
import { Home } from 'lucide-react';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { fonts } from '@/lib/constants';
import ProjectNavButtons from '@/components/modules/project-nav-buttons';
import ProjectCard from '@/components/modules/project-card';



const ProjectsPage: React.FC = () => {
  const personalProjects = projects.filter(project => project.type === 'personal');
  const workProjects = projects.filter(project => project.type === 'work');
  const independentProjects = projects.filter(project => project.type === 'independent');

  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Home Navigation */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/60 border border-border hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group shadow-sm hover:shadow-md"
            aria-label="Back to Home"
          >
            <Home className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </div>

        {/* Hero Section */}
        <div className="py-12 text-center relative">
          {/* Animated background elements similar to hero component */}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground" style={{ fontFamily: fonts.PlayfairDisplay }}>
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto relative z-10">
            A collection of projects I&apos;ve worked on during my professional career,
            freelance work, and personal experiments.
          </p>
        </div>

        {/* Filter Navigation */}
        <ProjectNavButtons />


        {/* Work Projects Section */}
        {workProjects.length > 0 && (
          <section id="work-projects" className="mb-16 scroll-mt-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground relative group" style={{ fontFamily: fonts.PlayfairDisplay }}>
                <span className="relative z-10">Work Projects</span>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </h2>
              <div className="h-[1px] flex-grow mx-4 bg-gradient-to-r from-transparent via-border to-transparent"></div>
              <Badge className="bg-primary/10 text-primary border border-primary/30 shadow-sm">
                {workProjects.length} Projects
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
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
              <h2 className="text-3xl font-bold text-foreground relative group" style={{ fontFamily: fonts.PlayfairDisplay }}>
                <span className="relative z-10">Independent Projects</span>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300"></span>
              </h2>
              <div className="h-[1px] flex-grow mx-4 bg-gradient-to-r from-transparent via-border to-transparent"></div>
              <Badge className="bg-accent/10 text-accent border border-accent/30 shadow-sm">
                {independentProjects.length} Projects
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
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
              <h2 className="text-3xl font-bold text-foreground relative group" style={{ fontFamily: fonts.PlayfairDisplay }}>
                <span className="relative z-10">Personal Projects</span>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </h2>
              <div className="h-[1px] flex-grow mx-4 bg-gradient-to-r from-transparent via-border to-transparent"></div>
              <Badge className="bg-primary/10 text-primary border border-primary/30 shadow-sm">
                {personalProjects.length} Projects
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
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





export default ProjectsPage;