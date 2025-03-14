
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#fff"
    };

    const [isOpen, setIsOpen] = useState(false);
    

    return (
        <div className="navbar fixed-navbar ">
            <h1 className='logo'>Jays<span>tech</span>solutions</h1>

            {/* Menu Icon (Hamburger / Close) */}
            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>

            {/* Navigation Links */}
            <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                <li><NavLink to="/" style={({ isActive }) => isActive ? activeStyles : null}>Home</NavLink></li>
                <li><NavLink to="/About" style={({ isActive }) => isActive ? activeStyles : null}>About</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/Projects">Projects</NavLink></li>
                <li className="dropdown">
                    <select id="services" defaultValue="" onChange={() => setIsOpen(false)}>
                        <option value="" disabled>-- Services --</option>
                        <option value="IT Support & Consultation">IT Support & Consultation</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Networking">Networking</option>
                    </select>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;