import React from "react";
import {NavLink} from 'react-router-dom';

const Navbar =()=>{

    return(
        <div className="Navbar">
            <div className="logo">
                <p>ip<span>NX</span></p>
            </div>

            <div className="links">
                <ul>
                    <li>
                        <NavLink className ="active-link" to="/">HOME</NavLink>
                    </li>
                    <li>
                        <a href="home.html">FOS XTREME</a>
                    </li>
                    <li>
                        <a href="home.html">RESIDENTIAL</a>
                    </li>
                    <li>
                        <a href="home.html">BUSINESS</a>
                    </li>
                    <li>
                        <a href="home.html">SUPPORT</a>
                    </li>
                    <li>
                        <a href="home.html">MY IPNX ACOUNT</a>
                    </li>
                    <li>
                        <a href="home.html"> CARRERS </a>
                    </li>
                    <li>
                        <a href="home.html"> ABOUT US</a>
                    </li>
                    <li>
                        <a href="home.html"> CONTACT US</a>
                    </li>
                </ul>
                
            </div>
            <div className="btn">
                <NavLink to='/register' className="sign">Sign Up</NavLink>
            </div>

        </div>
    )
}

export default Navbar;