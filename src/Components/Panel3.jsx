import React from 'react'
import '../Styles/Panel3.css';
import { gsap } from 'gsap';
import phone from '../Assets/phone.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Panel3 = () => {
    function click4() {
        gsap.to(window, {duration: 1.25, scrollTo: {y: ".panel4", offsetY: 50}});
    }
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        function fadeIn() {
            gsap.fromTo(".panel3-upper-text", {opacity: 0, y: 50}, {duration: 1, y:0, opacity: 1, ease: "power2.inOut",  onComplete: fadeLowerIn()});
        }
        function fadeLowerIn() {   
            gsap.fromTo(".panel3-lower-text", {opacity: 0, y: 50}, {duration: 1, y:0, opacity: 1, ease: "power2.inOut"}).delay(0.6);
        }
        gsap.from('.panel3', { scrollTrigger: {
        trigger: ".panel3",
        start: "top 80%",
        end: "center center",
        once: true,
        // markers: {startColor: "green", endColor: "red", fontSize: "12px"}
        },
        onComplete: fadeIn})
    },[]);
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
            {/* <a id='panel3-next' onClick={click4}>Next</a> */}
        </div>
        <div className='panel3-right'>
            <img src={phone} className='panel3-image' />
        </div>
    </div>
    </div>
  )
}

export default Panel3