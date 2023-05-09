import React from 'react'
import '../Styles/Panel1.css';
import Rectangle7 from '../Assets/Rectangle7.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Panel1 = () => {
    function click2() {
        gsap.to(window, {duration: 1.25, scrollTo: {y: ".panel2", offsetY: 50}, onComplete: fadeIn});
    }
    function fadeIn() {
        gsap.fromTo(".panel1-text", {opacity: 0, y: 50}, {duration: 1, y:0, opacity: 1, ease: "power2.inOut"}).delay(0.25);
    }
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('.panel1-italic-text, .panel1-bold-text', { scrollTrigger: {
        trigger: ".panel1",
        start: "top 80%",
        end: "center center",
        once: true,
        // markers: {startColor: "green", endColor: "red", fontSize: "12px"}
        }, 
        onComplete: fadeIn});
    },[]);
  return (
    <div className='panel1'>
        <div className='panel1-top'>
            <div className='panel1-top-left'></div>
            <div className='panel1-top-right'>
            <div className='panel1-text'>
                <p className='panel1-italic-text' id="1">The Next Wave of</p>
                <p className='panel1-bold-text' id='2'>Game-Changing Companies</p>
                <p className='panel1-italic-text'id="3">Will be</p>
                <p className='panel1-bold-text'id="4">Life-Changing Companies</p>
            </div>
            </div>
        </div>
        <div className='panel1-bottom'>
            <img src={Rectangle7} alt='panel1' className='panel1-image'/>
            <a id='panel1-hero-button' onClick={click2}>
                 Next
            </a>
        </div>
        
    </div>
  )
}

export default Panel1