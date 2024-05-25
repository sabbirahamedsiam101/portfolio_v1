import React from 'react'
import Nav from '../../Componets/Nav'
import Header from './Header'
import Projects from './Projects'
import Expertise from './Expertise'
import MarqueeText from './MarqueeText'
import Testimonials from './Testimonials'
import About from './About'

export default function Home() {
  return (
    <div className='relative'>

      <Header />
      <About />
      <Projects />
      <Expertise />
      <MarqueeText />
      <Testimonials />
    </div>
  )
}
