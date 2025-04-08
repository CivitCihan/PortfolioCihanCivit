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
    backgroundColor: '#FFF8F3',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '16px',
    color: '#405D72',
  },
  repoList: {
    listStyleType: 'none',
    padding: 0,
  },
  repoItem: {
    marginBottom: '16px',
    padding: '16px',
    backgroundColor: '#F7E7DC',
    borderRadius: '8px',
    border: '1px solid #758694',
  },
  repoName: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#405D72',
  },
  repoDescription: {
    fontSize: '14px',
    color: '#666',
  },
  link: {
    display: 'block',
    marginTop: '8px',
    color: '#758694',
    textDecoration: 'none',
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  errorText: {
    color: 'red',
    fontSize: '16px',
  },
};

export default GitHubPage;
