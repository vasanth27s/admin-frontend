import React, { useEffect, useState } from 'react';

const TotalBalance = () => {
    const [balance, setBalance] = useState('0.00');

    useEffect(() => {
        // Replace the content below with dynamic data fetch or calculation
        setBalance('$50,000.00');
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h3>Total Balance Fund</h3>
                <p>{balance}</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundImage: `url("web eg - 02.jpg")`, // Update the path as needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    box: {
        width: '300px',
        height: '200px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    h3: {
        margin: 0,
        fontSize: '1.5em',
    },
    p: {
        fontSize: '2em',
        margin: '10px 0 0',
    }
};

export default TotalBalance;
