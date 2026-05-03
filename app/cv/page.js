"use client";

import Link from 'next/link';

const CVPage = () => (
  <div style={styles.page}>

    <div style={styles.topBar}>
      <Link href="/" style={styles.backLink}>← Back</Link>
      <h1 style={styles.title}>Curriculum Vitae</h1>
      <a href="/cv.pdf" download="Cihan_Civit_CV.pdf" style={styles.downloadBtn}>
        Download PDF ↓
      </a>
    </div>

    <div style={styles.viewerWrapper}>
      <iframe
        src="/cv.pdf"
        style={styles.iframe}
        title="Cihan Çivit — CV"
      />
    </div>

  </div>
);

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#EAEFEF',
    overflow: 'hidden',
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
  title: {
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
  },
  downloadBtn: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#EAEFEF',
    backgroundColor: '#FF9B51',
    padding: '6px 14px',
    borderRadius: '5px',
    textDecoration: 'none',
  },

  /* pdf viewer */
  viewerWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    display: 'block',
  },
};

export default CVPage;