import React, { useState } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

const projectData = [
  {
    title: 'Explore Local',
    description: 'A comprehensive travel platform that enables users to discover, share, and review unique local travel experiences. Features dynamic community-driven recommendations and interactive exploration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: '#374151',
    github: 'https://github.com/ayushgaur7/Explore-Local',
    live: '#'
  },
  {
    title: 'Carbon footprint tracker',
    description: 'An eco-friendly web application that helps users calculate, track, and reduce their daily carbon emissions. Provides insightful data visualizations and personalized sustainability goals.',
    tags: ['React', 'Express', 'MongoDB', 'Node.js'],
    color: '#374151',
    github: 'https://github.com/ayushgaur7/Carbon-footprint-tracker',
    live: '#'
  },
  {
    title: 'AI Business Adviser',
    description: 'An intelligent platform utilizing artificial intelligence to analyze market trends and provide actionable strategic growth insights for businesses and startups.',
    tags: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
    color: '#374151',
    github: 'https://github.com/ayushgaur7/Ai-Bussiness-Adviser',
    live: '#'
  }
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="glass project-card"
      style={{
        padding: '2rem',
        borderRadius: '1rem',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        borderTop: `3px solid ${project.color}`,
        animation: `fadeIn 0.6s ease forwards`,
        animationDelay: `${index * 0.15}s`,
        opacity: 0,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect on hover */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        background: `radial-gradient(circle at 50% 0%, ${project.color}15, transparent 70%)`,
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <Layers size={28} style={{ color: project.color }} />
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a href={project.github} style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.color = project.color}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <Github size={20} />
            </a>
            <a href={project.live} style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.color = project.color}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', fontFamily: 'Outfit, sans-serif' }}>
          {project.title}
        </h3>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              padding: '0.3rem 0.75rem',
              borderRadius: '2rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              background: `${project.color}18`,
              color: project.color,
              border: `1px solid ${project.color}30`
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>

      <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Here are some of my recent projects that showcase my skills in full-stack development and problem solving.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {projectData.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
