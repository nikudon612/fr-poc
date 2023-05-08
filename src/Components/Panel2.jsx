import React from 'react'
import '../Styles/Panel2.css'
import cc from '../Assets/cc.png'
import { gsap } from 'gsap';

const Panel2 = () => {
    function click3() {
        gsap.to(window, {duration: 1.25, scrollTo: {y: ".panel3", offsetY: 30}});
    }
  return (
    <div className='panel2'>
        <div className='panel2-left'>
            <img src={cc} className='panel2-image' />
        </div>
        <div className='panel2-right'>
            <div className='panel2-text'>
                <div className='panel2-upper-text'>
                    <p className='bold-text'>The need and potential is clear,</p>
                    <p className='italic-text'>and the opportunities are massive.</p>
                </div>
                <div className="line">-------------------------------------------------------------------------------</div>
                <div className='panel2-lower-text'>
                    <li className='list-text'>Evolved attitudes and social norms are shaping demands.</li>
                    <li className='list-text'>Antiquated and fragile systems are begging for reinvention.</li>
                    <li className='list-text'>Massive demographic shifts are fueling emerging needs.</li>
                </div>
            </div>
            <a className='panel2-next' onClick={click3}>Next</a>
        </div>
    </div>
  )
}

export default Panel2