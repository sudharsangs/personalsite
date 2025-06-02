'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Experience } from '@/types/experience';
import { CalendarDays, MapPin, ExternalLink } from 'lucide-react';
import { fonts } from '@/lib/constants';

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
            <Card className="overflow-hidden border-gray-800/50 bg-gray-900/20 backdrop-blur-sm hover:bg-gray-900/30 transition-all duration-300 hover:border-emerald-900/30 hover:shadow-lg hover:shadow-emerald-900/10">
                <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                            className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-800/50 bg-gray-800/30 hover:border-gray-700/50 transition-all duration-300 shadow-lg"
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
                                        className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500"
                                        style={{ fontFamily: fonts.SpaceGrotesk }}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                                        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                                    >
                                        {experience.title}
                                    </motion.h3>
                                    <div className='flex items-center w-full justify-between'>
                                        <motion.a
                                            target='_blank'
                                            href={experience.companyUrl}
                                            className="font-medium text-amber-300 flex items-center gap-1 hover:text-amber-200 transition-colors"
                                            initial={{ opacity: 0 }}
                                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                            whileHover={{ x: 2 }}
                                        >
                                            {experience.company}
                                            <ExternalLink className="w-3 h-3" />
                                        </motion.a>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                            className="flex sm:hidden"
                                        >
                                            <Badge variant={experience.type === "Full Time" ? "default" : "secondary"} className='bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white border-none'>
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
                                    <Badge variant={experience.type === "Full Time" ? "default" : "secondary"} className='bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white border-none'>
                                        {experience.type}
                                    </Badge>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:justify-start gap-2 sm:gap-4 mt-3 text-sm text-gray-400">
                        <motion.div
                            className="flex items-center gap-1 text-cyan-300"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                        >
                            <MapPin size={14} className="text-cyan-500" />
                            <span>{experience.location}</span>
                        </motion.div>
                        <motion.div
                            className="flex items-center gap-1 text-cyan-300"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                        >
                            <CalendarDays size={14} className="text-cyan-500" />
                            <span>
                                {experience.period.start} - {experience.period.end}
                            </span>
                        </motion.div>
                    </div>

                    <motion.ul className="mt-5 space-y-3">
                        {experience.achievements.map((achievement, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 + 0.5 }}
                                className="text-sm text-gray-300 flex gap-2 items-start"
                            >
                                <span className="text-emerald-400 mt-1">•</span>
                                <span>{achievement}</span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.div
                        className="flex flex-wrap gap-2 mt-5"
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
                                <Badge variant="outline" className="text-xs bg-gray-800/40 hover:bg-gray-800/60 text-gray-300 backdrop-blur-sm border-gray-700/30">
                                    {tech}
                                </Badge>
                            </motion.div>
                        ))}
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
