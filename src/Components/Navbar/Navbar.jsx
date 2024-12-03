import React, { useState, useRef } from "react";
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to track menu status
    const menuRef = useRef();  // Create a reference for the menu

    const openMenu = () => {
        menuRef.current.style.left = '0';  // Move the menu into view from the left
        setIsMenuOpen(true);  // Set the menu open state to true
    };

    const closeMenu = () => {
        menuRef.current.style.left = '-100%';  // Move the menu out of view to the left
        setIsMenuOpen(false);  // Set the menu open state to false
    };

    return (
        <div className='navbar'>
            <img src={logo} alt="Logo" className="logo" />
            <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
            <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
                <li>
                    <AnchorLink className="anchor-link" href="#home">
                        <p onClick={() => { setMenu("home"); closeMenu(); }}>Home</p>
                        {menu === "home" ? <img src={underline} alt="underline" /> : null}
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#about">
                        <p onClick={() => { setMenu("about"); closeMenu(); }}>About Me</p>
                        {menu === "about" ? <img src={underline} alt="underline" /> : null}
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#services">
                        <p onClick={() => { setMenu("services"); closeMenu(); }}>Services</p>
                        {menu === "services" ? <img src={underline} alt="underline" /> : null}
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#work">
                        <p onClick={() => { setMenu("work"); closeMenu(); }}>Portfolio</p>
                        {menu === "work" ? <img src={underline} alt="underline" /> : null}
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#contact">
                        <p onClick={() => { setMenu("contact"); closeMenu(); }}>Contact</p>
                        {menu === "contact" ? <img src={underline} alt="underline" /> : null}
                    </AnchorLink>
                </li>
            </ul>
            <div className={`nav-connect ${isMenuOpen ? 'hide' : ''}`}>
                <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink>
            </div>
        </div>
    );
};

export default Navbar;
