import React from 'react'
import Navbar from './components/Navbar/Navbar'
import GraphComponent from './components/GraphComponent/GraphComponent'
import StocksAndTips from './components/StocksAndTips/StocksAndTips'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <GraphComponent/>
      <StocksAndTips/>
    </div>
  )
}

export default App