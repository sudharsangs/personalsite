import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="section-block" aria-labelledby="contact-heading">
      <div className="surface p-7 sm:p-10">
        <p className="eyebrow">Start a conversation</p>
        <h2 id="contact-heading" className="mt-3 max-w-3xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Need a product engineer who can own the path from ambiguity to production?
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
          I’m open to thoughtful conversations about product engineering roles, focused consulting, and practical software builds.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button asChild><a href="mailto:sudharsangs.99@gmail.com"><Mail aria-hidden="true" /> Email me</a></Button>
          <Button asChild variant="outline"><Link href="/about">More about me <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </div>
    </section>
  );
}
