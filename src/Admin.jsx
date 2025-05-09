import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { BiBook, BiCheckCircle, BiUser } from 'react-icons/bi'; // ✅ تأكدنا من استيراد الأيقونات
import AuthContext from './AuthContext';
import Navbar from './Navbar';
import Footer from './Footer';
import './Admin.css';

const Admin = () => {
    const { user } = useContext(AuthContext);
    const isAdmin = user?.isAdmin;

    const [stats, setStats] = useState({ courses: 10, enrollments: 45, users: 12 });
    const [maintenanceMode, setMaintenanceMode] = useState(false);

    const toggleMaintenance = () => {
        setMaintenanceMode(prev => !prev);
    };

    if (!isAdmin) {
        return <Navigate to="/403" replace />;
    }

    return (
        <div className="admin-dashboard">
            <Navbar />
            <main className="dashboard-content">
                <h1 className="dashboard-title">Admin Dashboard</h1>
                <div className="stats-container">
                    <div className="stat-card">
                        <BiBook className="stat-icon" /> 
                        <h2>Courses</h2>
                        <p>{stats.courses}</p>
                    </div>
                    <div className="stat-card">
                        <BiCheckCircle className="stat-icon" />
                        <h2>Enrollments</h2>
                        <p>{stats.enrollments}</p>
                    </div>
                    <div className="stat-card">
                        <BiUser className="stat-icon" />
                        <h2>Users</h2>
                        <p>{stats.users}</p>
                    </div>
                </div>
                <div className="maintenance-toggle">
                    <label className="toggle-label">
                        <input
                            type="checkbox"
                            checked={maintenanceMode}
                            onChange={toggleMaintenance}
                            className="toggle-input"
                        />
                        <span className="toggle-slider"></span>
                        Maintenance Mode {maintenanceMode ? "ON" : "OFF"}
                    </label>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Admin;
