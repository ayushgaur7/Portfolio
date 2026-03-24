import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isScrolled ? '1rem 2rem' : '1.5rem 2rem',
        zIndex: 50,
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#home"
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.75rem', fontWeight: 900, fontFamily: 'Outfit, sans-serif' }}
      >
        <span className="heading-white">AYUSH</span> <span className="text-yellow">GAUR</span>
      </a>

      {/* Desktop Nav */}
      <ul className="nav-links-desktop">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="nav-link"
              style={{ color: '#ffffff', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 600 }}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <button
        className="mobile-toggle"
        style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="mobile-menu" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'center',
          backgroundColor: 'var(--bg-color-main)',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="nav-link"
              style={{ padding: '0.5rem', color: '#fff', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 600 }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
