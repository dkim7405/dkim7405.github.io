import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectInfo from './ProjectInfo';

const ProjectsDescriptionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const foundProject = ProjectInfo.find(p => p.id === parseInt(id));
    setProject(foundProject);
    setLoading(false);
    window.scrollTo(0, 0);
  }, [id]);

  const handleBack = () => {
    navigate('/#projects');
  };

  if (loading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="min-h-screen bg-white flex items-center justify-center font-sans"
      >
        <p className="text-zinc-900 text-xl">Loading project...</p>
      </motion.div>
    );
  }

  if (!project) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white flex items-center justify-center font-sans"
      >
        <p className="text-zinc-900 text-xl">Project not found</p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white py-16 px-4 sm:px-8 font-sans overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.button
          onClick={handleBack}
          className="text-zinc-400 hover:text-zinc-900 transition-colors text-sm mb-16 flex items-center"
          whileHover={{ x: -5 }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </motion.button>

        <div className="flex flex-col lg:flex-row gap-24">
          <motion.div 
            className="lg:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h1 
              className="text-6xl font-extralight text-zinc-900 mb-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {project.name}
            </motion.h1>
            <motion.div
              className="h-px bg-zinc-200 w-1/4 mb-8"
              initial={{ width: 0 }}
              animate={{ width: '25%' }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <motion.p 
              className="text-zinc-500 mb-6 text-xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {project.type} | {project.date}
            </motion.p>
            <motion.p 
              className="text-zinc-700 mb-12 text-lg leading-relaxed"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {project.description}
            </motion.p>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-light text-zinc-900 mb-4">Role</h2>
              <p className="text-zinc-700 text-lg">{project.role}</p>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <h2 className="text-2xl font-light text-zinc-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="border border-zinc-300 text-zinc-600 px-4 py-2 rounded-full text-sm"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsDescriptionPage;