import './Stock.css';

const Stock = ({ stock, rowColor }) => {
    const getFlagEmoji = (countryCode) => {
        const codePoints = countryCode
          .toUpperCase()
          .split('')
          .map((char) => 127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
    };

    return (
        <tr className={rowColor}>
            <td>{stock.title}</td>
            <td>{stock.source}</td>
            <td>{getFlagEmoji(stock.country)}</td>
            <td>{stock.available ? '🟢' : (stock.available === null ? '❔' : '🔴')}</td>
            <td>{stock.discontinued ? '🟢' : (stock.discontinued === null ? '❔' : '🔴')}</td>
            <td>{stock.price} {stock.price_currency}</td>
            <td><a href={stock.url} target="_blank" rel="noopener noreferrer">🛒</a></td>
        </tr>
    )
}

export default Stock