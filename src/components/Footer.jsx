import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass" style={{ padding: '3rem 2rem', marginTop: 'auto', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <a href="https://github.com/ayushgaur7" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/ayushgaur1/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
          <Linkedin size={24} />
        </a>
        <a href="mailto:ayushgaur023@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
          <Mail size={24} />
        </a>
      </div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Ayush Gaur. All rights reserved.
      </p>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
        Built with React, Vite & Vanilla CSS
      </p>
    </footer>
  );
};

export default Footer;
