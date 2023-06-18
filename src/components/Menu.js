import "./Menu.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <div className="menu">
      <div className="search">
        <input className="search-box" placeholder="15100-PRB-A01"></input>
        <div className="search-icon-container">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
        </div>
      </div>
      <div className="sections">
        <a>HOME</a>
        <a>CONTACT</a>
      </div>
    </div>
  );
};

export default Menu;
