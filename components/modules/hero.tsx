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

    const skills = [
        {
            name: 'React',
            icon: '/skills/react.svg'
        },
        {
            name: 'TypeScript',
            icon: '/skills/typescript.svg'
        },
        {
            name: 'NextJS',
            icon: '/skills/nextjs.svg'
        },
        {
            name: 'Node.js',
            icon: '/skills/nodejs.svg'
        },
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
                className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"
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
                className="absolute top-1/3 -right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"
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
                        className="inline-block bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-full px-3 py-1 text-sm text-emerald-400 mb-2 backdrop-blur-sm border border-emerald-800/30"
                    >
                        <span className="tracking-widest">FULLSTACK ENGINEER</span>
                    </motion.div>
                
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600 flex items-center gap-3"
                        variants={itemVariants}
                        style={{ fontFamily: fonts.SpaceGrotesk }}
                    >
                        Sudharsan GS
                    </motion.h1>

                    <motion.h2
                        className="md:text-2xl text-xl text-amber-400 mb-4 flex items-center"
                        variants={itemVariants}
                    >
                        Software Engineer at <span className="ml-2 flex items-center bg-white/5 backdrop-blur-sm rounded-full px-3 py-1 border border-amber-800/20">
                            <Image src="/fubo.svg" alt="fubo" width={24} height={24} className="ml-1" />
                        </span>
                    </motion.h2>

                    <motion.h3
                        className="md:text-xl text-lg text-amber-300 mb-4 flex items-center gap-2"
                        variants={itemVariants}
                    >
                        <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-amber-400 animate-pulse" />
                            Based in Bengaluru, India
                        </span>
                    </motion.h3>

                    <motion.p
                        className="md:text-lg text-gray-300 max-w-xl leading-relaxed"
                        variants={itemVariants}
                    >
                        Passionate about building scalable web applications and creating intuitive user experiences.
                        Specialized in <span className="text-emerald-400 font-semibold">React</span>, <span className="text-blue-400 font-semibold">TypeScript</span>, and <span className="text-white font-semibold">NextJS</span>.
                    </motion.p>
                    
                    {/* Skills section */}
                    <motion.div
                        variants={containerVariants}
                        className="flex flex-wrap gap-3 pt-2"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-1 bg-gray-800/40 backdrop-blur-sm rounded-full px-3 py-1 border border-gray-700/30"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <Image src={skill.icon} alt={skill.name} width={16} height={16} />
                                <span className="text-sm text-gray-300">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    <motion.div className="flex flex-col sm:flex-row gap-4 pt-6"
                        variants={containerVariants}
                    >
                        <Link href="/projects">
                            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-md px-6 py-6 flex items-center gap-2 h-10">
                                View Projects
                                <ExternalLink className="w-4 h-4" />
                            </Button>
                        </Link>
                        
                        <Button 
                            variant="outline" 
                            className="bg-transparent border border-emerald-600/50 text-emerald-400 hover:bg-emerald-950/30 rounded-md px-6 py-6 h-10"
                            onClick={() => window.location.href = "mailto:sudharsangs.99@gmail.com"}
                        >
                            Contact Me
                        </Button>
                    </motion.div>

                    <motion.div
                        className="flex space-x-6 pt-8"
                        variants={containerVariants}
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="text-gray-400 hover:text-emerald-400 p-2 border border-gray-800 rounded-full transition-all backdrop-blur-sm"
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.1, 
                                    borderColor: "#34d399", 
                                    backgroundColor: "rgba(16, 185, 129, 0.1)" 
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex md:justify-end justify-center items-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div 
                        className="absolute w-72 h-72 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
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
                        className="w-64 h-64 bg-gray-800/50 backdrop-blur-sm rounded-full overflow-hidden border-4 border-emerald-900/30 relative z-10 shadow-lg shadow-emerald-900/20"
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
                            className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 to-transparent"
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
                <motion.p className="text-gray-400 text-sm mb-2">Scroll to explore</motion.p>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-emerald-500"
                >
                    <ArrowDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;