import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from "./components/Logo.jsx";
import Form from './components/PersonForm/Form.jsx';
import Records from './components/Records/Records.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <Logo/>
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </Router>
    </>
      
    
  )
}

export default App
