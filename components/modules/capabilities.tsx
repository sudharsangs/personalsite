import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    label: "End-to-end product ownership",
    title: "I own the whole thing.",
    description:
      "At FactoStack, I built six modules — sales, inventory, procurement, production, quality, and finance — along with the backend, infra, deployments, and compliance logic. There's no one else to hand off to, so I handle all of it.",
    techIcons: [
      { name: "NestJS", icon: "/skills/nest-js.svg" },
      { name: "PostgreSQL", icon: "/skills/postgres.svg" },
      { name: "Docker", icon: "/skills/docker.svg" },
    ],
  },
  {
    label: "Frontend",
    title: "React and Next.js, done properly.",
    description:
      "I've shipped streaming interfaces at Fubo, SaaS product surfaces for FactoStack and Winuall, and SEO-critical pages at Molotov. I care about performance, accessibility, and server rendering — not just making it work.",
    techIcons: [
      { name: "React", icon: "/skills/react.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
    ],
  },
  {
    label: "Growth and distribution",
    title: "Getting people to actually use it.",
    description:
      "Technical SEO at Molotov, onboarding flows at Winuall, acquisition tooling at FactoStack. I've seen how much shipping without thinking about distribution costs, and I try not to repeat that.",
    techIcons: [
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "PostgreSQL", icon: "/skills/postgres.svg" },
      { name: "JavaScript", icon: "/skills/javascript.svg" },
    ],
  },
];

const roleFits = [
  {
    type: "Consulting and freelance",
    roles: "Full-stack builds, ERP and SaaS implementation, technical SEO",
    description:
      "I take on a small number of projects where I can own real scope — building something from scratch, extending an existing system, or fixing a technical acquisition problem.",
  },
  {
    type: "Collaboration",
    roles: "Co-founder or technical partner",
    description:
      "Open to conversations with founders who want a technical co-builder, or with businesses looking at FactoStack for their operations. If the problem is interesting, I'm happy to talk.",
  },
];

export default function Capabilities() {
  return (
    <section className="section-block" aria-labelledby="capabilities-heading">
      <div>
        <p className="eyebrow">What I do</p>
        <h2
          id="capabilities-heading"
          className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        >
          I can own the whole product, or go deep on one part.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          The problems I like best are messy and operations-heavy — the kind where the requirements are unclear and someone has to figure it out. I&apos;ve been doing that for five years, usually without a large team behind me.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {capabilities.map((item, index) => (
          <article
            key={item.label}
            className="flex flex-col rounded-2xl border border-border/60 bg-secondary/25 p-7 sm:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{item.label}</p>
              <span className="font-serif text-sm text-muted-foreground/60">0{index + 1}</span>
            </div>
            <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
            <div className="mt-auto pt-6 border-t border-border/60">
              <div className="flex flex-wrap gap-2">
                {item.techIcons.map((tech) => (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/70 px-2.5 py-1 text-xs font-medium text-foreground/75"
                  >
                    <Image src={tech.icon} alt="" width={12} height={12} className="h-3 w-3 shrink-0 object-contain" />
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/[0.06] p-7 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Work</p>
            <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
              What I&apos;m available for.
            </h3>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
            {roleFits.map((fit) => (
              <div key={fit.type}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{fit.type}</p>
                <h4 className="mt-2 font-semibold">{fit.roles}</h4>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{fit.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-border/70 pt-5 sm:flex-row sm:items-center sm:gap-8">
          <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:underline">
            See related projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href="mailto:sudharsangs.99@gmail.com"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-foreground/70 hover:text-foreground hover:underline"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
