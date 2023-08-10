import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#90909b",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#90909b",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/history"
          >
            History
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
