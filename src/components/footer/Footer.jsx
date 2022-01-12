import React from 'react'
import { Link } from "react-router-dom"

import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer-container">
            <h3>KlumpsyCrypto</h3>
            <p>All rights reserved</p>
            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
            </div>
        </footer>
    )
}

export default Footer
