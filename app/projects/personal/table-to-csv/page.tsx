import React from 'react';
import { Metadata } from 'next';
import { Github, Layers, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import ProjectPageLayout, { FeatureList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Table to CSV | Sudharsan GS',
  description: 'Convert HTML table elements into CSV text with a tiny, dependency-free utility',
};

export default function TableToCsvPage() {
  const projectData = {
    title: "Table to CSV",
    description: "A tiny, dependency-free utility that converts HTML <table> elements into CSV text.",
    type: "personal",
    githubUrl: "https://github.com/sudharsangs/table-to-csv",
    firefoxUrl: "https://addons.mozilla.org/en-US/firefox/addon/table-to-csv/",
    edgeUrl: "https://microsoftedge.microsoft.com/addons/detail/table-to-csv/mhlbppnaaekihnkbmehpbdjbfchdihbl",
    technologies: [
      {
        name: "HTML",
        icon: "/skills/html.svg"
      },
      {
        name: "CSS",
        icon: "/skills/css.svg"
      },
      {
        name: "TypeScript",
        icon: "/skills/typescript.svg"
      },
      {
        name: "JavaScript",
        icon: "/skills/javascript.svg"
      },
    ],
    features: [
      "Converts HTML table elements to standards-compliant CSV",
      "Small, framework-agnostic utility with zero dependencies",
      "Works directly in the browser or within scripts",
    ],
    images: [
      {
        url: '/projects/personal/table-to-csv.gif',
        alt: 'Table to CSV demo',
        caption: 'Demo of converting an HTML table to CSV',
      }
    ],
  };

  return (
    <ProjectPageLayout
      title={projectData.title}
      description={projectData.description}
      type={projectData.type as 'personal' | 'independent' | 'work'}
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
              <span className="text-foreground/80">{tech.name}</span>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Project Links */}
      <div className="flex flex-wrap gap-4 mb-12">
        {projectData.firefoxUrl && (
          <Link href={projectData.firefoxUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-border bg-white/80 text-foreground  flex items-center gap-2">
              <Image src="/skills/firefox.svg" alt="Firefox" width={16} height={16} />
              Get for Firefox
            </Button>
          </Link>
        )}

        {projectData.edgeUrl && (
          <Link href={projectData.edgeUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-border bg-white/80 text-foreground  flex items-center gap-2">
              <Image src="/skills/edge.svg" alt="Edge" width={16} height={16} />
              Get for Edge
            </Button>
          </Link>
        )}
        {projectData.githubUrl && (
          <Link href={projectData.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-border bg-white/80 text-foreground  flex items-center gap-2">
              <Github className="h-4 w-4" />
              View Source Code
            </Button>
          </Link>
        )}
      </div>

      {/* Demo */}
      <ProjectImageGallery images={projectData.images} />

      {/* Features */}
      <ProjectSection
        title="Key Features"
        icon={<LinkIcon className="w-5 h-5" />}
      >
        <FeatureList items={projectData.features} />
      </ProjectSection>
    </ProjectPageLayout>
  );
}
