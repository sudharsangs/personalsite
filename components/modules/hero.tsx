import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { fonts } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
    const socialLinks = [
        {
            icon: <Linkedin className="w-6 h-6" />,
            href: "https://linkedin.com/in/sudharsangs",
            label: "LinkedIn Profile"
        },
        {
            icon: <Github className="w-6 h-6" />,
            href: "https://github.com/sudharsangs",
            label: "GitHub Profile"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            href: "mailto:sudharsangs.99@gmail.com",
            label: "Email"
        }
    ];


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <section className="flex flex-col items-center justify-center pt-24 pb-16 min-h-[90vh] relative">
            {/* Animated background elements */}
            <motion.div
                className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary/5 to-amber-500/10 rounded-full blur-3xl"
                animate={{
                    x: [0, 10, 0],
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            <motion.div
                className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-bl from-secondary/5 to-emerald-500/10 rounded-full blur-3xl"
                animate={{
                    x: [0, -15, 0],
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            <motion.div
                className="absolute bottom-20 left-1/3 w-60 h-60 bg-gradient-to-tr from-violet-500/5 to-orange-400/10 rounded-full blur-3xl"
                animate={{
                    x: [0, 8, 0],
                    y: [0, -12, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            <div className="w-full px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    className="space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full px-3 py-1 text-accent mb-2 backdrop-blur-sm border border-accent/30"
                    >
                        <span className="tracking-widest">FULLSTACK ENGINEER</span>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 flex items-center gap-3"
                        variants={itemVariants}
                        style={{ fontFamily: fonts.SpaceGrotesk }}
                    >
                        Sudharsan GS
                    </motion.h1>

                    <motion.h2
                        className="md:text-2xl text-xl text-foreground mb-4 flex items-center"
                        variants={itemVariants}
                    >
                        Software Engineer at <span className="ml-2 flex items-center bg-white/5 backdrop-blur-sm rounded-full px-3 py-1 border border-muted/20">
                            <Image src="/fubo.svg" alt="fubo" width={24} height={24} className="ml-1" />
                        </span>
                    </motion.h2>

                    <motion.h3
                        className="md:text-xl text-lg text-muted-foreground mb-4 flex items-center gap-2"
                        variants={itemVariants}
                    >
                        <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-accent animate-pulse" />
                            Based in  <span className='text-amber-400'>Bengaluru, India</span>
                        </span>
                    </motion.h3>

                    <motion.p
                        className="md:text-lg text-muted-foreground max-w-xl leading-relaxed"
                        variants={itemVariants}
                    >
                        Passionate about building scalable web applications and creating intuitive user experiences.
                        Specialized in <span className="text-primary font-semibold">React</span>, <span className="text-secondary font-semibold">TypeScript</span>, and <span className="text-foreground font-semibold">NextJS</span>.
                    </motion.p>

                    <motion.div className="flex flex-col sm:flex-row gap-4 pt-6"
                        variants={containerVariants}
                    >
                        <Link href="/projects">
                            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-md px-6 py-6 flex items-center gap-2 h-10">
                                View Projects
                                <ExternalLink className="w-4 h-4" />
                            </Button>
                        </Link>

                        <Button
                            variant="outline"
                            className="bg-transparent border border-primary/50 text-primary hover:bg-primary/10 rounded-md px-6 py-6 h-10"
                            onClick={() => window.location.href = "mailto:sudharsangs.99@gmail.com"}
                        >
                            Contact Me
                        </Button>
                    </motion.div>

                    <motion.div
                        className="flex space-x-6 pt-8"
                        variants={containerVariants}
                    >
                        {socialLinks.map((link, index) => {
                            // Create different hover colors for each social icon
                            const hoverColors = [
                                { border: "border-blue-500/60", bg: "bg-blue-500/20", text: "text-blue-400" },
                                { border: "border-emerald-500/60", bg: "bg-emerald-500/20", text: "text-emerald-400" },
                                { border: "border-rose-500/60", bg: "bg-rose-500/20", text: "text-rose-400" }
                            ];
                            return (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className="text-muted-foreground p-2 border border-border rounded-full transition-all backdrop-blur-sm"
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.1
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    style={{
                                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.classList.add(hoverColors[index].border, hoverColors[index].bg, hoverColors[index].text);
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.classList.remove(hoverColors[index].border, hoverColors[index].bg, hoverColors[index].text);
                                    }}
                                >
                                    {link.icon}
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex md:justify-end justify-center items-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="absolute w-72 h-72 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />

                    <motion.div
                        className="w-64 h-64 bg-card/50 backdrop-blur-sm rounded-full overflow-hidden border-4 border-primary/30 relative z-10 shadow-lg shadow-primary/20"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src="/sudharsan.webp"
                            alt="Sudharsan"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"
                            initial={{ opacity: 0.4 }}
                            whileHover={{ opacity: 0.2 }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <motion.p className="text-muted-foreground text-sm mb-2">Scroll to explore</motion.p>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-primary"
                >
                    <ArrowDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;