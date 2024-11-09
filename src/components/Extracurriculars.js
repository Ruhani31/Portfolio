import React from 'react';
import { motion } from 'framer-motion';

function Extracurriculars() {
  return (
    <motion.section
      id="extracurriculars"
      className="extracurriculars"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Extracurricular Activities</h2>
      <ul>
        <li>
          <strong>Volunteer at REVERB SIT & SYMBITECH:</strong> 
          Contributed to design and decor for major events, enhancing the atmosphere and experience.
        </li>
        <li>
          <strong>Google Developer Students Club (Design Lead):</strong> 
          Led design initiatives, focusing on creative visuals and a strong digital presence.
        </li>
        <li>
          <strong>Brushes To Pixels Club (Design Lead):</strong> 
          Managed design projects, collaborating on artworks and visual storytelling.
        </li>
        <li>
          <strong>AR/VR Club (Design Lead):</strong> 
          Spearheaded design efforts, creating engaging and immersive digital experiences.
        </li>
        <li>
          <strong>TED MUN Club (Member):</strong> 
          Participated in discussions and organized events, supporting the club’s mission of intellectual exchange.
        </li>
        <li>
          <strong>Editorial Team of Computer Science Department:</strong> 
          Contributed articles, design layouts, and editorial decisions for departmental publications.
        </li>
      </ul>
    </motion.section>
  );
}

export default Extracurriculars;
