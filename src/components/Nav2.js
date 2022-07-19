import React from "react";
import {NavLink} from 'react-router-dom';


const Nav2 =() =>{
    return(
      <div className="Nav2">
            <div className="logo">
                <p>ip<span>NX</span></p>
            </div>

            <div className="menu">
                <ul>
                    <li>
                        <NavLink className ="active-link" to="/">HOME</NavLink> </li>
                   
                    <li> <NavLink to='/login' className="login">Login</NavLink> </li>

                    <li> <NavLink to='/register' className="FAQ">FAQ</NavLink> </li>

                </ul>
            </div>

        </div>
    )


}

export default Nav2;