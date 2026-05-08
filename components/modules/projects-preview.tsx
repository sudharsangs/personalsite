import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Briefcase } from 'lucide-react';
import { fonts } from '@/lib/constants';
import ProjectCardHorizontal from './project-card-horizontal';
import { Projects } from '@/types/projects';
import { Button } from '@/components/ui/button';

type Props = {
    projects: Projects
}

const ProjectsPreview: React.FC<Props> = ({ projects }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    // Feature: FactoStack platform, Molotov program list, QuickPicks
    const featuredSlugs = ['factostack-platform', 'molotov-program-list-pages', 'quickpicks'];
    const featuredProjects = featuredSlugs
      .map(slug => projects.find(p => p.slug === slug))
      .filter(Boolean) as typeof projects;

    return (
        <section id="projects-preview" className="py-20 lg:py-28 relative" ref={ref}>
            <div className="container mx-auto sm:px-4 lg:px-8 relative z-10">
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
                        <span className="text-primary font-semibold tracking-wide">PORTFOLIO</span>
                    </motion.div>
                    
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
                        style={{ fontFamily: fonts.PlayfairDisplay }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Featured Projects
                    </motion.h2>
                    
                    <motion.p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        A focused collection of projects showing how I turn
                        ambiguous product problems into polished, scalable web
                        experiences.
                    </motion.p>
                </motion.div>
                
                {/* Projects List */}
                <div className="space-y-12 lg:space-y-16 mb-16">
                    {featuredProjects.map((project, index) => (
                        <ProjectCardHorizontal
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            technologies={project.technologies}
                            github={project.github}
                            path={project.path}
                            slug={project.slug}
                            type={project.type}
                            liveUrl={project.liveUrl}
                            company={project.company}
                            index={index}
                            reverse={index % 2 === 1}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <Link href="/projects">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 rounded-lg font-semibold text-sm shadow-sm transition-all duration-200 h-10 group border border-primary/40">
                            View All Projects
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsPreview;
