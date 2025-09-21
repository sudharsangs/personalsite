import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  HeartPulse,
  Code,
  Globe,
  Send,
} from "lucide-react";
import Link from "next/link";
import { fonts } from "@/lib/constants";

interface MainLink {
  href: string;
  label: string;
  external?: boolean;
  highlight?: boolean;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/sudharsangs",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/sudharsangs",
      label: "GitHub",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:sudharsangs.99@gmail.com",
      label: "Email",
    },
    {
      icon: <Send className="w-5 h-5" />,
      href: "https://t.me/sudharsangs",
      label: "Telegram",
    },
  ];

  const mainLinks: MainLink[] = [
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "Experience" },
    {
      href: "https://factostack.com",
      label: "FactoStack",
      external: true,
      highlight: true,
    },
  ];

  return (
    <footer className="mt-24 border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6 space-y-4">
            <h3
              className="text-2xl font-semibold text-foreground"
              style={{ fontFamily: fonts.PlayfairDisplay }}
            >
              Sudharsan GS
            </h3>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              Fullstack Developer crafting digital experiences that merge
              beautiful design with robust functionality. Ready to bring your
              ideas to life.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link, index) => {
                // Light theme social icon colors
                const iconColors = [
                  "hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50",
                  "hover:text-gray-800 hover:border-gray-400 hover:bg-gray-100",
                  "hover:text-red-600 hover:border-red-300 hover:bg-red-50",
                  "hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50",
                ];
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`text-muted-foreground ${iconColors[index]} transition-all duration-300 p-2 bg-white/60 backdrop-blur-sm rounded-full border border-border hover:shadow-md`}
                  >
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-lg font-medium text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {mainLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`text-muted-foreground ${
                      link.highlight
                        ? "hover:text-primary font-semibold text-primary/90"
                        : "hover:text-primary"
                    } transition-colors duration-300 flex items-center gap-2 group`}
                  >
                    {link.highlight ? (
                      <Globe className="w-3 h-3 text-primary group-hover:translate-x-1 transition-transform" />
                    ) : (
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    )}
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-lg font-medium text-foreground mb-4">
              Contact
            </h4>
            <a
              href="mailto:sudharsangs.99@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors block mb-2"
            >
              sudharsangs.99@gmail.com
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Open to opportunities and collaborations.
              <br />
              <span className="text-primary font-medium">
                Let&apos;s build something amazing together!
              </span>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center flex flex-col sm:flex-row items-center justify-center sm:justify-between text-muted-foreground text-sm gap-3">
          <p>
            © {currentYear} Sudharsan GS. All rights reserved. I provide{" "}
            <a
              href="https://factostack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              MVP building solutions for startups and businesses
            </a>{" "}
            at FactoStack
          </p>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <HeartPulse className="w-4 h-4 text-red-500" />
            <span>&</span>
            <Code className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
