import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import {
  Layers,
  Link as LinkIcon,
  FileText,
  Lightbulb,
  LineChart,
  Target,
} from "lucide-react";
import ProjectPageLayout, {
  FeatureList,
  ProjectImageGallery,
  ProjectSection,
} from "@/components/modules/project-page-layout";

export const metadata: Metadata = {
  title: "QuickPicks by Unlocker | Sudharsan GS",
  description:
    "A mobile-first sports picks product for creating, selling, and delivering paid picks in seconds through shareable creator funnels.",
};

const technologies = [
  { name: "NextJS", icon: "/skills/nextjs.svg" },
  { name: "TypeScript", icon: "/skills/typescript.svg" },
  { name: "TailwindCSS", icon: "/skills/tailwind.svg" },
  { name: "NodeJS", icon: "/skills/nodejs.svg" },
  { name: "PostgreSQL", icon: "/skills/postgres.svg" },
];

const features = [
  "Quick pick creation flow with structured event metadata, pricing, discounts, and instant publishing.",
  "Mobile-first public pick pages with countdowns, bankroll and odds bands, shareable links, and Stripe checkout.",
  "Creator bio pages and expert discovery flows that turn social traffic into paid pick purchases.",
  "Account dashboards for picks, purchases, subscribers, payouts, and creator-side performance tracking.",
  "OTP, social, and passkey authentication with pending-pick recovery so creators can start before signing in.",
  "Admin tooling for users, cappers, purchases, sports, platform settings, and moderation workflows.",
];

const challenges = [
  {
    title: "Fast creation without losing structure",
    description:
      "The product had to feel as quick as posting on social while still collecting enough structured data for pricing, scheduling, and delivery.",
  },
  {
    title: "Mobile checkout conversion",
    description:
      "The purchase flow needed to stay lightweight on mobile and still communicate urgency, credibility, and what the buyer unlocks.",
  },
  {
    title: "Shared platform, focused experience",
    description:
      "QuickPicks sits inside the broader Unlocker system, so the UI and APIs had to stay streamlined without duplicating core marketplace capabilities.",
  },
];

const results = [
  "Turned sports pick monetization into a guided, creator-friendly flow that can start from the landing page.",
  "Unified pick creation, distribution, payment, and account recovery inside one mobile-first product surface.",
  "Extended the broader Unlocker platform with a simpler funnel optimized for quicker publishing and purchase intent.",
  "Created reusable foundations for creator bios, public pick pages, and admin oversight on the same backend.",
];

const screenshots = [
  {
    url: "/projects/independent/unlocker/unlocker-quickpicks.png",
    alt: "QuickPicks pick creation flow",
    caption:
      "Create a pick in 30 seconds — structured form with event, pricing, and instant publish.",
  },
  {
    url: "/projects/independent/quickpicks/pick-flow.png",
    alt: "QuickPicks mobile pick purchase flow",
    caption: "Mobile-first paid pick page with key pick data and checkout CTA.",
  },
  {
    url: "/projects/independent/quickpicks/mobile-gateway.png",
    alt: "QuickPicks mobile gateway view",
    caption:
      "Compact purchase gateway designed for rapid pick consumption on mobile.",
  },
];

export default function QuickPicksPage() {
  return (
    <ProjectPageLayout
      title="QuickPicks by Unlocker"
      description="A mobile-first sports picks product built to help creators post, sell, and deliver paid picks in seconds through a tighter funnel than the broader marketplace."
      type="independent"
      date="2026"
      liveUrl="https://unlocker.club"
    >
      <div className="relative w-full h-[280px] md:h-[380px] mb-12 rounded-2xl overflow-hidden border border-primary/20 shadow-lg">
        <Image
          src="/projects/independent/unlocker/unlocker-quickpicks.png"
          alt="QuickPicks — create a pick in 30 seconds"
          fill
          className="object-cover object-top"
        />
      </div>

      <ProjectSection title="Tech Stack" icon={<Layers className="w-5 h-5" />}>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="inline-flex items-center bg-card/80 shadow-sm backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-primary/20"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={16}
                height={16}
                className="mr-2"
              />
              <span className="text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </ProjectSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <ProjectSection
          title="The Problem"
          icon={<Lightbulb className="w-5 h-5" />}
          iconBg="bg-primary/10"
          iconColor="text-primary"
          iconBorder="border-primary/20"
          className="mb-6 md:mb-0"
        >
          <p className="text-muted-foreground">
            Sports creators needed a faster way to publish and monetize paid
            picks than a full marketplace flow. The experience had to work
            primarily on mobile, feel instant, and still support pricing,
            delivery, subscriptions, and trust signals.
          </p>
        </ProjectSection>

        <ProjectSection
          title="The Solution"
          icon={<Target className="w-5 h-5" />}
          iconBg="bg-primary/10"
          iconColor="text-primary"
          iconBorder="border-primary/20"
          className="mb-0"
        >
          <p className="text-muted-foreground">
            I shaped QuickPicks as a dedicated creator funnel on top of
            Unlocker: fast pick creation, public purchase pages, shareable
            creator profiles, checkout and recovery flows, and lightweight
            dashboards for both creators and admins.
          </p>
        </ProjectSection>
      </div>

      <ProjectSection
        title="What I Built"
        icon={<LinkIcon className="w-5 h-5" />}
      >
        <FeatureList
          items={features}
          iconBg="bg-primary/10"
          iconColor="text-primary"
        />
      </ProjectSection>

      <ProjectSection
        title="Key Product Challenges"
        icon={<FileText className="w-5 h-5" />}
        iconBg="bg-primary/10"
        iconColor="text-primary"
        iconBorder="border-primary/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="bg-primary/5 border border-primary/20 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2 text-primary">
                {challenge.title}
              </h3>
              <p className="text-muted-foreground">{challenge.description}</p>
            </div>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection
        title="Selected Screens"
        icon={<Layers className="w-5 h-5" />}
      >
        <ProjectImageGallery images={screenshots} columns={2} />
      </ProjectSection>

      <ProjectSection
        title="Results & Impact"
        icon={<LineChart className="w-5 h-5" />}
        iconBg="bg-primary/10"
        iconColor="text-primary"
        iconBorder="border-primary/20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {results.map((result) => (
            <div
              key={result}
              className="bg-primary/5 border border-primary/20 rounded-lg p-4"
            >
              <p className="text-muted-foreground">{result}</p>
            </div>
          ))}
        </div>
      </ProjectSection>
    </ProjectPageLayout>
  );
}
