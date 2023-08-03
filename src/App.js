import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import About from './components/About/About.js'
import TechStack from './components/TechStack/TechStack.js'
import Project from './components/Projects/Project.js'
import WorkExperience from './components/WorkExperience/WorkExperience'
import Education from './components/Education/Education'
import Certifications from './components/Certifications/Certification'
import Contact from './components/Contact/Contact'
import ScrollToTop from "react-scroll-to-top";
import './App.css';

const App = ()=> {
  return (
  <>
    <Sidebar />
    <About />
    <TechStack />
    <Project />
    <WorkExperience />
    <Education />
    <Certifications />
    <Contact />
    <ScrollToTop 
    smooth={true}
    top="20"
    color='white'
    height='20'
    width='20'
    style={{ borderRadius: "90px", backgroundColor: "#38004c"}} 
    />
  </>
  )
  }

export default App;