import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import FrontPage from './front';
import AboutPage from './about';
import ProjectsPage from './projects';
import ContactPage from './contact.js';

import './index.css';

const Portfolio = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'YOUR_KEY_HERE'} // Get your license key from https://alvarotrigo.com/fullPage/pricing/
    scrollingSpeed={1000} // Options here

    render={({ state, fullpageApi }) => {
      return (
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
      );
    }}
  />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Portfolio />);