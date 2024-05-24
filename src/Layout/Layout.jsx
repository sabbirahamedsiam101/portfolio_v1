import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Componets/Nav'

export default function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}
