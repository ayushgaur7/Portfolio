import React from 'react';
import { Play, Github, Linkedin, Mail, Twitter, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      padding: '0 8%',
      paddingTop: '100px', // Extra padding for navbar height
      paddingBottom: '0'
    }}>
      {/* Left Content Area */}
      <div className="animate-fade-in" style={{ flex: 1, zIndex: 10, maxWidth: '600px', paddingBottom: '4rem' }}>
        <p style={{ 
          fontSize: '1.4rem', 
          color: '#fff', 
          marginBottom: '0', 
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400
        }}>
          Full Stack Developer
        </p>
        <h1 style={{ 
          fontSize: 'clamp(3.5rem, 8vw, 6rem)', 
          fontWeight: 900,
          color: '#fff',
          fontFamily: 'Outfit, sans-serif',
          lineHeight: '1.05',
          margin: '0.5rem 0 3.5rem 0',
          letterSpacing: '-1px'
        }}>
          Ayush Gaur
        </h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {/* Circular Play Button */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '2px solid rgba(251, 192, 45, 0.3)',
            backgroundColor: 'rgba(251, 192, 45, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}>
              <Play size={22} color="var(--primary-color)" style={{ marginLeft: '4px' }} fill="var(--primary-color)" />
            </div>
          </div>

          {/* Resume Button */}
          <a 
            href="/Ayush%20Gaur%20Cv.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2rem',
              backgroundColor: 'transparent',
              border: '2px solid var(--primary-color, #fbc02d)',
              color: '#fff',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-color, #fbc02d)';
              e.currentTarget.style.color = '#1a1a1a';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#fff';
            }}
          >
            <Download size={20} />
            <span>View Resume</span>
          </a>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="animate-fade-in" style={{ 
        flex: 1, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100%', 
        position: 'absolute',
        right: '10%',
        zIndex: 5,
        animationDelay: '0.2s',
        opacity: 0,
        animationFillMode: 'forwards'
      }}>
        <img 
          src="/profile.png" 
          alt="Ayush Gaur" 
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '8px solid var(--primary-color)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>

      {/* Floating Social Icons */}
      <div style={{
        position: 'absolute',
        right: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        zIndex: 20
      }}>
        {[
          { icon: Github, link: 'https://github.com/ayushgaur7' },
          { icon: Twitter, link: '#' },
          { icon: Linkedin, link: 'https://www.linkedin.com/in/ayushgaur1/' },
          { icon: Mail, link: 'mailto:ayushgaur023@gmail.com' }
        ].map((social, i) => (
          <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" style={{
            width: '36px',
            height: '36px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1a1a1a',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary-color)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
            e.currentTarget.style.color = '#1a1a1a';
          }}
          >
            <social.icon size={18} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
