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
            <td>{stock.available ? '🟢' : '🔴'}</td>
            <td>{stock.discontinued ? '🟢' : '🔴'}</td>
            <td>{stock.price}</td>
            <td>🛒</td>
        </tr>
    )
}

export default Stock