import './App.css'

import { Inicio } from './pages/Inicio';
import { Contact } from './pages/Contact';
import { Acercade } from './pages/Acercade';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/acerca-de' element={<Acercade />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
