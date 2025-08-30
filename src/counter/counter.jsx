import React, { useState } from 'react'

const Counter = () => {
 const [count, setCount] = useState(0)


  const add = () => {
    if (count < 10){

      setCount(count + 1)
      
    }
    else{
      alert('Limit exceeded')
    }
  }

  const reset = () => {
    setCount(0)

  }

  const minus = () => {
    if(count == 0){
      alert('Cannot do it')
    }
    else{

      setCount(count -1)
    }
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={add}>INCREASE</button>
      <button onClick={reset}>RESET</button>
      <button onClick={minus}>DECREASE</button>
    </div>
  )
}

export default Counter