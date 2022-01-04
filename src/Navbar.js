import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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
              <Link to="/">
                <img
                  className="logo-img"
                  src="./images/pudimzim-logo.png"
                ></img>
              </Link>
            </a>
          </div>

          <ul className={activeMenu ? "nav-items" : "nav-items-show"}>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
            <li>
              <a target="_blank" href="http://instagram.com/pudim.zim2020">
                Instagram
              </a>
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
