import React from 'react'
import Navbar from './components/Navbar/Navbar'
import GraphComponent from './components/GraphComponent/GraphComponent'
import StocksAndTips from './components/StocksAndTips/StocksAndTips'
import GCtest from './components/GCtest/GCtest'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      {/* <GraphComponent/> */}
      <GCtest/>
      <StocksAndTips/>
    </div>
  )
}

export default App