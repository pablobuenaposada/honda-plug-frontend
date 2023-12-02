import "./Menu.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LatestTable from "./Latest"; // Import the LatestTable component

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      const apiUrl = `https://hondaplug.com/api/parts/search/?query=${searchQuery}`;

      // Perform the API call
      fetch(apiUrl)
        .then((response) => {
          if (response.ok) {
            return response.json(); // Assuming the response is in JSON format
          } else {
            console.error("API error:", response.status);
            throw new Error("API error");
          }
        })
        .then((data) => {
          console.log("API response:", data);

          // Update the searchResults state with the received data
          setSearchResults(data.results);
        })
        .catch((error) => {
          console.error("API error:", error);
        });
    }
  };

  return (
    <div className="menu">
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

      {/* Display the search results using the LatestTable component */}
      {searchResults.length > 0 && (
        <div className="search-results">
          <LatestTable data={searchResults} />
        </div>
      )}
    </div>
  );
};

export default Menu;
