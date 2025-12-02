import React from 'react';
import "@/components/css/PageContainer.css"
import "@/App.css"
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import Experience from '@/components/Experience';

const PageContainer: React.FC = () => {
  return (
    // This is the SCROLL HOST
    <div className="scrollHost"> 
      
      {/* These are the SCROLL TARGETS */}
      <div id="hero" className="page-section">
        <Hero />
      </div>
      
      <div id="about" className="page-section">
        <About />
      </div>
      <div id="experience" className="page-section">
        <Experience />
      </div>
      <div id="projects" className="page-section">
        <Projects />
      </div>

      <div id="contact" className="page-section">
        <Contact />
      </div>
      
    </div>);
}
export default PageContainer;
