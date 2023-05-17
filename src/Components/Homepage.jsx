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

function Homepage() {
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