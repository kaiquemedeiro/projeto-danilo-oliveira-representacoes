import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Layout from './components/Layout';
import './App.css'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/clients" element={<Clients />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
