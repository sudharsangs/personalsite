"use client";
import React, { useState } from 'react';
import { projects } from '@/data/projects';
import { Project } from '@/types/projects';
import { Home, Briefcase, User, Handshake, ChevronDown, ChevronUp, Archive } from 'lucide-react';
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
    violet:  { badge: 'bg-violet-500/10 text-violet-400 border-violet-500/30', bar: 'from-violet-500 to-violet-300', icon: 'bg-violet-500/10 border-violet-500/30 text-violet-400' },
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

const pickProjects = (slugs: string[]): Project[] =>
  slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));

const ProjectsPage: React.FC = () => {
  const [archiveExpanded, setArchiveExpanded] = useState(false);

  const featuredWorkSlugs = [
    "molotov-program-list-pages",
    "molotov-navbar-redesign",
    "molotov-evergreen-program-pages",
    "winuall-apps",
  ];
  const featuredPersonalSlugs = [
    "factostack-platform",
    "factostack-website",
    "form-to-sheets",
  ];
  const featuredFreelanceSlugs = [
    "quickpicks",
    "unlocker",
    "employee-management-app",
  ];

  const workProjects = pickProjects(featuredWorkSlugs);
  const personalProjects = pickProjects(featuredPersonalSlugs);
  const independentProjects = pickProjects(featuredFreelanceSlugs);

  const featuredWork = workProjects.slice(0, 2);
  const remainingWork = workProjects.slice(2);

  const featuredPersonal = personalProjects.slice(0, 1);
  const remainingPersonal = personalProjects.slice(1);

  const featuredFreelance = independentProjects.slice(0, 1);
  const remainingFreelance = independentProjects.slice(1);

  const archiveSlugs = [
    "winuall-learners-module",
    "winuall-online-store",
    "winuall-markeing-site",
    "plumbing-e-commerce",
    "no-paper-exams",
    "tapx",
    "table-to-csv",
    "reddit-job-notify",
    "nextjs-multitenant-saas-boilerplate",
    "regcheck",
  ];
  const archiveProjects = pickProjects(archiveSlugs);

  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="container mx-auto px-4 sm:px-4 lg:px-8">

        {/* Home Navigation */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-card/60 border border-border hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group shadow-sm hover:shadow-md"
            aria-label="Back to Home"
          >
            <Home className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </div>

        {/* Hero Section */}
        <div className="py-12 text-center relative mb-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-4">
            <span className="text-primary text-sm font-semibold tracking-wider">WORK</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: fonts.PlayfairDisplay }}>
            <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary/40 mx-auto rounded-full mb-5" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Work I&apos;ve shipped across streaming, EdTech, manufacturing, and freelance.
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
              title="Personal Products"
              count={personalProjects.length}
              icon={<User className="w-5 h-5" />}
              accent="primary"
            />

            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Things I built on my own, either to solve a real problem or to explore an idea.
            </p>

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

        {/* ── Freelance Projects ─────────────────────── */}
        {independentProjects.length > 0 && (
          <section id="independent-projects" className="mb-16 scroll-mt-20">
            <SectionHeader
              title="Freelance Projects"
              count={independentProjects.length}
              icon={<Handshake className="w-5 h-5" />}
              accent="violet"
            />

            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Client work where I handled design and engineering myself.
            </p>

            <div className="mb-10">
              {featuredFreelance.map((project, index) => (
                <ProjectCardHorizontal
                  key={project.slug}
                  {...project}
                  index={index}
                  reverse={false}
                />
              ))}
            </div>

            {remainingFreelance.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {remainingFreelance.map((project, index) => (
                  <ProjectCard key={project.slug} {...project} index={index} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* ── Earlier & Other Work (collapsible archive) ── */}
        <section className="mb-16">
          <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 bg-muted/50 border-border/40 text-muted-foreground">
                <Archive className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: fonts.PlayfairDisplay }}>
                  Earlier &amp; Other Work
                </h2>
                <div className="h-0.5 w-24 bg-gradient-to-r from-border/60 to-transparent rounded-full mt-1" />
              </div>
            </div>
            <button
              onClick={() => setArchiveExpanded((v) => !v)}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/60 bg-card/70 px-4 py-2 text-sm font-semibold text-muted-foreground shadow-sm hover:bg-secondary/70 hover:border-primary/35 hover:text-foreground transition-all duration-200 flex-shrink-0 w-full sm:w-auto"
            >
              {archiveExpanded ? (
                <>Hide <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Show {archiveProjects.length} more projects <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>

          {archiveExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {archiveProjects.map((project, index) => (
                <ProjectCard key={project.slug} {...project} index={index} />
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default ProjectsPage;
