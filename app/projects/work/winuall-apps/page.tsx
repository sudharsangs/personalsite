import React from 'react';
import { Metadata } from 'next';
import { Layers, BarChart, Code, Target, Grid } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Winuall Apps - Micro Frontend Architecture | Sudharsan GS',
  description: 'Implementation of Micro Frontend Architecture for Winuall\'s platform, enabling seamless integration of SPAs',
};

export default function WinuallAppsPage() {
  const projectData = {
    title: "Winuall Apps - Micro Frontend Architecture",
    description: "Introduced Micro Frontend Architecture to Winuall's platform, making it highly pluggable and extensible to integrate various Single Page Applications seamlessly.",
    company: {
      name: "Winuall",
      url: "https://winuall.com",
      logo: "/winuall.jpg"
    },
    type: "work",
    date: "2021-2022",
    technologies: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'Styled Components', icon: '/skills/styled-components.svg' }
    ],
    keyHighlights: [
      "Implemented Micro Frontend Architecture to enable seamless integration of external SPAs into the main project",
      "Developed federated code to enhance developer experience and maintainability",
      "Created essential plugins like Google Analytics, Facebook Pixel, Google Drive integration for simplified integrations",
      "Built a plugin management system allowing dynamic loading of functionality",
      "Established clear module boundaries for improved team collaboration"
    ],
    challenges: [
      "Maintaining consistent UI/UX across independently developed micro frontends",
      "Managing shared dependencies between different SPAs without causing conflicts",
      "Implementing efficient module federation with minimal performance overhead",
      "Creating a robust plugin architecture that supports various integration patterns"
    ],
    solutions: [
      "Developed a shared component library with consistent design patterns across all micro frontends",
      "Implemented a dependency management strategy with version control to prevent conflicts",
      "Used Webpack Module Federation to share code between applications efficiently",
      "Created a lightweight plugin API with clear documentation for third-party developers"
    ],
    outcomes: [
      "Improved platform flexibility by allowing independent deployment of micro frontends",
      "Enhanced developer productivity through modular architecture and clear boundaries",
      "Reduced time-to-market for new features by enabling parallel development across teams",
      "Created a more scalable system that could grow with business requirements"
    ],
    images: [
      {
        url: '/projects/winuall/winuall-apps.png',
        alt: 'Plugin Management Interface',
        caption: 'Interface showcasing the plugin management system'
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
        icon={<Target className="w-5 h-5" />}
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

      {/* Architecture Components */}
      <ProjectSection 
        title="Architecture Components"
        icon={<Code className="w-5 h-5" />}
        iconBg="bg-purple-900/20"
        iconColor="text-purple-400" 
        iconBorder="border-purple-800/30"
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Container App</h3>
            <p className="text-gray-300">Developed the main shell application that loads and manages micro frontends with shared routing and state.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Module Federation</h3>
            <p className="text-gray-300">Implemented Webpack Module Federation to share components and logic between applications while maintaining independence.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Plugin System</h3>
            <p className="text-gray-300">Created a flexible plugin architecture allowing dynamic integration of third-party features into the platform.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Design System</h3>
            <p className="text-gray-300">Built a shared component library with Styled Components ensuring visual consistency across all micro frontends.</p>
          </div>
        </div>
      </ProjectSection>

      {/* Challenges & Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <ProjectSection 
          title="Challenges"
          icon={<Code className="w-5 h-5" />}
          iconBg="bg-amber-900/20"
          iconColor="text-amber-500"
          iconBorder="border-amber-800/30"
          className="mb-6 md:mb-0"
        >
          <FeatureList 
            items={projectData.challenges} 
            iconBg="bg-amber-900/20"
            iconColor="text-amber-500"
          />
        </ProjectSection>

        <ProjectSection 
          title="Solutions"
          icon={<Grid className="w-5 h-5" />}
          iconBg="bg-emerald-900/20"
          iconColor="text-emerald-500" 
          iconBorder="border-emerald-800/20"
          className="mb-0"
        >
          <FeatureList 
            items={projectData.solutions}
            iconBg="bg-emerald-900/20"
            iconColor="text-emerald-500"
          />
        </ProjectSection>
      </div>

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