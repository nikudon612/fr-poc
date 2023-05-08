import React from 'react'
import '../Styles/Hero.css';
import heroImage from '../Assets/Rectangle.png'

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <div className='hero-text'>
                <p className='small-hero-text'>Investing at the intersection of</p>
                <p className='larger-hero-text'>Innovation
                    <br/>
                    & Culture
                </p>
                
            </div>
            <a href='#' className='hero-button'>
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