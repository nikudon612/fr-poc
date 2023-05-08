import React from 'react'
import '../Styles/Panel3.css';
import { gsap } from 'gsap';
import phone from '../Assets/phone.png';

const Panel3 = () => {
    function click4() {
        gsap.to(window, {duration: 1.25, scrollTo: {y: ".panel4", offsetY: 50}});
    }
  return (
    <div className='panel3'>
        <div className='panel3'>
        <div className='panel3-left'>
            <div className='panel3-text'>
                <div className='panel3-upper-text'>
                    <p className='bold-text'>The need and potential is clear,</p>
                    <p className='italic-text'>and the opportunities are massive.</p>
                </div>
                <div className="line">-------------------------------------------------------------------------------</div>
                <div className='panel3-lower-text'>
                    <li className='list-text'>Evolved attitudes and social norms are shaping demands.</li>
                    <li className='list-text'>Antiquated and fragile systems are begging for reinvention.</li>
                    <li className='list-text'>Massive demographic shifts are fueling emerging needs.</li>
                </div>
            </div>
            <a className='panel3-next' onClick={click4}>Next</a>
        </div>
        <div className='panel3-right'>
            <img src={phone} className='panel3-image' />
        </div>
    </div>
    </div>
  )
}

export default Panel3