import React from 'react'
import '../Styles/Hero.css';
import heroImage from '../Assets/Rectangle.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/all';

function Hero() {
    gsap.registerPlugin(ScrollToPlugin);

    function click() {
        gsap.to(window, {duration: 1.25, scrollTo: {y: ".panel1", offsetY: 100}});
    }

    React.useEffect(() => {
        gsap.fromTo('.hero-text', {opacity: 0, y: 20, ease: 'back.out(3)'}, {duration: 1, y: 0, opacity: 1, });
    }, []);

  return (
    <div className='hero'>
        <div className='hero-left'>
            <div className='hero-text'>
                <p className='small-hero-text'>Investing at the intersection of</p>
                <div className='larger-hero-text'>Innovation
                    <br/>
                    <span className='ampersand'>&</span>
                    <br/>
                    <span className='Culture'>Culture</span>
                </div> 
            </div>
            <a href='#' className='hero-button' onClick={click}>
                Next
            </a>
        </div>
        <div className='hero-right'>
            <div className='hero-image'>
                <img src={heroImage} alt='hero' className='hero-image'/>
            </div>
        </div>
    </div>
    )
}

export default Hero