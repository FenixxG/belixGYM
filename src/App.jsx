import './App.css'

import { Inicio } from './pages/Inicio';
import { Acercade } from './pages/Acercade';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/acerca-de' element={<Acercade />} />
      </Routes>
    </Router>
  )
}

export default App
