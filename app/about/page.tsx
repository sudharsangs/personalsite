import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { experiences } from "@/data/experience";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/modules/cta-section";

export const metadata: Metadata = {
  title: "About Sudharsan GS | Product Engineer",
  description: "Five years of product engineering across ERP, SaaS, streaming, mobile, and technical SEO. I take ambiguous, operations-heavy problems to production end to end.",
  alternates: { canonical: "/about" },
};

const strengths = [
  {
    title: "Full-stack engineering",
    description: "I can set up the backend, design the database, build the API, and ship the frontend myself. I've also handled infra, deployments, and compliance logic when a project needed it.",
    icon: "⚙️",
  },
  {
    title: "Frontend that feels right",
    description: "Most of my frontend work is in React and Next.js. Getting a feature working is the easy part. Once it works, most of my time goes into performance and accessibility.",
    icon: "🎨",
  },
  {
    title: "Product thinking without a PM",
    description: "At FactoStack I talk to customers, figure out what to build, and make the call on trade-offs. No PM, no product team. Just me, users, and a backlog.",
    icon: "🧭",
  },
  {
    title: "Getting it in front of people",
    description: "I've worked on onboarding flows and technical SEO at Fubo and Winuall, plus analytics and acquisition tooling at FactoStack. Shipping something nobody uses isn't really shipping.",
    icon: "📈",
  },
];

const proofPoints = [
  { value: "5+", label: "Years shipping production software", sub: "Across 4 companies" },
  { value: "6", label: "Modules built solo in FactoStack", sub: "Sales · Inventory · Procurement · Production · Quality · Finance" },
  { value: "3,000+", label: "Paying users onboarded", sub: "At Winuall" },
  { value: "2,000+", label: "Tutors served", sub: "On the Winuall platform" },
];

const techCategories = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "/skills/react.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "Tailwind", icon: "/skills/tailwind.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "NestJS", icon: "/skills/nest-js.svg" },
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "Express", icon: "/skills/express.svg" },
      { name: "Go", icon: "/skills/go.svg" },
    ],
  },
  {
    category: "Data & Infra",
    items: [
      { name: "PostgreSQL", icon: "/skills/postgres.svg" },
      { name: "Docker", icon: "/skills/docker.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "GraphQL", icon: "/skills/graphql.svg" },
    ],
  },
];

const experienceSummaries: Record<string, { summary: string; highlights: string[] }> = {
  fubo: {
    summary: "I work on frontend features, video playback, and technical SEO for Fubo and Molotov. One navigation refactor I shipped cleared over 50,000 broken URLs from Google Search Console.",
    highlights: [
      "Rebuilt Molotov navigation, clearing 50,000+ broken URLs",
      "AI-powered live sports highlights for NBA games",
      "Frame-accurate seeking in VideoJS for HLS/DASH",
      "Structured data & SEO for program listing pages",
    ],
  },
  winuall: {
    summary: "I built storefronts, learning products, onboarding flows, and shared frontend components for a platform used by more than 2,000 tutors.",
    highlights: [
      "Online Store enabling 2,000+ tutors to sell products",
      "Onboarding system for 3,000+ paying users",
      "30% performance boost via code splitting",
      "Migrated legacy app to SSR, improving SEO score by 60%",
    ],
  },
  teal: {
    summary: "I worked on a consumer product, built a Gatsby and Ghost publishing site, and wrote end-to-end tests.",
    highlights: [
      "Built Tealcheck B2C product from scratch",
      "Deployed Regcheck with Ghost CMS and Gatsby",
      "90% E2E test coverage with Cypress",
    ],
  },
  printrove: {
    summary: "I built internal order management tools and merchant-facing features for a print-on-demand platform.",
    highlights: [
      "100% automation of order processing system",
      "Design simulation suite used by 15,000+ designers",
      "Merchant dashboard for product and order management",
    ],
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="page-shell">
      <header className="page-intro">
        <p className="eyebrow">About</p>
        <h1 className="max-w-5xl">I build things end to end, and I&apos;ve been doing it for five years.</h1>
        <p className="max-w-2xl">Right now I&apos;m a Software Engineer 2 at Fubo, and I&apos;m also building FactoStack on the side. The two are pretty different, and I think that&apos;s made me a better engineer.</p>
      </header>

      {/* Proof points */}
      <section className="grid gap-3 pb-16 sm:grid-cols-2 lg:grid-cols-4" aria-label="Selected career impact">
        {proofPoints.map(({ value, label, sub }) => (
          <div key={label} className="rounded-xl border border-border/60 bg-secondary/25 p-5">
            <p className="font-serif text-3xl font-semibold text-primary">{value}</p>
            <p className="mt-2 text-sm font-medium leading-snug">{label}</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">{sub}</p>
          </div>
        ))}
      </section>

      {/* My work narrative + strengths */}
      <section className="grid gap-10 pb-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20" aria-labelledby="approach-heading">
        <div>
          <p className="eyebrow">My work</p>
          <h2 id="approach-heading" className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Engineering at scale, and from scratch.
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            At Fubo I work on a large team with real constraints: performance budgets, accessibility bars to clear, SEO that has to hold up at scale. One navigation refactor I shipped cleared over 50,000 broken URLs from Google Search Console. That&apos;s most of what the job actually looks like.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            FactoStack is the opposite. There&apos;s no product manager and nobody to hand things off to, so product decisions, architecture, and customer conversations are all mine. Doing both jobs at once has sharpened my instincts more than either one alone would have.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button asChild><a href="mailto:sudharsangs.99@gmail.com"><Mail aria-hidden="true" />Email me</a></Button>
            <Button asChild variant="outline"><Link href="/projects">View my work<ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
        <dl className="grid gap-3 sm:grid-cols-2">
          {strengths.map(({ title, description, icon }) => (
            <div key={title} className="rounded-xl border border-border/40 bg-secondary/35 p-5">
              <div className="mb-3 text-2xl" aria-hidden="true">{icon}</div>
              <dt className="font-semibold">{title}</dt>
              <dd className="mt-2 text-sm leading-6 text-muted-foreground">{description}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Tech stack */}
      <section className="section-block" aria-labelledby="tech-heading">
        <div className="max-w-2xl">
          <p className="eyebrow">Tech stack</p>
          <h2 id="tech-heading" className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">What I build with.</h2>
          <p className="mt-4 leading-7 text-muted-foreground">These are the tools I actually reach for day to day, not a résumé keyword list.</p>
        </div>
        <div className="mt-9 grid gap-6 sm:grid-cols-3">
          {techCategories.map(({ category, items }) => (
            <div key={category} className="rounded-xl border border-border/50 bg-card p-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-primary">{category}</p>
              <ul className="space-y-3">
                {items.map((tech) => (
                  <li key={tech.name} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/50 bg-secondary/50 p-1">
                      <Image src={tech.icon} alt="" width={16} height={16} className="h-full w-full object-contain" />
                    </span>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="section-block" aria-labelledby="experience-heading">
        <div className="max-w-2xl">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-heading" className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">Where I&apos;ve worked.</h2>
          <p className="mt-4 leading-7 text-muted-foreground">Five years split mostly between streaming and education, plus a consumer product and internal tooling early on.</p>
        </div>
        <div className="mt-9 space-y-5">
          {experiences.map((experience) => {
            const detail = experienceSummaries[experience.id];
            return (
              <article key={experience.id} className="rounded-xl border border-border/40 bg-card p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/40 bg-secondary/30 p-1.5">
                    <Image src={experience.companyLogo} alt="" width={44} height={44} className="h-full w-full object-contain" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-xl font-semibold">{experience.company}</h3>
                        {!experience.roles && (
                          <p className="mt-0.5 text-sm font-medium text-muted-foreground">{experience.title}</p>
                        )}
                      </div>
                      <span className="shrink-0 rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                        {experience.period.start} – {experience.period.end}
                      </span>
                    </div>
                    {experience.roles && (
                      <ol className="relative mt-4 space-y-3 border-l border-border pl-5">
                        {experience.roles.map((role, index) => (
                          <li key={`${role.title}-${role.start}`} className="relative">
                            <span
                              className={`absolute -left-[1.47rem] top-1.5 h-2 w-2 rounded-full ring-4 ring-card ${
                                index === 0 ? "bg-primary" : "bg-muted-foreground/45"
                              }`}
                              aria-hidden="true"
                            />
                            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                              <p className={`text-sm ${index === 0 ? "font-semibold text-foreground" : "font-medium text-foreground/75"}`}>
                                {role.title}
                                {index === 0 && (
                                  <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                                    Promoted
                                  </span>
                                )}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {role.start} – {role.end}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{detail.summary}</p>
                {detail.highlights.length > 0 && (
                  <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                    {detail.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden="true" />
                        <span className="text-foreground/80">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {experience.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="rounded-md bg-secondary/60 px-2 py-0.5 text-xs text-muted-foreground">{tech}</span>
                    ))}
                  </div>
                  <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center gap-1 text-xs font-semibold text-primary">
                    Visit <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    <span className="sr-only">{experience.company} (opens in a new tab)</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
