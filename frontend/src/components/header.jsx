import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <label className="logo">
                <i className="fas fa-heartbeat"></i> MedManage
            </label>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/cards">TimeSet</Link></li>
                <li><Link to="/history">Notifications</Link></li>
            </ul>
        </nav>
    );
};

export default Header;