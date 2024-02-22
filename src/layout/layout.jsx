import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './layout.css';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <p className="Where">Where in the World</p>
                <button>Dark Mode</button>
            </header>
            <main>{children}</main>
            <footer>
                <p>Precious Stone Innovations, &copy; 2024</p>
            </footer>
        </div>
    );
};

export default Layout;
