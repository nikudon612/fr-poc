import React from 'react'
import '../Styles/Hero.css';
import mango from '../Assets/Rectangle.png'
import yellow from '../Assets/yellow.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function Hero() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    function click() {
        gsap.to(window, {duration: 1.25, scrollTo: {y: ".panel1", offsetY: 100}});
    }

    React.useEffect(() => {
        gsap.fromTo('.hero-text', {opacity: 0, y: 20, ease: 'back.out(3)'}, {duration: 1, y: 0, opacity: 1, });
    //     gsap.to('.small-hero-text', { scrollTrigger: { 
    //         trigger: ".hero",
    //         start: "-100% top",
    //         end: "30% top",
    //         scrub: 0.8,
    //         // markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    //     }, 
    //     duration: 1, width: '100%', y: '100%'
    // }
    // )
    gsap.fromTo('.small-hero-text, .larger-hero-text', { scrollTrigger: { 
        trigger: ".hero",
        start: "-100% top",
        end: "30% top",
        scrub: 0.8,
        // markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    }, 
    opacity: 0, y: 0, ease: 'back.out(3)'
}
, { scrollTrigger: {
    trigger: ".hero",
    start: "-100% top",
    end: "30% top",
    scrub: 0.8,
    // markers: {startColor: "green", endColor: "red", fontSize: "12px"}
}, duration: 1, y: -50, opacity: 1}
)
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
            {/* <a href='#' id='hero-button' onClick={click}>
                Next
            </a> */}
        </div>
        <div className='hero-right'>
            <div className='hero-image'>
                {/* <Splide options={{
                    type: 'loop',
                    autoplay: true,
                    interval: 3000,
                    speed: 750,
                    pagination: false, 
                }}>
                    <SplideSlide>
                         <img src={mango} alt='image1' className='slideImage'/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={yellow} alt='image2' className='slideImage'/>
                    </SplideSlide>
                </Splide> */}
                <img src={mango} alt='hero' className='hero-image'/>
            </div>
        </div>
    </div>
    )
}

export default Hero