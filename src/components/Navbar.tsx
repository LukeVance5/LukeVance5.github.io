import React from 'react';
import '@/components/css/Navbar.css';

export const Navbar = () => {
  return (
    <nav className="sidebar-nav">
      <div className="nav-header">
        <h2>Luke Vance</h2>
      </div>
      <a href="#hero">Welcome</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};
