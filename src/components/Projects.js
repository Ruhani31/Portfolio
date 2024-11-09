import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="project-cards">
        
        <div className="project-card">
          <h3>Travel Itinerary Generator | Globetrotters</h3>
          <p><strong>Duration:</strong> Feb 2024 - May 2024</p>
          <p>
            Developed an intelligent travel planning tool that generates customized itineraries based on user preferences. 
            Integrated OpenAI, Gemini, and Claude APIs to provide users with personalized travel suggestions, streamlining 
            the process of creating ideal itineraries. Designed an intuitive interface using HTML, CSS, and JavaScript 
            and implemented RESTful API endpoints to facilitate smooth client-server interactions. Utilized Razorpay API 
            for secure payment processing, and managed data with MySQL to support a seamless user experience.
          </p>
          <p><strong>Technologies:</strong> HTML, CSS, JavaScript, OpenAI, Gemini, Claude APIs, Razorpay API, MySQL</p>
        </div>

        <div className="project-card">
          <h3>Employee Attendance and Payroll System</h3>
          <p><strong>Duration:</strong> Feb 2024 - May 2024</p>
          <p>
            Built a comprehensive attendance and payroll management system to automate HR processes. This system tracks 
            employee attendance, calculates wages accurately, and generates payroll reports, significantly reducing manual 
            work. Implemented a robust backend to manage employee records and attendance, ensuring compliance with local 
            labor regulations. Improved operational efficiency by automating payroll calculations and integrating essential 
            labor law compliance features.
          </p>
          <p><strong>Technologies:</strong> Node.js, Express.js, SQLite, HTML, CSS, JavaScript</p>
        </div>

        <div className="project-card">
          <h3>Electromagnetic Mass Driver</h3>
          <p><strong>Duration:</strong> Aug 2023 - Nov 2023</p>
          <p>
            Engineered an Electromagnetic Mass Driver using Arduino and Hall-effect sensors to achieve precise propulsion 
            control. This project demonstrates the potential of electromagnetic technology in propulsion systems for 
            engineering applications. Integrated control mechanisms for accurate speed and force adjustments, enabling 
            the mass driver to function with high precision and reliability.
          </p>
          <p><strong>Technologies:</strong> Arduino, Hall-effect Sensors, Control Mechanisms</p>
        </div>

        <div className="project-card">
          <h3>Report Card Generator</h3>
          <p><strong>In Progress</strong></p>
          <p>
            Developing an interactive report card generator that allows teachers to drag-and-drop grades, add personalized 
            generative AI-based feedback, and check off qualities for students. The generator produces a detailed, 
            three-page printable report card featuring student information, grades, and teacher comments. This project 
            aims to streamline report creation with user-friendly drag-and-drop functionality and enhance personalization 
            through generative AI integration.
          </p>
          <p><strong>Technologies:</strong> React, Node.js, Express.js, SQLite</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
