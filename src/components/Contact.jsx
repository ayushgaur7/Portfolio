import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the email fields
    const targetEmail = 'ayushgaur023@gmail.com';
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    // Open the default mail client with pre-filled details
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    
    // Show a small confirmation and clear the form
    alert('Preparing your email client...');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'ayushgaur023@gmail.com', href: 'mailto:ayushgaur023@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/ayushgaur7', href: 'https://github.com/ayushgaur7' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/ayushgaur1', href: 'https://www.linkedin.com/in/ayushgaur1/' },
  ];

  const inputStyle = (field) => ({
    width: '100%',
    padding: '0.9rem 1rem',
    borderRadius: '0.75rem',
    border: `1px solid ${focusedField === field ? 'var(--primary-color)' : 'var(--border-color)'}`,
    background: 'var(--surface-color)',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    boxShadow: focusedField === field ? '0 0 0 3px var(--primary-glow)' : 'none',
  });

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>

      <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Have a project in mind or just want to chat? Feel free to reach out — I'd love to hear from you!
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3rem',
        maxWidth: '960px',
        margin: '0 auto'
      }}>
        {/* Contact Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontFamily: 'Outfit, sans-serif', marginBottom: '0.5rem' }}>
            <span className="gradient-text">Let's Connect</span>
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateX(8px)';
                  e.currentTarget.style.borderColor = 'var(--primary-color)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '0.5rem',
                  background: 'var(--primary-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={20} color="#fff" />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '2px' }}>{label}</p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500 }}>{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="glass" style={{
          padding: '2.5rem',
          borderRadius: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <MessageSquare size={24} style={{ color: 'var(--primary-color)' }} />
            <h3 style={{ fontSize: '1.3rem', fontFamily: 'Outfit, sans-serif' }}>Send a Message</h3>
          </div>

          <div>
            <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              placeholder="John Doe"
              required
              style={inputStyle('name')}
            />
          </div>

          <div>
            <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
              Your Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              placeholder="john@example.com"
              required
              style={inputStyle('email')}
            />
          </div>

          <div>
            <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              placeholder="Tell me about your project..."
              required
              rows={5}
              style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '120px' }}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{
            width: '100%',
            justifyContent: 'center',
            marginTop: '0.5rem',
            fontSize: '1rem',
            padding: '1rem'
          }}>
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
