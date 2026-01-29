import { useState } from 'react'
import "./App.css";
import {Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
     </div>
    </>
  )
}

export default App
