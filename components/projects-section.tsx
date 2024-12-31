import { fonts } from '@/lib/constants';
import { motion, useInView } from 'motion/react';
import React, { useRef } from 'react';
import ProjectCard from './project-card';
import { Projects } from '@/types/projects';
import { Button } from '@/components/ui/button';

type Props = {
    projects: Projects
}

const ProjectsSection: React.FC<Props> = ({ projects }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="flex items-center justify-center text-white pt-16" ref={ref}>
            <div className="w-full sm:px-6 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-12"
                >
                    <h2 className="text-3xl text-emerald-600 font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{
                        fontFamily: fonts.SpaceGrotesk
                    }}>Projects</h2>
                </motion.div>
                <div className="flex flex-wrap w-full gap-8">
                    {projects.map((project, index) => (
                        <motion.div className="w-full sm:w-1/2 md:w-[31%]" key={index}>
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
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <Button
                        variant="ghost"

                        className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
                    >
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;