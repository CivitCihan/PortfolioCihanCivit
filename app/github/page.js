"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GitHubPage = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.github.com/users/CivitCihan/repos')
      .then(response => {
        setRepos(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={styles.centered}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.centered}>
        <p style={styles.errorText}>An error occurred: {error.message}</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>GitHub Repositories</h1>
      <ul style={styles.repoList}>
        {repos.map(repo => (
          <li key={repo.id} style={styles.repoItem}>
            <h2 style={styles.repoName}>{repo.name}</h2>
            <p style={styles.repoDescription}>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={styles.link}>
              View Project
            </a>
          </li>
        ))}
      </ul>
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
    marginTop: '30px',
    gap: '24px',
  },
  socialMediaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  socialMediaText: {
    marginTop: '6px',
    color: '#27374D',
    fontSize: '14px',
  },
};

export default GitHubPage;
