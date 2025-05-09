import React from 'react';
import { Link } from 'react-router-dom';
import { BiHome, BiCog, BiLogOut } from 'react-icons/bi'; // ✅ استيراد الأيقونات
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Admin Panel</div>
            <div className="nav-links">
                <Link to="/admin">
                    <BiHome className="nav-icon" /> Dashboard
                </Link>
                <Link to="/admin">
                    <BiCog className="nav-icon" /> Settings
                </Link>
                <Link to="/">
                    <BiLogOut className="nav-icon" /> Logout
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
