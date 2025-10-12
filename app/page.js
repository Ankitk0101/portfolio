'use client'
import React, { use } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact  from './components/Contact'
import Footer from './components/Footer'

function page() {
  return (
    <div>
     <Navbar/>
     <Header/>
     <AboutMe/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default page