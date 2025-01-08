import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <button
                className="burger-menu"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                ☰
            </button>
            <div className="logo">
                <img src="excavator-logo.png" alt="Екскаватор" />
            </div>
            <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="/">Головна</a></li>
                    <li><a href="/shop">Оренда Спецтехніки</a></li>
                    <li><a href="/pages">Послуги</a></li>
                    <li><a href="/blog">Новини</a></li>
                    <li><a href="/contact">Контакти</a></li>
                </ul>
            </nav>
            <button className="book-button">Забронювати</button>
        </header>
    );
};

export default Header;