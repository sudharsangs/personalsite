'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ExperienceCard } from './experience-card';
import { ExperienceSectionProps } from '../../types/experience';
import { Badge } from '@/components/ui/badge';
import { fonts } from '@/lib/constants';
import { Briefcase } from 'lucide-react';

function Experience({ experiences }: ExperienceSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });


    return (
        <section id="experience" className="py-20 lg:py-28 relative overflow-hidden" ref={ref}>

            {/* Background decorative elements */}
            <motion.div 
                className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-primary/6 to-accent/4 rounded-full blur-3xl"
                animate={{ 
                    x: [0, -40, 0],
                    y: [0, 30, 0],
                    opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <motion.div 
                className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-accent/6 to-primary/4 rounded-full blur-3xl"
                animate={{ 
                    x: [0, 35, 0],
                    y: [0, -25, 0],
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-3 bg-primary/10 px-4 py-3 rounded-2xl border border-primary/20 shadow-sm mb-6"
                    >
                        <Briefcase className="w-5 h-5 text-primary" />
                        <span className="text-primary font-semibold tracking-wide">PROFESSIONAL JOURNEY</span>
                    </motion.div>
                    
                    <motion.h2 
                        className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
                        style={{ fontFamily: fonts.PlayfairDisplay }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Professional Experience
                    </motion.h2>
                    
                    <motion.div className="flex items-center justify-center gap-4 sm:flex-row flex-col">
                        <motion.p 
                            className="text-lg text-muted-foreground leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Building innovative solutions across multiple industries
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Badge variant="default" className="h-auto py-2 px-4 bg-accent text-accent-foreground font-semibold shadow-md">
                                5+ years
                            </Badge>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <div className="flex flex-col gap-10 lg:gap-12">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={experience.id} experience={experience} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;

