import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    TruTrace
                </a>
                <span className="navbar-tagline">
                    Blockchain-Based Supply Chain Verification
                </span>
                <nav className="navbar-links">
                    <a href="#features" className="navbar-item">Features</a>
                    <a href="#about" className="navbar-item">About</a>
                    <a href="#contact" className="navbar-item">Contact</a>
                    <a href="#demo" className="navbar-item navbar-button">
                        Live Demo
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
