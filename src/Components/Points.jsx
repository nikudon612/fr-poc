import React from 'react'
import '../Styles/Points.css'
import line from '../Assets/Line.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Points() {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        function fadeTwo() {
            gsap.fromTo("#point-1-lower", {opacity: 0, y: 50}, {duration: 1, y:0, opacity: 1, ease: "power2.inOut", });
        }

        function fadeIn() {
            gsap.fromTo("#point-1", {opacity: 0, y: 50}, {duration: 1, y:0, opacity: 1, ease: "power2.inOut", onComplete: fadeTwo});
        }

        gsap.from('#point-1', { scrollTrigger: {
            trigger: ".points",
            start: "top 80%",
            end: "center center",
            once: true,
            }, 
            onComplete: fadeIn});

            function fadeInTwoLower() {
                gsap.fromTo("#point-2-lower", {opacity: 0, y: 50}, {duration: 1, y:0, opacity: 1, ease: "power2.inOut", });

            }

            function fadeInTwo() {
                gsap.fromTo("#point-2", {opacity: 0, y: 50}, {duration: 1, y:0, opacity: 1, ease: "power2.inOut", onComplete: fadeInTwoLower });
            }

    gsap.from('#point-2', { scrollTrigger: {
        trigger: ".points",
        start: "top 50%",
        end: "center center",
        once: true,
    }, 
    onComplete: fadeInTwo});

    function fadeInThreeLower() {
        gsap.fromTo("#point-3-lower", {opacity: 0, y: 50}, {duration: 1, y:0, opacity: 1, ease: "power2.inOut", });
    }

    function fadeInThree() {
        gsap.fromTo("#point-3", {opacity: 0, y: 50}, {duration: 1, y:0, opacity: 1, ease: "power2.inOut", onComplete: fadeInThreeLower });

    }

    gsap.from('#point-2', { scrollTrigger: {
        trigger: ".points",
        start: "top 20%",
        end: "center center",
        once: true,
    }, 
    onComplete: fadeInThree});

    })
    
  return (
    <div className='points'>
        <div className='points-top'>
            <div className='points-top-text left-margin'>
                <div className='points-text-title' id="point-1">Research-focused</div>
                <div className='points-text-sub' id="point-1-lower">We commit ourselves to having a constant pulse on what people are doing and why. This requires both IQ and EQ - data-driven analysis combined with an intimate understanding of peoples' lives, behaviors, and emotions.</div>
            </div>
            <img src={line} className='points-line pad-right right-side'/>
        </div>
        <div className='points-middle'>
        <img src={line} className='points-line pad-left'/>

        <div className='points-middle-text left-margin'>

                <div className='points-text-title' id="point-2">Thesis-driven</div>
                <div className='points-text-sub' id="point-2-lower">We leverage our research to uncover outsized business prospects and invest in the teams best positioned to meet them, including category-drefining companies like Faire, Chime, Glossier, Hims&Hers, OURA, The Farmer's Dog, and more.</div>
            </div>
        </div>
        <div className='points-bottom'>
        <div className='points-bottom-text left-margin'>
                <div className='points-text-title' id="point-3">Purpose-built</div>
                <div className='points-text-sub' id="point-3-lower">The consumer is our North Star. Everything we do is in service of meeting the evolving needs, preferences, and potential of people. We see technology and innovation as a means to meeting the consumer where they are going.</div>
            </div>
            <img src={line} className='points-line pad-right'/>
        </div>
    </div>
  )
}

export default Points