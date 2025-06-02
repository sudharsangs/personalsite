import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, HeartPulse, Code } from 'lucide-react';
import Link from 'next/link';
import { fonts } from '@/lib/constants';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: <Linkedin className="w-5 h-5" />,
            href: "https://linkedin.com/in/sudharsangs",
            label: "LinkedIn"
        },
        {
            icon: <Github className="w-5 h-5" />,
            href: "https://github.com/sudharsangs",
            label: "GitHub"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            href: "mailto:sudharsangs.99@gmail.com",
            label: "Email"
        }
    ];

    const mainLinks = [
        { href: "/projects", label: "Projects" },
        { href: "#experience", label: "Experience" }
    ];

    return (
        <footer className="mt-24 border-t border-border py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div 
                        className="md:col-span-6 space-y-4"
                    >
                        <h3 
                            className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-cyan-400"
                            style={{ fontFamily: fonts.SpaceGrotesk }}
                        >
                            Sudharsan GS
                        </h3>
                        <p 
                            className="text-muted-foreground text-sm max-w-md"
                        >
                            Software Engineer specializing in building exceptional digital experiences. 
                            Currently focused on creating scalable web applications and user interfaces.
                        </p>
                        <div 
                            className="flex space-x-4 pt-2"
                        >
                            {socialLinks.map((link, index) => {
                                // Different color schemes for each social icon
                                const iconColors = [
                                    "hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10",
                                    "hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10",
                                    "hover:text-amber-400 hover:border-amber-500/50 hover:bg-amber-500/10"
                                ];
                                return (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.label}
                                        className={`text-muted-foreground ${iconColors[index]} transition-all p-2 bg-muted/40 backdrop-blur-sm rounded-full border border-border hover:shadow-md`}
                                    >
                                        {link.icon}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div
                        className="md:col-span-3"
                    >
                        <h4 
                            className="text-lg font-medium text-foreground mb-4"
                        >
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {mainLinks.map((link, index) => (
                                <li 
                                    key={index}
                                >
                                    <Link 
                                        href={link.href} 
                                        className={`text-muted-foreground hover:text-${index === 0 ? 'violet-400' : 'amber-400'} transition-colors flex items-center gap-2 group`}
                                    >
                                        <ExternalLink className={`w-3 h-3 group-hover:translate-x-1 transition-transform group-hover:text-${index === 0 ? 'violet-400' : 'amber-400'}`} />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div
                        className="md:col-span-3"
                    >
                        <h4 
                            className="text-lg font-medium text-foreground mb-4"
                        >
                            Contact
                        </h4>
                        <a
                            href="mailto:sudharsangs.99@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors block mb-2"
                        >
                            sudharsangs.99@gmail.com
                        </a>
                        <p
                            className="text-muted-foreground text-sm"
                        >
                            Open to opportunities and collaborations
                        </p>
                    </div>
                </div>
                
                <div 
                    className="mt-12 pt-6 border-t border-border text-center flex flex-col sm:flex-row items-center justify-center sm:justify-between text-muted-foreground text-sm gap-3"
                >
                    <p>© {currentYear} Sudharsan GS. All rights reserved.</p>
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