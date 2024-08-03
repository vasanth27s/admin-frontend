// src/components/home.jsx
import React from 'react';

const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <h1 style={styles.welcomeText}>Welcome to FCTC Admin Panel</h1>
    </div>
  );
};

const styles = {
  homeContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 80px)', // Adjust based on your layout
    background: 'linear-gradient(135deg, #2c3e50, #3498db)', // Stylish gradient background
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  },
  welcomeText: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    border: '2px solid #fff',
    borderRadius: '10px',
    padding: '20px',
    background: 'rgba(0, 0, 0, 0.3)', // Slightly dark background for readability
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  }
};

export default Home;
