import { useState } from 'react'

function Sandwich(): JSX.Element {
  let [sandwich, setSandwich] = useState('sandwich:')

  function handleAddCheese(): void {
    setSandwich(sandwich + ' cheese')
  }

  function handleAddSausage(): void {
    setSandwich(sandwich + ' sausage')
  }

  function handleAddBread(): void {
    setSandwich(sandwich + ' bread')
  }

  function handleStop(): void {
    setSandwich(sandwich = 'sandwich:');
  }

  return (
    <div className='App'>
      <div>
        <h2>Create your sandwich, click what you want to add</h2>
        <p>{sandwich}</p>
      </div>
      <div>
        <button onClick={handleAddCheese}>add cheese</button>
        <button className='buttonSausage'  onClick={handleAddSausage}>add sausage</button>
        <button onClick={handleAddBread}>add bread</button>
      </div>
      <div>
        <button name="submit" onClick={handleStop}>Send an order</button>
      </div>
      <div className='sandwichGif'>

      </div>
  </div>
  )
}

export default Sandwich