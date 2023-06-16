import "./Menu.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <div className="menu">
      <input className="search-box" placeholder="15100-PRB-A01"></input>
      <FontAwesomeIcon icon={faSearch} />
      <a>HOME</a>
      <a>CONTACT</a>
    </div>
  );
};

export default Menu;
