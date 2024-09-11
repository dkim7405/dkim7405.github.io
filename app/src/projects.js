import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

import './index.css';

const projectsCard = [
    { name: 'Project 1', img: './image/project1.png'},
    { name: 'Project 2', img: './image/project2.png'},
    { name: 'Project 3', img: './image/project3.png'},
    { name: 'Project 4', img: './image/project4.png'},
    { name: 'Project 5', img: './image/project5.png'},
    { name: 'Project 6', img: './image/project6.png'}
];

const ProjectsPage = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const elementOn = scrollRef.current;

        if(elementOn)
        {
            const onWheel = (e) => {
                if (e.deltaY > 0) { return; }

                e.preventDefault();
                elementOn.scrollTo({
                    left: elementOn.scrollLeft + e.deltaX,
                    behavior: 'smooth'
                });
            };

            elementOn.addEventListener('wheel', onWheel);

            return () => elementOn.removeEventListener('wheel', onWheel);
        }
    }, []);

    return (
        <section className="w-full h-screen bg-zinc-100 pb-8 pt-8 font-sans snap-start">
            <h2 className="text-zinc-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-6 pb-10 pl-8 pr-8">
                Projects
            </h2>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto space-x-6 pb-8 pl-4 pr-4 bg-zinc-100 scrollbar-hide">
                    { projectsCard.map((project, index) => (
                        <div key={index} className="flex-shrink-0 w-72 h-96 bg-zinc-500 rounded-lg overflow-hidden relative group">
                            <img src={project.img} alt={project.name} className="w-full h-full object-cover"/>

                            <div className="absolute h-full bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-800 to-transparent p-2">
                                <h3 className="text-zinc-100 text-lg font-sans absolute bottom-8 left-4">
                                    {project.name}
                                </h3>
                            </div>

                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform-opacity duration-300">
                                <div className="w-12 h-12 rounded-full border-2 border-zinc-100 flex items-center justify-center">
                                    <ArrowRight className="text-zinc-100" size={24}/>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default ProjectsPage;