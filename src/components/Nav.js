import React from 'react'
import { Link, useLocation } from "react-router-dom";
const Nav = () => {

  

    const location = useLocation();

    return (
        <nav className="navbar">
                <div className="container">
                    <div className="navbar_left">
                        {/* <img src="/images/logo.png" alt="logo"></img> */}
                        <h2>Duc Dinh</h2>
                    </div>

                    <div className="nav_container navbar_right">
                        <ul className="list">
                            <li><Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link></li>
                            <li><Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link></li>
                            <li><Link to="/contact" className={location.pathname === "/media" ? "nav-link active" : "nav-link"}>Contact</Link></li>
                        </ul>

                    </div>
                </div> 
        </nav>
    );
}

export default Nav;






