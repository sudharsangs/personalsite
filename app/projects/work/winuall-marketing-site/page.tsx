import React from 'react';
import { Metadata } from 'next';
import { Layers, BarChart, Globe, Sparkles, LineChart } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Winuall Marketing Site | Sudharsan GS',
  description: 'Development and optimization of the Winuall marketing website to drive user acquisition',
};

export default function WinuallMarketingSitePage() {
  const projectData = {
    title: "Winuall Marketing Website",
    description: "Developed and maintained the marketing website for Winuall, optimizing for lead generation and user acquisition.",
    company: {
      name: "Winuall",
      url: "https://winuall.com",
      logo: "/winuall.jpg"
    },
    type: "work",
    date: "2021",
    technologies: [
      { name: 'NextJS', icon: '/skills/nextjs.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'TailwindCSS', icon: '/skills/tailwind.svg' },
      { name: 'NodeJS', icon: '/skills/nodejs.svg' }
    ],
    keyHighlights: [
      "Built a high-performing marketing site with Next.js, optimized for fast page loads",
      "Implemented SEO best practices, improving organic traffic by over 40%",
      "Created responsive layouts that provided excellent UX across all device types",
      "Integrated analytics and tracking to measure marketing campaign effectiveness",
      "Developed interactive product demos to showcase platform capabilities"
    ],
    features: [
      "Fast, SEO-optimized landing pages for different user segments",
      "Interactive product feature showcases with animations",
      "Integrated blog platform with content management system",
      "Lead generation forms with analytics tracking",
      "Automated A/B testing capabilities for conversion optimization",
      "Multi-language support for international markets"
    ],
    outcomes: [
      "45% increase in organic search traffic",
      "32% improvement in conversion rate for lead generation",
      "28% reduction in bounce rate through improved page load performance",
      "Successfully expanded reach to international markets"
    ],
    images: [
      {
        url: '/projects/winuall/marketing-site-1.png',
        alt: 'Winuall Marketing Site Homepage',
        caption: 'Homepage featuring key platform benefits and call-to-action sections'
      },
      {
        url: '/projects/winuall/marketing-site-2.png',
        alt: 'Features Page',
        caption: 'Interactive feature showcase with visual demonstrations'
      }
    ]
  };

  return (
    <ProjectPageLayout
      title={projectData.title}
      description={projectData.description}
      type={projectData.type as 'personal' | 'independent' | 'work'}
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
              className="inline-flex items-center bg-gray-800/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-gray-700/30"
            >
              <Image src={tech.icon} alt={tech.name} width={16} height={16} className="mr-2" />
              <span className="text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Project Images */}
      <ProjectImageGallery images={projectData.images} columns={2} />

      {/* Key Highlights */}
      <ProjectSection 
        title="Key Highlights"
        icon={<Sparkles className="w-5 h-5" />}
        iconBg="bg-blue-900/20"
        iconColor="text-blue-400" 
        iconBorder="border-blue-800/30"
      >
        <FeatureList 
          items={projectData.keyHighlights} 
          iconBg="bg-blue-900/20"
          iconColor="text-blue-400"
        />
      </ProjectSection>

      {/* Features */}
      <ProjectSection 
        title="Website Features"
        icon={<Globe className="w-5 h-5" />}
        iconBg="bg-purple-900/20"
        iconColor="text-purple-400" 
        iconBorder="border-purple-800/30"
      >
        <FeatureList 
          items={projectData.features}
          iconBg="bg-purple-900/20"
          iconColor="text-purple-400"
        />
      </ProjectSection>

      {/* SEO Strategy */}
      <ProjectSection 
        title="SEO & Performance Strategy"
        icon={<LineChart className="w-5 h-5" />}
        iconBg="bg-emerald-900/20"
        iconColor="text-emerald-500" 
        iconBorder="border-emerald-800/20"
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Technical SEO</h3>
            <p className="text-gray-300">Implemented server-side rendering, sitemap generation, structured data, and optimized meta tags for improved search engine visibility.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Performance</h3>
            <p className="text-gray-300">Achieved 95+ PageSpeed scores through image optimization, code splitting, lazy loading, and efficient caching strategies.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Content Strategy</h3>
            <p className="text-gray-300">Developed keyword-focused content plan and internal linking structure to maximize organic traffic and user engagement.</p>
          </div>
        </div>
      </ProjectSection>

      {/* Outcomes */}
      <ProjectSection 
        title="Outcomes & Results"
        icon={<BarChart className="w-5 h-5" />}
        iconBg="bg-blue-900/20"
        iconColor="text-blue-400" 
        iconBorder="border-blue-800/30"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projectData.outcomes.map((outcome, index) => (
            <div key={index} className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
              <p className="text-gray-300">{outcome}</p>
            </div>
          ))}
        </div>
      </ProjectSection>
    </ProjectPageLayout>
  );
}