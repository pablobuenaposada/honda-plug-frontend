import React, { useState, useEffect } from "react";
import Stocks from "./Stocks";
import Sticker from "./Sticker";
import Prices from "./Prices";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import "./Part.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const PartContent = ({ reference, updateHomeContent }) => {
  const [part, setPart] = useState(null);
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseURL = "https://hondaplug.com/api/parts/" + reference + "/";

  useEffect(() => {
    document.title = `Honda Plug - ${reference}`;

    axios.get(baseURL).then((response) => {
      setPart(response.data);

      const promises = response.data.stock.map((item) =>
        axios
          .get(`https://hondaplug.com/api/stocks/${item.id}/`)
          .then((itemResponse) => itemResponse.data)
      );

      Promise.all(promises).then((stockData) => {
        setStocks(stockData);
        setLoading(false); // Set loading to false when data fetching is complete
      });
    });
  }, [reference]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="part">
        <div className="half-width">
          <div className="slider">
            <Carousel>
              {stocks.map((stock) =>
                stock.images.map((image, index) => (
                  <div key={index}>
                    <img src={image.url} alt={`Image ${index}`} />
                  </div>
                ))
              )}
            </Carousel>
          </div>
        </div>
        <div className="half-width">
          {part && stocks && stocks.length > 0 && (
            <Sticker
              reference={part.reference}
              title={part.title.toUpperCase()}
            />
          )}
        </div>
        <Stocks stocks={stocks} />
        <Prices stocks={stocks} />
      </div>
    </>
  );
};

PartContent.propTypes = {
  updateHomeContent: PropTypes.func.isRequired,
  reference: PropTypes.string,
};

export default PartContent;
