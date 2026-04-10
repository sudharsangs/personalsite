"use client";
import React from 'react';
import { projects } from '@/data/projects';
import { Home, Briefcase, User, LoaderPinwheel } from 'lucide-react';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { fonts } from '@/lib/constants';
import ProjectNavButtons from '@/components/modules/project-nav-buttons';
import ProjectCard from '@/components/modules/project-card';
import ProjectCardHorizontal from '@/components/modules/project-card-horizontal';

const SectionHeader = ({
  title,
  count,
  icon,
  accent = 'primary',
}: {
  title: string;
  count: number;
  icon: React.ReactNode;
  accent?: 'primary' | 'accent' | 'violet';
}) => {
  const colors = {
    primary: { badge: 'bg-primary/10 text-primary border-primary/30', bar: 'from-primary to-primary/30', icon: 'bg-primary/10 border-primary/20 text-primary' },
    accent:  { badge: 'bg-accent/10 text-accent border-accent/30',   bar: 'from-accent to-accent/30',   icon: 'bg-accent/10 border-accent/20 text-accent' },
    violet:  { badge: 'bg-violet-100 text-violet-700 border-violet-200', bar: 'from-violet-500 to-violet-200', icon: 'bg-violet-100 border-violet-200 text-violet-600' },
  }[accent];

  return (
    <div className="flex items-center gap-4 mb-10">
      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${colors.icon}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: fonts.PlayfairDisplay }}>
          {title}
        </h2>
        <div className={`h-0.5 w-24 bg-gradient-to-r ${colors.bar} rounded-full mt-1`} />
      </div>
      <div className={`h-px flex-grow mx-2 bg-gradient-to-r from-border/60 to-transparent hidden sm:block`} />
      <Badge className={`border text-xs font-semibold px-3 py-1 flex-shrink-0 ${colors.badge}`}>
        {count} {count === 1 ? 'Project' : 'Projects'}
      </Badge>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  const personalProjects = projects.filter(project => project.type === 'personal');
  const workProjects = projects.filter(project => project.type === 'work');
  const independentProjects = projects.filter(project => project.type === 'independent');

  // Featured = first 2 work projects shown as wide horizontal cards
  const featuredWork = workProjects.slice(0, 2);
  const remainingWork = workProjects.slice(2);

  // Featured = first personal project as wide card
  const featuredPersonal = personalProjects.slice(0, 1);
  const remainingPersonal = personalProjects.slice(1);

  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="container mx-auto px-4 sm:px-4 lg:px-8">

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
        <div className="py-12 text-center relative mb-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-4">
            <span className="text-primary text-sm font-semibold tracking-wider">PORTFOLIO</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: fonts.PlayfairDisplay }}>
            <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary/40 mx-auto rounded-full mb-5" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Work projects, freelance builds and personal experiments. Mostly full stack, usually the only engineer involved.
          </p>
        </div>

        {/* Filter Navigation */}
        <ProjectNavButtons />

        {/* ── Work Projects ───────────────────────────── */}
        {workProjects.length > 0 && (
          <section id="work-projects" className="mb-20 scroll-mt-20">
            <SectionHeader
              title="Work Projects"
              count={workProjects.length}
              icon={<Briefcase className="w-5 h-5" />}
              accent="primary"
            />

            {/* Featured 2 — wide horizontal */}
            <div className="space-y-8 mb-10">
              {featuredWork.map((project, index) => (
                <ProjectCardHorizontal
                  key={project.slug}
                  {...project}
                  index={index}
                  reverse={index % 2 === 1}
                />
              ))}
            </div>

            {/* Remaining — 3-col grid */}
            {remainingWork.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {remainingWork.map((project, index) => (
                  <ProjectCard key={project.slug} {...project} index={index} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* ── Personal Projects ───────────────────────── */}
        {personalProjects.length > 0 && (
          <section id="personal-projects" className="mb-20 scroll-mt-20">
            <SectionHeader
              title="Personal Projects"
              count={personalProjects.length}
              icon={<User className="w-5 h-5" />}
              accent="primary"
            />

            {/* Featured 1 — wide horizontal */}
            <div className="mb-10">
              {featuredPersonal.map((project, index) => (
                <ProjectCardHorizontal
                  key={project.slug}
                  {...project}
                  index={index}
                  reverse={false}
                />
              ))}
            </div>

            {/* Remaining — mixed: 2-col then 3-col */}
            {remainingPersonal.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {remainingPersonal.map((project, index) => (
                  <ProjectCard key={project.slug} {...project} index={index} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* ── Independent Projects ─────────────────────── */}
        {independentProjects.length > 0 && (
          <section id="independent-projects" className="mb-16 scroll-mt-20">
            <SectionHeader
              title="Independent Projects"
              count={independentProjects.length}
              icon={<LoaderPinwheel className="w-5 h-5" />}
              accent="violet"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {independentProjects.map((project, index) => (
                <ProjectCard key={project.slug} {...project} index={index} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default ProjectsPage;
