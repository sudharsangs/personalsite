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
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-card/50 border border-border/50 hover:bg-card/80 hover:border-primary/30 transition-all duration-300 group"
            aria-label="Back to Home"
          >
            <Home className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </div>

        {/* Hero Section */}
        <div className="py-12 text-center relative">
          {/* Animated background elements similar to hero component */}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 drop-shadow-sm" style={{ fontFamily: fonts.SpaceGrotesk }}>
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto relative z-10">
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
              <h2 className="text-3xl font-bold text-white relative group" style={{ fontFamily: fonts.SpaceGrotesk }}>
                <span className="relative z-10">Work Projects</span>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-blue-500 to-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </h2>
              <div className="h-[1px] flex-grow mx-4 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              <Badge className="bg-gradient-to-br from-blue-900/20 to-indigo-900/10 text-white border border-blue-800/30 backdrop-blur-sm shadow-sm">
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
              <h2 className="text-3xl font-bold text-white relative group" style={{ fontFamily: fonts.SpaceGrotesk }}>
                <span className="relative z-10">Independent Projects</span>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
              </h2>
              <div className="h-[1px] flex-grow mx-4 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              <Badge className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 text-white border border-amber-800/30 backdrop-blur-sm shadow-sm">
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
              <h2 className="text-3xl font-bold text-white relative group" style={{ fontFamily: fonts.SpaceGrotesk }}>
                <span className="relative z-10">Personal Projects</span>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </h2>
              <div className="h-[1px] flex-grow mx-4 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              <Badge className="bg-gradient-to-br from-emerald-900/20 to-cyan-900/10 text-white border border-emerald-800/30 backdrop-blur-sm shadow-sm">
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





export default ProjectsPage;