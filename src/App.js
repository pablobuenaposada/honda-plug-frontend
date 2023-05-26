import { useState } from 'react'
import Stocks from './components/Stocks'
import Sticker from './components/Sticker'

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
        <Sticker part={part}></Sticker>
        <Stocks stocks={stocks}></Stocks>
    </div>
  )
}

export default App
