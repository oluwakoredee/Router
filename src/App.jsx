/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Career from './components/Career'
import PreviewJob from './components/PreviewJob'
import Contact from './components/Contact'
import Partner from './components/Partner'
import PreviewCompany from './components/PreviewCompany'




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
        <Route path='/contact'element={<Contact/>}/>,
        <Route path='/partner'element={<Partner/>}/>,
        <Route path="/partner/preview-company/:companyId" element={<PreviewCompany/>}/>,
      </Routes>
    </div>
  )
}

export default App
