import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

import ProjectInfo from './ProjectInfo';

import './index.css';

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-zinc-200 rounded-lg shadow-md transition-all h-full flex flex-col"
    >
      <Link to={`/projects/${project.id}`} className="block flex-grow">
        {!imageError ? (
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-48 object-cover" 
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-48 bg-zinc-300 flex items-center justify-center">
            <span className="text-zinc-600 text-lg">{project.name}</span>
          </div>
        )}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-zinc-900 text-xl font-normal mb-2 truncate">{project.name}</h3>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span key={index} className="text-zinc-600 text-xs font-normal py-1 px-2 bg-zinc-300 rounded-full whitespace-nowrap">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.section
      ref={ref}
      className="w-full min-h-screen bg-zinc-100 py-16 font-normal overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={itemVariants}
          className="text-zinc-900 text-4xl md:text-5xl lg:text-6xl mb-12 text-center font-normal"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ProjectInfo.map(project => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsPage;