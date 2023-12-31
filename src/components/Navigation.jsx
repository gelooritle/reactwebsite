import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(){
    return(
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="container" to="/">
                       
                    </NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                        Home
                     
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                        About
                      
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                        Contact
                     
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/blog">
                        Blog
                     
                    </NavLink>
                    </li>

                </ul>
                </div>
                </div>
                </nav>
                </div>
);
}                    

export default Navigation;