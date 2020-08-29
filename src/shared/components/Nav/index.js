import React from "react";
import "../Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__group">
          <a href="#0" className="nav__link">
            Option #1
          </a>
        </li>
        <li className="nav__group">
          <a href="#0" className="nav__link">
            Option #2
          </a>
        </li>
        <li className="nav__group">
          <a href="#0" className="nav__link">
            Option #3
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
