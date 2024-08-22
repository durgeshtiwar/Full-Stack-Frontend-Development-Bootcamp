import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'
import { useState } from 'react'
function App() {
  
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");


  return (
    <>
      <h1 className='text-3xl bg-orange-700'>Chai with custom hooks</h1>
    </>
  )
}

export default App
