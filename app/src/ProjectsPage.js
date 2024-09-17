import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import projectsCard from './projectsInfo';

const ProjectCard = ({ project, index, onClick }) => (
  <div
    className="flex-shrink-0 w-72 h-96 bg-zinc-500 rounded-3xl overflow-hidden relative group cursor-pointer"
    onClick={() => onClick(index)}
  >
    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
    <div className="absolute h-full bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-800 to-transparent p-2">
      <h3 className="text-zinc-100 text-lg font-sans absolute bottom-8 left-4">
        {project.title}
      </h3>
    </div>
    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-12 h-12 bg-transparent rounded-full border-2 border-zinc-100 flex items-center justify-center hover:bg-zinc-600 transition-colors duration-300">
        <ArrowRight className="text-zinc-100" size={24} />
      </div>
    </div>
  </div>
);

const ProjectsPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    navigate(`/projects/${index}`);
  };

  return (
    <section className="w-full h-screen bg-zinc-100 pb-8 pt-8 font-sans snap-start relative">
      <h2 className="text-zinc-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-10 pl-8 pr-8">
        Projects
      </h2>
      <div className="flex overflow-x-auto space-x-6 pb-8 pl-4 pr-4 bg-zinc-100 scrollbar-hide">
        {projectsCard.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;