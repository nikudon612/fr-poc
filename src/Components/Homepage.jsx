import React from 'react'
import Header from './Header'
import Hero from './Hero';
import Panel1 from './Panel1';
import Panel2 from './Panel2';
import Panel3 from './Panel3';
import Panel4 from './Panel4';
import Advantage from './Advantage';
import Points from './Points';
import Persepctives from './Persepctives';
import Lenis from '@studio-freight/lenis'

function Homepage() {
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  return (
    <div className='homepage'>
        <Header />
        <Hero />
        <Panel1 />
        <Panel2 />
        <Panel3 />
        <Panel4 />
        <Advantage />
        <Points />  
        <Persepctives />
    </div>
  )
}

export default Homepage