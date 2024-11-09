import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Ruhani Rai Dhamija</h1>
      <p>+91 9996630270 · ruhani.dhamija31@gmail.com</p>
      <p>Proficient in Web Development, Data Analysis, and Coding</p>
      <nav className="nav-buttons">
        <a href="#about" className="nav-button">About Me</a>
        <a href="#skills" className="nav-button">Skills</a>
        <a href="#projects" className="nav-button">Projects</a>
        <a href="#education" className="nav-button">Education</a>
        <a href="#extracurriculars" className="nav-button">Extracurriculars</a>
      </nav>
    </header>
  );
}

export default Header;
