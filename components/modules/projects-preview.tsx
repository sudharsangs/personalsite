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
    
    // Get only the first 2 featured projects
    const featuredProjects = projects.slice(0, 2);

    return (
        <section id="projects-preview" className="py-20 lg:py-28 relative" ref={ref}>
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
                        <span className="text-primary font-semibold tracking-wide">FEATURED WORK</span>
                    </motion.div>
                    
                    <motion.h2 
                        className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
                        style={{ fontFamily: fonts.PlayfairDisplay }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Latest Projects
                    </motion.h2>
                    
                    <motion.p 
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        A glimpse into my recent work - from full-stack applications to innovative digital solutions
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
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 group">
                            View All Projects
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsPreview;