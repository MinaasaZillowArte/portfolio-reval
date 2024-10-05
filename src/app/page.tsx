// src/app/page.tsx

'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Testimoni from './components/Testimoni'
import Contact from './components/Contact'

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimoni/>
      <Contact/>
    </>
  );
};

export default HomePage;