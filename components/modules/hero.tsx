import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Building2,
  CalendarDays,
  DatabaseZap,
  Globe,
  Mail,
  MapPin,
  Server,
  Smartphone,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const credentials = [
  {
    name: "Fubo",
    detail: "Software Engineer",
    logo: "/fubo.svg",
    href: "https://fubo.tv",
  },
  {
    name: "FactoStack",
    detail: "Founder and engineer",
    logo: "/factostack.svg",
    href: "https://factostack.com",
  },
  {
    name: "Winuall",
    detail: "Software Engineer, 2020–2022",
    logo: "/winuall.jpg",
    href: "https://winuall.com",
  },
];

const techStack = [
  { name: "React", icon: "/skills/react.svg" },
  { name: "Next.js", icon: "/skills/nextjs.svg" },
  { name: "TypeScript", icon: "/skills/typescript.svg" },
  { name: "Node.js", icon: "/skills/nodejs.svg" },
  { name: "NestJS", icon: "/skills/nest-js.svg" },
  { name: "PostgreSQL", icon: "/skills/postgres.svg" },
  { name: "Docker", icon: "/skills/docker.svg" },
  { name: "Tailwind", icon: "/skills/tailwind.svg" },
  { name: "Go", icon: "/skills/go.svg" },
  { name: "Python", icon: "/skills/python.svg" },
];

export default function Hero() {
  return (
    <>
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left column */}
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-[0.15em]">
              <span className="text-primary">Product engineer</span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Bengaluru,
                India
              </span>
            </div>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Sudharsan GS
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I am a Software Engineer at{" "}
              <Link href="https://fubo.tv" className="underline">
                Fubo
              </Link>
              . I work on SEO and web performance at{" "}
              <Link href="https://www.molotov.tv/" className="underline">
                Molotov
              </Link>
              , a French streaming brand owned by Fubo.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Outside work, I build software for businesses. Right now, most of
              that time goes into{" "}
              <Link className="underline" href="https://factostack.com">
                FactoStack
              </Link>
              , a manufacturing ERP for factories in India.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/projects">
                  View my work <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:sudharsangs.99@gmail.com">
                  <Mail aria-hidden="true" /> Email me
                </a>
              </Button>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <span
                className="h-2 w-2 rounded-full bg-green-500"
                aria-hidden="true"
              />
              Available for consulting and freelance.
            </p>
          </div>

          {/* Right column — stats + tech, top-aligned to match h1 */}
          <div className="mt-12 lg:mt-[4.5rem] space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  id: "experience",
                  title: "6+",
                  titleIcon: (
                    <CalendarDays
                      className="h-6 w-6 text-cyan-400/80"
                      aria-hidden="true"
                    />
                  ),
                  label: "years in software",
                },
                {
                  id: "products",
                  title: "7+",
                  titleIcon: (
                    <Boxes
                      className="h-6 w-6 text-emerald-400/80"
                      aria-hidden="true"
                    />
                  ),
                  label: "products built from scratch",
                },
                {
                  id: "full-stack",
                  title: "Full-stack",
                  titleIcon: null,
                  label: (
                    <span
                      className="flex items-center gap-3"
                      aria-label="Mobile, web, server, and database"
                    >
                      <Smartphone className="h-5 w-5 text-sky-400/80" />
                      <Globe className="h-5 w-5 text-teal-400/80" />
                      <Server className="h-5 w-5 text-violet-400/80" />
                      <DatabaseZap className="h-5 w-5 text-amber-400/80" />
                    </span>
                  ),
                },
                {
                  id: "product-types",
                  title: "B2B + B2C",
                  titleIcon: null,
                  label: (
                    <span
                      className="flex items-center gap-3"
                      aria-label="Business and consumer products"
                    >
                      <Building2 className="h-5 w-5 text-blue-400/80" />
                      <UsersRound className="h-5 w-5 text-orange-300/80" />
                    </span>
                  ),
                },
              ].map((stat) => (
                <div
                  key={stat.id}
                  className="flex min-h-[100px] flex-col justify-between rounded-xl border border-border/60 bg-card px-5 py-5"
                >
                  <div className="flex items-center gap-3 font-serif text-3xl font-semibold text-foreground">
                    {stat.title}
                    {stat.titleIcon}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Technologies I work with
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    <Image
                      src={tech.icon}
                      alt=""
                      width={14}
                      height={14}
                      className="h-3.5 w-3.5 shrink-0 object-contain"
                    />
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8" aria-labelledby="experience-proof">
        <p
          id="experience-proof"
          className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground"
        >
          Current and previous work
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-20 items-center gap-4 rounded-xl bg-secondary/40 px-4 py-3 transition-colors hover:bg-secondary"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-card p-1.5 shadow-sm">
                <Image
                  src={item.logo}
                  alt=""
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </span>
              <span>
                <span className="block font-semibold">{item.name}</span>
                <span className="block text-sm text-muted-foreground">
                  {item.detail}
                </span>
              </span>
              <ArrowRight
                className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
