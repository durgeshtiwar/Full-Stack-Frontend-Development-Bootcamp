import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(6);
  const [charAllow, setCharAllow] = useState(false);
  const [numberAllow, setNumberAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordCopyRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(charAllow) str += "!@#$%^&*()~";
    if(numberAllow) str += "0123456789";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length,charAllow,numberAllow,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordCopyRef.current?.select();
    passwordCopyRef.current?.setSelectionRange(0, 6);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length,charAllow,numberAllow,passwordGenerator])  

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className="font-bold text-center my-3 text-white">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordCopyRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-2'>
        <input 
        type="range"
        min={6}
        max={50}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllow}
          id="numberInput"
          onChange={() => {
              setNumberAllow((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                  setCharAllow((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
