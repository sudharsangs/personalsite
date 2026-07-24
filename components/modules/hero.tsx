import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const credentials = [
  { name: "Fubo", detail: "Software Engineer", logo: "/fubo.svg", href: "https://fubo.tv" },
  { name: "FactoStack", detail: "Founder and engineer", logo: "/factostack.svg", href: "https://factostack.com" },
  { name: "Winuall", detail: "Software Engineer, 2020–2022", logo: "/winuall.jpg", href: "https://winuall.com" },
];

export default function Hero() {
  return (
    <>
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-[0.15em]">
          <span className="text-primary">Product engineer in Bengaluru</span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden="true" /> Bengaluru, India
          </span>
        </div>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.5rem]">
          Five years building products people actually use.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          I work across streaming, ERP, SaaS, and ed-tech — backend, frontend, infra, compliance — and I stay involved until something is live and working.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/projects">View my work <ArrowRight aria-hidden="true" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="mailto:sudharsangs.99@gmail.com"><Mail aria-hidden="true" /> Email me</a>
          </Button>
        </div>
      </section>

      <section className="pb-8" aria-labelledby="experience-proof">
        <p id="experience-proof" className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
          Current and previous work
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-20 items-center gap-4 rounded-xl bg-secondary/40 px-4 py-3 hover:bg-secondary"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-card p-1.5">
                <Image src={item.logo} alt="" width={40} height={40} className="h-full w-full object-contain" />
              </span>
              <span>
                <span className="block font-semibold">{item.name}</span>
                <span className="block text-sm text-muted-foreground">{item.detail}</span>
              </span>
              <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
