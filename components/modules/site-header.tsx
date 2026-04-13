import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

const socialLinks = [
  {
    href: "https://github.com/sudharsangs",
    label: "GitHub",
    icon: <Github className="h-4 w-4" />,
  },
  {
    href: "https://linkedin.com/in/sudharsangs",
    label: "LinkedIn",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    href: "mailto:sudharsangs.99@gmail.com",
    label: "Email",
    icon: <Mail className="h-4 w-4" />,
  },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.18em] text-foreground"
        >
          SUDHARSAN GS
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={link.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/70 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
