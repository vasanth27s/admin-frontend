import React from 'react';

const Request = () => {
    return (
        <div>
            <style>
                {`
                body {
                    font-family: Arial, sans-serif;
                    background-color: #333;
                    color: #fff;
                    margin: 0;
                    padding: 0;
                }

                .container {
                    width: 90%;
                    margin: 20px auto;
                    background-color: #444;
                    border-radius: 8px;
                    padding: 20px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                }

                h1 {
                    text-align: center;
                    color: #0f9d58;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }

                table, th, td {
                    border: 1px solid #555;
                }

                th, td {
                    padding: 10px;
                    text-align: left;
                }

                th {
                    background-color: #666;
                }

                tr:nth-child(even) {
                    background-color: #555;
                }

                tr:nth-child(odd) {
                    background-color: #444;
                }

                .status-pending {
                    color: #ffa500;
                }

                .status-approved {
                    color: #4caf50;
                }

                .status-rejected {
                    color: #f44336;
                }

                button {
                    padding: 8px 12px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    color: #fff;
                    font-size: 14px;
                    margin: 2px;
                }

                .approve-btn {
                    background-color: #4CAF50;
                }

                .reject-btn {
                    background-color: #f44336;
                }
                `}
            </style>

            <div className="container">
                <h1>Withdrawal Requests</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Member ID</th>
                            <th>Customer Name</th>
                            <th>Withdrawal Amount</th>
                            <th>Receiving Wallet Address</th>
                            <th>Status</th>
                            <th>Action (Approve)</th>
                            <th>Action (Reject)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>member123</td>
                            <td>John Doe</td>
                            <td>$500</td>
                            <td>0x123456789abcdef</td>
                            <td className="status-pending">Pending</td>
                            <td><button className="approve-btn">Approve</button></td>
                            <td><button className="reject-btn">Reject</button></td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>member456</td>
                            <td>Jane Smith</td>
                            <td>$1000</td>
                            <td>0xabcdef123456789</td>
                            <td className="status-approved">Approved</td>
                            <td><button className="approve-btn" disabled>Approve</button></td>
                            <td><button className="reject-btn" disabled>Reject</button></td>
                        </tr>
                        <tr>
                            <td>003</td>
                            <td>member789</td>
                            <td>Emily Davis</td>
                            <td>$200</td>
                            <td>0x789abcdef123456</td>
                            <td className="status-rejected">Rejected</td>
                            <td><button className="approve-btn" disabled>Approve</button></td>
                            <td><button className="reject-btn" disabled>Reject</button></td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Request;
