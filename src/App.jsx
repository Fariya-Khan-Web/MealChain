import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  // E0DDCA
  // F6F8E2
  // FCBC58
  // F57C51

  return (
    <div 
    className='dark:bg-[#221e1e] dark:text-white'
    >
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
