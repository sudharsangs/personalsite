import React from 'react';
import { Metadata } from 'next';
import { Layers, BarChart, Globe, Sparkles, LineChart } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, InfoCard, OutcomeList, ProjectSection, ProjectImageGallery } from '@/components/modules/project-page-layout';

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
    seoStrategy: [
      { title: "Technical SEO", body: "Implemented server-side rendering, sitemap generation, structured data, and optimized meta tags for improved search engine visibility." },
      { title: "Performance", body: "Achieved 95+ PageSpeed scores through image optimization, code splitting, lazy loading, and efficient caching strategies." },
      { title: "Content Strategy", body: "Developed keyword-focused content plan and internal linking structure to maximize organic traffic and user engagement." },
    ],
    outcomes: [
      "45% increase in organic search traffic",
      "32% improvement in conversion rate for lead generation",
      "28% reduction in bounce rate through improved page load performance",
      "Successfully expanded reach to international markets"
    ],
    images: [
      {
        url: '/projects/winuall/winuall-reg-1.png',
        alt: 'Winuall Registration Step 1',
        caption: 'Initial registration step for new users'
      },
      {
        url: '/projects/winuall/winuall-reg-2.png',
        alt: 'Winuall Registration Step 2',
        caption: 'User information collection step'
      },
      {
        url: '/projects/winuall/winuall-reg-3.png',
        alt: 'Winuall Registration Step 3',
        caption: 'Institution details entry form'
      },
      {
        url: '/projects/winuall/winuall-reg-4.png',
        alt: 'Winuall Registration Step 4',
        caption: 'Course and program selection'
      },
      {
        url: '/projects/winuall/winuall-reg-5.png',
        alt: 'Winuall Registration Step 5',
        caption: 'Customization preferences'
      },
      {
        url: '/projects/winuall/winuall-reg-6.png',
        alt: 'Winuall Registration Step 6',
        caption: 'Payment and plan selection'
      },
      {
        url: '/projects/winuall/winuall-reg-7.png',
        alt: 'Winuall Registration Step 7',
        caption: 'Final verification step'
      },
      {
        url: '/projects/winuall/winuall-reg-8.png',
        alt: 'Winuall Registration Complete',
        caption: 'Registration completion confirmation'
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
              className="inline-flex items-center bg-white/80 shadow-sm backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-primary/20"
            >
              <Image src={tech.icon} alt={tech.name} width={16} height={16} className="mr-2" />
              <span className="text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* First Image */}
      <div className="mb-5">
        <div className="rounded-2xl overflow-hidden border border-border/50 shadow-md">
          <Image
            src={projectData.images[0].url}
            alt={projectData.images[0].alt}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <p className="text-muted-foreground text-xs mt-2.5 text-center">{projectData.images[0].caption}</p>
      </div>

      {/* Registration Steps Gallery */}
      <ProjectImageGallery images={projectData.images.slice(1, 8)} columns={3} />

      {/* Key Highlights */}
      <ProjectSection
        title="Key Highlights"
        icon={<Sparkles className="w-5 h-5" />}
      >
        <FeatureList items={projectData.keyHighlights} />
      </ProjectSection>

      {/* Website Features */}
      <ProjectSection
        title="Website Features"
        icon={<Globe className="w-5 h-5" />}
      >
        <FeatureList items={projectData.features} />
      </ProjectSection>

      {/* SEO Strategy */}
      <ProjectSection
        title="SEO & Performance Strategy"
        icon={<LineChart className="w-5 h-5" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projectData.seoStrategy.map((item) => (
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
