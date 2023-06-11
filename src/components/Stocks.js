import React from "react";
import PropTypes from "prop-types";
import Stock from "./Stock";
import "./Stocks.css";

const Stocks = ({ stocks }) => {
  return (
    <table className="table">
      <tr>
        <th>TITLE</th>
        <th>SOURCE</th>
        <th>COUNTRY</th>
        <th>AVAILABLE</th>
        <th>DISCONTINUED</th>
        <th>QUANTITY</th>
        <th>PRICE</th>
      </tr>
      {stocks.map((stock, index) => (
        <Stock
          key={index}
          stock={stock}
          rowColor={index % 2 === 0 ? "even" : "odd"}
        />
      ))}
    </table>
  );
};

Stocks.propTypes = {
  stocks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      available: PropTypes.bool,
      discontinued: PropTypes.bool,
      quantity: PropTypes.number,
      price: PropTypes.number.isRequired,
      price_currency: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Stocks;
