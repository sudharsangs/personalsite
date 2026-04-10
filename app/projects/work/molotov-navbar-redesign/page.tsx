import React from 'react';
import { Metadata } from 'next';
import { Layers, BarChart, Zap, Navigation } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, InfoCard, OutcomeList, ProjectSection } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Navigation Bar Redesign | Sudharsan GS',
  description: 'Rebuilt Molotov\'s navigation bar with 10+ sub-components, ARIA accessibility, and critical fixes eliminating 50,000+ 404 URLs',
};

export default function MolotovNavbarRedesignPage() {
  const projectData = {
    title: "Navigation Bar Redesign",
    description: "Rebuilt Molotov's navigation bar from scratch: separate mobile and desktop architectures, API-driven content, ARIA accessibility, and post-launch fixes that wiped out 50,000+ 404 errors from Google Search Console.",
    company: {
      name: "Molotov by Fubo",
      url: "https://www.molotov.tv",
      logo: "/molotov.png"
    },
    type: "work" as const,
    date: "2025",
    technologies: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'Node.js', icon: '/skills/nodejs.svg' },
      { name: 'CSS Modules', icon: '/skills/css.svg' },
    ],
    keyHighlights: [
      "Separate mobile and desktop navbar architectures, each optimized for its breakpoint's interaction patterns",
      "Link obfuscation for anti-scraping compliance while keeping all navigation crawlable as static anchor tags",
      "Custom scrollbar on the desktop megamenu handling deep category hierarchies without overflow issues",
      "Signed-in and signed-out account states with seamless transitions driven by session state",
      "CMS-driven navigation content via API: the content team can update menus without a deployment",
      "Full ARIA roles, labels, and keyboard navigation for WCAG accessibility compliance",
    ],
    architecture: [
      { title: "Mobile", body: "Slide-out drawer with touch-optimized tap targets and collapsible sub-menus, built for one-handed navigation with no dependency on hover interactions." },
      { title: "Desktop", body: "Full megamenu with custom scrollbar for deep category hierarchies, hover-activated dropdowns, and fixed positioning that stays correct as the page scrolls." },
      { title: "Auth States", body: "Signed-in and signed-out views driven by session state, switching between login CTA, user avatar, and account menu without flicker or layout shift." },
      { title: "Dynamic Content", body: "Menu items, featured categories, and promotional slots are all API-driven: the content team updates navigation without touching the codebase." },
    ],
    criticalFixes: [
      "Resolved 50,000+ 404 URLs by fixing the subscription button URL in the navigation",
      "Ligue 1 logo 97% file size reduction (replacing oversized asset with optimized SVG)",
      "Indéterminés category 301 redirect fixing broken classification pages",
    ],
    seoImpact: [
      "50,000+ 404 errors resolved in Search Console",
      "All navigation links now crawlable as static <a> tags",
      "Category hierarchy fully discoverable by Googlebot",
    ],
    outcomes: [
      "Crawlable <a> links replaced JS-dependent navigation enabling full bot indexability",
      "Eliminated 50,000+ 404 URLs through subscription button URL fix, a dramatic Search Console improvement",
      "Improved accessibility scores with complete ARIA roles and keyboard navigation support",
      "Ligue 1 logo 97% size reduction improving page payload and load time",
    ],
  };

  return (
    <ProjectPageLayout
      title={projectData.title}
      description={projectData.description}
      type={projectData.type}
      date={projectData.date}
      company={projectData.company}
    >
      {/* Tech Stack */}
      <ProjectSection
        title="Tech Stack"
        icon={<Layers className="w-5 h-5" />}
      >
        <div className="flex flex-wrap gap-3">
          {projectData.technologies.map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center bg-white/80 shadow-sm backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-primary/20"
            >
              <Image src={tech.icon} alt={tech.name} width={16} height={16} className="mr-2" />
              <span className="text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Video Demo */}
      <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg mb-16">
        <video
          src="/projects/molotov/menu.mov"
          controls
          className="w-full h-auto"
          preload="metadata"
        />
        <p className="text-muted-foreground text-xs p-3 text-center bg-muted/30">
          Demo: Redesigned Navigation Bar in action
        </p>
      </div>

      {/* Key Highlights */}
      <ProjectSection
        title="Key Highlights"
        icon={<Zap className="w-5 h-5" />}
      >
        <FeatureList items={projectData.keyHighlights} />
      </ProjectSection>

      {/* Architecture */}
      <ProjectSection
        title="Architecture Overview"
        icon={<Navigation className="w-5 h-5" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projectData.architecture.map((item) => (
            <InfoCard key={item.title} title={item.title}>
              {item.body}
            </InfoCard>
          ))}
        </div>
      </ProjectSection>

      {/* Critical Post-Launch Impact */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-destructive/10 p-2.5 rounded-xl border border-destructive/20">
            <BarChart className="w-5 h-5 text-destructive" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Critical Post-Launch Impact</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InfoCard title="Issues Resolved" variant="destructive">
            <ul className="space-y-3 mt-1">
              {projectData.criticalFixes.map((fix, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 inline-flex items-center justify-center h-5 w-5 rounded-full bg-destructive/15 text-destructive text-xs font-bold mt-0.5">{index + 1}</span>
                  <span>{fix}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard title="SEO Impact">
            <p className="mb-3">The navigation rebuild had a measurable impact on Google Search Console health:</p>
            <ul className="space-y-2">
              {projectData.seoImpact.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* Outcomes */}
      <ProjectSection
        title="Outcomes & Results"
        icon={<BarChart className="w-5 h-5" />}
      >
        <OutcomeList items={projectData.outcomes} />
      </ProjectSection>
    </ProjectPageLayout>
  );
}
