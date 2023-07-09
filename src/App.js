import React, { useState, useEffect } from "react";
import Stocks from "./components/Stocks";
import Sticker from "./components/Sticker";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Prices from "./components/Prices";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./App.css";
import axios from "axios";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Menu />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/part/:partId" element={<PartContent />} />
        </Routes>
      </div>
    </Router>
  );
};

const PartContent = () => {
  const [part, setPart] = useState(null);
  const [stocks, setStocks] = useState([]);
  const { partId } = useParams();
  const baseURL = "https://hondaplug.com/api/parts/" + partId;

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPart(response.data);

      const promises = response.data.stock.map((item) =>
        axios
          .get(`https://hondaplug.com/api/stocks/${item.id}/`)
          .then((itemResponse) => {
            return itemResponse.data;
          })
      );

      Promise.all(promises).then((stockData) => {
        setStocks(stockData);
      });
    });
  }, []);

  return (
    <>
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
    </>
  );
};

export default App;
