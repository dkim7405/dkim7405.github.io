import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import ProjectInfo from './ProjectInfo';

import './index.css';

const FullScreenMessage = ({ message }) => (
    <div className="w-screen min-h-screen bg-zinc-100 flex items-center justify-center font-normal">
        <p className="text-zinc-900 text-xl">{message}</p>
    </div>
);

const BackButton = ({ onClick }) => (
    <motion.button
        onClick={onClick}
        className="text-zinc-700 hover:text-zinc-900 transition-colors text-sm mb-8 flex items-center"
        whileHover={{ x: -5 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Projects
    </motion.button>
);  

const ProjectHeader = ({ project }) => (
    <div className="space-y-4">
        <h1 className="text-zinc-900 text-4xl font-normal">{project.name}</h1>
        <p className="text-zinc-700 text-lg">{project.type} | {project.date}</p>
        <p className="text-zinc-900 text-lg">{project.role}</p>
    </div>
);

const ImageSlider = ({ images, currentIndex, onNext, onPrev }) => (
    <div className="relative mb-12 w-full max-w-[800px] mx-auto overflow-hidden bg-zinc-200 rounded-lg shadow-md" style={{ aspectRatio: '800/600' }}>
        <img
            src={images[currentIndex].src}
            alt={images[currentIndex].caption}
            className="absolute top-0 left-0 w-full h-full object-contain"
        />

        <ImageCaption caption={images[currentIndex].caption} index={currentIndex} total={images.length} />
        <ImageNavigationButtons onPrev={onPrev} onNext={onNext} />
    </div>
);

const ImageCaption = ({ caption, index, total }) => (
    <div className="absolute bottom-0 left-0 right-0 bg-zinc-800 bg-opacity-50 text-zinc-100 p-4">
        <p className="text-sm">{caption}</p>
        <p className="text-xs mt-1">{`${index + 1} / ${total}`}</p>
    </div>
);

const ImageNavigationButtons = ({ onPrev, onNext }) => (
    <div className="absolute top-0 bottom-0 flex items-center justify-between w-full">
        <NavigationButton onClick={onPrev} direction="prev" />
        <NavigationButton onClick={onNext} direction="next" />
    </div>
);

const NavigationButton = ({ onClick, direction }) => (
    <button
        onClick={onClick}
        className={`bg-zinc-800 bg-opacity-50 text-zinc-100 p-2 rounded-${direction === 'prev' ? 'r' : 'l'}-lg transition-opacity duration-300 hover:bg-opacity-75 focus:outline-none`}
        aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} image`}
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={direction === 'prev' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
        </svg> 
    </button>     
);

const ProjectDetails = ({ project }) => (
    <div className="mb-8">
        <h2 className="text-zinc-900 text-2xl mb-4 font-normal">Description</h2>
        <p className="text-zinc-700 text-lg">{project.description}</p>
    </div>
);

const ProjectSkills = ({ skills }) => (
    <div className="mb-8">
        <h2 className="text-zinc-900 text-2xl mb-4 font-normal">Skills</h2>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span key={index} className="text-zinc-900 text-xs font-normal py-1 px-2 bg-zinc-200 rounded-full whitespace-nowrap hover:bg-zinc-300">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const DevelopmentSections = ({ sections }) => (
    <div>
        <h2 className="text-zinc-900 text-2xl mb-4 font-normal">Development Process</h2>
        {sections.map((section, index) => (
            <Section key={index} section={section} />
        ))}
    </div>
);

const Section = ({ section }) => (
    <div className="mb-8">
        <h3 className="text-zinc-900 text-xl font-normal mb-4">{section.title}</h3>
        <ul className="list-disc list-inside text-zinc-700">
            {section.descriptions.map((description, index) => (
                <li key={index} className="mb-2">{description}</li>
            ))}
        </ul>
    </div>
);

const ProjectDescriptionPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchProject = () => {
            setLoading(true);
            const foundProject = ProjectInfo.find(p => p.id === parseInt(id));
            setProject(foundProject);
            setLoading(false);
            window.scrollTo(0, 0);
        };

        fetchProject();
    }, [id]);

    const handleBack = () => navigate('/#projects');
    const nextImage = () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.imagesList.length);
    const prevImage = () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.imagesList.length) % project.imagesList.length);

    if (loading) return <FullScreenMessage message="Loading project..." />;
    if (!project) return <FullScreenMessage message="Project not found" />;

    return (
        <div className="w-screen min-h-screen bg-zinc-100 flex flex-col p-8 font-normal">

            <BackButton onClick={handleBack} />

            <div className="flex flex-col md:flex-row justify-between flex-grow">
                <div className="md:w-1/2 pr-4 space-y-8">
                    <ProjectHeader project={project} />
                    <ImageSlider
                        images={project.imagesList}
                        currentIndex={currentImageIndex}
                        onNext={nextImage}
                        onPrev={prevImage}
                    />
                </div>

                <div className="md:w-1/2 pl-4 space-y-8 mt-8 md:mt-0">
                    <ProjectDetails project={project} />
                    <ProjectSkills skills={project.skills || []} />
                    {project.development && <DevelopmentSections sections={project.development} />}
                </div>
            </div>
        </div>
    );
};

export default ProjectDescriptionPage;