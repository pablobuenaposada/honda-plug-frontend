import { useState } from 'react'
import Stocks from './components/Stocks'
import Sticker from './components/Sticker'
import Header from './components/Header'
import Prices from './components/Prices'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './App.css'


const App = () => {
  const [stocks] = useState([
      {
          title: 'whatever',
          source: 'tegiwa',
          country: 'ES',
          available: true,
          discontinued: false,
          price: "11.23€"
      },
      {
          title: 'whatever2',
          source: 'dealership',
          country: 'FR',
          available: false,
          discontinued: true,
          price: "$10.11"
      },
      {
          title: 'whatever2',
          source: 'dealership',
          country: 'FR',
          available: false,
          discontinued: true,
          price: "$10.11"
      }
  ])
    const [part] = useState(
      {
          number: '31512-SB0-900',
      },

  )

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
            <Sticker part={part}></Sticker>
        </div>
        <Stocks stocks={stocks}></Stocks>
        <Prices></Prices>
    </div>
  )
}

export default App
