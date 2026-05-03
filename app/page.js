import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaKaggle, FaGithub } from 'react-icons/fa';

const projects = [
  { emoji: '🚗', title: 'Autonomous Vehicle Vision',   desc: 'Real-time object detection with YOLO for autonomous driving.' },
  { emoji: '🎯', title: 'ML Recommendation System',    desc: 'Collaborative & content-based filtering recommendation engine.' },
  { emoji: '🧠', title: 'LLM Prompt Engineering',      desc: 'Optimizing prompts for accuracy and task alignment.' },
  { emoji: '⚙️', title: 'Automation Optimization',     desc: 'Process scheduling to reduce cycle time in industrial systems.' },
  { emoji: '📚', title: 'RAG Pipeline',                desc: 'Document Q&A with vector search and LLM backends.' },
];

const socials = [
  { href: 'https://www.kaggle.com/cihanivit',                                    icon: <FaKaggle size={20} color="#FF9B51" />,    label: 'Kaggle' },
  { href: 'https://www.linkedin.com/in/cihan-civit-56b182246/',                  icon: <FaLinkedin size={20} color="#FF9B51" />,  label: 'LinkedIn' },
  { href: 'https://www.instagram.com/cihancivit.exe/?igsh=cG1jcTZ6dHJzeGRh',    icon: <FaInstagram size={20} color="#FF9B51" />, label: 'Instagram' },
  { href: 'https://github.com/CivitCihan',                                        icon: <FaGithub size={20} color="#FF9B51" />,    label: 'GitHub' },
];

const HomePage = () => (
  <div style={styles.page}>

    {/* ── Header ── */}
    <header style={styles.header}>
      <div style={styles.avatarRing}>
        <Image src="/profile.png" alt="Profile" width={110} height={110} style={styles.avatar} />
      </div>
      <h1 style={styles.name}>Cihan Çivit</h1>
      <p style={styles.role}>AI &amp; ML Engineer · Türkiye</p>
    </header>

    {/* ── Bio ── */}
    <p style={styles.bio}>
      Building intelligent systems across{' '}
      <span style={styles.accent}>computer vision</span>,{' '}
      <span style={styles.accent}>machine learning</span>, and{' '}
      <span style={styles.accent}>LLM pipelines</span>.
    </p>

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
    <Link href="/github" style={styles.cta}>GitHub Repositories →</Link>

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
  header: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' },
  avatarRing: { width: '110px', height: '110px', borderRadius: '50%',border: '3px solid #FF9B51', overflow: 'hidden', flexShrink: 0 },
  avatar: { display: 'block', width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover' },
  name: { fontSize: '28px', fontWeight: '700', color: '#25343F', margin: 0 },
  role: { fontSize: '12px', fontWeight: '600', color: '#FF9B51', letterSpacing: '1.5px', textTransform: 'uppercase', margin: 0 },

  /* bio */
  bio: { fontSize: '16px', color: '#25343F', lineHeight: '1.7', textAlign: 'center', maxWidth: '520px', margin: 0, opacity: 0.85 },
  accent: { color: '#FF9B51', fontWeight: '600' },

  /* projects */
  section: { width: '100%', maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '16px' },
  sectionLabel: { fontSize: '11px', fontWeight: '700', color: '#FF9B51', letterSpacing: '2px', margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' },
  card: {
    backgroundColor: '#BFC9D1',
    borderRadius: '10px',
    padding: '24px 20px',
    borderTop: '3px solid #FF9B51',
    display: 'flex', flexDirection: 'column', gap: '8px',
  },
  cardEmoji: { fontSize: '20px' },
  cardTitle: { fontSize: '14px', fontWeight: '700', color: '#25343F', margin: 0 },
  cardDesc: { fontSize: '12px', color: '#25343F', margin: 0, opacity: 0.75, lineHeight: '1.5' },

  /* cta */
  cta: {
    display: 'inline-block',
    padding: '11px 26px',
    backgroundColor: '#25343F',
    color: '#EAEFEF',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '14px',
    textDecoration: 'none',
    border: '1px solid #FF9B51',
    marginBottom: '0',
  },

  /* footer */
  footer: {
    width: '100%',
    backgroundColor: '#25343F',
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    padding: '22px 24px',
    flexWrap: 'wrap',
    marginTop: 'auto',
  },
  socialLink: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', textDecoration: 'none' },
  socialLabel: { fontSize: '11px', color: '#BFC9D1', fontWeight: '500', letterSpacing: '0.5px' },
};

export default HomePage;