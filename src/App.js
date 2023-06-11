import { useState } from 'react'
import Stocks from './components/Stocks'
import Sticker from './components/Sticker'
import Header from './components/Header'
import Prices from './components/Prices'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './App.css'
import axios from "axios";
import React from "react";

const baseURL = "http://hondaplug.local:1337/api/parts/15100-prb-a01/"


const App = () => {
    const [part, setPart] = React.useState(null);
    const [stocks, setStocks] = useState([]);

    React.useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setPart(response.data);

                const promises = response.data.stock.map((item) =>
                    axios.get(`http://hondaplug.local:1337/api/stocks/${item.id}/`)
                        .then((itemResponse) => {
                            return itemResponse.data;
                        })
                );

                Promise.all(promises)
                    .then((stockData) => {
                        setStocks(stockData);
                    });
            });
    }, []);

  return (
    <div className='container'>
        <Header/>
        <div className='half-width'>
          <div className='slider'>
              <Carousel>
                  {stocks.map((stock) => (
                    stock.images.map((image, index) => (
                      <div><img src={image.url}/></div>
                    ))
                  ))}
              </Carousel>
          </div>
        </div>
        <div className='half-width'>
            {part && stocks && stocks.length > 0 && <Sticker reference={part.reference} title={stocks[0].title}/>}
        </div>
        <Stocks stocks={stocks}></Stocks>
        <Prices stocks={stocks}></Prices>
    </div>
  )
}

export default App
