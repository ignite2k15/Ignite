import React from 'react'
import Home from '../home/Home'
import Activities from '../Activities/Activities'
import Teams from '../Teams/TeamsPage'
import Gallery from '../Gallery/Gallery'
import Contact from '../Contact/Contact'

const HomeScreen = () => {
  return (
    <div>
      <Home/>
      <Teams/>
      <Gallery/>
      <Activities/>
      <Contact/>
    </div>
  )
}

export default HomeScreen
