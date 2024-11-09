import React from 'react';
import Header from './components/Header';
import LottieBackground from './components/LottieBackground';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Extracurriculars from './components/Extracurriculars';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <LottieBackground />
      <Header />
      <div className="content-container">
        <section id="about">
          <AboutMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="extracurriculars">
          <Extracurriculars />
        </section>
      </div>
    </div>
  );
}

export default App;
