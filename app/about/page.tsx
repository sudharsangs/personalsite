import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { experiences } from "@/data/experience";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About | Sudharsan GS",
  description: "Product engineer in Bengaluru working across product development, growth systems, and software delivery.",
  alternates: { canonical: "/about" },
};

const strengths = [
  ["Product judgment", "I reduce broad ideas into the smallest useful product and make the trade-offs visible."],
  ["Engineering ownership", "I can move across interface, backend, data, infrastructure, and the unglamorous production details."],
  ["Market awareness", "I treat discoverability, onboarding, analytics, and customer feedback as part of the product system."],
];

const experienceSummaries: Record<string, string> = {
  fubo: "Streaming product systems, technical SEO, and frontend architecture for Fubo and Molotov.",
  winuall: "Product engineering for tutor storefronts, learning experiences, onboarding, and platform growth.",
  teal: "Consumer product development, headless content systems, and end-to-end testing.",
  printrove: "Internal operations and merchant tools for a print-on-demand platform.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="page-shell">
      <header className="page-intro">
        <p className="eyebrow">About</p>
        <h1>I work where product, engineering, and growth meet.</h1>
        <p>That usually means turning an uncertain brief into software that is useful, shippable, and easier to grow.</p>
      </header>

      <section className="grid gap-10 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20" aria-labelledby="approach-heading">
        <div>
          <p className="eyebrow">My approach</p>
          <h2 id="approach-heading" className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Think broadly. Build deliberately.
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            I’m a product engineer in Bengaluru. At Fubo, I work on large streaming products. With FactoStack, I own the full journey from customer discovery and architecture to deployment and acquisition.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button asChild><a href="mailto:sudharsangs.99@gmail.com"><Mail aria-hidden="true" />Start a conversation</a></Button>
            <Button asChild variant="outline"><Link href="/projects">View projects<ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
        <dl className="grid gap-3">
          {strengths.map(([term, description]) => (
            <div key={term} className="grid gap-2 rounded-xl bg-secondary/35 p-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <dt className="font-semibold">{term}</dt>
              <dd className="text-sm leading-6 text-muted-foreground">{description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section-block" aria-labelledby="experience-heading">
        <div className="max-w-2xl">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-heading" className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">Products shipped across four teams.</h2>
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
    </main>
  );
}
