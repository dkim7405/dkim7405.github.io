import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import FrontPage from './FrontPage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import ProjectsDescriptionPage from './ProjectsDescriptionPage';

const MainPortfolio = () => {
  const fullpageApiRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#projects' && fullpageApiRef.current) {
      fullpageApiRef.current.moveTo('projects');
    }
  }, [location]);

  return (
    <ReactFullpage
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000}
      anchors={['home', 'about', 'projects', 'contact']}
      render={({ state, fullpageApi }) => {
        fullpageApiRef.current = fullpageApi;
        return (
          <ReactFullpage.Wrapper>
            <div className="section" data-anchor="home">
              <FrontPage />
            </div>
            <div className="section" data-anchor="about">
              <AboutPage />
            </div>
            <div className="section" data-anchor="projects">
              <ProjectsPage />
            </div>
            <div className="section" data-anchor="contact">
              <ContactPage />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPortfolio />} />
      <Route path="/projects/:id" element={<ProjectsDescriptionPage />} />
    </Routes>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;