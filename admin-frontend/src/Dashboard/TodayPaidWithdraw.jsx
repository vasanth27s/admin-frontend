import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import 'datatables.net-responsive';

const TodayPaidWithdraw = () => {
    useEffect(() => {
        const data = [
            { sno: 1, select: '', memberId: 'FCTC00001', customerName: 'John Doe', withdrawAmount: '₹1000.00', punchTimes: '2024-07-29 10:00 AM', status: 'Pending', usdt: '0.00', fctc: '0.00' },
            { sno: 2, select: '', memberId: 'FCTC00002', customerName: 'Jane Doe', withdrawAmount: '₹2000.00', punchTimes: '2024-07-29 11:00 AM', status: 'Pending', usdt: '0.00', fctc: '0.00' },
            // Add more data as needed
        ];

        const table = $('#withdraw-history').DataTable({
            data: data,
            columns: [
                { data: 'sno' },
                { data: 'select', render: () => '<input type="checkbox">' },
                { data: 'memberId' },
                { data: 'customerName' },
                { data: 'withdrawAmount' },
                { data: 'punchTimes' },
                { data: 'status' },
                { data: 'usdt' },
                { data: 'fctc' },
            ],
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ],
            responsive: true,
            destroy: true, // Add this line to destroy the previous DataTable instance
        });

        $('#transfer-to-paid').click(() => {
            alert('Transfer to Paid button clicked');
        });

        // Cleanup function to destroy the DataTable instance on component unmount
        return () => {
            if (table) {
                table.destroy();
            }
        };
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h3>Total Balance Fund</h3>
                <p id="total-balance-fund">₹50,000.00</p>
            </div>
            <table id="withdraw-history" className="display responsive nowrap" style={styles.table}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Select</th>
                        <th>Member Id</th>
                        <th>Customer Name</th>
                        <th>Withdraw Amount</th>
                        <th>Punch Times</th>
                        <th>Status</th>
                        <th>USDT</th>
                        <th>FCTC</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Data will be inserted here by DataTables */}
                </tbody>
            </table>
            <button id="transfer-to-paid" style={styles.button}>Transfer to Paid</button>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundImage: 'url(https://your-image-link.com/web_eg_02.jpg)', // Update with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'black',
        margin: 0,
        padding: '20px',
    },
    box: {
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '1200px',
        margin: 'auto',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        marginBottom: '20px',
    },
    table: {
        width: '100%',
    },
    button: {
        marginTop: '20px',
    },
};

export default TodayPaidWithdraw;
