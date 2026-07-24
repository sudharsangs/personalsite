import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
        <div>
          <p className="font-serif text-xl font-semibold">Sudharsan GS</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Product engineer in Bengaluru. Currently working at Fubo and building FactoStack.</p>
          <nav aria-label="Footer navigation" className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center text-sm font-medium hover:text-primary">{link.label}</Link>)}
          </nav>
        </div>
        <div className="flex gap-2">
          <a className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary hover:text-primary" href="https://github.com/sudharsangs" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><Github className="h-5 w-5" aria-hidden="true" /></a>
          <a className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary hover:text-primary" href="https://linkedin.com/in/sudharsangs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><Linkedin className="h-5 w-5" aria-hidden="true" /></a>
          <a className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary hover:text-primary" href="mailto:sudharsangs.99@gmail.com" aria-label="Email Sudharsan"><Mail className="h-5 w-5" aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
