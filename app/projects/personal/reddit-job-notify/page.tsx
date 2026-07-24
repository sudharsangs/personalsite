import React from 'react';
import { Metadata } from 'next';
import { Github, Layers, Zap, Filter, Bell, Sheet, Shield, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import ProjectPageLayout, { ProjectSection, StatCard } from '@/components/modules/project-page-layout';

export const metadata: Metadata = {
  title: 'Reddit Job Notify | Sudharsan GS',
  description: 'A Go service that monitors Reddit subreddits for freelance job opportunities and delivers real-time Telegram notifications.',
};

export default function RedditJobNotifyPage() {
  const technologies = [
    { name: "Go", icon: "/skills/go.svg" },
    { name: "Docker", icon: "/skills/docker.svg" },
  ];

  const features = [
    {
      icon: <Filter className="w-5 h-5" />,
      title: "Smart Filtering",
      description: "Hiring language detection and tech keyword matching filter out noise, surfacing only relevant freelance opportunities.",
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "Priority Notifications",
      description: "High-signal posts get priority-flagged Telegram alerts so the best opportunities surface immediately.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Duplicate Prevention",
      description: "Persistent post tracking ensures you never see the same listing twice across monitoring runs.",
    },
    {
      icon: <Tag className="w-5 h-5" />,
      title: "Job Categorization",
      description: "Automatically categorizes opportunities by job type for targeted, context-rich alerts.",
    },
    {
      icon: <Sheet className="w-5 h-5" />,
      title: "Sheets Logging",
      description: "Optionally log all matches to Google Sheets for tracking and reviewing opportunities over time.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Configurable Intervals",
      description: "Monitors multiple subreddits with configurable scan intervals to keep up with fast-moving threads.",
    },
  ];

  const pipeline = [
    { step: "1", label: "Poll Reddit", detail: "Scan configured subreddits on interval" },
    { step: "2", label: "Filter Posts", detail: "Keyword & hiring-language detection" },
    { step: "3", label: "Score & Rank", detail: "Priority scoring for high-signal posts" },
    { step: "4", label: "Deduplicate", detail: "Skip already-seen post IDs" },
    { step: "5", label: "Notify", detail: "Telegram alert with context & category" },
  ];

  return (
    <ProjectPageLayout
      title="Reddit Job Notify"
      description="A Go service that monitors Reddit subreddits for freelance job opportunities and delivers real-time Telegram notifications, with smart keyword filtering, priority categorization, and optional Google Sheets logging."
      type="personal"
      date="2024"
      githubUrl="https://github.com/sudharsangs/reddit-job-notify-telegram-bot"
    >
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-16">
        <StatCard number="Multi" label="Subreddit Monitoring" description="Configurable scan intervals" />
        <StatCard number="Real-time" label="Telegram Alerts" description="Priority-based notifications" />
        <StatCard number="Zero" label="Duplicate Alerts" description="Persistent post tracking" />
      </div>

      {/* Tech Stack */}
      <ProjectSection title="Tech Stack" icon={<Layers className="w-5 h-5" />}>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center bg-card/80 shadow-sm rounded-full px-5 py-2.5 text-sm border border-primary/20 hover:border-primary/40 transition-all duration-200"
            >
              <Image src={tech.icon} alt={tech.name} width={18} height={18} className="mr-2.5" />
              <span className="text-foreground/80 font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Pipeline */}
      <ProjectSection title="How It Works" icon={<Zap className="w-5 h-5" />}>
        <div className="relative">
          {/* Connector line */}
          <div className="absolute top-7 left-7 right-7 h-0.5 from-primary/30 via-primary/50 to-primary/30 hidden sm:block" />
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {pipeline.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 relative">
                <div className="w-14 h-14 rounded-2xl from-primary to-primary/70 flex items-center justify-center shadow-primary/20 text-white font-bold text-lg z-10">
                  {item.step}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{item.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ProjectSection>

      {/* Features */}
      <ProjectSection title="Key Features" icon={<Zap className="w-5 h-5" />}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card/70 hover:bg-card border border-border/50 hover:border-primary/25 rounded-2xl p-5 transition-all duration-200 shadow-sm group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/15 transition-colors duration-200">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1.5">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* GitHub CTA */}
      <div className="flex justify-center">
          <Button asChild variant="outline" className="bg-card/70 border border-border/70 text-foreground hover:bg-secondary/70 hover:border-primary/35 hover:text-foreground rounded-lg px-4 h-10 font-semibold text-sm shadow-sm transition-all duration-200 gap-2">
        <Link href="https://github.com/sudharsangs/reddit-job-notify-telegram-bot" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            View Source Code on GitHub
        </Link>
          </Button>
      </div>
    </ProjectPageLayout>
  );
}
