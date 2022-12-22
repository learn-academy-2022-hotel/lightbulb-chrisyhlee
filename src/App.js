import React, { useState } from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"

const App = () => {

  const [amountOfSwitches, setAmountOfSwitches] = useState([])

  const addBulb = () => {
    setAmountOfSwitches([...amountOfSwitches, LightSwitch])
  }

  const rmBulb = () => {
    setAmountOfSwitches(amountOfSwitches.slice(0, amountOfSwitches.length - 1))
  }

  return (
    <>
      <div className="backGround">
      <h1 style={{fontFamily: 'AnandaBlack'}}>Lightbulb Challenge</h1>
        <div className="addRemoveButtons">
          <button onClick={addBulb} className='addButton'>+</button>
          <button onClick={rmBulb} className='removeButton'>-</button>
        </div>
        <div style={{textAlign: 'center'}}>
        {amountOfSwitches.length >= 1 && <h3 style={{fontFamily: 'NightForest', fontSize: '28px', color: 'gold'}}>Click a switch to turn on the light!</h3>}
        </div>
        {amountOfSwitches.map((item, i) => (<LightSwitch key={i} />))}
      </div>
    </>
  )
}


export default App
