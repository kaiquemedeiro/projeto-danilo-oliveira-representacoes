import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Clients from './pages/Clients';
import './App.css'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Clients />} />
      </Routes>
    </>
  )
}

export default App
