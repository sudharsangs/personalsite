import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  DraftingCompass,
  ListChecks,
  UserRoundSearch,
  type LucideIcon,
} from "lucide-react";

type CapabilityIcon = {
  name: string;
  icon: string | LucideIcon;
  iconClassName?: string;
};

type Capability = {
  label: string;
  title: string;
  description: string;
  techIcons: CapabilityIcon[];
};

const capabilities: Capability[] = [
  {
    label: "Product Engineering",
    title: "Building what the users want",
    description:
      "I’ve built FactoStack based on the conversations I had with Indian factory owners",
    techIcons: [
      {
        name: "User Research",
        icon: UserRoundSearch,
        iconClassName: "text-sky-500",
      },
      {
        name: "Prototyping",
        icon: DraftingCompass,
        iconClassName: "text-violet-500",
      },
      {
        name: "Requirement Gathering",
        icon: ListChecks,
        iconClassName: "text-emerald-500",
      },
      {
        name: "Claude Code",
        icon: "/skills/claude.svg",
      },
      {
        name: "Cursor",
        icon: "/skills/cursor.svg",
      },
    ],
  },
  {
    label: "Frontend",
    title: "React and Next.js",
    description:
      "I’ve worked on streaming interfaces and features on top of video players at Fubo, SaaS applications at Winuall. At Molotov, I work on technical SEO, server-rendered pages and web performance for a large streaming website",
    techIcons: [
      { name: "React", icon: "/skills/react.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
    ],
  },
  {
    label: "Backend & Infrastructure",
    title: "Optimising for scale",
    description:
      "I build APIs with Node.js, NestJS and Golang work mostly with PostgreSQL, and run my own products using Docker and AWS",
    techIcons: [
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "Next.js", icon: "/skills/nest-js.svg" },
      { name: "Golang", icon: "/skills/go.svg" },
      { name: "PostgreSQL", icon: "/skills/postgres.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
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
          I work across the stack
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          Most of my work is on web applications. I`&apos;ve worked across
          frontend,backend, databases and infrastructure.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {capabilities.map((item, index) => (
          <article
            key={item.label}
            className="flex flex-col rounded-2xl border border-border/60 bg-secondary/25 p-7 sm:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                {item.label}
              </p>
              <span className="font-serif text-sm text-muted-foreground/60">
                0{index + 1}
              </span>
            </div>
            <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
            <div className="mt-auto pt-6 border-t border-border/60">
              <div className="flex flex-wrap gap-2">
                {item.techIcons.map((tech) => (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/70 px-2.5 py-1 text-xs font-medium text-foreground/75"
                  >
                    {typeof tech.icon === "string" ? (
                      <Image
                        src={tech.icon}
                        alt=""
                        width={12}
                        height={12}
                        className="h-3 w-3 shrink-0 object-contain"
                      />
                    ) : (
                      <tech.icon
                        className={`h-3 w-3 shrink-0 ${tech.iconClassName ?? ""}`}
                        aria-hidden="true"
                      />
                    )}
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
