import React from 'react'
import './TeamHero.css'
import Image from '../../Assets/Image.png'

function TeamHero() {
  return (
    <div className='TeamHero'>
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
        </div>
        <div className='hero-right'>
            <div className='hero-image'>
                {/* <img src={Image} alt='hero' className='hero-image'/> */}
                <div className='brandName' href="">Glossier</div>
                {/* <img src={arrow} className='brandName arrow'/> */}
            </div>
        </div>
    </div>
  )
}

export default TeamHero