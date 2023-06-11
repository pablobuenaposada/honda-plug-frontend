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
                <div>
                    <img src='https://www.a4h-tech.com/media/catalog/product/cache/b95a08d73eb773480bc6ad14fbd63dcf/1/5/15100-prb-a01-oem-honda-oliepomp-k20a-motoren-all4honda.jpg' />
                </div>
                <div>
                    <img src="https://www.a4h-tech.com/media/catalog/product/cache/b95a08d73eb773480bc6ad14fbd63dcf/1/5/15100-plc-003.jpg" />
                </div>
            </Carousel>
          </div>
        </div>
        <div className='half-width'>
            {part && <Sticker reference={part.reference} />}
        </div>
        <Stocks stocks={stocks}></Stocks>
        <Prices stocks={stocks}></Prices>
    </div>
  )
}

export default App
