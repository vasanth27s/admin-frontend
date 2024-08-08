import React, { useState, useEffect } from 'react';

const TodayAddFundAdmin = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const rowsPerPage = 10;

    useEffect(() => {
        // Replace with your data fetch logic
        const today = new Date().toISOString().split('T')[0];
        const fetchedData = [
            {senderId: 'FCTC00001', sendToId: 'FCTC2406508', sendToName: 'MUSTHAFA', ngmValue: '50000.00', date: '2024-07-29 13:12:28', status: 'Admin To User coinwallet'},
            // Add more data here
        ].filter(item => item.date.startsWith(today));
        
        setData(fetchedData);
    }, []);

    const displayTable = (page, searchTerm = '') => {
        const tableBody = document.querySelector('#data-table tbody');
        tableBody.innerHTML = '';

        const filteredData = data.filter(item => 
            item.senderId.includes(searchTerm) || 
            item.sendToId.includes(searchTerm) || 
            item.sendToName.includes(searchTerm) || 
            item.ngmValue.includes(searchTerm) || 
            item.date.includes(searchTerm) || 
            item.status.includes(searchTerm)
        );

        const start = (page - 1) * rowsPerPage;
        const end = page * rowsPerPage;
        const paginatedData = filteredData.slice(start, end);

        paginatedData.forEach((row, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${start + index + 1}</td>
                <td>${row.senderId}</td>
                <td>${row.sendToId}</td>
                <td>${row.sendToName}</td>
                <td>${row.ngmValue}</td>
                <td>${row.date}</td>
                <td>${row.status}</td>
            `;
            tableBody.appendChild(tr);
        });

        updatePagination(filteredData.length);
    };

    const updatePagination = (totalRows) => {
        const totalPages = Math.ceil(totalRows / rowsPerPage);
        document.getElementById('first-page').classList.toggle('disabled', currentPage === 1);
        document.getElementById('previous-page').classList.toggle('disabled', currentPage === 1);
        document.getElementById('next-page').classList.toggle('disabled', currentPage === totalPages);
        document.getElementById('last-page').classList.toggle('disabled', currentPage === totalPages);
    };

    const handleSearch = () => {
        const searchTerm = document.getElementById('search-input').value;
        displayTable(1, searchTerm);
    };

    useEffect(() => {
        displayTable(currentPage);
    }, [data, currentPage]);

    return (
        <div style={styles.container}>
            <div style={styles.searchBar}>
                <input type="text" id="search-input" placeholder="Search" style={styles.input} />
                <button id="search-button" style={styles.button} onClick={handleSearch}>Search</button>
            </div>
            <table id="data-table" style={styles.table}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Sender ID</th>
                        <th>Send To ID</th>
                        <th>Send To Name</th>
                        <th>NGM Value</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Data will be inserted here by JavaScript */}
                </tbody>
            </table>
            <ul className="pagination" id="pagination" style={styles.pagination}>
                <li><a href="#" id="first-page" style={styles.paginationLink}>First</a></li>
                <li><a href="#" id="previous-page" style={styles.paginationLink}>Previous</a></li>
                <li><a href="#" id="next-page" style={styles.paginationLink}>Next</a></li>
                <li><a href="#" id="last-page" style={styles.paginationLink}>Last</a></li>
            </ul>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        maxWidth: '1200px',
        margin: 'auto',
        backgroundImage: 'url(web eg - 02.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#333',
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '600px',
        marginBottom: '20px',
        gap: '10px',
    },
    input: {
        padding: '10px',
        fontSize: '1em',
        border: '1px solid #ccc',
        borderRadius: '4px 0 0 4px',
        outline: 'none',
        width: '100%',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1em',
        border: 'none',
        backgroundColor: '#6c63ff',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '4px',
        width: '100%',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        background: 'rgba(255, 255, 255, 0.8)',
    },
    tableHeader: {
        background: 'rgba(255, 255, 255, 0.3)',
    },
    tableCell: {
        padding: '10px',
        textAlign: 'left',
        border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    pagination: {
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: '0',
        margin: '20px 0 0',
        gap: '5px',
    },
    paginationLink: {
        padding: '10px 15px',
        backgroundColor: '#f1f1f1',
        border: '1px solid #ccc',
        textDecoration: 'none',
        color: '#333',
        borderRadius: '4px',
    },
    paginationLinkActive: {
        backgroundColor: '#6c63ff',
        color: 'white',
        border: 'none',
    },
    paginationLinkDisabled: {
        color: '#999',
        cursor: 'not-allowed',
    },
};

export default TodayAddFundAdmin;
