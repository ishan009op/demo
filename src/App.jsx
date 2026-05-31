import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Projects from './Components/Projects'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Home/>
   <About/>
   <Projects/>
   <Services/>
   <Contact/>

    </>
  )
}

export default App
