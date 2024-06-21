import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black') 


 return (
    // <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
    //   <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    //   <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
    //     <button 
    //     onClick={() => setColor('red')}
    //     className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: "red"}}>Red</button>
    //     <button
    //     onClick={() => setColor('green')} 
    //     className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: "green"}}>Green</button>
    //     <button 
    //     onClick={() => setColor('blue')}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: "Blue"}}>Blue</button>
    //     <button 
    //     onClick={() => setColor('white')}className='outline-none px-4 py-1 rounded-full text-black shadow-lg'  style={{backgroundColor: "white"}}>white</button>
    //     <button
    //     onClick={() => setColor('Lavender')}
    //     className='outline-none px-4 py-1 rounded-full text-black shadow-lg'  style={{backgroundColor: "Lavender"}}
    //     >Lavender</button>
    //   </div>
    //   </div>
    // </div>

    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className=' fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2'>
        <div className='flex flex-wrap bg-white gap-3 shadow-lg justify-center px-3 py-2 rounded-3xl'>
          <button
           onClick={() => setColor("red")}
           className="outline-none px-4 py-2 rounded-full shadow-lg text-white " style={{backgroundColor: "red"}}>Red</button>
          <button
           onClick={() => setColor("Green")} 
          className="outline-none px-4 py-2 rounded-full shadow-lg text-white " style={{backgroundColor: "green"}}>Green</button>
          <button 
           onClick={() => setColor("Blue")}
          className="outline-none px-4 py-2 rounded-full shadow-lg text-white " style={{backgroundColor: "blue"}}>Blue</button>
          <button 
           onClick={() => setColor("white")}
          className="outline-none px-4 py-2 rounded-full shadow-lg text-black " style={{backgroundColor: "white"}}>White</button>
          <button 
           onClick={() => setColor("lavender")}
          className="outline-none px-4 py-2 rounded-full shadow-lg text-black " style={{backgroundColor: "lavender"}}>Lavender</button>
          <button
           onClick={() => setColor("yellow")}
           className="outline-none px-4 py-2 rounded-full shadow-lg text-black " style={{backgroundColor: "yellow"}}>Yellow</button>
          <button
           onClick={() => setColor("purple")}
           className="outline-none px-4 py-2 rounded-full shadow-lg text-white " style={{backgroundColor: "purple"}}>Purpe</button>
        </div>
      </div>
    </div>
  )
}

export default App
