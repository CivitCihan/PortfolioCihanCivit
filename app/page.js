import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaKaggle, FaGithub } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <Image
          src="/profile.png"
          alt="Profile Picture"
          width={100}
          height={100}
          style={styles.image}
        />
        <h1 style={styles.title}>Cihan Çivit</h1>
      </header>
      <p style={styles.description}>
        👋 Hi, I'm Cihan Çivit, a passionate Software Engineer from Gaziantep & Sinop, Türkiye.
      </p>
      <p style={styles.description}>
        🎂 Born on January 2nd, 2001 — driven by curiosity and always eager to learn and build impactful software.
      </p>
      <p style={styles.description}>
        💻 I'm deeply interested in <b>Artificial Intelligence</b>, <b>Machine Learning</b>, and <b>Computer Vision</b>.
      </p>
      <p style={styles.description}>
        🧠 My main strengths are in Python, and I regularly work with:
        <b> NumPy, Seaborn, MATLAB, Pandas</b>, especially for ML algorithms.
      </p>
      <p style={styles.description}>
        💡 I also have experience with <b>JavaScript, C, C++, HTML, and CSS</b>.
      </p>
      
      <div style={styles.buttonContainer}>
      <Link href="/github" style={styles.button}>
        GitHub
      </Link>
      </div>
      <footer style={styles.footer}>
        <div style={styles.socialMediaContainer}>
          <Link href="https://www.kaggle.com/cihanivit" target="_blank" rel="noopener noreferrer">
            <FaKaggle size={30} color="#405D72" />
          </Link>
          <p style={styles.socialMediaText}>Kaggle</p>
        </div>
        <div style={styles.socialMediaContainer}>
          <Link href="https://www.linkedin.com/in/cihan-civit-56b182246/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#405D72" />
          </Link>
          <p style={styles.socialMediaText}>LinkedIn</p>
        </div>
        <div style={styles.socialMediaContainer}>
          <Link href="https://www.instagram.com/cihancivit.exe/?igsh=cG1jcTZ6dHJzeGRh" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color="#405D72" />
          </Link>
          <p style={styles.socialMediaText}>Instagram</p>
        </div>
        <div style={styles.socialMediaContainer}>
          <Link href="https://github.com/CivitCihan" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} color="#405D72" />
          </Link>
          <p style={styles.socialMediaText}>Github</p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
    backgroundColor: '#DDE6ED',
    minHeight: '100vh',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20px',
  },
  image: {
    borderRadius: '50%',
    border: '3px solid #526D82',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#27374D',
    marginLeft: '20px',
  },
  description: {
    fontSize: '18px',
    textAlign: 'center',
    margin: '12px 0',
    color: '#27374D',
    maxWidth: '700px',
    lineHeight: '1.6',
  },
  buttonContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    textAlign: 'center',
    color: '#DDE6ED',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    backgroundColor: '#526D82',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  footer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5px',
    gap: '12px',
  },
  socialMediaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  socialMediaText: {
    marginTop: '4px',
    color: '#27374D',
    fontSize: '14px',
  },
};

export default HomePage;
