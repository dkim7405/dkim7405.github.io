import React from 'react';
import { Link } from 'react-router-dom';

import ProjectInfo from './ProjectInfo';

import './index.css';

const ProjectCard = ({ project }) => (
    <div className="bg-zinc-100 rounded-lg shadow-md transition-all duration-300 ease-in-out h-full flex flex-col hover:scale-105 hover:shadow-lg">
        <Link to={`/projects/${project.id}`} className="block flex-grow">
        <div className="overflow-hidden rounded-t-lg">
            <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110" 
            />
        </div>
        <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-zinc-900 text-xl font-normal mb-2 truncate transition-colors duration-300 ease-in-out">
            {project.name}
            </h3>
            <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
                <span 
                key={index} 
                className="text-zinc-900 text-xs font-normal py-1 px-2 bg-zinc-200 rounded-full whitespace-nowrap hover:bg-zinc-300"
                >
                {skill}
                </span>
            ))}
            </div>
        </div>
        </Link>
    </div>
);

const ProjectsPage = () => (
    <section className="w-full min-h-screen bg-zinc-100 py-16 font-normal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-zinc-900 text-4xl md:text-5xl lg:text-6xl mb-12 text-center font-normal">
            Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ProjectInfo.map(project => (
            <ProjectCard key={project.id} project={project} />
            ))}
        </div>
        </div>
    </section>
);

export default ProjectsPage;