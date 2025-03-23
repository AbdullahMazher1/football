import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaChevronDown } from 'react-icons/fa';
import { HiOutlineSearch, HiOutlineUser, HiOutlineGlobe } from "react-icons/hi";

const Dropdown = ({ title, subLinks, basePath }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                {title} <FaChevronDown size={14} className={`dropdown-icon ${isOpen ? 'rotate' : ''}`} />
            </div>
            <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                {subLinks.map((link, index) => (
                    <Link key={index} to={`${basePath}/${link.toLowerCase().replace(/\s+/g, '-')}`}>
                        {link}
                    </Link>
                ))}
            </div>
        </div>
    );
};

function Navbar() {
    return (
        <div className='navbar'>
            {/* Top Navbar */}
            <div className='navbar-top'>
                <div className='navbar-top-links'>
                    <Link to="/">OFCK.FR</Link>
                    <Link to="/tickets">TICKETS</Link>
                    <Link to="/shop">SHOP</Link>
                    <Link to="/myparis">MYPARIS</Link>
                    <Link to="/stadium-tour">ABOUT</Link>
                    <Link to="/business">CONTACT</Link>
                </div>
            </div>

            {/* Bottom Navbar */}
            <div className='navbar-bottom'>
                <div className='navbar-left'>
                <Link to="/">
                        <img src='/logo.png' alt='OFCK Logo' className='navbar-logo' />
                    </Link>
                   
                </div>
                <div className='navbar-center'>
                    <div className='navbar-bottom-links'>
                        <Dropdown title="FIRST TEAM" basePath="/first-team" subLinks={["News", "Effective", "Calender Result", "Ranking"]} />
                        <Dropdown title="MEDIA" basePath="/media" subLinks={["OFCK", "Gallery"]} />
                        <Dropdown title="THE CLUB" basePath="/the-club" subLinks={["Presicency","History", "Parteners", "Vision", "Academy OFCK"]} />
                        <Dropdown title="FANS" basePath="/fans" subLinks={["Fan Club", "Events", "Support"]} />
                        <Dropdown title="BOUTIQUE" basePath="/boutique" subLinks={["Products", "Whistlist", "Cart"]} />
                    </div>
                </div>
                <div className='navbar-right'>
                    <HiOutlineSearch className='icon' />
                    <HiOutlineUser className='icon' />
                    <HiOutlineGlobe className='icon' />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
