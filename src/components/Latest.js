// Latest.js

import React from "react";
import PropTypes from "prop-types";

const LatestTable = ({ data }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Reference</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      {data &&
        data.map((item) => (
          <tr
            key={item.reference}
            onClick={() =>
              (window.location.href = `https://hondaplug.com/part/${item.reference}`)
            }
          >
            <td>{item.reference}</td>
            <td>{item.title}</td>
          </tr>
        ))}
    </tbody>
  </table>
);

LatestTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      reference: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default LatestTable;
