// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Contact } from './pages/Contact';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </Router>
  )
}

export default App
