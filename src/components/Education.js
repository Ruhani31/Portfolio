import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  return (
    <motion.section
      id="education"
      className="education"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Education & Certifications</h2>
      <ul>
        <li>Bachelor of Computer Science, Symbiosis Institute of Technology, Pune</li>
        <li>D.A.V Public School, High School (CBSE)</li>
        <li>Certification in Intro to Operating Systems: Memory Management (May 2024)</li>
      </ul>
    </motion.section>
  );
}

export default Education;
