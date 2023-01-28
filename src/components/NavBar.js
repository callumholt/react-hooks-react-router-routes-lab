import React from "react";
import { NavLink } from "react-router-dom";
import Actors from "./Actors";
import App from "./App";
import Directors from "./Directors";
import Movies from "./Movies";

function NavBar() {
  return (
    <div className="NavBar">
      <ul>
        <li>
        <NavLink to="/">
          Home
        </NavLink>
        </li>

        <li>
        <NavLink to="/movies">
          Movies
        </NavLink>
        </li>

        <li>
        <NavLink to="/directors">
          Directors
        </NavLink>
        </li>

        <li>
        <NavLink to="/actors">
          Actors
        </NavLink>
        </li>

      </ul>         
    </div>
  )}

export default NavBar;
