import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight} from 'lucide-react';
import { motion } from 'framer-motion';

import './index.css';
import projectsCard from './projectsInfo';

const ProjectsPage = () => {
    const scrollRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    useEffect(() => {
        const elementOn = scrollRef.current;

        if(elementOn) {
            const onScroll = () => {
                const scrollWidth = elementOn.scrollWidth - elementOn.clientWidth;
                const progress = elementOn.scrollLeft / scrollWidth;
                setScrollProgress(progress);
                setShowLeftButton(elementOn.scrollLeft > 0);
                setShowRightButton(elementOn.scrollLeft < scrollWidth - 1); // Subtract 1 to account for potential rounding errors
            };

            elementOn.addEventListener('scroll', onScroll);
            return () => elementOn.removeEventListener('scroll', onScroll);
        }
    }, []);

    const scroll = (direction) => {
        const element = scrollRef.current;
        if (element) {
            const scrollAmount = element.clientWidth/10;
            element.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="w-full h-screen bg-zinc-100 pb-8 pt-8 font-sans snap-start relative">
            <h2 className="text-zinc-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-10 pl-8 pr-8">
                Projects
            </h2>

            <div className="relative">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto space-x-6 pb-8 pl-4 pr-4 bg-zinc-100 scrollbar-hide">
                    {projectsCard.map((project, index) => (
                        <div key={index} className="flex-shrink-0 w-72 h-96 bg-zinc-500 rounded-3xl overflow-hidden relative group">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
                            <div className="absolute h-full bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-800 to-transparent p-2">
                                <h3 className="text-zinc-100 text-lg font-sans absolute bottom-8 left-4">
                                    {project.title}
                                </h3>
                            </div>
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-12 h-12 bg-transparent rounded-full border-2 border-zinc-100 flex items-center justify-center hover:bg-zinc-600 transition-colors duration-300">
                                    <ArrowRight className="text-zinc-100" size={24}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {showLeftButton && (
                    <button 
                        onClick={() => scroll('left')}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-zinc-300 hover:bg-zinc-400 transition-colors duration-300 rounded-full p-2"
                    >
                        <ChevronLeft size={24} />
                    </button>
                )}

                {showRightButton && (
                    <button 
                        onClick={() => scroll('right')}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zinc-300 hover:bg-zinc-400 transition-colors duration-300 rounded-full p-2"
                    >
                        <ChevronRight size={24} />
                    </button>
                )}
            </div>
            
            <div className="flex justify-center">
                <div className="flex w-1/3 h-1 bg-zinc-200 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-zinc-900 rounded-full"
                        style={{ 
                            width: '33.33%',
                            x: `${scrollProgress * 200}%`
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;