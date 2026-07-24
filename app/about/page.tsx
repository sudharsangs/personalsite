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
  ["Full-stack engineering", "I can set up the backend, design the database, build the API, and ship the frontend. I've also handled infra, deployments, and compliance logic — whatever the project needs."],
  ["Frontend that feels right", "Most of my frontend work is in React and Next.js. I care about performance, accessibility, and getting the details right, not just making it work."],
  ["Product thinking without a PM", "At FactoStack I talk to customers, figure out what to build, and make the call on trade-offs. No PM, no product team. Just me, users, and a backlog."],
  ["Getting it in front of people", "I've worked on onboarding flows, technical SEO, analytics, and acquisition tooling. Shipping something that nobody uses isn't really shipping."],
];

const experienceSummaries: Record<string, string> = {
  fubo: "Working on frontend features, playback, and technical SEO for Fubo and Molotov. One navigation refactor cleared over 50,000 broken URLs from Google Search Console.",
  winuall: "Built storefronts, learning products, onboarding flows, and shared frontend components across a platform used by over 2,000 tutors.",
  teal: "Worked on a consumer product, built a Gatsby and Ghost publishing site, and wrote end-to-end tests.",
  printrove: "Built internal order management tools and merchant-facing features for a print-on-demand platform.",
};

const proofPoints = [
  ["5+ years", "Shipping production software"],
  ["6 modules", "Built solo in FactoStack: sales, inventory, procurement, production, quality, finance"],
  ["3,000+", "Paying users onboarded"],
  ["2,000+", "Tutors served on Winuall"],
];

export default function AboutPage() {
  return (
    <main id="main-content" className="page-shell">
      <header className="page-intro">
        <p className="eyebrow">About</p>
        <h1 className="max-w-5xl">I build things end-to-end — and I've been doing it for five years.</h1>
        <p className="max-w-2xl">Right now I'm a software engineer at Fubo, and I'm also building FactoStack on the side. The two are pretty different, and I think that's made me a better engineer.</p>
      </header>

      <section className="grid gap-3 pb-16 sm:grid-cols-2 lg:grid-cols-4" aria-label="Selected career impact">
        {proofPoints.map(([value, label]) => (
          <div key={label} className="rounded-xl border border-border/60 bg-secondary/25 p-5">
            <p className="font-serif text-3xl font-semibold text-primary">{value}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{label}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-10 pb-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20" aria-labelledby="approach-heading">
        <div>
          <p className="eyebrow">My work</p>
          <h2 id="approach-heading" className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Two very different jobs at the same time.
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            At Fubo, I'm one engineer on a large team working on streaming products at scale. Performance, accessibility, and SEO reliability are real constraints, not optional. A single navigation refactor I shipped cleared over 50,000 broken URLs from Google Search Console.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            FactoStack is the opposite. I talk to customers, decide what to build, write the code, handle GST compliance logic, manage deployments, and figure out how to get more people to use it. No team, no PM. Doing both at the same time has been a good way to stay honest about what engineering in a team actually looks like versus doing everything yourself.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button asChild><a href="mailto:sudharsangs.99@gmail.com"><Mail aria-hidden="true" />Email me</a></Button>
            <Button asChild variant="outline"><Link href="/projects">View my work<ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
        <dl className="grid gap-3 sm:grid-cols-2">
          {strengths.map(([term, description]) => (
            <div key={term} className="rounded-xl bg-secondary/35 p-5">
              <dt className="font-semibold">{term}</dt>
              <dd className="mt-2 text-sm leading-6 text-muted-foreground">{description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section-block" aria-labelledby="experience-heading">
        <div className="max-w-2xl">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-heading" className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">Where I’ve worked.</h2>
          <p className="mt-4 leading-7 text-muted-foreground">Five years across streaming, education, consumer products, and internal operations.</p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {experiences.map((experience) => (
            <article key={experience.id} className="rounded-xl bg-secondary/30 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-card p-1.5">
                  <Image src={experience.companyLogo} alt="" width={44} height={44} className="h-full w-full object-contain" />
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-semibold">{experience.company}</h3>
                  <p className="mt-1 text-sm font-medium">{experience.title}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">{experienceSummaries[experience.id]}</p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
                <span>{experience.period.start} — {experience.period.end}</span>
                <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 font-semibold text-primary">
                  Visit company <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
