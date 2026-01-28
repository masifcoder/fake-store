import { useState } from 'react'
import "./App.css";
import Home from './Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container'>
        <h1 className='my-3 text-center'>Fake Store</h1>
        <Home />
     </div>
    </>
  )
}

export default App
