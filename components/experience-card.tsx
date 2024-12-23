'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Experience } from '@/types/experience'
import { CalendarDays, MapPin } from 'lucide-react'

interface ExperienceCardProps {
    experience: Experience
    index: number
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            <Card className="overflow-hidden border-border/50 transition-colors">
                <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-border/50">
                            <Image
                                src={experience.companyLogo}
                                alt={`${experience.company} logo`}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
                                    <a target='_blank' href={experience.companyUrl} className="font-medium text-green-300">{experience.company}</a>
                                </div>
                                <Badge variant={experience.type === "Full Time" ? "default" : "secondary"}>
                                    {experience.type}
                                </Badge>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <MapPin size={14} />
                                    <span>{experience.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <CalendarDays size={14} />
                                    <span>
                                        {experience.period.start} - {experience.period.end}
                                    </span>
                                </div>
                            </div>

                    <motion.ul className="mt-4 space-y-2">
                        {experience.achievements.map((achievement, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                                className="text-sm text-muted-foreground flex gap-2"
                            >
                                <span className="text-primary">•</span>
                                <span>{achievement}</span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {experience.technologies.map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                                transition={{ delay: index * 0.2 + i * 0.1 }}
                            >
                                <Badge variant="outline" className="text-xs">
                                    {tech}
                                </Badge>
                            </motion.div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

