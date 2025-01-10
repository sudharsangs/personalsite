import React from 'react';
import { motion } from 'motion/react';
import { CalendarRange, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { fonts } from '@/lib/constants';

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
        <section className="flex items-center justify-center pt-16">
            <div className="w-full px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-800 flex items-center gap-3"
                        variants={itemVariants}
                        style={{ fontFamily: fonts.SpaceGrotesk }}
                    >
                        Sudharsan GS
                    </motion.h1>

                    <motion.h2
                        className="md:text-2xl text-xl text-amber-400 mb-4 flex"
                        variants={itemVariants}
                    >
                        Software Engineer at <span className='ml-2 flex'><Image src="/fubo.svg" alt="fubo" width={24} height={24} /></span>
                    </motion.h2>

                    <motion.h3
                        className="md:text-xl text-lg text-cyan-300 mb-4"
                        variants={itemVariants}
                    >
                        Based in Bengaluru, India
                    </motion.h3>

                    <motion.p
                        className="md:text-lg text-gray-300 max-w-xl"
                        variants={itemVariants}
                    >
                        Passionate about building scalable web applications and creating intuitive user experiences.
                        Specialized in React and Typescript.
                    </motion.p>

                    <motion.div
                        className="flex space-x-6 pt-4"
                        variants={containerVariants}
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="text-white hover:text-blue-300 transition-colors duration-300"
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex md:justify-end justify-center  items-center"
                    variants={itemVariants}
                >
                    <div className="w-64 h-64 bg-gray-600/30 rounded-full overflow-hidden border-4 border-gray-500/50 relative">
                        <Image
                            src="/sudharsan.webp"
                            alt="Sudharsan"
                            fill
                            priority={false}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;