import Stock from './Stock'
import './Stocks.css';

const Stocks = ({ stocks }) => {
  return (
    <table className='table'>
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
        <Stock key={index} stock={stock} rowColor={index % 2 === 0 ? 'even' : 'odd'} />
      ))}
    </table>
  )
}

export default Stocks