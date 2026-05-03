"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaKaggle, FaGithub } from 'react-icons/fa';

const socials = [
  { href: 'https://www.kaggle.com/cihanivit',                                   icon: <FaKaggle    size={20} color="#FF9B51" />, label: 'Kaggle'    },
  { href: 'https://www.linkedin.com/in/cihan-civit-56b182246/',                 icon: <FaLinkedin  size={20} color="#FF9B51" />, label: 'LinkedIn'  },
  { href: 'https://www.instagram.com/cihancivit.exe/?igsh=cG1jcTZ6dHJzeGRh',   icon: <FaInstagram size={20} color="#FF9B51" />, label: 'Instagram' },
  { href: 'https://github.com/CivitCihan',                                       icon: <FaGithub    size={20} color="#FF9B51" />, label: 'GitHub'    },
];

const GitHubPage = () => {
  const [repos, setRepos]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    axios.get('https://api.github.com/users/CivitCihan/repos')
      .then(response => { setRepos(response.data); setLoading(false); })
      .catch(error   => { setError(error);          setLoading(false); });
  }, []);

  if (loading) return (
    <div style={styles.centered}><p style={styles.statusText}>Loading repositories…</p></div>
  );

  if (error) return (
    <div style={styles.centered}><p style={styles.errorText}>Error: {error.message}</p></div>
  );

  return (
    <div style={styles.page}>

      {/* ── Top Bar ── */}
      <div style={styles.topBar}>
        <Link href="/" style={styles.backLink}>← Back</Link>
        <h1 style={styles.topTitle}>GitHub Repositories</h1>
        <div style={{ width: '48px' }} /> {/* spacer to centre title */}
      </div>

      {/* ── Repo List ── */}
      <div style={styles.content}>
        <ul style={styles.repoList}>
          {repos.map(repo => (
            <li key={repo.id} style={styles.repoItem}>
              <div style={styles.repoHeader}>
                <span style={styles.repoName}>{repo.name}</span>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={styles.link}>
                  View →
                </a>
              </div>
              {repo.description && (
                <p style={styles.repoDescription}>{repo.description}</p>
              )}
            </li>
          ))}
        </ul>
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
};

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#EAEFEF',
  },

  /* top bar */
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 24px',
    backgroundColor: '#25343F',
    flexShrink: 0,
  },
  topTitle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#EAEFEF',
    margin: 0,
    letterSpacing: '0.5px',
  },
  backLink: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#BFC9D1',
    textDecoration: 'none',
    width: '48px',
  },

  /* repo list */
  content: {
    flex: 1,
    maxWidth: '640px',
    width: '100%',
    margin: '0 auto',
    padding: '32px 20px',
  },
  repoList:  { listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' },
  repoItem:  { padding: '12px 16px', backgroundColor: '#BFC9D1', borderRadius: '8px', borderLeft: '3px solid #FF9B51' },
  repoHeader:{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' },
  repoName:  { fontSize: '14px', fontWeight: '700', color: '#25343F', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
  repoDescription: { fontSize: '12px', color: '#25343F', margin: '6px 0 0 0', opacity: 0.75, lineHeight: '1.4' },
  link:      { fontSize: '12px', fontWeight: '600', color: '#FF9B51', textDecoration: 'none', flexShrink: 0, whiteSpace: 'nowrap' },

  /* footer */
  footer: {
    width: '97%',
    backgroundColor: '#25343F',
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    padding: '22px 24px',
    flexWrap: 'wrap',
  },
  socialLink:  { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', textDecoration: 'none' },
  socialLabel: { fontSize: '11px', color: '#BFC9D1', fontWeight: '500', letterSpacing: '0.5px' },

  /* states */
  centered:   { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#EAEFEF' },
  statusText: { color: '#25343F', fontSize: '14px' },
  errorText:  { color: '#FF9B51', fontSize: '14px' },
};

export default GitHubPage;