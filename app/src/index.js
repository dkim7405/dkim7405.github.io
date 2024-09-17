import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import FrontPage from './front';
import AboutPage from './about';
import ProjectsPage from './ProjectsPage';
import ContactPage from './contact.js';
import ProjectsDescriptionPage from './ProjectsDescriptionPage';

import './index.css';

const MainPortfolio = () => (
  <ReactFullpage
    licenseKey={'YOUR_KEY_HERE'} // Replace with your actual license key
    scrollingSpeed={1000}
    render={({ state, fullpageApi }) => (
      <ReactFullpage.Wrapper>
        <div className="section">
          <FrontPage />
        </div>
        <div className="section">
          <AboutPage />
        </div>
        <div className="section">
          <ProjectsPage />
        </div>
        <div className="section">
          <ContactPage />
        </div>
      </ReactFullpage.Wrapper>
    )}
  />
);

const Portfolio = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPortfolio />} />
      <Route path="/projects/:id" element={<ProjectsDescriptionPage />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Portfolio />);