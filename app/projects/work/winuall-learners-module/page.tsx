import React from 'react';
import { Metadata } from 'next';
import { Layers, BarChart, Code, Grid } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, OutcomeList, ProjectSection } from '@/components/modules/project-page-layout';

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
        url: '/projects/winuall/winuall-learners-module-1.png',
        alt: 'Learners Module Dashboard',
        caption: 'The main dashboard view of the learners module'
      },
      {
        url: '/projects/winuall/winuall-learners-module-2.png',
        alt: 'Course Viewer Interface',
        caption: 'Interactive quiz and course viewer interface'
      },
      {
        url: '/projects/winuall/winuall-learners-module-3.png',
        alt: 'View notes',
        caption: 'Learners can view their notes and read books related to the course'
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

      {/* Project Screenshots */}
      <ProjectSection
        title="Project Screenshots"
        icon={<BarChart className="w-5 h-5" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          <div>
            <div className="rounded-2xl overflow-hidden border border-border/50 transition-shadow duration-300 h-full">
              <Image
                src={projectData.images[0].url}
                alt={projectData.images[0].alt}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-muted-foreground text-xs mt-2.5 text-center">{projectData.images[0].caption}</p>
          </div>
          <div className="flex flex-col gap-5">
            {projectData.images.slice(1, 3).map((image, index) => (
              <div key={index}>
                <div className="rounded-2xl overflow-hidden border border-border/50 transition-shadow duration-300">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-muted-foreground text-xs mt-2.5 text-center">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </ProjectSection>

      {/* Key Highlights */}
      <ProjectSection
        title="Key Highlights"
        icon={<BarChart className="w-5 h-5" />}
      >
        <FeatureList items={projectData.keyHighlights} />
      </ProjectSection>

      {/* Challenges & Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <ProjectSection
          title="Challenges"
          icon={<Code className="w-5 h-5" />}
          iconBg="bg-destructive/10"
          iconColor="text-destructive"
          iconBorder="border-destructive/20"
          className="mb-0"
        >
          <FeatureList
            items={projectData.challenges}
            iconBg="bg-destructive/10"
            iconColor="text-destructive"
          />
        </ProjectSection>

        <ProjectSection
          title="Solutions"
          icon={<Grid className="w-5 h-5" />}
          className="mb-0"
        >
          <FeatureList items={projectData.solutions} />
        </ProjectSection>
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
