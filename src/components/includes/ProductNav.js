import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// for the proper working of nested route ,we have to use "outlet" inside parent route
// duty of Outlet is to decide whether the child router components render before or after the parentrouter component
function ProductNav() {
    return (
        <>
            {/* <Outlet /> */}
            <div className="pdct-container">
                <ul className="nav-items">
                    <li className="pdct-item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            to="all"
                        >
                            All
                        </NavLink>
                    </li>
                    <li className="pdct-item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            to="dress"
                        >
                            Dress
                        </NavLink>
                    </li>
                    <li className="pdct-item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            to="food"
                        >
                            Food
                        </NavLink>
                    </li>
                    <li className="pdct-item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            to="travel"
                        >
                            Travel
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    );
}

export default ProductNav;
