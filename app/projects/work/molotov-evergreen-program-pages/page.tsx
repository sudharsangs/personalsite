import React from 'react';
import { Metadata } from 'next';
import { Layers, BarChart, Zap, Link2 } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, InfoCard, OutcomeList, ProjectSection } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Program Pages | Sudharsan GS',
  description: 'Built canonical program pages at Molotov TV with schema.org microdata, deeplinks, and LCP optimizations',
};

export default function MolotovEvergreenProgramPagesPage() {
  const projectData = {
    title: "Program Pages",
    description: "Designed and built canonical program pages for Molotov TV, consolidating dozens of fragmented legacy URLs per title into a single authoritative page, wired up with schema.org microdata, deeplinks into the streaming app, and LCP optimizations targeting French streaming audiences.",
    company: {
      name: "Molotov by Fubo",
      url: "https://www.molotov.tv",
      logo: "/molotov.png"
    },
    type: "work" as const,
    date: "2025-2026",
    technologies: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'Node.js', icon: '/skills/nodejs.svg' },
      { name: 'CSS Modules', icon: '/skills/css.svg' },
      { name: 'Webpack', icon: '/skills/javascript.svg' },
    ],
    keyHighlights: [
      "Multi-channel tabbed schedule showing upcoming airings across all channels for each title",
      "One-click Watch/Record deeplinks that route directly into the Molotov streaming app",
      "301 redirects collapsing fragmented legacy URL patterns into a single canonical URL per program",
      "Movie/TVSeries schema.org microdata making each page eligible for Google Rich Results",
      "BreadcrumbList schema providing structured navigation context in SERPs",
      "Hero image LCP optimization using fetchpriority='high' for measurable Core Web Vitals gains",
    ],
    seoArchitecture: [
      { title: "Structured Data", body: "Movie/TVSeries + BreadcrumbList microdata enabling Google Rich Results and richer SERP appearance for all program pages." },
      { title: "URL Canonicalization", body: "Consolidated dozens of fragmented legacy URL patterns per title into a single canonical URL, cleaning up duplicate content signals that had accumulated over years." },
      { title: "Core Web Vitals", body: "LCP improvements by marking hero images as high-priority fetch resources, ensuring the most important visual content loads first in the browser's queue." },
    ],
    outcomes: [
      "Consolidated fragmented URLs into single canonical program pages eliminating duplicate content",
      "Google Rich Results eligibility via Movie/TVSeries microdata implementation",
      "Improved LCP scores across program pages through image priority optimizations",
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
              className="inline-flex items-center bg-card/80 shadow-sm backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-primary/20"
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
          src="/projects/molotov/evergreen.mov"
          controls
          className="w-full h-auto"
          preload="metadata"
        />
        <p className="text-muted-foreground text-xs p-3 text-center bg-muted/30">
          Demo: Program Page in action
        </p>
      </div>

      {/* Key Highlights */}
      <ProjectSection
        title="Key Highlights"
        icon={<Zap className="w-5 h-5" />}
      >
        <FeatureList items={projectData.keyHighlights} />
      </ProjectSection>

      {/* SEO Architecture */}
      <ProjectSection
        title="SEO Architecture"
        icon={<Link2 className="w-5 h-5" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projectData.seoArchitecture.map((item) => (
            <InfoCard key={item.title} title={item.title}>
              {item.body}
            </InfoCard>
          ))}
        </div>
      </ProjectSection>

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
