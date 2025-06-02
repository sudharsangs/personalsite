import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import { Layers, ExternalLink } from 'lucide-react';
import { fonts } from '@/lib/constants';
import ProjectCard from './project-card';
import { Projects } from '@/types/projects';
import { Button } from '@/components/ui/button';

type Props = {
    projects: Projects
}

const ProjectsSection: React.FC<Props> = ({ projects }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    // Get only the first 3 projects
    const featuredProjects = projects.slice(0, 3);

    return (
        <section id="projects" className="flex items-center justify-center text-white py-16 relative" ref={ref}>
            {/* Background decorations with multiple colorful elements */}
            <motion.div 
                className="absolute -right-20 top-1/4 w-72 h-72 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-full blur-3xl"
                animate={{ 
                    x: [0, -20, 0],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <motion.div 
                className="absolute left-40 bottom-20 w-60 h-60 bg-gradient-to-tr from-amber-500/10 to-orange-400/5 rounded-full blur-3xl"
                animate={{ 
                    x: [0, 15, 0],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <motion.div 
                className="absolute right-1/3 top-10 w-40 h-40 bg-gradient-to-bl from-emerald-500/10 to-teal-400/5 rounded-full blur-3xl"
                animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            
            <div className="w-full sm:px-6 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12"
                >
                    <div className="flex items-center gap-3">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-gray-200/20 p-2 rounded-full border border-gray-200/40 backdrop-blur-sm"
                        >
                            <Layers className="w-6 h-6 text-gray-200" />
                        </motion.div>
                        <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl" 
                            style={{ fontFamily: fonts.SpaceGrotesk }}
                        >
                            Projects
                        </h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ y: -2 }}
                    >
                        <Link href="/projects">
                            <Button className='bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-medium rounded flex items-center gap-1'>
                                View All Projects
                                <ExternalLink className="w-4 h-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard
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
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;