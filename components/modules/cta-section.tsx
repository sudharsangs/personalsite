import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Mail, Calendar } from 'lucide-react';
import { fonts } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5" ref={ref}>
            {/* Background decorative elements */}
            <motion.div 
                className="absolute top-1/4 right-10 w-80 h-80 bg-gradient-to-br from-primary/8 to-accent/6 rounded-full blur-3xl"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <motion.div 
                className="absolute bottom-1/4 left-10 w-96 h-96 bg-gradient-to-tr from-accent/8 to-primary/6 rounded-full blur-3xl"
                animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl mx-auto"
                >
                    <motion.h2 
                        className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
                        style={{ fontFamily: fonts.PlayfairDisplay }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Ready to Build Something
                        <span className="text-primary"> Exceptional</span>?
                    </motion.h2>
                    
                    <motion.p 
                        className="text-xl text-muted-foreground mb-10 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Let&apos;s collaborate on your next project. I bring technical expertise, 
                        creative problem-solving, and a passion for delivering outstanding results.
                    </motion.p>

                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className='w-full sm:w-auto'>
                            <Button 
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 group w-full" 
                                onClick={() => window.open("https://cal.com/sudharsangs/30min", "_blank")}
                            >
                                <Calendar className="w-5 h-5 mr-2" />
                                Schedule a Call
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className='w-full sm:w-auto'>
                            <Button 
                                variant="outline"
                                className="bg-white/80 backdrop-blur-sm border-2 border-primary/30 text-primary hover:bg-gray-500 hover:text-white hover:border-gray-500 transition-all duration-300 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl text-base w-full"
                                onClick={() => window.location.href = "mailto:sudharsangs.99@gmail.com"}
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                Send Email
                            </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className='w-full sm:w-auto'>
                            <Link href="/projects">
                                <Button 
                                    variant="ghost"
                                    className="text-muted-foreground hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-gray-500 hover:text-gray-500 transition-all duration-300 px-8 py-4 rounded-xl font-semibold text-base w-full"
                                >
                                    View My Work
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Stats or testimonial placeholder */}
                    <motion.div 
                        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">5+</div>
                            <div className="text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-accent mb-2">20+</div>
                            <div className="text-muted-foreground">Projects Delivered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                            <div className="text-muted-foreground">Client Satisfaction</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;