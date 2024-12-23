import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Hero: React.FC = () => {
    const socialLinks = [
        {
            icon: <Github className="w-6 h-6" />,
            href: "https://github.com/sudharsangs",
            label: "GitHub Profile"
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            href: "https://linkedin.com/in/sudharsangs",
            label: "LinkedIn Profile"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            href: "mailto:sudharsangs.99@gmail.com",
            label: "Email Contact"
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
        <section className="flex items-center justify-center text-white pt-16">
            <div className="w-full px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-3xl md:text-5xl font-bold tracking-tight flex items-center gap-3"
                        variants={itemVariants}
                    >
                        Hey, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-800'>Sudharsan</span>
                        <motion.span
                            animate={{
                                rotate: [0, 20, -20, 0],
                                transition: {
                                    repeat: 5,
                                    duration: 1.5,
                                }
                            }}
                            className="inline-block origin-bottom-right"
                        >
                            👋
                        </motion.span>
                    </motion.h1>

                    <motion.h2
                        className="text-2xl text-blue-300 mb-4 flex"
                        variants={itemVariants}
                    >
                        Software Engineer at <span className='ml-2 flex'><Image src="/fubo.svg" alt="fubo" width={24} height={24} /></span>
                    </motion.h2>

                    <motion.h3
                        className="text-xl text-green-300 mb-4"
                        variants={itemVariants}
                    >
                        Based in Bengaluru, India
                    </motion.h3>

                    <motion.p
                        className="text-lg text-gray-300 max-w-xl"
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
                    className="flex justify-end items-center"
                    variants={itemVariants}
                >
                    <div className="w-64 h-64 bg-gray-600/30 rounded-full overflow-hidden border-4 border-gray-500/50 relative">
                        <Image
                            src="/sudharsan.webp"
                            alt="Sudharsan"
                            fill
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;