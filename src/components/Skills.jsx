import React from 'react';
import { Database, Server, Layout, FileCode2, Coffee, CurlyBraces, Cpu } from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon, color }) => (
  <div className="glass p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300" style={{ padding: '2rem', borderRadius: '1rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: color }}>
      <Icon size={32} />
      <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{title}</h3>
    </div>
    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
      {skills.map((skill) => (
        <li key={skill.name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', borderRadius: '0.5rem', background: 'var(--surface-color)', border: '1px solid var(--border-color)' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: color }}></span>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{skill.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const mernStack = {
    title: 'MERN Stack',
    icon: Database,
    color: '#000000', // Black
    skills: [
      { name: 'MongoDB' },
      { name: 'Express.js' },
      { name: 'React.js' },
      { name: 'Node.js' }
    ]
  };

  const programmingLanguages = {
    title: 'Programming Languages',
    icon: FileCode2,
    color: '#374151', // Slate 700
    skills: [
      { name: 'C' },
      { name: 'C++' },
      { name: 'Java' },
      { name: 'Python' }
    ]
  };

  const otherSkills = {
    title: 'Web Technologies',
    icon: Layout,
    color: '#4b5563', // Slate 600
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript (ES6+)' },
      { name: 'REST APIs' }
    ]
  };

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>
      
      <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
          I've worked with a variety of modern technologies, focusing primarily on full-stack web development and core programming languages.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <SkillCard {...programmingLanguages} />
        <SkillCard {...mernStack} />
        <SkillCard {...otherSkills} />
      </div>

      {/* About Me snippet integrated into the Skills section */}
      <div id="about" className="glass mt-12" style={{ padding: '3rem', borderRadius: '1.5rem', marginTop: '4rem', display: 'flex', flexDirection: 'column', md: { flexDirection: 'row' }, gap: '2rem', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>About Me</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Hi, I'm Ayush! I'm an enthusiastic software developer with a strong foundation in C, C++, and Java. My passion for building dynamic, user-centric web applications led me to master the MERN stack.
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            Whether I'm designing robust backend architectures, crafting intuitive user interfaces, or optimizing code performance, I strive for excellence in every line of code I write.
          </p>
        </div>
        <div style={{ flexShrink: 0, width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--border-color)', position: 'relative' }}>
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--surface-color), var(--surface-hover))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Coffee size={64} style={{ color: 'var(--text-secondary)' }} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
