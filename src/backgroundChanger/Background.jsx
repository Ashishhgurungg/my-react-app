import React, { useState } from 'react'

const Background = () => {

    const [color, setColor]  = useState('Blue');

    const red = () => {
        setColor('red')
    }

  return (
    <div style={{
        backgroundColor: color,
        height: '100vh'
    }}>
        <button onClick={red}>red</button>
    </div>
  )
}

export default Background