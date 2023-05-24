import React from 'react'
import './TeamHero.css'
import Image from '../../Assets/Image.png'

function TeamHero() {
  return (
    <div className='TeamHero'>
        <div className='team-hero-left'>
            <div className='team-hero-text'>
                <div className='team-hero-title'>Unique <span className='green-text'>People.</span></div> 
                <div className='team-hero-title'>Unique <span className='green-text'>Approaches.</span></div> 
                <div className='team-hero-subtitle'>We’re a diverse team of visionaries and veterans who looked at the VC industry and said: <span className='team-bold-text'>“We can do more.”</span> Together, we’re redefining what VC can be — for consumers who deserve better.
                </div>
            </div>
        </div>
        <div className='hero-right'>
            <div className='hero-image'>
                <img src={Image} alt='hero-pic' className='hero-image'/>
                <div className='brandName' href="">Glossier</div>
                {/* <img src={arrow} className='brandName arrow'/> */}
            </div>
        </div>
    </div>
  )
}

export default TeamHero