import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sign from "./components/customer/Sign"
import Login from "./components/customer/Login"
import Nav from "./components/customer/Nav"
import MenuDoc from "./components/customer/MenuDoc"
import Payments from './components/customer/Payments'
import InstantPayment from './components/customer/InstantPayment'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Nav/>
      <MenuDoc/>
    </>
  )
}

export default App
