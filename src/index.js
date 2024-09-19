import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import FrontPage from './FrontPage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

import './index.css';

const MainPortfolio = () => (
  <ReactFullpage
    licenseKey={'YOUR_KEY_HERE'}
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

const ProjectsDescriptionPage = () => (
  <div>
    <h1>Project Description</h1>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/projects/:id" element={<ProjectsDescriptionPage />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
