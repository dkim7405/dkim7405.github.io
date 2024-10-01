import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';

// Pages
import FrontPage from './FrontPage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import ProjectsDescriptionPage from './ProjectsDescriptionPage';

// fullpage.js license key
const FULLPAGE_LICENSE_KEY = 'YOUR_KEY';

// Section --> Renders a fullpage.js section
const Section = ({ anchor, component: Component }) => (
    <div className="section" data-anchor={anchor}>
        <Component />
    </div>
);

// Routing for Project Description
const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<MainPortfolio />} />
            <Route path="/projects/:id" element={<ProjectsDescriptionPage />} />
        </Routes>
    </Router>
);

const MainPortfolio = () => {
    const fullpageApiRef = useRef(null);
    const location = useLocation();
    
    useEffect(() => {
        // Navigate to projects section if URL hash is #projects
        if (location.hash === '#projects' && fullpageApiRef.current)
        {
        fullpageApiRef.current.moveTo('projects');
        }
    }, [location]);
    
    const fullpageOptions = {
        licenseKey: FULLPAGE_LICENSE_KEY,
        scrollingSpeed: 1000,
        anchors: ['home', 'about', 'projects', 'contact'],
    };
    
    return (
        <ReactFullpage
        {...fullpageOptions}
        render={({ state, fullpageApi }) => {
            fullpageApiRef.current = fullpageApi;
    
            return (
            <ReactFullpage.Wrapper>
                <Section anchor="home" component={FrontPage} />
                <Section anchor="about" component={AboutPage} />
                <Section anchor="projects" component={ProjectsPage} />
                <Section anchor="contact" component={ContactPage} />
            </ReactFullpage.Wrapper>
            );
        }}
        />
    );
};

export default App;