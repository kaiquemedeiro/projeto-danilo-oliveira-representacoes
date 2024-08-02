import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
