import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#00aaff"
    };

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
        setDropdownOpen(false); 
    };

    return (
        <div className="navbar fixed-navbar">
            <h1 className='logo'>Jays<span>tech</span>solutions</h1>

            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>

            <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
                <li><NavLink to="/" style={({ isActive }) => isActive ? activeStyles : null}>Home</NavLink></li>
                <li><NavLink to="/About" style={({ isActive }) => isActive ? activeStyles : null}>About</NavLink></li>
                <li><NavLink to="/Blog" style={({ isActive }) => isActive ? activeStyles : null}
                >Blog</NavLink></li>


                <li
                    className="dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <button>Services</button>
                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><NavLink to="/projects" style={({ isActive }) => isActive ? activeStyles : null}>Projects</NavLink></li>
                            <li><NavLink to="/services/it-support" style={({ isActive }) => isActive ? activeStyles : null}>IT Support & Consultation</NavLink></li>
                            <li><NavLink to="/services/software-dev" style={({ isActive }) => isActive ? activeStyles : null}>Software Development</NavLink></li>
                            <li><NavLink to="/services/networking" style={({ isActive }) => isActive ? activeStyles : null}>Networking</NavLink></li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
