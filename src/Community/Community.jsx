import React, { useState } from 'react';
import './Community.css';

const Community = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const openEditModal = () => {
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const openMemberDashboard = () => {
        alert('Member dashboard would open here.');
    };

    const changeStatus = () => {
        alert('Change member status functionality goes here.');
    };

    return (
        <div className="container">
            <h1 className="heading">Community Dashboard</h1>
            <div className="section">
                <h2 className="subheading">Members Profile</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Date of Joining</th>
                            <th>Name</th>
                            <th>Mobile No.</th>
                            <th>User ID</th>
                            <th>Email ID</th>
                            <th>Wallet Address</th>
                            <th>KYC Status</th>
                            <th>No. of Staked Coins</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2024-07-25</td>
                            <td>John Doe</td>
                            <td>1234567890</td>
                            <td>johndoe</td>
                            <td>john@example.com</td>
                            <td>0x1234567890abcdef</td>
                            <td>Verified</td>
                            <td>50</td>
                            <td>
                                <button className="button editBtn" onClick={openEditModal}>Edit</button>
                                <button className="button loginBtn" onClick={openMemberDashboard}>Log In</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="section">
                <h2 className="subheading">Active/Inactive Members</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Profile ID</th>
                            <th>Wallet Address</th>
                            <th>No. of Staked Coins</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>johndoe</td>
                            <td>John Doe</td>
                            <td>123</td>
                            <td>0x1234567890abcdef</td>
                            <td>50</td>
                            <td>Active</td>
                            <td>
                                <button className="button changeStatusBtn" onClick={changeStatus}>Change Status</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {isEditModalOpen && (
                <div className="modal" onClick={closeEditModal}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <span className="closeBtn" onClick={closeEditModal}>&times;</span>
                        <h2>Edit Profile</h2>
                        <form>
                            <label htmlFor="wallet-address">Wallet Address:</label>
                            <input type="text" id="wallet-address" name="wallet-address" />

                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" />

                            <label htmlFor="transaction-password">Transaction Password:</label>
                            <input type="password" id="transaction-password" name="transaction-password" />

                            <button type="submit" className="button saveBtn">Save Changes</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Community;
