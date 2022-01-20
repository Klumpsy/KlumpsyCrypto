import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import "./navbar.css"

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    const menuCloser = () => {
        if (screenSize < 1068) {
            setActiveMenu(false)
        } else {
            return
        }
    }

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    })

    useEffect(() => {
        if (screenSize < 1068) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])

    return (
        <nav className="nav-container">
            <div className="logo-container">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <FaBitcoin size={35} className="logo" />
                    <Link to="/">
                        <h1>KlumpsyCrypto</h1>
                    </Link>
                </div>
                {screenSize < 1068 && (
                    <button className="nav-menu-hamburger-button" onClick={() => setActiveMenu(!activeMenu)}>
                        {activeMenu ? <AiOutlineClose size={25} /> : <GiHamburgerMenu size={25} />}
                    </button>
                )}
            </div>
            {activeMenu && (
                <div className="menu-item-container">
                    <div className="menu-item">
                        <Link to="/cryptocurrencies" onClick={() => menuCloser()}>
                            <FaEthereum size={25} className="menu-item-icon menu-item-icon-cryptocurrencies" />
                            <h2>Cryptocurrencies</h2>
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/exchanges" onClick={() => menuCloser()}>
                            <BsGraphUp size={25} className="menu-item-icon menu-item-icon-exchanges" />
                            <h2>Exchanges</h2>
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/news" onClick={() => menuCloser()}>
                            <RiArticleLine size={25} className="menu-item-icon menu-item-icon-news" />
                            <h2>News</h2>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
