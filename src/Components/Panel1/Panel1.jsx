import React from 'react'
import '../../Styles/Panel1.css';
import Rectangle7 from '../../Assets/Rectangle7.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import arrow from '../../Assets/arrow.png';

const Panel1 = () => {
    function click2() {
        gsap.to(window, {duration: 1.25, scrollTo: {y: ".panel2", offsetY: 50}, onComplete: fadeIn});
    }
    function fadeTwo() { 
        gsap.fromTo(".two", {opacity: 0, y: 50}, {duration: 1, y:0, opacity: 1, ease: "power2.inOut"});
    }
    function fadeIn() {
        gsap.fromTo(".one", {opacity: 0, y: 50}, {duration: 1, y:0, opacity: 1, ease: "power2.inOut", onComplete: fadeTwo});
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
                <p className='panel1-italic-text one' >The Next Wave of</p>
                <p className='panel1-bold-text one' >Game-Changing Companies</p>
                <p className='panel1-italic-text two'>Will be</p>
                <p className='panel1-bold-text two'>Life-Changing Companies</p>
            </div>
            </div>
        </div>
        <div className='panel1-bottom'>
            <img src={Rectangle7} alt='panel1' className='panel1-image'/>
            <div className='panel1-image-overlay'>
                <div className='panel1-brandName' href="">Hims & Hers</div>
                <img src={arrow} className='panel1-brandName panel1-arrow'/>
            </div>
        </div>
        
    </div>
  )
}

export default Panel1