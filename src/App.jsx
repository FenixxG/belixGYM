import './App.css'
import { Inicio } from './pages/Inicio';

import { Servicios } from './pages/Servicios';
import { Mensualidades } from './pages/Mensualidades';
import { Consumibles } from './pages/Consumibles';
import { Accesorios } from './pages/Accesorios';
import { Programas } from './pages/Programas';

import {Blog} from './pages/Blog'
import { Contacto } from './pages/Contacto';
import { Acercade } from './pages/Acercade';
import { FAQ } from './pages/FAQ';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path="/que-ofrecemos/servicios" element={<Servicios />} />
        <Route path="/que-ofrecemos/mensualidades" element={<Mensualidades />} />
        <Route path="/que-ofrecemos/productos/consumibles" element={<Consumibles />} />
        <Route path="/que-ofrecemos/productos/accesorios" element={<Accesorios />} />
        <Route path="/que-ofrecemos/programas" element={<Programas />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path='/acerca-de' element={<Acercade />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  )
}

export default App
