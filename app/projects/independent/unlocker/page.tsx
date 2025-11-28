import React from 'react';
import { Metadata } from 'next';
import { Layers, Link as LinkIcon, FileText, Lightbulb, LineChart, Target } from 'lucide-react';
import Image from 'next/image';
import ProjectPageLayout, { FeatureList, ProjectSection } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Unlocker - Sports Experts Marketplace | Sudharsan GS',
  description: 'A subscription-based SaaS marketplace connecting 100+ verified sports betting experts with subscribers through transparent performance tracking',
};

export default function UnlockerPage() {
  const projectData = {
    title: "Unlocker",
    description: "A subscription-based SaaS marketplace connecting 100+ verified sports betting experts with subscribers through transparent performance tracking and flexible monetization.",
    type: "independent",
    date: "September, October 2025",
    client: "Sports Analytics Startup",
    liveUrl: "https://unlocker.club",
    technologies: [
      { name: 'NextJS', icon: '/skills/nextjs.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'NodeJS', icon: '/skills/nodejs.svg' },
      { name: 'PostgreSQL', icon: '/skills/postgresql.svg' },
      { name: 'TailwindCSS', icon: '/skills/tailwind.svg' },
      { name: 'Docker', icon: '/skills/docker.svg' }
    ],
    features: [
      "Expert Profiles with Linktree-style bios, win/loss percentages, ROI tracking, and sport specialization badges",
      "Subscription Access Control with paywall system protecting predictions behind subscription tiers",
      "Daily Picks Publishing supporting 30+ sports with scheduling, rich text analysis, and draft modes",
      "Real-Time Result Tracking with automated result updates calculating Win/Loss/Push and live performance metrics",
      "Leaderboard System with public rankings by win rate, ROI, sport-specific categories, and time periods",
      "Notification System with multi-channel alerts via Discord, Telegram, Email, and SMS",
      "Stripe Connect integration for marketplace payments with direct payouts to experts",
      "JWT authentication with role-based access control for users, experts, and admins"
    ],
    problemStatement: "The sports betting advisory industry suffers from fake claims, cherry-picked results, and zero accountability. Bettors lack verification methods for expert claims, while legitimate experts struggle to build sustainable businesses with difficulty proving legitimacy and no professional monetization platform.",
    solution: "A transparent marketplace where every pick, result, and performance metric is publicly tracked and verified. Experts build reputations through provable consistent results, enabling trust-driven conversions and sustainable recurring revenue.",
    challenges: [
      {
        title: "Stripe Connect Integration",
        description: "Implemented Stripe Connect with Express accounts for experts, enabling direct payouts while the platform takes a commission"
      },
      {
        title: "Subscription Access Control",
        description: "Built database-backed access control with middleware verifying active subscriptions, handling expiration gracefully with upgrade prompts"
      },
      {
        title: "Content Protection",
        description: "Multi-layer access control with API verification and strategic data masking showing pick metadata publicly but protecting predictions behind paywall"
      },
      {
        title: "Performance & SEO",
        description: "Leveraged server-side rendering for SEO-critical pages, pagination, lazy loading, optimized queries, and CDN asset delivery"
      }
    ],
    results: [
      "5 weeks from MVP to production",
      "100+ verified sports experts onboarded",
      "Recurring revenue model with predictable MRR for platform and experts",
      "Trust-driven conversions through transparent performance tracking",
      "Scalable architecture designed to handle thousands of experts and millions of picks"
    ]
  };

  return (
    <ProjectPageLayout
      title={projectData.title}
      description={projectData.description}
      type={projectData.type as 'personal' | 'independent' | 'work'}
      date={projectData.date}
      client={projectData.client}
      liveUrl={projectData.liveUrl}
    >
      {/* Hero Image */}
      <div className="relative w-full h-[300px] md:h-[400px] mb-12">
        <Image
          src="/projects/independent/unlocker/og-image.png"
          alt="Unlocker Platform Overview"
          fill
          className="object-contain"
        />
      </div>

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

      {/* Problem & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <ProjectSection
          title="The Problem"
          icon={<Lightbulb className="w-5 h-5" />}
          iconBg="bg-amber-100"
          iconColor="text-amber-700"
          iconBorder="border-amber-200"
          className="mb-6 md:mb-0"
        >
          <p className="text-muted-foreground">{projectData.problemStatement}</p>
        </ProjectSection>

        <ProjectSection
          title="The Solution"
          icon={<Target className="w-5 h-5" />}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-700"
          iconBorder="border-emerald-200"
          className="mb-0"
        >
          <p className="text-muted-foreground">{projectData.solution}</p>
        </ProjectSection>
      </div>

      {/* Screenshot */}
      <div className="relative w-full h-[300px] md:h-[400px] mb-12">
        <Image
          src="/projects/independent/unlocker/experts.png"
          alt="Expert Discovery Page"
          fill
          className="object-contain"
        />
      </div>

      {/* Key Challenges */}
      <ProjectSection
        title="Key Challenges & Solutions"
        icon={<FileText className="w-5 h-5" />}
        iconBg="bg-purple-100"
        iconColor="text-purple-700"
        iconBorder="border-purple-200"
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.challenges.map((challenge, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-amber-700">{challenge.title}</h3>
              <p className="text-muted-foreground">{challenge.description}</p>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Features */}
      <ProjectSection
        title="Key Features"
        icon={<LinkIcon className="w-5 h-5" />}
      >
        <FeatureList
          items={projectData.features}
          iconBg="bg-amber-100"
          iconColor="text-amber-700"
        />
      </ProjectSection>

      {/* More Screenshots */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-primary/20 shadow-sm bg-gray-50">
          <Image
            src="/projects/independent/unlocker/account-1.png"
            alt="Account Dashboard"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-primary/20 shadow-sm bg-gray-50">
          <Image
            src="/projects/independent/unlocker/expert-mobile.png"
            alt="Mobile Experience"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Results */}
      <ProjectSection
        title="Results & Impact"
        icon={<LineChart className="w-5 h-5" />}
        iconBg="bg-emerald-100"
        iconColor="text-emerald-700"
        iconBorder="border-emerald-200"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectData.results.map((result, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-muted-foreground">{result}</p>
            </div>
          ))}
        </div>
      </ProjectSection>
    </ProjectPageLayout>
  );
}
