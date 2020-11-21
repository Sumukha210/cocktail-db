import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__brand" onClick={() => history.push("/")}>
          Cocktail db
        </div>
        <ul className="nav__menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
