import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("");

  return (
    <>
      <div id="main" style={{backgroundColor: color}}>
        <div id="row">
          <div className='colorBox' id="red" onClick={() => setColor("red")}>Red</div>
          <div className='colorBox' id="yellow" onClick={() => setColor("yellow")}>Yellow</div>
          <div className='colorBox' id="black" onClick={() => setColor("black")}>black</div>
          <div className='colorBox' id="purple" onClick={() => setColor("Purple")}>Purple</div>
          <div className='colorBox' id="green" onClick={() => setColor("Green")}>Green</div>
          <div className='colorBox' id="blue" onClick={() => setColor("Blue")}>Blue</div>
          <div className='colorBox' id="white" onClick={() => setColor("white")}>White</div>
        </div>
      </div>
    </>
  )
}

export default App
