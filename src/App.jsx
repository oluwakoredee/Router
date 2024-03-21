/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Services from './assets/components/Services'
import Career from './assets/components/Career'
import PreviewJob from './assets/components/PreviewJob'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route index path='/' element={<Home/>}/>,
        <Route path='/about' element={<About/>}/>,
        <Route path='/services' element={<Services/>}/>,
        <Route path='/Career' element={<Career/>}/>,
        <Route path="/career/preview-job/:jobId" element={<PreviewJob/>}/>,
      </Routes>
    </div>
  )
}

export default App
