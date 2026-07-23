"use client";

import { useState } from "react";
import { Archive, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project } from "@/types/projects";
import ProjectCard from "@/components/modules/project-card";
import ProjectCardHorizontal from "@/components/modules/project-card-horizontal";

const pick = (slugs: string[]): Project[] =>
  slugs.map((slug) => projects.find((project) => project.slug === slug)).filter((project): project is Project => Boolean(project));

const groups = [
  {
    id: "work-projects",
    eyebrow: "Professional",
    title: "Work projects",
    description: "Product and platform work shipped with teams at Fubo, Molotov, and Winuall.",
    projects: pick(["molotov-program-list-pages", "molotov-navbar-redesign", "molotov-evergreen-program-pages", "winuall-apps"]),
  },
  {
    id: "personal-projects",
    eyebrow: "Founder and maker",
    title: "Personal products",
    description: "Products I built to solve operational problems and test durable ideas.",
    projects: pick(["factostack-platform", "factostack-website", "form-to-sheets"]),
  },
  {
    id: "independent-projects",
    eyebrow: "Client work",
    title: "Freelance projects",
    description: "Focused engagements where I owned product design and engineering.",
    projects: pick(["quickpicks", "unlocker", "employee-management-app"]),
  },
];

const archive = pick([
  "winuall-learners-module", "winuall-online-store", "winuall-markeing-site",
  "plumbing-e-commerce", "no-paper-exams", "tapx", "table-to-csv",
  "reddit-job-notify", "nextjs-multitenant-saas-boilerplate", "regcheck",
]);

export default function ProjectsPage() {
  const [expanded, setExpanded] = useState(false);
  return (
    <main id="main-content" className="page-shell">
      <header className="page-intro">
        <p className="eyebrow">Projects</p>
        <h1>Projects I’ve built and shipped.</h1>
        <p>Work across streaming, education, manufacturing software, and client products.</p>
      </header>

      <nav aria-label="Project categories" className="mb-14 flex flex-wrap gap-2">
        {groups.map((group) => <a key={group.id} href={`#${group.id}`} className="inline-flex min-h-11 items-center rounded-md bg-secondary px-4 text-sm font-semibold hover:text-primary">{group.title}</a>)}
      </nav>

      {groups.map((group) => (
        <section key={group.id} id={group.id} className="section-block scroll-mt-20 first:pt-0" aria-labelledby={`${group.id}-heading`}>
          <p className="eyebrow">{group.eyebrow}</p>
          <h2 id={`${group.id}-heading`} className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">{group.title}</h2>
          <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{group.description}</p>
          <div className="mt-8 space-y-8">
            {group.projects.slice(0, 1).map((project, index) => <ProjectCardHorizontal key={project.slug} {...project} index={index} />)}
            {group.projects.length > 1 && <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{group.projects.slice(1).map((project, index) => <ProjectCard key={project.slug} {...project} index={index} />)}</div>}
          </div>
        </section>
      ))}

      <section className="section-block" aria-labelledby="archive-heading">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Archive</p>
            <h2 id="archive-heading" className="mt-2 flex items-center gap-3 font-serif text-3xl font-semibold sm:text-4xl"><Archive className="h-7 w-7 text-primary" aria-hidden="true" />Earlier work</h2>
          </div>
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls="project-archive"
            onClick={() => setExpanded((value) => !value)}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-secondary px-4 text-sm font-semibold hover:text-primary"
          >
            {expanded ? <>Hide archive<ChevronUp aria-hidden="true" /></> : <>Show {archive.length} projects<ChevronDown aria-hidden="true" /></>}
          </button>
        </div>
        <div id="project-archive" hidden={!expanded} className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {archive.map((project, index) => <ProjectCard key={project.slug} {...project} index={index} />)}
        </div>
      </section>
    </main>
  );
}
