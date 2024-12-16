'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { ExperienceCard } from './experience-card'
import { ExperienceSectionProps } from '../types/experience'
import { Badge } from '@/components/ui/badge'

function Experience({ experiences }: ExperienceSectionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const totalYears = "4+ Years"

    return (
        <section className="flex items-center justify-center text-white pt-16" ref={ref}>
            <div className="w-full px-6 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
                    <Badge variant="default" className="h-auto py-1">
                        {totalYears}
                    </Badge>
                </motion.div>
                <div className="flex flex-col gap-8">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={experience.id} experience={experience} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience

