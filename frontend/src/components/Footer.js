import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="/">Home</a>
                <a href="/create">Create Post</a>
                <a href="/about">About</a>
            </div>
            <div className="footer-info">
                <p>© {new Date().getFullYear()} - Written by [Your Name]</p>
            </div>
        </footer>
    );
};

export default Footer;
