import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import projectsCard from './projectsInfo';

const ProjectSection = ({ project }) => (
  <div className="section">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <p className="text-lg mb-4">{project.description}</p>
      {/* Add more project details here */}
    </div>
  </div>
);

const ProjectsDescriptionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialIndex = parseInt(id, 10);

  useEffect(() => {
    if (isNaN(initialIndex) || initialIndex < 0 || initialIndex >= projectsCard.length) {
      navigate('/');
    }
  }, [initialIndex, navigate]);

  return (
    <ReactFullpage
      licenseKey={'YOUR_KEY_HERE'} // Replace with your actual license key
      navigation={true}
      navigationPosition={'right'}
      showActiveTooltip={true}
      scrollingSpeed={1000}
      afterLoad={(origin, destination, direction) => {
        console.log("Loaded section", destination.index);
      }}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          {projectsCard.map((project, index) => (
            <ProjectSection key={index} project={project} />
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default ProjectsDescriptionPage;