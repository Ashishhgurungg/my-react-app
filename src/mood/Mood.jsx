import React, { useState } from 'react'

const Mood = () => {

    const [mood, setMood] = useState('😊')

    const happy = () => {
        setMood('😊')
    }
    const sad = () => {
        setMood('🥹')
    }

    const angry = () => {
        setMood('🤬')
    }

  return (
    <div>
        <h1>{mood}</h1>
        <button onClick={happy}>Happy</button>
        <button onClick={sad}>Sad</button>
        <button onClick={angry}>Angry</button>
    </div>
  )
}

export default Mood