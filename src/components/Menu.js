import "./Menu.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LatestTable from "./Latest"; // Import the LatestTable component
import { ColorRing } from "react-loader-spinner";

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      const apiUrl = `https://hondaplug.com/api/parts/search/?query=${searchQuery}`;

      // Set loading to true before making the API call
      setIsLoading(true);

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
        })
        .finally(() => {
          // Set loading back to false after the API call is complete
          setIsLoading(false);
        });
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
        <a>HOME</a>
        <a>CONTACT</a>
      </div>

      {/* Display loading indicator when isLoading is true */}
      {isLoading && (
        <div style={{ textAlign: "center" }}>
          <ColorRing
            colors={["#0d917e", "#0d917e", "#0d917e", "#0d917e", "#0d917e"]}
          />
        </div>
      )}

      {/* Display the search results using the LatestTable component */}
      {!isLoading && searchResults.length > 0 && (
        <div className="search-results">
          <LatestTable data={searchResults} />
        </div>
      )}
    </div>
  );
};

export default Menu;
