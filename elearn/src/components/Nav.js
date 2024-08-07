import React from 'react';
import { Link } from 'react-router-dom';
import GoogleTranslate from './GoogleTranslate';

const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top p-0">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <p className="m-0 fw-bold" style={{ fontSize: '25px' }}>
                <span style={{ color: 'white' }}>Secret</span><span style={{ color: 'white' }}>Coder</span>
            </p>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto p-4 p-lg-0">
                <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/courses" className="nav-link">Courses</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Admin
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link to="/adminlogin" className="dropdown-item">Admin Login</Link></li>
                        {/* Add other dropdown items here if needed */}
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                    <GoogleTranslate />
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav;
