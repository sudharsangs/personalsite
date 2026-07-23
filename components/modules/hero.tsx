import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const credentials = [
  { name: "Fubo", detail: "Software Engineer", logo: "/fubo.svg", href: "https://fubo.tv" },
  { name: "FactoStack", detail: "Founder & Product Engineer", logo: "/factostack.svg", href: "https://factostack.com" },
];

export default function Hero() {
  return (
    <>
      <section className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.12fr_0.62fr] lg:gap-16 lg:py-24">
        <div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-[0.15em]">
            <span className="text-primary">Product engineer</span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-4 w-4" aria-hidden="true" /> Bengaluru, India
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4rem]">
            I design and build useful software.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            I work across product thinking, full-stack development, technical SEO, and the practical details needed to ship.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/projects">See selected work <ArrowRight aria-hidden="true" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:sudharsangs.99@gmail.com"><Mail aria-hidden="true" /> Start a conversation</a>
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="surface overflow-hidden p-2">
            <Image
              src="/sudharsan.webp"
              alt="Sudharsan GS"
              width={720}
              height={840}
              priority
              className="aspect-[4/5] w-full rounded-lg object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="pb-8" aria-label="Current work">
        <div className="grid gap-3 sm:grid-cols-2">
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
