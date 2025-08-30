import React from 'react'
import Counter from './counter/counter'
import Mood from './mood/Mood'
import Background from './backgroundChanger/Background'
import Ghadi from './Ghadi/Ghadi'
import Post from './API/Post'

const App = () => {
  return (
    <>
      <Counter />
      <Mood />
      <Background/>
      <Ghadi/>
      <Post/>
    </>
  )
}



export default App