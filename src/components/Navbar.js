import React from "react";

const Navbar =()=>{

    return(
        <div className="Navbar">
            <div className="logo">
                <p>ip<span>NX</span></p>
            </div>
            <div className="links">
                <ul>
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
                <button className="sign">Sign Up</button>
            </div>

        </div>
    )
}

export default Navbar;