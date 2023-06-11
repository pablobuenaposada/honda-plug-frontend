import './Sticker.css';
import logo from '../logo.svg';


const Sticker = ({ reference, title }) => {
    return (
        <div className='sticker'>
            <div className='half-width'>
                <img className='honda-logo' src={logo}/>
            </div>
            <div className='half-width'>
                <p>GENUINE PARTS<br/>Honda Motor Co., Ltd.</p>
            </div>
            <div className='data'>
                <p className='title'>{title}</p>
                <p className='part-number'>{reference}</p>
            </div>

        </div>
    )
}

export default Sticker