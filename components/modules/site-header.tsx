"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/modules/theme-toggle";

const navLinks = [
  { href: "/projects", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex min-h-11 items-center font-bold tracking-[0.14em]" onClick={() => setOpen(false)}>
          SUDHARSAN GS
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:sudharsangs.99@gmail.com"
            className="inline-flex min-h-10 items-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Email me
          </a>
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-foreground"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open} className="px-4 py-3 md:hidden">
        <div className="mx-auto flex max-w-6xl flex-col">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="flex min-h-11 items-center rounded-md px-3 font-medium hover:bg-secondary" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:sudharsangs.99@gmail.com"
            className="mt-2 flex min-h-11 items-center justify-center rounded-md bg-primary px-4 font-semibold text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            Email me
          </a>
        </div>
      </nav>
    </header>
  );
}
