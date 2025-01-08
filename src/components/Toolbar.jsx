import React from 'react';
import '../styles/Toolbar.css';

const Toolbar = () => {
    return (
        <div className="toolbar">
            <div className="toolbar-left">
                <a href="https://facebook.com" className="social-icon">FB</a>
                <a href="https://twitter.com" className="social-icon">TW</a>
                <a href="https://instagram.com" className="social-icon">IG</a>
            </div>
            <div className="toolbar-right">
                <span>+380 (XX) XXX-XX-XX</span>
            </div>
        </div>
    );
};

export default Toolbar;