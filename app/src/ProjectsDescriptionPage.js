import React, { useEffect, useRef } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const projectDescriptions = [
    { title: 'Project 1', description: 'Description of project 1' },
    { title: 'Project 2', description: 'Description of project 2' },
    { title: 'Project 3', description: 'Description of project 3' },
    { title: 'Project 4', description: 'Description of project 4' },
    { title: 'Project 5', description: 'Description of project 5' },
    { title: 'Project 6', description: 'Description of project 6' },
    { title: 'Project 7', description: 'Description of project 7' },
    { title: 'Project 8', description: 'Description of project 8' }
];

const ProjectSection = ({ project }) => (
    <div className="section">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
            <p className="text-lg mb-4">{project.description}</p>
        </div>
    </div>
);

const ProjectsDescriptionPage = ({ initialIndex = 0 }) => {
    const fullpageApiRef = useRef(null);

    useEffect(() => {
        if (fullpageApiRef.current && initialIndex >= 0 && initialIndex < projectDescriptions.length) {
            fullpageApiRef.current.moveTo(initialIndex + 1);
        }
    }, [initialIndex]);

    return (
        <ReactFullpage
            licenseKey={'YOUR_KEY_HERE'} // Replace with your actual license key
            scrollingSpeed={300}
            navigation={true}
            navigationPosition={'right'}
            showActiveTooltip={true}
            afterLoad={(origin, destination, direction) => {
                console.log("Loaded section", destination.index);
            }}
            render={({ state, fullpageApi }) => {
                fullpageApiRef.current = fullpageApi;

                return (
                    <ReactFullpage.Wrapper>
                        {projectDescriptions.map((project, index) => (
                            <ProjectSection key={index} project={project} />
                        ))}
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
};

export default ProjectsDescriptionPage;