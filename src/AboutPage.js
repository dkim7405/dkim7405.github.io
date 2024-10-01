import React from 'react';
import './index.css';

const AboutPage = () => {
    const skills = ['AI', 'ASSEMBLY', 'AWS', 'C', 'C#', 'CSS', 'FIGMA', 'GIT', 'HTML', 'JAVA', 'JS', 'KOTLIN', 'PYTHON', 'REACT', 'SQL', 'UNITY'];

    const SkillTag = ({ skill }) => (
        <span className="mr-2 mb-2 px-3 py-1 bg-zinc-200 rounded-full text-zinc-700 hover:bg-zinc-300 transition-colors">
            {skill}
        </span>
    );

    const EducationItem = ({ institution, period, courses }) => (
        <div className="mb-4">
            <p className="text-zinc-900 text-lg font-normal">{institution}</p>
            <p className="text-zinc-700">{period}</p>
            <ul className="list-disc list-inside text-zinc-700 mt-2">
                {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="w-screen min-h-screen bg-zinc-100 flex flex-col p-8 font-normal">
            <header className="text-zinc-900 text-lg md:text-xl lg:text-2xl mb-8">
                ABOUT ME
            </header>

            <div className="flex flex-col md:flex-row justify-between flex-grow">
                <div className="md:w-1/2 pr-4 space-y-8">
                    <div>
                        <h2 className="text-zinc-900 text-3xl md:text-4xl lg:text-5xl mb-4 font-normal">Dongyeon Kim</h2>
                        <p className="text-zinc-700 text-lg">(Leo)</p>
                        <p className="text-zinc-700 text-lg">2005.07.04</p>
                        <p className="text-zinc-700 text-lg">Terre Haute, IN</p>
                    </div>

                    <div>
                        <h3 className="text-zinc-900 text-2xl mb-2">Skills</h3>
                        <div className="flex flex-wrap">
                            {skills.map((skill, index) => (
                                <SkillTag key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 pl-4 space-y-8 mt-8 md:mt-0">
                    <div>
                        <h3 className="text-zinc-900 text-2xl mb-2">Education</h3>
                        <EducationItem
                            institution="Rose-Hulman Institute of Technology"
                            period="September 2023 - May 2027"
                            courses={[
                                "Object-Oriented Programming",
                                "Data Structure And Algorithm",
                                "Systems Programming",
                                "Software Project Management"
                            ]}
                        />
                        <EducationItem 
                            institution={"South Pasadena High School"}
                            period={"August 2019 - June 2023"}
                            courses={[
                                "AP Computer Science",
                                "AP Calculus",
                                "AP Physics",
                                "AP Chemistry"
                            ]}
                        />
                    </div>
                </div>
            </div> 

            <footer className="text-zinc-900 text-base md:text-lg lg:text-xl mt-8 text-center">
                Designer . Developer . Learner
            </footer>
        </div>
    );
};

export default AboutPage;