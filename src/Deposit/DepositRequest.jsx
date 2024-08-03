import React from 'react';

const DepositRequest = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundSize: 'cover',
      backdropFilter: 'blur(10px)',
      color: '#fff',
    },
    container: {
      width: '90%',
      margin: '20px auto',
      backgroundColor: 'rgba(68, 68, 68, 0.8)', // Semi-transparent background
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      overflowX: 'auto', // Allows horizontal scrolling if necessary
    },
    h1: {
      textAlign: 'center',
      color: '#0f9d58',
      marginBottom: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      margin: '20px 0',
    },
    th: {
      border: '1px solid #555',
      padding: '10px',
      textAlign: 'left',
      backgroundColor: '#666',
    },
    td: {
      border: '1px solid #555',
      padding: '10px',
      textAlign: 'left',
    },
    trEven: {
      backgroundColor: '#555',
    },
    trOdd: {
      backgroundColor: '#444',
    },
    button: {
      padding: '8px 12px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      color: '#fff',
      fontSize: '14px',
    },
    approveBtn: {
      backgroundColor: '#4CAF50',
    },
    rejectBtn: {
      backgroundColor: '#f44336',
    },
    a: {
      color: '#0f9d58',
      textDecoration: 'none',
    },
    aHover: {
      textDecoration: 'underline',
    },
    '@media (max-width: 768px)': {
      button: {
        fontSize: '12px',
        padding: '6px 10px',
      },
      table: {
        fontSize: '14px',
      },
    },
    '@media (max-width: 480px)': {
      h1: {
        fontSize: '20px',
      },
      table: {
        fontSize: '12px',
      },
      button: {
        fontSize: '10px',
        padding: '4px 8px',
      },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Deposit Request</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Serial No.</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>User ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Amount</th>
            <th style={styles.th}>Currency</th>
            <th style={styles.th}>Transaction Hash</th>
            <th style={styles.th}>Wallet Address</th>
            <th style={styles.th}>Screenshot</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Action (Approve)</th>
            <th style={styles.th}>Action (Reject)</th>
          </tr>
        </thead>
        <tbody>
          <tr style={styles.trOdd}>
            <td>001</td>
            <td>2024-07-26</td>
            <td>user123</td>
            <td>John Doe</td>
            <td>$1000</td>
            <td>USD</td>
            <td>0x123456789abcdef</td>
            <td>0xabcdef123456789</td>
            <td><a href="screenshot.jpg" target="_blank" rel="noopener noreferrer" style={styles.a}>View Screenshot</a></td>
            <td>Pending</td>
            <td><button style={{ ...styles.button, ...styles.approveBtn }}>Approve</button></td>
            <td><button style={{ ...styles.button, ...styles.rejectBtn }}>Reject</button></td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default DepositRequest;
