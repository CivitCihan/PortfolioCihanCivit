import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

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
        Memleketlerim Gaziantep ve Sinop. 02/Ocak/2001 Gaziantep doğumluyum.
      </p>
      <p style={styles.description}>
        Yazılım Mühendisiyim, Yapay Zeka ve Full-Stack ile ilgileniyorum.
      </p>
      <p style={styles.description}>
        Bildiğim yazılım dilleri: JavaScript, C, C++, Python, HTML ve CSS.
      </p>
      <p style={styles.description}>
        Aynı anda YouTube ve Instagram'da içerik üretiyorum.
      </p>
      <div style={styles.buttonContainer}>
        <Link href="/github">
          <a style={styles.button}>GitHub</a>
        </Link>
      </div>
      <footer style={styles.footer}>
        <div style={styles.socialMediaContainer}>
          <a href="https://www.instagram.com/duzenlicalisiyorum/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color="#405D72" />
          </a>
          <p style={styles.socialMediaText}>Content Instagram</p>
        </div>
        <div style={styles.socialMediaContainer}>
          <a href="https://www.youtube.com/channel/UCxrmapzuhYOUMDpoHqLCuVg" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} color="#405D72" />
          </a>
          <p style={styles.socialMediaText}>YouTube</p>
        </div>
        <div style={styles.socialMediaContainer}>
          <a href="https://www.linkedin.com/in/cihan-civit-56b182246/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#405D72" />
          </a>
          <p style={styles.socialMediaText}>LinkedIn</p>
        </div>
        <div style={styles.socialMediaContainer}>
          <a href="https://www.instagram.com/cihancivit.exe/?igsh=cG1jcTZ6dHJzeGRh" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color="#405D72" />
          </a>
          <p style={styles.socialMediaText}>Personal Instagram</p>
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
    padding: '30px',
    backgroundColor: '#FFF8F3',
    minHeight: '100vh',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '16px',
  },
  image: {
    borderRadius: '50%',
    border: '2px solid #758694',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#405D72',
    marginLeft: '16px',
  },
  description: {
    fontSize: '18px',
    textAlign: 'center',
    marginVertical: '8px',
    color: '#405D72',
    maxWidth: '600px',
  },
  buttonContainer: {
    marginVertical: '10px',
    width: '80%',
    backgroundColor: '#F7E7DC',
    borderRadius: '8px',
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    display: 'block',
    textAlign: 'center',
    color: '#405D72',
    textDecoration: 'none',
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: '#F7E7DC',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  socialMediaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: '10px',
  },
  socialMediaText: {
    marginTop: '4px',
    color: '#405D72',
  },
};

export default HomePage;
