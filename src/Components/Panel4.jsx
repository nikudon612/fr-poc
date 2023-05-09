import React from 'react'
import '../Styles/Panel4.css';
import Man from '../Assets/man.png'
import { gsap } from "gsap";

const Panel4 = () => {
    function click5(){
        gsap.to(window, {duration: 1, y: '.panel5', ease: "power2.inOut"});
    }
  return (
    <div className='panel4'>
        <div className='panel4-top'>
            <div className='panel4-text'>
                <div className='panel4-para'>Our vision for tomorrow comes from our empathy for today.
                <br/> In an industry obsessed with trailblazing, we go one step further: We meet the consumer where they're going. That makes us unique - and we're here to share that insight with founders. When big thinkers are poised on teh brink of transforming culture, they become more than just founders or CEOs, or investors, or entrepreneurs. </div>
                <div className='panel4-bold'>THEY BECOME FORERUNNERS.</div>
            </div>
        </div>
        <div className='panel4-bottom'>
            <img src={Man} onClick={click5} className='panel4-image'/>
            <a className='panel4-button' onClick={click5}>Next</a>
        </div>
    </div>
  )
}

export default Panel4