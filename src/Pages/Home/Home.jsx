import React from 'react'
import Nav from '../../Componets/Nav'
import Header from './Header'
import Projects from './Projects'
import Expertise from './Expertise'

export default function Home() {
  return (
    <div className='relative'>

      <Header />
      <Projects />
      <Expertise />
    </div>
  )
}
