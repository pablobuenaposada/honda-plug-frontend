import './Sticker.css';
import logo from '../logo.svg';


const Sticker = ({ reference }) => {
    return (
        <div className='sticker'>
            <div className='half-width'>
                <img className='honda-logo' src={logo}/>
            </div>
            <div className='half-width'>
                <p>GENUINE PARTS<br/>Honda Motor Co., Ltd.</p>
            </div>
            <div className='data'>
                <p className='title'>SW UNIT, START</p>
                <p className='part-number'>{reference}</p>
                <div>QTY</div>
            </div>

        </div>
    )
}

export default Sticker