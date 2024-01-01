import React from "react";
import PropTypes from "prop-types";
import "./Stock.css";

const Stock = ({ stock, rowColor }) => {
  const getFlagEmoji = (countryCode) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  };

  return (
    <tr className={rowColor}>
      <td>{stock.title}</td>
      <td>{stock.source}</td>
      <td>{getFlagEmoji(stock.country)}</td>
      <td>{stock.available ? "🟢" : stock.available === null ? "❔" : "🔴"}</td>
      <td>
        {stock.discontinued
          ? "yes"
          : stock.discontinued === null
          ? "unknown"
          : "no"}
      </td>
      <td>{stock.quantity ? stock.quantity : "❔"}</td>
      <td>
        {stock.price} {stock.price_currency}
      </td>
      <td>
        <a href={stock.url} target="_blank" rel="noopener noreferrer">
          🛒
        </a>
      </td>
    </tr>
  );
};

Stock.propTypes = {
  stock: PropTypes.shape({
    title: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    available: PropTypes.bool,
    discontinued: PropTypes.bool,
    quantity: PropTypes.number,
    price: PropTypes.number.isRequired,
    price_currency: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  rowColor: PropTypes.string.isRequired,
};

export default Stock;
