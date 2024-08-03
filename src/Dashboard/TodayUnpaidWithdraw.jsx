import React, { useEffect, useState } from 'react';

const TodayUnpaidWithdraw = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;

  useEffect(() => {
    // Sample data for demonstration
    const fetchData = [
      { id: 'FCTC00001', name: 'John Doe', fundValue: '0.00', reason: 'Withdrawal', time: '2024-07-29 10:00 AM', status: 'Pending' },
      { id: 'FCTC00002', name: 'Jane Doe', fundValue: '0.00', reason: 'Withdrawal', time: '2024-07-29 11:00 AM', status: 'Pending' },
      // Add more data here
    ];
    setData(fetchData);
  }, []);

  const displayTable = () => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = currentPage * rowsPerPage;
    const paginatedData = data.slice(start, end);

    return paginatedData.map((row, index) => (
      <tr key={row.id}>
        <td>{start + index + 1}</td>
        <td><input type="checkbox" /></td>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.fundValue}</td>
        <td>{row.reason}</td>
        <td>{row.time}</td>
        <td>{row.status}</td>
        <td>USDT</td>
        <td>FCTC</td>
      </tr>
    ));
  };

  const updatePagination = () => {
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    return (
      <ul style={styles.pagination}>
        <li style={{ ...styles.paginationItem, ...(isFirstPage && styles.disabled) }}>
          <a href="#" onClick={() => !isFirstPage && setCurrentPage(1)}>First</a>
        </li>
        <li style={{ ...styles.paginationItem, ...(isFirstPage && styles.disabled) }}>
          <a href="#" onClick={() => !isFirstPage && setCurrentPage(currentPage - 1)}>Previous</a>
        </li>
        <li style={{ ...styles.paginationItem, ...(isLastPage && styles.disabled) }}>
          <a href="#" onClick={() => !isLastPage && setCurrentPage(currentPage + 1)}>Next</a>
        </li>
        <li style={{ ...styles.paginationItem, ...(isLastPage && styles.disabled) }}>
          <a href="#" onClick={() => !isLastPage && setCurrentPage(totalPages)}>Last</a>
        </li>
      </ul>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h3>Total Withdrawal Fund</h3>
        <p>0.00</p>
      </div>
      <div style={styles.searchBar}>
        <input type="text" placeholder="Search" style={styles.searchInput} />
        <button style={styles.searchButton}>Search</button>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Select</th>
            <th>Member Id</th>
            <th>Customer Name</th>
            <th>Withdrawal Amount</th>
            <th>Punch Times</th>
            <th>Status</th>
            <th>USDT</th>
            <th>FCTC</th>
          </tr>
        </thead>
        <tbody>
          {displayTable()}
        </tbody>
      </table>
      {updatePagination()}
    </div>
  );
};

// Inline styles for the component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundImage: 'url(https://example.com/path-to-your-image.jpg)', // Update with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    height: '100vh',
    margin: 0
  },
  box: {
    width: '100%',
    maxWidth: '600px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
    padding: '20px'
  },
  searchBar: {
    display: 'flex',
    width: '100%',
    maxWidth: '600px',
    marginBottom: '20px'
  },
  searchInput: {
    flex: 1,
    padding: '10px',
    fontSize: '1em',
    border: '1px solid #ccc',
    borderRadius: '4px 0 0 4px',
    outline: 'none'
  },
  searchButton: {
    padding: '10px 20px',
    fontSize: '1em',
    border: 'none',
    backgroundColor: '#6c63ff',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '0 4px 4px 0'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    background: 'rgba(255, 255, 255, 0.1)',
    marginBottom: '20px'
  },
  pagination: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: '20px 0 0'
  },
  paginationItem: {
    margin: '0 5px'
  },
  disabled: {
    pointerEvents: 'none',
    opacity: 0.5
  }
};

export default TodayUnpaidWithdraw;
