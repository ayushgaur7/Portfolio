import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certificatesData = [
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL IIT Kharagpur',
    link: 'https://drive.google.com/file/d/1pMZSgFeKlbwuITeCAd-znhll8bFlDZJz/view'
  },
  {
    title: 'Full Stack Web Development (MERN Stack)',
    issuer: 'CipherSchools',
    link: 'https://drive.google.com/file/d/1sHZS0tP-y8M_WOPdoW6BFzkXXNvV74Ns/view'
  },
  {
    title: 'Introduction to Hardware and Operating System',
    issuer: 'IBM',
    link: 'https://drive.google.com/file/d/1e9Bk-2YDuq5gcc94m9vQ8u996ZwucuYd/view'
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google',
    link: 'https://drive.google.com/file/d/1GrtJYhYpNJbm9Qj3gzPPAGJUd3rrsgCH/view'
  },
  {
    title: 'Responsive Web Design Certification',
    issuer: 'Freecodecamp',
    link: 'https://drive.google.com/file/d/1mMwiBmueOZ-fPCFnD7eJ-LJC04KAz_Z8/view'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="section">
      <h2 className="section-title">Certifications</h2>

      <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Continuous learning is key to staying updated. Here are some of the professional certifications I have earned.
        </p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {certificatesData.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass"
            style={{
              padding: '1.5rem 2rem',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(251, 192, 45, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Award color="var(--primary-color)" size={24} />
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>
                  {cert.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  {cert.issuer}
                </p>
              </div>
            </div>

            <ExternalLink size={20} style={{ color: 'var(--text-secondary)' }} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
