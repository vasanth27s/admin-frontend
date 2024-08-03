import React, { useState, useEffect } from 'react';

const TotalRegistrationToday = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await fetch('/api/users/search', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ search })
            });
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error searching users:', error);
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundImage: 'url(web/eg - 02.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column', margin: 0, padding: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', width: '100%', maxWidth: '1200px', boxSizing: 'border-box' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px', padding: '15px', marginBottom: '20px', width: '100%', maxWidth: '300px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h3 style={{ margin: 0, fontSize: '1.5em', color: '#333' }}>Total Users</h3>
                    <p style={{ fontSize: '2em', margin: '10px 0 0', color: '#007bff' }}>{users.length}</p>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px', padding: '15px', marginBottom: '20px', width: '100%', maxWidth: '300px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h3 style={{ margin: 0, fontSize: '1.5em', color: '#333' }}>Total Registrations Today</h3>
                    <p style={{ fontSize: '2em', margin: '10px 0 0', color: '#007bff' }}>{users.filter(user => new Date(user.joined).toDateString() === new Date().toDateString()).length}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', width: '100%', maxWidth: '600px' }}>
                    <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px 0 0 5px', outline: 'none', boxSizing: 'border-box' }} />
                    <button onClick={handleSearch} style={{ padding: '10px', backgroundColor: '#007bff', border: 'none', color: 'white', cursor: 'pointer', borderRadius: '5px', width: '100%', marginTop: '5px' }}>Search</button>
                </div>
                <div style={{ width: '100%', overflowX: 'auto', boxSizing: 'border-box' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                        <thead>
                            <tr>
                                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left', backgroundColor: '#f4f4f4' }}>S.No</th>
                                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left', backgroundColor: '#f4f4f4' }}>Joined</th>
                                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left', backgroundColor: '#f4f4f4' }}>Name</th>
                                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left', backgroundColor: '#f4f4f4' }}>Mobile</th>
                                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left', backgroundColor: '#f4f4f4' }}>User ID</th>
                                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left', backgroundColor: '#f4f4f4' }}>E-Mail</th>
                                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left', backgroundColor: '#f4f4f4' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.userId}>
                                    <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>{index + 1}</td>
                                    <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>{new Date(user.joined).toLocaleDateString()}</td>
                                    <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>{user.name}</td>
                                    <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>{user.mobile}</td>
                                    <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>{user.userId}</td>
                                    <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>{user.email}</td>
                                    <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>
                                        <button style={{ marginRight: '5px', padding: '5px 10px', border: 'none', cursor: 'pointer', borderRadius: '3px', color: 'white', backgroundColor: '#007bff' }} onClick={() => console.log(`Edit user with ID: ${user.userId}`)}>Edit</button>
                                        <button style={{ marginRight: '5px', padding: '5px 10px', border: 'none', cursor: 'pointer', borderRadius: '3px', color: 'white', backgroundColor: '#6c757d' }} onClick={() => console.log(`Login as user with ID: ${user.userId}`)}>Login</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5px', marginTop: '20px' }}>
                    <button style={{ padding: '8px 16px', border: 'none', cursor: 'pointer', backgroundColor: '#f4f4f4', borderRadius: '5px' }}>Previous</button>
                    <button style={{ padding: '8px 16px', border: 'none', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', borderRadius: '5px' }}>1</button>
                    <button style={{ padding: '8px 16px', border: 'none', cursor: 'pointer', backgroundColor: '#f4f4f4', borderRadius: '5px' }}>2</button>
                    <button style={{ padding: '8px 16px', border: 'none', cursor: 'pointer', backgroundColor: '#f4f4f4', borderRadius: '5px' }}>3</button>
                    <button style={{ padding: '8px 16px', border: 'none', cursor: 'pointer', backgroundColor: '#f4f4f4', borderRadius: '5px' }}>4</button>
                    <button style={{ padding: '8px 16px', border: 'none', cursor: 'pointer', backgroundColor: '#f4f4f4', borderRadius: '5px' }}>5</button>
                    <button style={{ padding: '8px 16px', border: 'none', cursor: 'pointer', backgroundColor: '#f4f4f4', borderRadius: '5px' }}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default TotalRegistrationToday;
