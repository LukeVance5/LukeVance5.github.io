import React from 'react';
import meURL from '@/assets/images/me.jpg'
import '@/components/css/Hero.css'

export const Hero = () => {
  return (
    <section id="heroInt">
      <h1 id="title">Luke Vance</h1>
      <div className='img-container'>
      <img src={meURL} className='responsive-img'/>
      </div>
      <p className="statement">Physics and Computer Science Graduate from UBC</p>
    </section>
  );
};
