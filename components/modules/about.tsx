"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, Briefcase, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { fonts } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const focusAreas = [
  "Frontend systems where performance and SEO actually matter.",
  "Full-stack products where design and engineering need to stay in sync.",
  "Early-stage or fast-moving work where one person needs to own the whole thing.",
];

const careerHighlights = [
  {
    company: "Fubo",
    logo: "/fubo.svg",
    period: "2022 - Present",
    summary:
      "Working on technical SEO and frontend systems for Molotov at Fubo, with earlier work on VideoAI features for sports streaming.",
  },
  {
    company: "Winuall",
    logo: "/winuall.jpg",
    period: "2020 - 2022",
    summary:
      "Built and led major frontend surfaces across EdTech, including commerce, onboarding, learning, and platform architecture.",
  },
];

export default function About() {
  return (
    <section className="w-full py-12 md:py-20">
      <motion.div
        className="space-y-12 md:space-y-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2">
            <span className="text-sm font-semibold tracking-[0.2em] text-primary">
              ABOUT
            </span>
          </div>
          <h1
            className="text-4xl font-bold md:text-5xl lg:text-6xl"
            style={{ fontFamily: fonts.PlayfairDisplay }}
          >
            I build products that work in the real world.
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Product engineering across streaming infrastructure, EdTech, and manufacturing software. Five years shipping things that go live.
          </p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
          <div className="space-y-6 rounded-[2rem] border border-primary/10 bg-gradient-to-br from-primary/5 to-accent/5 p-6 md:p-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
                Background
              </p>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I&apos;m Sudharsan GS, a product engineer based in Bengaluru.
                  I currently work on the <span className="font-semibold text-foreground">Molotov</span> team,
                  where the work sits at the intersection of
                  frontend systems, technical SEO, and streaming product
                  surfaces.
                </p>
                <p>
                  Before that I spent two years at Winuall building EdTech products: onboarding flows, an online store, a learner experience, and some platform architecture work. Good place to learn how to ship fast.
                </p>
                <p>
                  Outside work, I&apos;m building <span className="font-semibold text-foreground">FactoStack</span>, a manufacturing platform for Indian MSMEs. The problem is genuinely messy and the software needs to reflect that.
                </p>
              </div>
            </div>

            <div className="border-t border-primary/10 pt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
                How I Work
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                I use Claude Code and Codex to move faster on implementation and exploration. Architecture decisions, product tradeoffs, and final quality are mine.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-primary/10">
              <Image
                src="/desktop.jpg"
                alt="Sudharsan's development setup"
                fill
                className="object-cover"
              />
            </div>

            <div className="rounded-[2rem] border border-border/60 bg-white/90 p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2 text-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-semibold">Bengaluru, India</span>
              </div>
              <div className="mb-6 flex items-center gap-2 text-foreground">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="font-semibold">Software Engineer at Molotov</span>
              </div>

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
                Best Fit
              </p>
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                {focusAreas.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
              Career in brief
            </p>
            <div className="h-px flex-1 bg-gradient-to-l from-primary/40 to-transparent" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {careerHighlights.map((item) => (
              <div
                key={item.company}
                className="rounded-[1.75rem] border border-border/60 bg-white/95 p-6 shadow-sm"
              >
                <p className="mb-2 text-sm font-semibold text-primary">
                  {item.period}
                </p>
                <div className="mb-3 flex items-center gap-3">
                  <Image
                    src={item.logo}
                    alt={item.company}
                    width={28}
                    height={28}
                    className="rounded-md object-contain"
                  />
                  <h2 className="text-xl font-bold text-foreground">
                    {item.company}
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-border/60 bg-white/90 p-6 text-center shadow-sm md:p-8">
          <h2
            className="text-3xl font-bold text-foreground"
            style={{ fontFamily: fonts.PlayfairDisplay }}
          >
            Open to new work.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Interested in solving real business problems for MSMEs, software consulting, and MVP builds. If you have something worth building, reach out.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="mailto:sudharsangs.99@gmail.com">
              <Button className="h-11 rounded-xl px-6 font-semibold">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
            </a>
            <Link href="/projects">
              <Button variant="outline" className="h-11 rounded-xl px-6 font-semibold">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
