'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Experience } from '@/types/experience';
import { CalendarDays, MapPin, ExternalLink } from 'lucide-react';
import { fonts } from '@/lib/constants';
import ExperienceProjectCard from './experience-project-card';

interface ExperienceCardProps {
    experience: Experience;
    index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
        >
            <Card className="overflow-hidden border border-border/50 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15 rounded-2xl group">
                <CardContent className="p-4 lg:p-8">
                    <div className="flex items-start gap-4">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                            className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-border/30 bg-white shadow-lg hover:border-primary/50 transition-all duration-300 hover:shadow-xl group-hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image
                                src={experience.companyLogo}
                                alt={`${experience.company} logo`}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start gap-4">
                                <div className='w-full sm:w-auto'>
                                    <motion.h3
                                        className="text-2xl font-bold text-foreground mb-1"
                                        style={{ fontFamily: fonts.PlayfairDisplay }}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                                        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                                    >
                                        {experience.title}
                                    </motion.h3>
                                    <div className='flex  w-full justify-between sm:flex-row flex-col sm:items-center items-start'>
                                        <motion.a
                                            target='_blank'
                                            href={experience.companyUrl}
                                            className="font-semibold text-primary flex items-center gap-2 hover:text-primary/80 transition-colors text-lg"
                                            initial={{ opacity: 0 }}
                                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                            whileHover={{ x: 2 }}
                                        >
                                            {experience.company}
                                            <ExternalLink className="w-4 h-4" />
                                        </motion.a>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                            className="flex sm:hidden"
                                        >
                                            <Badge variant={experience.type === "Full Time" ? "default" : "secondary"} className='bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-none shadow-md px-3 py-1 text-sm font-medium'>
                                                {experience.type}
                                            </Badge>
                                        </motion.div>
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                    className="sm:flex hidden"
                                >
                                    <Badge variant={experience.type === "Full Time" ? "default" : "secondary"} className='bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-none'>
                                        {experience.type}
                                    </Badge>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:justify-start gap-3 sm:gap-6 mt-4 text-sm">
                        <motion.div
                            className="flex items-center gap-1 text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                        >
                            <MapPin size={16} className="text-primary" />
                            <span>{experience.location}</span>
                        </motion.div>
                        <motion.div
                            className="flex items-center gap-1 text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                        >
                            <CalendarDays size={16} className="text-primary" />
                            <span>
                                {experience.period.start} - {experience.period.end}
                            </span>
                        </motion.div>
                    </div>

                    {/* Description section - added at the top */}
                    {experience.description && (
                        experience.id === "fubo" ? (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                                    className="mt-3 flex flex-col sm:flex-row items-start gap-4"
                                >
                                    <motion.a
                                        className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-black/10 backdrop-blur-sm"
                                        whileHover={{ scale: 1.05 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                                        href="https://molotov.tv/"
                                        target="_blank"
                                    >
                                        <Image
                                            src="/molotov.png"
                                            alt="Molotov TV Logo"
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </motion.a>
                                    {experience.id === "fubo" ?
                                        <motion.p className="text-sm text-muted-foreground italic border-l-4 border-primary/30 pl-4 bg-primary/5 py-3 rounded-r-lg">
                                            Currently working on the <a href='https://www.molotov.tv/' target='_blank' className='text-primary hover:text-primary/80 underline font-medium'>Molotov</a> team, focusing on enhancing the user experience for live sports streaming and improving the marketing site for better SEO.
                                        </motion.p> : <motion.p
                                            className="text-sm text-muted-foreground italic border-l-4 border-primary/30 pl-4 bg-primary/5 py-3 rounded-r-lg"
                                        >
                                            {experience.description}
                                        </motion.p>}

                                </motion.div>
                                <motion.p
                                    className="text-sm text-muted-foreground italic border-l-4 border-orange-500/30 pl-4 bg-orange-500/5 py-3 rounded-r-lg mt-3"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                                >
                                    Previously, I was part of the VideoAI team, where I contributed to building AI-driven features for sports video analysis
                                </motion.p>
                            </>
                        ) : (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                                className="mt-4 text-sm text-muted-foreground italic border-l-4 border-primary/30 pl-4 bg-primary/5 py-3 rounded-r-lg"
                            >
                                {experience.description}
                            </motion.p>
                        )
                    )}

                    <motion.ul className="mt-6 space-y-4">
                        {experience.achievements.map((achievement, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 + 0.5 }}
                                className="text-sm text-muted-foreground flex gap-3 items-center p-2 rounded-lg transition-colors duration-200"
                            >
                                <span className="text-primary text-base font-bold">•</span>
                                <span>{achievement}</span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.div
                        className="flex flex-wrap gap-3 mt-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    >
                        {experience.technologies.map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                                transition={{ delay: index * 0.1 + i * 0.05 + 0.7 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Badge variant="outline" className="text-xs bg-white/80 hover:bg-primary/5 text-muted-foreground hover:text-primary backdrop-blur-sm border-border/50 hover:border-primary/30 shadow-sm px-3 py-1 transition-all duration-200">
                                    {tech}
                                </Badge>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Projects Section */}
                    {experience.projects && experience.projects.length > 0 && (
                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <h4 className="text-lg font-semibold text-foreground">Related Projects</h4>
                            </div>
                            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                                {experience.projects.map((project, i) => {
                                    const projectTech = experience.technologies.slice(0, 3);

                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 + 0.8 }}
                                        >
                                            <ExperienceProjectCard
                                                title={project.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                                description={experience.projectDescriptions?.[project] || "Project developed during my time at " + experience.company}
                                                techStack={Array.isArray(projectTech) ? projectTech : experience.technologies.slice(0, 3)}
                                                link={`/projects/${experience.type === "Full Time" ? "work" : "internship"}/${project.toLowerCase()}`}
                                            />
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
}
