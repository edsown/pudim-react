import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(true);
  const setMode = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <div>
      <nav className="nav">
        <div className="navbar">
          <div className="logo">
            <a href="#">
              <img className="logo-img" src="./images/pudimzim-logo.png"></img>
            </a>
          </div>

          <ul className={activeMenu ? "nav-items" : "nav-items-show"}>
            <li>
              <a href="#">Cardápio</a>
            </li>
            <li>
              <a target="_blank" href="http://instagram.com/pudim.zim2020">
                Instagram
              </a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>

          <FontAwesomeIcon
            className="hamburger"
            id="hamburger"
            icon={activeMenu ? faBars : faTimes}
            onClick={setMode}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
