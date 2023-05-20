import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeAbout from '../components/HomeAbout'
import HomeProjects from '../components/HomeProjects'
import HomeContact from '../components/HomeContact'

export default function Home() {
  return (
    <div className="home">
      <HomeHero/>
      <HomeAbout/>
      <HomeProjects/>
      <HomeContact />
    </div>
  )
}
