import React from 'react'
import '../Styles/Panel1.css';
import Rectangle7 from '../Assets/Rectangle7.png';

const Panel1 = () => {
  return (
    <div className='panel1'>
        <div className='panel1-top'>
            <div className='panel1-top-left'></div>
            <div className='panel1-top-right'>
            <div className='panel1-text'>
                <p className='panel1-italic-text'>The Next Wave of</p>
                <p className='panel1-bold-text'>Game-Changing Companies</p>
                <p className='panel1-italic-text'>Will be</p>
                <p className='panel1-bold-text'>Life-Changing Companies</p>
            </div>
            </div>
        </div>
        <div className='panel1-bottom'>
            <img src={Rectangle7} alt='panel1' className='panel1-image'/>
        </div>
    </div>
  )
}

export default Panel1