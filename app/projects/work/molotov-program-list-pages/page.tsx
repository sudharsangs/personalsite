import React from 'react';
import { Metadata } from 'next';
import { Layers, BarChart, Zap, List } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, InfoCard, OutcomeList, ProjectSection } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Program List Pages | Sudharsan GS',
  description: 'Migrated and extended Molotov\'s category/genre listing pages with TypeScript rewrite, editorial headers, structured data, and dual pagination',
};

export default function MolotovProgramListPagesPage() {
  const projectData = {
    title: "Program List Pages",
    description: "Rebuilt Molotov's category and genre listing pages from the ground up: server-rendered filter links for full crawlability, dual pagination, structured data for Carousel Rich Results, and editorial content headers across every listing page on the platform.",
    company: {
      name: "Molotov by Fubo",
      url: "https://www.molotov.tv",
      logo: "/molotov.png"
    },
    type: "work" as const,
    date: "2026",
    technologies: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'Node.js', icon: '/skills/nodejs.svg' },
      { name: 'CSS Modules', icon: '/skills/css.svg' },
      { name: 'Webpack', icon: '/skills/javascript.svg' },
    ],

    keyHighlights: [
      "Server-rendered category filter links replacing JS-only filters: every genre and filter combination is now fully crawlable",
      "Editorial content headers with keyword-rich introductory copy added to each listing page",
      "Dual pagination: numbered page links and infinite scroll running in parallel for different user preferences",
      "Unique title tags per page with rel='next'/rel='prev' signals communicating paginated structure to Google",
      "FAQ sections sourced from API, providing dynamic page-specific content that search engines can index",
      "ItemList + Movie/TVSeries schema making listing pages eligible for Google Carousel Rich Results in SERPs",
      "WebP conversion across all listing thumbnails and 301 redirects from legacy URL patterns",
    ],
    seoInfrastructure: [
      { title: "Crawlability", body: "Replaced JS-dependent filters with server-rendered anchor links so Googlebot can traverse the full category/genre hierarchy without needing to execute JavaScript." },
      { title: "Pagination Signals", body: "Each page in a paginated series gets a distinct title, and rel=next/rel=prev link elements tell Google how the pages relate, critical for large content catalogues." },
      { title: "Rich Results", body: "ItemList wrapping Movie/TVSeries entities gives Google what it needs to render Carousel Rich Results for category pages, putting Molotov's content directly in visual SERP features." },
      { title: "Performance", body: "WebP conversion across all listing thumbnails cut image payload significantly, with measurable impact on page load speed and Core Web Vitals." },
    ],
    outcomes: [
      "Complete SEO infrastructure deployed across all category and genre listing pages",
      "Carousel Rich Result eligibility via ItemList + Movie/TVSeries schema implementation",
      "Reduced HTML payload through WebP image format conversion",
      "Improved crawlability replacing JS-dependent filters with SSR anchor links",
    ],
  };

  return (
    <ProjectPageLayout
      title={projectData.title}
      description={projectData.description}
      type={projectData.type}
      date={projectData.date}
      company={projectData.company}
      liveUrl="https://www.molotov.tv/fr_fr/cat/1/movies"
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
              className="inline-flex items-center bg-card/80 shadow-sm rounded-full px-4 py-2 text-sm border border-primary/20"
            >
              <Image src={tech.icon} alt={tech.name} width={16} height={16} className="mr-2" />
              <span className="text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Video Demo */}
      <div className="rounded-2xl overflow-hidden border border-border/50 mb-16">
        <video
          src="/projects/molotov/program-list.mov"
          controls
          className="w-full h-auto"
          preload="metadata"
        />
        <p className="text-muted-foreground text-xs p-3 text-center bg-muted/30">
          Demo: Program List Pages with SEO infrastructure
        </p>
      </div>

      {/* Key Highlights */}
      <ProjectSection
        title="Key Highlights"
        icon={<Zap className="w-5 h-5" />}
      >
        <FeatureList items={projectData.keyHighlights} />
      </ProjectSection>

      {/* SEO Infrastructure */}
      <ProjectSection
        title="SEO Infrastructure"
        icon={<List className="w-5 h-5" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projectData.seoInfrastructure.map((item) => (
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
