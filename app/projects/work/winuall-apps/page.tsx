import React from 'react';
import { Metadata } from 'next';
import { Layers, BarChart, Smartphone, Code, Target } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Winuall Mobile Apps | Sudharsan GS',
  description: 'Development and maintenance of Winuall\'s mobile applications for students and instructors',
};

export default function WinuallAppsPage() {
  const projectData = {
    title: "Winuall Mobile Applications",
    description: "Led the development of Winuall's mobile applications for both students and instructors, ensuring a seamless learning experience on mobile devices.",
    company: {
      name: "Winuall",
      url: "https://winuall.com",
      logo: "/winuall.jpg"
    },
    type: "work",
    date: "2021-2022",
    technologies: [
      { name: 'React Native', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'Redux', icon: '/skills/redux.svg' },
      { name: 'NodeJS', icon: '/skills/nodejs.svg' }
    ],
    keyHighlights: [
      "Built and maintained mobile apps for both Android and iOS platforms using React Native",
      "Implemented complex features like video playback, quiz taking, and real-time notifications",
      "Optimized app performance for low-end devices and poor network conditions",
      "Integrated analytics for tracking user engagement and identifying improvement areas",
      "Collaborated with design and backend teams to ensure consistent user experience"
    ],
    challenges: [
      "Supporting a wide range of Android devices with different screen sizes and OS versions",
      "Optimizing video streaming performance for users with limited bandwidth",
      "Implementing complex offline functionality to support learning without internet access",
      "Handling push notifications reliably across different device manufacturers"
    ],
    solutions: [
      "Created a responsive design system with flexible components adapting to different screen sizes",
      "Implemented adaptive video quality and local caching for improved playback experience",
      "Designed a robust offline storage architecture with data synchronization when connectivity resumed",
      "Used a combination of Firebase Cloud Messaging and custom solutions to ensure notification delivery"
    ],
    outcomes: [
      "Increased mobile user engagement by 60% through enhanced user experience",
      "Reduced app crash rate by 75% with improved error handling and testing",
      "Achieved 4.5+ star ratings on both App Store and Play Store",
      "Enabled learning in low-connectivity areas, expanding the platform's reach"
    ],
    images: [
      {
        url: '/projects/winuall/mobile-app-1.png',
        alt: 'Winuall Student App Dashboard',
        caption: 'Student app dashboard showing upcoming classes and assessments'
      },
      {
        url: '/projects/winuall/mobile-app-2.png',
        alt: 'Winuall Instructor App Interface',
        caption: 'Instructor app showing class management features'
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

      {/* Development Process */}
      <ProjectSection 
        title="Development Process"
        icon={<Code className="w-5 h-5" />}
        iconBg="bg-purple-900/20"
        iconColor="text-purple-400" 
        iconBorder="border-purple-800/30"
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Planning</h3>
            <p className="text-gray-300">Collaborated with product managers to define requirements and create detailed technical specifications.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Design</h3>
            <p className="text-gray-300">Worked closely with UI/UX designers to implement responsive interfaces optimal for mobile experiences.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Development</h3>
            <p className="text-gray-300">Built components with React Native and TypeScript, integrating API services for data management.</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Testing & Release</h3>
            <p className="text-gray-300">Implemented comprehensive testing strategies and managed app releases through TestFlight and Play Store.</p>
          </div>
        </div>
      </ProjectSection>

      {/* Challenges & Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <ProjectSection 
          title="Challenges"
          icon={<Smartphone className="w-5 h-5" />}
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
          icon={<Smartphone className="w-5 h-5" />}
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