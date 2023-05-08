import React from 'react'
import '../Styles/Panel1.css';
import Rectangle7 from '../Assets/Rectangle7.png';
import { gsap } from 'gsap';

const Panel1 = () => {
    function click2() {
        gsap.to(window, {duration: 1.25, scrollTo: {y: ".panel2", offsetY: 50}});
    }

    React.useEffect(() => {
        gsap.from('.panel1', {scrollTrigger: {
            trigger: '.panel1',
            start: 'top top',
            end: 'center center',
            once: true,
        }})
        function boldEnter() {
            gsap.fromTo(".panel1-bold-text", {opacity: 0, y: 20, ease: 'back.out(3)'}, {duration: 1, y: 0, opacity: 1});
        };
        gsap.fromTo('.panel1-italic-text', {opacity: 0, y: 20, ease: 'back.out(3)'}, {duration: 1, y: 0, opacity: 1, onComplete: boldEnter })
    }, []);
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
            <a className='panel1-hero-button' onClick={click2}>
                 Next
            </a>
        </div>
        
    </div>
  )
}

export default Panel1