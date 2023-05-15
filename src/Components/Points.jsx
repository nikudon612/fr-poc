import React from 'react'
import '../Styles/Points.css'
import line from '../Assets/Line.png'

function Points() {
  return (
    <div className='points'>
        <div className='points-top'>
            <div className='points-top-text left-margin'>
                <div className='points-text-title'>Research-focused</div>
                <div className='points-text-sub'>We commit ourselves to having a constant pulse on what people are doing and why. This requires both IQ and EQ - data-driven analysis combined with an intimate understanding of peoples' lives, behaviors, and emotions.</div>
            </div>
            <img src={line} className='points-line pad-right'/>
        </div>
        <div className='points-middle'>
        <img src={line} className='points-line pad-left'/>

        <div className='points-middle-text left-margin'>

                <div className='points-text-title'>Thesis-driven</div>
                <div className='points-text-sub'>We leverage our research to uncover outsized business prospects and invest in the teams best positioned to meet them, including category-drefining companies like Faire, Chime, Glossier, Hims&Hers, OURA, The Farmer's Dog, and more.</div>
            </div>
        </div>
        <div className='points-bottom'>
        <div className='points-bottom-text left-margin'>
                <div className='points-text-title'>Purpose-built</div>
                <div className='points-text-sub'>The consumer is our North Star. Everything we do is in service of meeting the evolving needs, preferences, and potential of people. We see technology and innovation as a means to meeting the consumer where they are going.</div>
            </div>
            <img src={line} className='points-line pad-right'/>
        </div>
    </div>
  )
}

export default Points