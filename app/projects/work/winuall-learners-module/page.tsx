import React from 'react';
import { Metadata } from 'next';
import { Layers, BarChart } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Learner\'s Module | Sudharsan GS',
  description: 'Implementation of a learner\'s module where students can learn the courses purchased by them',
};

export default function LearnersModulePage() {
  const projectData = {
    title: "Learner's Module",
    description: "Single-handedly implemented a learner's module where students can learn the courses purchased by them",
    company: {
      name: "Winuall",
      url: "https://winuall.com",
      logo: "/winuall.jpg"
    },
    type: "work",
    date: "2021",
    technologies: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'Styled Components', icon: '/skills/styled-components.svg' },
      { name: 'Redux', icon: '/skills/redux.svg' }
    ],
    keyHighlights: [
      "Creation of a user-friendly learner's module with a wide range of learning resources",
      "Implementation of interactive features such as live classes and quizzes for an engaging learning experience",
      "Incorporation of user tracking capabilities to help learners monitor their progress and achievements"
    ],
    challenges: [
      "Optimizing the performance of video playback for users with varying internet connectivity",
      "Implementing a robust state management system to handle complex user interactions",
      "Creating an intuitive interface that accommodates various content types"
    ],
    solutions: [
      "Implemented adaptive streaming for videos to adjust quality based on network conditions",
      "Used Redux for state management with carefully designed reducers to optimize rendering",
      "Developed a flexible UI system that dynamically adapts to different content formats"
    ],
    images: [
      {
        url: '/projects/winuall/learners-module-1.png',
        alt: 'Learners Module Dashboard',
        caption: 'The main dashboard view of the learners module'
      },
      {
        url: '/projects/winuall/learners-module-2.png',
        alt: 'Course Viewer Interface',
        caption: 'Interactive course viewing experience'
      }
    ],
    outcomes: [
      "Improved user engagement by 45% through interactive learning features",
      "Reduced course abandonment rates by 30% with progress tracking",
      "Enhanced customer satisfaction with intuitive interface, resulting in positive feedback"
    ]
  };

  return (
    <ProjectPageLayout
      title={projectData.title}
      description={projectData.description}
      type={projectData.type as 'work'}
      date={projectData.date}
      company={projectData.company}
    >
      {/* Tech Stack */}
      <ProjectSection 
        title="Tech Stack"
        icon={<Layers className="w-5 h-5" />}
        iconBg="bg-blue-900/20"
        iconColor="text-blue-500"
        iconBorder="border-blue-800/20"
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

      {/* Key Highlights */}
      <ProjectSection 
        title="Key Highlights"
        icon={<BarChart className="w-5 h-5" />}
        iconBg="bg-blue-900/20"
        iconColor="text-blue-500"
        iconBorder="border-blue-800/20"
      >
        <FeatureList 
          items={projectData.keyHighlights}
          iconBg="bg-blue-900/20"
          iconColor="text-blue-500"
        />
      </ProjectSection>

      {/* Project Images */}
      <ProjectImageGallery images={projectData.images} columns={2} />

      {/* Challenges & Solutions */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Challenges & Solutions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-900/20 backdrop-blur-sm border-gray-800/50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Challenges</h3>
              <ul className="space-y-3">
                {projectData.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-900/20 text-red-500 mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900/20 backdrop-blur-sm border-gray-800/50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Solutions</h3>
              <ul className="space-y-3">
                {projectData.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-900/20 text-emerald-500 mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Outcomes & Results */}
      <ProjectSection 
        title="Outcomes & Results"
        icon={<BarChart className="w-5 h-5" />}
        iconBg="bg-emerald-900/20"
        iconColor="text-emerald-500"
        iconBorder="border-emerald-800/20"
      >
        <div className="bg-gradient-to-br from-blue-900/10 to-emerald-900/10 border border-gray-800/30 rounded-xl p-6">
          <ul className="space-y-4">
            {projectData.outcomes.map((outcome, index) => (
              <li key={index} className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-900/20 flex items-center justify-center mr-4">
                  <span className="text-emerald-500 font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-300">{outcome}</p>
              </li>
            ))}
          </ul>
        </div>
      </ProjectSection>
    </ProjectPageLayout>
  );
}