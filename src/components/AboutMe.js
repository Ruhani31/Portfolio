import React from 'react';
import { motion } from 'framer-motion';
import LottieAnimation from './LottieAnimation';

function AboutMe() {
  return (
    <motion.section
      id="aboutme"
      className="aboutme"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <p>
        Hello! I'm Ruhani Rai Dhamija, a passionate Computer Science student with expertise in web development,
        data analysis, and coding. I'm always eager to learn new technologies and develop innovative solutions.
        My journey in technology has led me to work on various interesting projects, from AI-driven applications to
        system automation, and I continue to explore new horizons in the world of tech.
      </p>
      <LottieAnimation />
    </motion.section>
  );
}

export default AboutMe;
