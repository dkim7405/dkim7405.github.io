import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './index.css';

const AboutPage = () => {
  const skills = ['AI', 'ASSEMBLY', 'AWS', 'C', 'C#', 'CSS', 'FIGMA', 'GIT', 'HTML', 'JAVA', 'JS', 'KOTLIN', 'PYTHON', 'REACT', 'SQL', 'UNITY'];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="w-screen min-h-screen bg-zinc-100 flex flex-col p-8 font-normal"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.header variants={itemVariants} className="text-zinc-900 text-lg md:text-xl lg:text-2xl mb-8">
        ABOUT ME
      </motion.header>

      <div className="flex flex-col md:flex-row justify-between flex-grow">
        <motion.div className="md:w-1/2 pr-4 space-y-8" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <h2 className="text-zinc-900 text-3xl md:text-4xl lg:text-5xl mb-4 font-normal">Dongyeon Kim</h2>
            <p className="text-zinc-700 text-lg">(Leo)</p>
            <p className="text-zinc-700 text-lg">2005.07.04</p>
            <p className="text-zinc-700 text-lg">Terre Haute, IN</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-zinc-900 text-2xl mb-2">Skills</h3>
            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="mr-2 mb-2 px-3 py-1 bg-zinc-200 rounded-full text-zinc-700"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "#e4e4e7" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="md:w-1/2 pl-4 space-y-8 mt-8 md:mt-0" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <h3 className="text-zinc-900 text-2xl mb-2">Education</h3>
            <motion.div className="mb-4" variants={itemVariants}>
              <p className="text-zinc-900 text-lg font-normal">Rose-Hulman Institute of Technology</p>
              <p className="text-zinc-700">September 2023 - May 2027</p>
              <ul className="list-disc list-inside text-zinc-700 mt-2">
                <motion.li variants={itemVariants}>Object-Oriented Programming</motion.li>
                <motion.li variants={itemVariants}>Data Structure And Algorithm</motion.li>
                <motion.li variants={itemVariants}>Systems Programming</motion.li>
                <motion.li variants={itemVariants}>Software Project Management</motion.li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-zinc-900 text-lg font-normal">South Pasadena High School</p>
              <p className="text-zinc-700">August 2019 - June 2023</p>
              <ul className="list-disc list-inside text-zinc-700 mt-2">
                <motion.li variants={itemVariants}>AP Computer Science A</motion.li>
                <motion.li variants={itemVariants}>AP Calculus AB/BC</motion.li>
                <motion.li variants={itemVariants}>AP Physics I</motion.li>
                <motion.li variants={itemVariants}>AP Chemistry</motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.footer 
        variants={itemVariants}
        className="text-zinc-900 text-sm md:text-base lg:text-lg text-center mt-8"
      >
        Designer . Developer . Learner
      </motion.footer>
    </motion.div>
  );
};

export default AboutPage;