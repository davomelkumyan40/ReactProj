import React from "react";
import navStyles from "./Nav.module.css";
import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <NavLink className={navStyles.item} activeClassName={navStyles.active} to="/messages">Messages</NavLink>
            <NavLink className={navStyles.item} activeClassName={navStyles.active} to="/profile">Profile</NavLink>
            <NavLink className={navStyles.item} activeClassName={navStyles.active} to="/news">News</NavLink>
            <NavLink className={navStyles.item} activeClassName={navStyles.active} to="/more1">More 1</NavLink>
            <NavLink className={navStyles.item} activeClassName={navStyles.active} to="/more2">More 2</NavLink>
        </nav>
    );
}

export default Nav;