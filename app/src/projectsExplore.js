import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import ProjectsPage from "./ProjectsPage";
import ProjectsDescriptionPage from "./ProjectsDescriptionPage";

const ProjectExplore = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProjectsPage />} />
                <Route path="/projectDescription" element={<ProjectDescriptionWrapper />} />
            </Routes>
        </Router>
    );
};

const ProjectDescriptionWrapper = () => {
    const location = useLocation();
    const index = parseInt(location.hash.replace('#', ''), 10);

    return <ProjectsDescriptionPage initialIndex={index} />;
};

export default ProjectExplore;