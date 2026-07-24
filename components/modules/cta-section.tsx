import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="section-block" aria-labelledby="contact-heading">
      <div className="surface p-7 sm:p-10">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-heading" className="mt-3 max-w-3xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Open to new work. Let&apos;s talk.
        </h2>
        <ul className="mt-4 max-w-2xl space-y-1.5 leading-7 text-muted-foreground">
          <li>Full-stack builds, from zero to deployed</li>
          <li>ERP and SaaS implementation (manufacturing, operations, logistics)</li>
          <li>Technical SEO and frontend performance</li>
          <li>Forward-deployed / embedded engineering</li>
          <li>FactoStack partnerships for manufacturing operations</li>
        </ul>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button asChild><a href="mailto:sudharsangs.99@gmail.com"><Mail aria-hidden="true" /> Email me</a></Button>
          <Button asChild variant="outline"><Link href="/projects">See my work <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </div>
    </section>
  );
}
