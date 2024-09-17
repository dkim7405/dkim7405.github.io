import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectsPage from "./ProjectsPage";

const ProjectExplore = ({ fullpageApi }) => {
    const navigate = useNavigate();

    const handleCardClick = (index) => {
        navigate(`/project/${index}`);
    };

    return <ProjectsPage onCardClick={handleCardClick} />;
};

export default ProjectExplore;