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
    padding: '16px',
    backgroundColor: '#DDE6ED', // arka plan
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '16px',
    color: '#27374D', // koyu başlık rengi
  },
  repoList: {
    listStyleType: 'none',
    padding: 0,
  },
  repoItem: {
    marginBottom: '16px',
    padding: '16px',
    backgroundColor: '#9DB2BF', // kart rengi
    borderRadius: '8px',
    border: '1px solid #526D82', // sınır rengi
  },
  repoName: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#27374D',
  },
  repoDescription: {
    fontSize: '14px',
    color: '#27374D',
  },
  link: {
    display: 'inline-block',
    marginTop: '8px',
    padding: '8px 12px',
    backgroundColor: '#526D82',
    color: '#DDE6ED',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#DDE6ED',
  },
  errorText: {
    color: '#ff4d4f',
    fontSize: '16px',
  },
};

export default GitHubPage;
