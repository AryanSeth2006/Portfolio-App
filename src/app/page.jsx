import React from 'react'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import About from './components/About'
import Tag from './components/Tag'
import HeroSection from './components/HeroSection'
function page() {
  return (
    <div className='bg-[#D5FF3F]' >
      <Navbar />
      <HeroSection/>
      <Tag />
    
      <Projects/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default page
