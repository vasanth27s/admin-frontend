import React from 'react';

const TodayDeposit = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      background: 'url("/web_eg_02.jpg") no-repeat center center fixed',
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
    statusProcessing: {
      color: '#ffa500',
    },
    statusApproved: {
      color: '#4caf50',
    },
    statusRejected: {
      color: '#f44336',
    },
    button: {
      padding: '8px 12px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      color: '#fff',
      fontSize: '14px',
      margin: '5px',
    },
    approveBtn: {
      backgroundColor: '#4caf50',
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
      h1: {
        fontSize: '24px',
      },
      table: {
        fontSize: '14px',
      },
      container: {
        padding: '15px',
      },
      button: {
        fontSize: '12px',
        padding: '6px 10px',
      },
    },
    '@media (max-width: 480px)': {
      h1: {
        fontSize: '20px',
      },
      table: {
        fontSize: '12px',
      },
      container: {
        padding: '10px',
      },
      button: {
        fontSize: '10px',
        padding: '4px 8px',
      },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Today's Deposits</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Serial No.</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>User ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Amount</th>
            <th style={styles.th}>Transaction Hash</th>
            <th style={styles.th}>Wallet Address</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style={styles.trOdd}>
            <td>001</td>
            <td>2024-07-26</td>
            <td>user123</td>
            <td>John Doe</td>
            <td>$1000</td>
            <td>0x123456789abcdef</td>
            <td>0xabcdef123456789</td>
            <td style={styles.statusProcessing}>Processing</td>
          </tr>
          <tr style={styles.trEven}>
            <td>002</td>
            <td>2024-07-26</td>
            <td>user456</td>
            <td>Jane Smith</td>
            <td>$500</td>
            <td>0xabcdef123456789</td>
            <td>0x123456789abcdef</td>
            <td style={styles.statusApproved}>Approved</td>
          </tr>
          <tr style={styles.trOdd}>
            <td>003</td>
            <td>2024-07-26</td>
            <td>user789</td>
            <td>Emily Davis</td>
            <td>$200</td>
            <td>0x789abcdef123456</td>
            <td>0x456789abcdef123</td>
            <td style={styles.statusRejected}>Rejected</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default TodayDeposit;
