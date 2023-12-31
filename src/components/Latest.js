import React from "react";
import PropTypes from "prop-types";
import "./Latest.css";

const LatestTable = ({ data }) => {
  if (data && data.length > 0) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>PART NUMBER</th>
            <th>TITLE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.reference}
              onClick={() => (window.location.href = `/part/${item.reference}`)}
            >
              <td>{item.reference}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return <p className="no-results">No results found</p>;
  }
};

LatestTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      reference: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default LatestTable;
