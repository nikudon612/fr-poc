import React from 'react'
import '../Styles/Perspectives.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import image from '../Assets/glossier.png'


function Persepctives() {
  return (
    <div className='perspectives'>
        <div className='perspectives-top'>
            <div className='pers-text'>
                Perspectives 
                <div className='pers-sub'>In the connected world, nothing happens in a vaccum. 
                <br/>The future is already written in today's news - if you know where to look.</div>
            </div>
            <button className='pers-button'>View all</button>
        </div>
        <div className='perspectives-bottom'>
            <Splide className='pers-slider' >
                <SplideSlide className='pers-slide'>
                    <img className='pers-image'src={image}/>
                    <div className='slide-text'>
                    <div className='slide-type'>INSIGHTS</div>
                    <div className='slide-sub'>The Crumbling Infrastructure of the Web</div>
                    </div>
                    
                </SplideSlide>
                <SplideSlide>
                <img className='pers-image' src={image}/>
                    <div>THESIS</div>
                    <div>The Future Forerunners; Fund VI $1B</div>                
                    </SplideSlide>
                <SplideSlide>
                <img className='pers-image' src={image}/>
                    <div>PORTFOLIO</div>
                    <div>Glossier Gets A Makover</div>                
                    </SplideSlide>
            </Splide>
        </div>
    </div>
  )
}

export default Persepctives