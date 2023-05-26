import './Sticker.css';
import logo from '../logo.svg';


const Sticker = ({ part }) => {
    return (
        <div className='sticker'>
            <div className='half-width'>
                <img src={logo}/>
            </div>
            <div className='half-width'>
                <p>GENUINE PARTS<br/>Honda Motor Co., Ltd.</p>
            </div>
            <div className='data'>
                <p className='title'>SW UNIT, START</p>
                <p className='part-number'>{part.number}</p>
                <div>QTY</div>
            </div>

        </div>
    )
}

export default Sticker