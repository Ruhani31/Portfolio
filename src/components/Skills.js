import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Technical Skills</h2>
      <ul>
        <li>Languages: Java, C/C++, Python, Prolog, Shell Script (Basics)</li>
        <li>Tools: Git, Arduino</li>
        <li>Areas of Expertise: Data Analysis, Web Development, Generative AI, Algorithm Development</li>
      </ul>
    </motion.section>
  );
}

export default Skills;
