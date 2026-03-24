import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DotGrid from './components/DotGrid';

function App() {
  return (
    <div className="app-container">
      {/* Animated background */}
      <div className="dark-hero-wrapper">
        <Navbar />
        <Hero />
      </div>

      <main>
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
