import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaKaggle, FaGithub } from 'react-icons/fa';

const skills = [
  { emoji: '👁️', title: 'Computer Vision',        desc: 'OpenCV · YOLO · Object Detection · Image Processing' },
  { emoji: '🤖', title: 'Machine Learning & AI',   desc: 'Python · NumPy · Pandas · Scikit-learn · TensorFlow · MATLAB' },
  { emoji: '⚙️', title: 'Embedded & Automation',   desc: 'C · C++ · Microcontrollers · Automation Systems' },
  { emoji: '🌐', title: 'Frontend Development',    desc: 'JavaScript · HTML · CSS · Responsive Design' },
  { emoji: '🧠', title: 'Prompt Engineering',      desc: 'LLM integration · AI-assisted product development' },
  { emoji: '📊', title: 'Data Engineering',        desc: 'Data Pipelines · SQL · Analysis · Visualization' },
];

const projects = [
  { emoji: '🚗', title: 'Autonomous Vehicle Vision',   desc: 'Real-time object detection with YOLO for autonomous driving.' },
  { emoji: '🎯', title: 'ML Recommendation System',    desc: 'Collaborative & content-based filtering recommendation engine.' },
  { emoji: '🧠', title: 'LLM Prompt Engineering',      desc: 'Optimizing prompts for accuracy and task alignment.' },
  { emoji: '⚙️', title: 'Automation Optimization',     desc: 'Process scheduling to reduce cycle time in industrial systems.' },
  { emoji: '📚', title: 'RAG Pipeline',                desc: 'Document Q&A with vector search and LLM backends.' },
];

const experience = [
  {
    role: 'Software Engineer',
    company: 'Toren Gıda San. ve Tic. A.Ş.',
    period: '2025 – 2026',
    location: 'Gaziantep, Turkey',
    bullets: [
      'Developed software for maintenance and automation engineering operations.',
      'Designed automation workflows to improve efficiency and reduce manual intervention.',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'Linka Technology',
    period: '2024',
    location: 'Turkey',
    bullets: [
      'Built responsive UIs using modern JavaScript frameworks.',
      'Applied prompt engineering and integrated data science into frontend products.',
    ],
  },
];

const socials = [
  { href: 'https://www.kaggle.com/cihanivit',                                   icon: <FaKaggle    size={20} color="#FF9B51" />, label: 'Kaggle'    },
  { href: 'https://www.linkedin.com/in/cihan-civit-56b182246/',                 icon: <FaLinkedin  size={20} color="#FF9B51" />, label: 'LinkedIn'  },
  { href: 'https://www.instagram.com/cihancivit.exe/?igsh=cG1jcTZ6dHJzeGRh',   icon: <FaInstagram size={20} color="#FF9B51" />, label: 'Instagram' },
  { href: 'https://github.com/CivitCihan',                                       icon: <FaGithub    size={20} color="#FF9B51" />, label: 'GitHub'    },
];

const HomePage = () => (
  <div style={styles.page}>

    {/* ── Header ── */}
    <header style={styles.header}>
      <div style={styles.avatarRing}>
        <Image src="/profile.png" alt="Profile" width={110} height={110} style={styles.avatar} />
      </div>
      <h1 style={styles.name}>Cihan Çivit</h1>
      <p style={styles.role}>Software Engineer · Machine Learning Engineer</p>
      <p style={styles.location}>📍 Gaziantep, Turkey</p>
    </header>

    {/* ── Bio ── */}
    <p style={styles.bio}>
      Software developer with hands-on experience in{' '}
      <span style={styles.accent}>data analytics</span>,{' '}
      <span style={styles.accent}>computer vision</span>, and{' '}
      <span style={styles.accent}>machine learning</span>. Proficient in Python, JavaScript, C, and C++.
      Focused on building data-driven and optimized solutions.
    </p>

    {/* ── Experience ── */}
    <section style={styles.section}>
      <p style={styles.sectionLabel}>EXPERIENCE</p>
      <div style={styles.expList}>
        {experience.map((e, i) => (
          <div key={i} style={styles.expCard}>
            <div style={styles.expHeader}>
              <div>
                <p style={styles.expRole}>{e.role}</p>
                <p style={styles.expCompany}>{e.company}</p>
              </div>
              <div style={styles.expMeta}>
                <p style={styles.expPeriod}>{e.period}</p>
                <p style={styles.expLocation}>{e.location}</p>
              </div>
            </div>
            <ul style={styles.expBullets}>
              {e.bullets.map((b, j) => (
                <li key={j} style={styles.expBullet}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* ── Skills ── */}
    <section style={styles.section}>
      <p style={styles.sectionLabel}>TECHNICAL SKILLS</p>
      <div style={styles.grid}>
        {skills.map((s, i) => (
          <div key={i} style={styles.card}>
            <span style={styles.cardEmoji}>{s.emoji}</span>
            <p style={styles.cardTitle}>{s.title}</p>
            <p style={styles.cardDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── Projects ── */}
    <section style={styles.section}>
      <p style={styles.sectionLabel}>PROJECTS</p>
      <div style={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} style={styles.card}>
            <span style={styles.cardEmoji}>{p.emoji}</span>
            <p style={styles.cardTitle}>{p.title}</p>
            <p style={styles.cardDesc}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── CTA ── */}
    <div style={styles.ctaRow}>
      <Link href="/github" style={styles.ctaSecondary}>GitHub Repositories →</Link>
      <Link href="/cv"     style={styles.ctaPrimary}>View CV →</Link>
    </div>

    {/* ── Footer ── */}
    <footer style={styles.footer}>
      {socials.map((s, i) => (
        <Link key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
          {s.icon}
          <span style={styles.socialLabel}>{s.label}</span>
        </Link>
      ))}
    </footer>

  </div>
);

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#EAEFEF',
    padding: '72px 24px 0',
    gap: '48px',
  },

  /* header */
  header:   { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' },
  avatarRing: { width: '110px', height: '110px', borderRadius: '50%', border: '3px solid #FF9B51', overflow: 'hidden', flexShrink: 0 },
  avatar:   { display: 'block', width: '110px', borderRadius: '50%', height: '110px', objectFit: 'cover' },
  name:     { fontSize: '28px', fontWeight: '700', color: '#25343F', margin: 0 },
  role:     { fontSize: '12px', fontWeight: '600', color: '#FF9B51', letterSpacing: '1px', textTransform: 'uppercase', margin: 0, textAlign: 'center' },
  location: { fontSize: '12px', color: '#25343F', margin: 0, opacity: 0.6 },

  /* bio */
  bio:    { fontSize: '15px', color: '#25343F', lineHeight: '1.75', textAlign: 'center', maxWidth: '560px', margin: 0, opacity: 0.85 },
  accent: { color: '#FF9B51', fontWeight: '600' },

  /* shared section */
  section:      { width: '100%', maxWidth: '700px', display: 'flex', flexDirection: 'column', gap: '14px' },
  sectionLabel: { fontSize: '11px', fontWeight: '700', color: '#FF9B51', letterSpacing: '2px', margin: 0 },

  /* experience */
  expList:    { display: 'flex', flexDirection: 'column', gap: '12px' },
  expCard:    { backgroundColor: '#BFC9D1', borderRadius: '10px', padding: '18px 20px', borderLeft: '3px solid #FF9B51' },
  expHeader:  { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' },
  expRole:    { fontSize: '14px', fontWeight: '700', color: '#25343F', margin: 0 },
  expCompany: { fontSize: '13px', color: '#25343F', margin: '2px 0 0', opacity: 0.75 },
  expMeta:    { textAlign: 'right' },
  expPeriod:  { fontSize: '12px', fontWeight: '600', color: '#FF9B51', margin: 0 },
  expLocation:{ fontSize: '11px', color: '#25343F', margin: '2px 0 0', opacity: 0.6 },
  expBullets: { margin: 0, paddingLeft: '18px' },
  expBullet:  { fontSize: '12px', color: '#25343F', lineHeight: '1.6', opacity: 0.8, marginBottom: '4px' },

  /* skills grid */
  grid:      { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' },
  card:      { backgroundColor: '#BFC9D1', borderRadius: '10px', padding: '18px 16px', borderTop: '3px solid #FF9B51', display: 'flex', flexDirection: 'column', gap: '6px' },
  cardEmoji: { fontSize: '18px' },
  cardTitle: { fontSize: '13px', fontWeight: '700', color: '#25343F', margin: 0 },
  cardDesc:  { fontSize: '11px', color: '#25343F', margin: 0, opacity: 0.7, lineHeight: '1.5' },

  /* cta */
  ctaRow: { display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaSecondary: {
    display: 'inline-block', padding: '11px 22px',
    backgroundColor: '#25343F', color: '#EAEFEF',
    borderRadius: '6px', fontWeight: '600', fontSize: '14px',
    textDecoration: 'none', border: '1px solid #FF9B51',
  },
  ctaPrimary: {
    display: 'inline-block', padding: '11px 22px',
    backgroundColor: '#FF9B51', color: '#25343F',
    borderRadius: '6px', fontWeight: '700', fontSize: '14px',
    textDecoration: 'none',
  },

  /* footer */
  footer: {
    width: '100%', backgroundColor: '#25343F',
    display: 'flex', justifyContent: 'center',
    gap: '40px', padding: '22px 24px',
    flexWrap: 'wrap', marginTop: 'auto',
  },
  socialLink:  { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', textDecoration: 'none' },
  socialLabel: { fontSize: '11px', color: '#BFC9D1', fontWeight: '500', letterSpacing: '0.5px' },
};

export default HomePage;