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
        <section id="experience" className="flex items-center justify-center text-white py-16 relative" ref={ref}>

            <div className="w-full sm:px-6 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
                >
                    <div className="flex items-center gap-3">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-gray-200/20 p-2 rounded-full border border-gray-200/40 backdrop-blur-sm"
                        >
                            <Briefcase className="w-6 h-6 text-gray-200" />
                        </motion.div>
                        <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl"
                            style={{ fontFamily: fonts.SpaceGrotesk }}
                        >
                            Experience
                        </h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Badge variant="default" className="h-auto py-1 bg-gradient-to-r from-gray-300 to-zinc-300 hover:from-primary/90 hover:to-secondary/90">
                            5+ years
                        </Badge>
                    </motion.div>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={experience.id} experience={experience} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;

