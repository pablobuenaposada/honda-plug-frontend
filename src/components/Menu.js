import "./Menu.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LatestTable from "./Latest";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const Menu = ({ updateHomeContent }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    if (searchQuery.trim() !== "") {
      window.history.pushState(null, "", "/");

      const apiUrl = `https://hondaplug.com/api/parts/search/?query=${searchQuery}`;

      updateHomeContent(<Spinner />);

      try {
        const response = await fetch(apiUrl);

        if (response.ok) {
          const data = await response.json();

          updateHomeContent(
            <div className="search-results">
              <LatestTable data={data.results} />
            </div>
          );
        } else {
          console.error("API error:", response.status);
          updateHomeContent(null);
        }
      } catch (error) {
        console.error("API error:", error);
        updateHomeContent(null);
      }
    }
  };

  const handleKeyPress = (e) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="menu">
      <div className="search">
        <input
          className="search-box"
          placeholder="e.g. 15100-PRB-A01, oil filter"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div className="search-icon-container" onClick={handleSearch}>
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
        </div>
      </div>

      <div className="sections">
        <a href="/">HOME</a>
        <a>CONTACT</a>
      </div>
    </div>
  );
};

Menu.propTypes = {
  updateHomeContent: PropTypes.func.isRequired,
};

export default Menu;
