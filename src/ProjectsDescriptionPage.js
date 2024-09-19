import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projects = {
  1: { title: 'Project 1', description: 'Detailed description of Project 1' },
  2: { title: 'Project 2', description: 'Detailed description of Project 2' },
  // Add more projects as needed
};

const ProjectsDescriptionPage = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-zinc-100 py-8 px-4 sm:px-8 font-sans">
      <Link to="/" className="text-zinc-900 hover:underline mb-4 inline-block">
        &larr; Back to Portfolio
      </Link>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p>{project.description}</p>
      {/* Add more project details here */}
    </div>
  );
};

export default ProjectsDescriptionPage;