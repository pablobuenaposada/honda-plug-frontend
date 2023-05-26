import { useState } from 'react'
import Stocks from './components/Stocks'
import Sticker from './components/Sticker'
import Header from './components/Header'
import SimpleImageSlider from "react-simple-image-slider";
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

  const images = [
  { url: "https://www.a4h-tech.com/media/catalog/product/cache/b95a08d73eb773480bc6ad14fbd63dcf/1/5/15100-prb-a01-oem-honda-oliepomp-k20a-motoren-all4honda.jpg" },
  { url: "https://www.a4h-tech.com/media/catalog/product/cache/b95a08d73eb773480bc6ad14fbd63dcf/1/5/15100-plc-003.jpg" },
];


  return (
    <div className='container'>
        <Header/>
        <div className='half-width'>
          <div className='slider'>
              <SimpleImageSlider
                width={896}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
              />
          </div>
        </div>
        <div className='half-width'>
            <Sticker part={part}></Sticker>
        </div>
        <Stocks stocks={stocks}></Stocks>
    </div>
  )
}

export default App
