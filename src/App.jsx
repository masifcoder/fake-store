import { useState } from 'react'
import "./App.css";
import {Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Navbar from './components/Navbar';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container'>
        <Navbar />
       <div id='page'>
         <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/details/:id' element={<ProductDetailPage />} />
        </Routes>
       </div>
     </div>
    </>
  )
}

export default App
