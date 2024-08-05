import React from 'react'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import About from './components/About'
import HeroSection from './components/HeroSection'
function page() {
  return (
    <div className='bg-[#E2E2DF]' >
      <Navbar />
      <HeroSection/>
    
      <Projects/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default page
