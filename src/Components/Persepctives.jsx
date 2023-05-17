import React from 'react'
import '../Styles/Perspectives.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import image from '../Assets/glossier.png'


function Persepctives() {
    const articleData = [
        {
            photo: image,
            type: 'INSIGHTS',
            title: 'The Crumbling Infrastructure of the Web',
        }, 
        {
            photo: image,
            type: 'THESIS',
            title: 'The Future Forerunners; Fund VI $1B',
        }, 
        {
            photo: image,
            type: 'PORTFOLIO',
            title: 'Glossier Gets A Makover',
        }, 
        {
            photo: image,
            type: 'PORTFOLIO',
            title: 'Glossier Gets A Makover',
        },
        {
            photo: image,
            type: 'INSIGHTS',
            title: 'The Crumbling Infrastructure of the Web',
        }, 
        {
            photo: image,
            type: 'THESIS',
            title: 'The Future Forerunners; Fund VI $1B',
        }, 
    ]
    const articleList = articleData.map((article) => {
        return (
            <SplideSlide className='pers-slide'>
                <img className='pers-image'src={article.photo} alt=''/>
                <div className='slide-text'>
                <div className='slide-type'>{article.type}</div>
                <div className='slide-sub'>{article.title}</div>
                </div>
                
            </SplideSlide >
        )
    })

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
            <Splide className='pers-slider' options={{
                pagination: false,
                perPage: 3,
            }}
             >
                {articleList}
            </Splide>
        </div>
    </div>
  )
}

export default Persepctives