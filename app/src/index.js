import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ChevronDown } from 'lucide-react';

import ProjectsPage from './projects';

import './index.css';

const FrontPage = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowArrow(scrollPosition < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-screen h-screen bg-zinc-900 flex flex-col p-8 font-sans">
      <header className="text-zinc-100 text-lg md:text-xl lg:text-2xl mb-auto">
        DONGYEON KIM
      </header>

      <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 lg:space-y-8 pb-48">
        <p className="text-zinc-100 text-sm md:text-base lg:text-lg text-center">
          Designer . Developer . Learner
        </p>

        <h1 className="text-zinc-100 text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
          A Sophomore Computer Science Student
        </h1>

        <p className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center"
          style={{ WebkitTextStroke: '1px #f4f4f5' }}
        >
          Rose-Hulman Institute of Technology
        </p>

        {showArrow && (
          <ChevronDown
            className="animate-bounce text-zinc-100 absolute bottom-8 transition-opacity duration-300 ${showArrow ? 'opacity-100' : 'opacity-0'}"
            size={32}
          />
        )}
      </div>
    </div>
  );
}

const Portfolio = () => {
  return (
    <div>
      <FrontPage />
      <ProjectsPage />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Portfolio />);