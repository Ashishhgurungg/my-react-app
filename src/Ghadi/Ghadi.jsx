import React, { useEffect, useState } from 'react'

const Ghadi = () => {

    const  [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false}))

    useEffect(()=>{
        const timerId = setInterval(() => {
            setTime(
                new Date().toLocaleTimeString('en-US', {hour12: false})
            )
        }, 5000)

        return () => clearInterval(timerId);
    }, []
)

  return (
    <div>
        <h1>Ghadiii</h1>
        <h2>{time}</h2>
    </div>
  )
}

export default Ghadi