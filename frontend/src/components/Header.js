import React from "react";
import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>My Blog</h1>
            </div>
            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/create">Create Post</a>
                <a href="/about">About</a>
            </nav>
        </header>
    );
};

export default Header;
