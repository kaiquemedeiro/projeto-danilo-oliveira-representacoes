import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Layout from './components/Layout';
import './App.css'
import Products from './pages/Products';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/clientes" element={ <Clients />} />
          <Route path="/produtos" element={ <Products /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
