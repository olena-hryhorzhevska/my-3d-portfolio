/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Front-End Developer specializing in building modern, responsive web applications with
        JavaScript and TypeScript. I work with React and Next.js to create seamless user
        experiences, and leverage Node.js and Express for full-stack solutions. I'm passionate about
        writing clean, maintainable code and turning complex requirements into elegant,
        user-friendly interfaces.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, 'about');
