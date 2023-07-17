import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Section from './Components/Section/Section'
// import Cart from './Components/Cart/Cart';



function App() {
  const [count, setCount] = useState(0)
  

  return (
    
    <div className="App">
      <Header/>
      <Section/>
      
    </div>
  )
}

export default App
