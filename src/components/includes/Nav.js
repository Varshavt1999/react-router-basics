import React from "react";
import { NavLink } from "react-router-dom";
{
    /* navlink -- to highlight the menu which is currently active. we use NavLink instead 
of Link .NavLink has a special property compared to Link*/
}
function Nav() {
    return (
        <div className="nav-container">
            <div className="logo">Logo.</div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/about"
                    >
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/contact"
                    >
                        Contact
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/Products"
                    >
                        Products
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
