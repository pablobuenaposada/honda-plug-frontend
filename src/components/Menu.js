import "./Menu.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      // Modify the API endpoint based on your requirements
      const apiUrl = `https://hondaplug.com/api/parts/${searchQuery}`;

      // Perform the API call
      fetch(apiUrl)
        .then((response) => {
          if (response.ok) {
            window.location.href = `http://localhost:3000/part/${searchQuery}`;
          } else {
            console.error("API error:", response.status);
          }
        })
        .catch((error) => {
          console.error("API error:", error);
        });
    }
  };

  return (
    <div className="menu">
      <div className="search">
        <input
          className="search-box"
          placeholder="15100-PRB-A01"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="search-icon-container" onClick={handleSearch}>
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
