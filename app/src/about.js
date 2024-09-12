import React from 'react';
import './index.css';

const Skill = ({ name }) => (
  <div className="w-10 h-10 sm:w-20 sm:h-20 rounded-full border-custom border-zinc-900 flex items-center justify-center m-1 sm:m-2">
    <span className="text-zinc-900 text-xs sm:text-sm font-sans">{name}</span> 
  </div>
);

const AboutPage = () => {
  const skills = ['HTML', 'CSS', 'JS', 'PYTHON', 'C', 'C#', 'KOTLIN', 'SQL', 'JAVA', 'AI'];

  return (
    <section className="w-full min-h-screen bg-zinc-100 py-8 font-sans relative">
      <h2 className="text-zinc-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-6 px-4 sm:px-8 text-right">
        About
      </h2>

      <div className="flex flex-col lg:flex-row items-start justify-center px-4 sm:px-8 gap-8">
        <div className="w-full lg:w-1/2 bg-zinc-100 rounded-lg relative">
          <div className="pb-8 text-left lg:text-right">
            <h3 className="text-zinc-900 text-2xl sm:text-3xl font-sans pb-4 lg:pr-8">
              Profile
            </h3>
            <p className="text-zinc-900 text-base sm:text-lg font-sans lg:pr-16">
              Dongyeon Kim (Leo)
            </p>
            <p className="text-zinc-900 text-base sm:text-lg font-sans lg:pr-16">
              2005.07.04
            </p>
            <p className="text-zinc-900 text-base sm:text-lg font-sans lg:pr-16">
              Terre Haute, IN
            </p>
          </div>

          <div className="pb-8 text-left lg:text-right">
            <h3 className="text-zinc-900 text-2xl sm:text-3xl font-sans pb-4 lg:pr-8">
              Skills
            </h3>
            
            <div className="flex flex-wrap justify-start lg:justify-end pr-16">
              {skills.map((skill, index) => (
                <Skill key={index} name={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-zinc-100 rounded-lg relative">
          <div className="pb-4">
            <h3 className="text-zinc-900 text-2xl sm:text-3xl font-sans pb-4 lg:pl-8">
              Education
            </h3>
            <div className='pb-8'>
              <p className="text-zinc-900 text-lg sm:text-xl font-sans lg:pl-16">
                Rose-Hulman Institute of Technology
              </p>
              <p className="text-zinc-900 text-xs sm:text-sm font-sans lg:pl-16 pb-2">
                September 2023 - May 2027
              </p>
              <ul className="text-zinc-900 text-xs sm:text-sm font-sans lg:pl-16 list-disc list-inside">
                <li>Object-Oriented Programming</li>
                <li>Data Structure And Algorithm</li>
                <li>Systems Programming</li>
                <li>Software Project Management</li>
              </ul>
            </div>

            <div>
              <p className="text-zinc-900 text-lg sm:text-xl font-sans lg:pl-16">
                South Pasadena High School
              </p>
              <p className="text-zinc-900 text-xs sm:text-sm font-sans lg:pl-16 pb-2">
                August 2019 - June 2023
              </p>
              <ul className="text-zinc-900 text-xs sm:text-sm font-sans lg:pl-16 list-disc list-inside">
                <li>AP Computer Science A</li>
                <li>AP Calculus AB/BC</li>
                <li>AP Physics I</li>
                <li>AP Chemistry</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;