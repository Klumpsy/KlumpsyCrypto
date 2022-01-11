import React from 'react';
import { Link } from 'react-router-dom';

import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";

import "./navbar.css"
import reactRouterDom from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-container">
            <div className="logo-container">
                <FaBitcoin size={30} className="logo" />
                <Link to="/">
                    <h1>KlumpsyCrypto</h1>
                </Link>
            </div>
            <div>
                <div className="menu-item">
                    <Link to="/cryptocurrencies">
                        <FaEthereum size={25} className="menu-item-icon menu-item-icon-cryptocurrencies" />
                        <h2>Cryptocurrencies</h2>
                    </Link>
                </div>
                <div className="menu-item">
                    <Link to="/exchanges">
                        <BsGraphUp size={25} className="menu-item-icon menu-item-icon-exchanges" />
                        <h2>Exchanges</h2>
                    </Link>
                </div>
                <div className="menu-item">
                    <Link to="/news">
                        <RiArticleLine size={25} className="menu-item-icon menu-item-icon-news" />
                        <h2>News</h2>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
