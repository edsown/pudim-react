import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="navbar">
          <div className="logo">
            <a href="#">
              <img className="logo-img" src="./images/pudimzim-logo.png"></img>
            </a>
          </div>
          <ul className="nav-items">
            <li>
              <a href="#">Cardápio</a>
            </li>
            <li>
              <a target="_blank" href="http://instagram.com/pudim.zim2020">
                Instagram
              </a>
            </li>
            <li>
              <a href="#">Galeria</a>
            </li>
          </ul>
          <FontAwesomeIcon className="hamburger" icon={faBars} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
