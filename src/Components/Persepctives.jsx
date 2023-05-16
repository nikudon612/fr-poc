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
            <button className='pers-button right-margin'>View all</button>
        </div>
        <div className='perspectives-bottom mask'>
            {/* <div className='mask'></div> */}
            <Splide className='pers-slider right-margin left-margin' options={{
                pagination: false,
                perPage: 3,
            }}
             >
                <SplideSlide className='pers-slide left-margin'>
                    <img className='pers-image'src={image}/>
                    <div className='slide-text'>
                    <div className='slide-type'>INSIGHTS</div>
                    <div className='slide-sub'>The Crumbling Infrastructure of the Web</div>
                    </div>
                    
                </SplideSlide >
                <SplideSlide className='pers-slide'>
                <img className='pers-image' src={image}/>
                    <div className='slide-text'>
                    <div className='slide-type'>THESIS</div>
                    <div className='slide-sub'>The Future Forerunners; Fund VI $1B</div> 
                    </div>
                                   
                    </SplideSlide>
                <SplideSlide className='pers-slide'>
                <img className='pers-image' src={image}/>
                    <div className='slide-text'>
                    <div className='slide-type'>PORTFOLIO</div>
                    <div className='slide-sub'>Glossier Gets A Makover</div> 
                    </div>
                                   
                    </SplideSlide>
                <SplideSlide className='pers-slide'>
                <img className='pers-image' src={image}/>
                    <div className='slide-text'>
                    <div className='slide-type'>PORTFOLIO</div>
                    <div className='slide-sub'>Glossier Gets A Makover</div> 
                    </div>
                                   
                    </SplideSlide>
                <SplideSlide className='pers-slide '>
                <img className='pers-image' src={image}/>
                    <div className='slide-text'>
                    <div className='slide-type'>PORTFOLIO</div>
                    <div className='slide-sub'>Glossier Gets A Makover</div> 
                    </div>
                                   
                    </SplideSlide>
            </Splide>
        </div>
    </div>
  )
}

export default Persepctives