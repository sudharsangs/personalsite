import React from 'react';
import { Metadata } from 'next';
import { Layers, Zap, Layout } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Regcheck | Sudharsan GS',
  description: 'A comprehensive view of real estate regulations in metropolitan cities across India',
};

const technologies = [
  { name: 'React', icon: '/skills/react.svg' },
  { name: 'GatsbyJS', icon: '/skills/gatsby.svg' },
  { name: 'GraphQL', icon: '/skills/graphql.svg' },
  { name: 'NodeJS', icon: '/skills/nodejs.svg' },
];

const keyHighlights = [
  'Development of a dynamic Gatsby site for easy access to real estate regulations',
  'Integration with Ghost CMS for centralized content management',
  'Utilization of GraphQL and Gatsby to render content from CMS',
  'Custom functionality enhancements using Node.js Handlebars for CMS optimization',
];

const images = [
  {
    url: '/projects/internship/regcheck-1.png',
    alt: 'Regcheck Homepage',
    caption: 'Main landing page with real estate regulation information',
  },
  {
    url: '/projects/internship/regcheck-2.png',
    alt: 'Regulation Details',
    caption: 'Detailed view of real estate regulations',
  },
  {
    url: '/projects/internship/regcheck-3.png',
    alt: 'Metropolitan City Selection',
    caption: 'Interface for selecting metropolitan cities',
  },
  {
    url: '/projects/internship/regcheck-4.png',
    alt: 'Content Management',
    caption: 'Ghost CMS integration for content management',
  },
  {
    url: '/projects/internship/regcheck-5.png',
    alt: 'Analytics Dashboard',
    caption: 'Data analytics for real estate regulations',
  },
];

export default function RegcheckPage() {
  return (
    <ProjectPageLayout
      title="Regcheck"
      description="A revolutionary project that offers a comprehensive view of real estate regulations in metropolitan cities across India, making it easier for stakeholders to navigate the regulatory landscape."
      type="work"
      date="2020"
      company={{
        name: 'Terra Economics and Analytics Lab',
        url: 'https://tealindia.in/',
        logo: '/teal.ico',
      }}
    >
      {/* Tech Stack */}
      <ProjectSection title="Tech Stack" icon={<Layers className="w-5 h-5" />}>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="inline-flex items-center bg-card/80 shadow-sm rounded-full px-4 py-2 text-sm border border-primary/20"
            >
              <Image src={tech.icon} alt={tech.name} width={16} height={16} className="mr-2" />
              <span className="text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Gallery */}
      <ProjectSection title="Project Gallery" icon={<Layout className="w-5 h-5" />}>
        <ProjectImageGallery images={images} columns={2} />
      </ProjectSection>

      {/* Key Features */}
      <ProjectSection title="Key Features" icon={<Zap className="w-5 h-5" />}>
        <FeatureList items={keyHighlights} />
      </ProjectSection>
    </ProjectPageLayout>
  );
}
