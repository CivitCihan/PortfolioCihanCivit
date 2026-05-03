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
        <p style={styles.statusText}>Loading repositories…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.centered}>
        <p style={styles.errorText}>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>GitHub Repositories</h1>
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
  );
};

const styles = {
  container: {
    maxWidth: '640px',
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: '#EAEFEF',
    minHeight: '100vh',
  },
  title: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#25343F',
    marginBottom: '24px',
    paddingBottom: '10px',
    borderBottom: '2px solid #FF9B51',
  },
  repoList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  repoItem: {
    padding: '12px 16px',
    backgroundColor: '#BFC9D1',
    borderRadius: '8px',
    borderLeft: '3px solid #FF9B51',
  },
  repoHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
  },
  repoName: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#25343F',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  repoDescription: {
    fontSize: '12px',
    color: '#25343F',
    margin: '6px 0 0 0',
    opacity: 0.75,
    lineHeight: '1.4',
  },
  link: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#FF9B51',
    textDecoration: 'none',
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#EAEFEF',
  },
  statusText: {
    color: '#25343F',
    fontSize: '14px',
  },
  errorText: {
    color: '#FF9B51',
    fontSize: '14px',
  },
};

export default GitHubPage;