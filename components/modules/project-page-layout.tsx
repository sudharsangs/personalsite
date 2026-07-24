import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Briefcase, Calendar, Github, Globe2, Handshake, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ImageDetail } from "@/types/projects";

interface ProjectPageLayoutProps {
  title: string;
  description: string;
  type: "personal" | "independent" | "work";
  date?: string;
  company?: { name: string; url: string; logo: string };
  client?: string;
  githubUrl?: string;
  liveUrl?: string;
  children: ReactNode;
}

const typeConfig = {
  personal: { icon: User, label: "Personal project", role: "Design and engineering" },
  independent: { icon: Handshake, label: "Freelance project", role: "Product design and engineering" },
  work: { icon: Briefcase, label: "Work project", role: "Frontend engineering" },
};

export default function ProjectPageLayout({ title, description, type, date, company, client, githubUrl, liveUrl, children }: ProjectPageLayoutProps) {
  const TypeIcon = typeConfig[type].icon;
  return (
    <main id="main-content">
      <header>
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8">
          <Link href="/projects" className="text-link mb-8"><ArrowLeft aria-hidden="true" /> All projects</Link>
          <div className="rounded-2xl bg-secondary/25 p-6 sm:p-8 lg:grid lg:grid-cols-[1fr_17rem] lg:gap-12">
            <div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 font-semibold text-primary"><TypeIcon className="h-4 w-4" aria-hidden="true" />{typeConfig[type].label}</span>
                {date && <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" aria-hidden="true" />{date}</span>}
                {client && <span>Client: {client}</span>}
              </div>
              <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{title}</h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{description}</p>
            </div>

            <div className="mt-7 flex flex-col justify-end gap-4 lg:mt-0">
              <div className="rounded-xl border border-border/60 bg-background px-4 py-3">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">Role</p>
                <p className="mt-1.5 text-sm font-semibold leading-5">{typeConfig[type].role}</p>
              </div>
              {company && (
                <a href={company.url} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center gap-3 rounded-xl bg-background px-4 py-3 hover:text-primary">
                  <Image src={company.logo} alt="" width={28} height={28} className="rounded-md" />
                  <span className="font-semibold">{company.name}</span>
                  <ArrowUpRight className="ml-auto h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
              {(githubUrl || liveUrl) && (
                <div className="flex flex-col gap-3">
                  {liveUrl && <Button asChild><a href={liveUrl} target="_blank" rel="noopener noreferrer"><Globe2 aria-hidden="true" />View live project<ArrowUpRight aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span></a></Button>}
                  {githubUrl && <Button asChild variant="outline"><a href={githubUrl} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" />View source<span className="sr-only">(opens in a new tab)</span></a></Button>}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-4 sm:px-6 sm:pb-20 sm:pt-6 lg:px-8">
        {children}
        <section className="mt-16 rounded-2xl border border-primary/20 bg-primary/[0.06] p-7 sm:p-9" aria-labelledby="case-study-contact">
          <p className="eyebrow">Contact</p>
          <h2 id="case-study-contact" className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight">
            Interested in working together?
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            I take on selected consulting and freelance work: full-stack builds, ERP and SaaS implementation, technical SEO, and operations-heavy products. I’m also open to conversations about FactoStack or forward-deployed engineering work.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href="mailto:sudharsangs.99@gmail.com"><Mail aria-hidden="true" /> Email me</a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about">About me <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </section>
        <div className="mt-8 pt-4">
          <Link href="/projects" className="text-link"><ArrowLeft aria-hidden="true" /> Back to all projects</Link>
        </div>
      </div>
    </main>
  );
}

export function ProjectSection({ title, icon, className = "mb-16", children }: {
  title: string;
  icon: ReactNode;
  iconBg?: string;
  iconColor?: string;
  iconBorder?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={className}>
      <div className="mb-6 flex items-center gap-3">
        <span className="text-primary" aria-hidden="true">{icon}</span>
        <h2 className="font-serif text-2xl font-semibold">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function FeatureList({ items }: { items: string[]; iconBg?: string; iconColor?: string }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => <li key={item} className="surface flex items-start gap-3 p-4 text-sm leading-6"><span className="mt-1 text-primary" aria-hidden="true">✓</span><span>{item}</span></li>)}
    </ul>
  );
}

export function InfoCard({ title, children }: { title: string; children: ReactNode; variant?: "default" | "accent" | "destructive" | "success" }) {
  return <div className="surface h-full p-6"><h3 className="font-serif text-xl font-semibold">{title}</h3><div className="mt-3 text-sm leading-7 text-muted-foreground">{children}</div></div>;
}

export function StatCard({ number, label, description }: { number: string; label: string; description?: string }) {
  return <div className="surface p-6"><p className="font-serif text-3xl font-semibold text-primary">{number}</p><p className="mt-1 font-semibold">{label}</p>{description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}</div>;
}

export function OutcomeList({ items }: { items: string[] }) {
  return <ol className="space-y-3">{items.map((item, index) => <li key={item} className="surface flex gap-4 p-4"><span className="font-semibold text-primary">{index + 1}.</span><span className="leading-7 text-muted-foreground">{item}</span></li>)}</ol>;
}

export function ProjectImageGallery({ images, columns = 1 }: { images: ImageDetail[]; columns?: number }) {
  const layout = columns === 1 ? "grid-cols-1" : columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`mb-16 grid gap-5 ${layout}`}>
      {images.map((image) => (
        <figure key={image.url}>
          <div className="overflow-hidden rounded-lg border border-border bg-muted">
            <Image src={image.url} alt={image.alt} width={1200} height={675} className="h-auto w-full" />
          </div>
          {image.caption && <figcaption className="mt-2 text-center text-xs leading-5 text-muted-foreground">{image.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
