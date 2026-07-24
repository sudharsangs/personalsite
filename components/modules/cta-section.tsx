import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="section-block" aria-labelledby="contact-heading">
      <div className="surface p-7 sm:p-10">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-heading" className="mt-3 max-w-3xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Want to work together?
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
          I take on selected consulting and freelance work: full-stack builds, ERP and SaaS implementation, technical SEO, and operations-heavy products. Open to conversations about FactoStack partnerships or forward-deployed engineering work.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button asChild><a href="mailto:sudharsangs.99@gmail.com"><Mail aria-hidden="true" /> Email me</a></Button>
          <Button asChild variant="outline"><Link href="/about">About me <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </div>
    </section>
  );
}
