import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import FrontPage from './front';
import AboutPage from './about';
import ProjectsPage from './projects';
import ContactPage from './contact.js';

import './index.css';

const Portfolio = () => {

  return (
    <div>
      <FrontPage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Portfolio />);