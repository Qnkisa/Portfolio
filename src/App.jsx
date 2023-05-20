import { useState } from 'react'
import './styles/App.css'
import Home from './pages/Home'
import Header from './components/Header'
import LeftFixedHeader from './components/LeftFixedHeader'
import Footer from './components/Footer'

function App() {
  return(
    <>
      <Header />
      <div className="header-helper"></div>
      <LeftFixedHeader/>
      <Home/>
      <Footer />
    </>
  )
}

export default App
