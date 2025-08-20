import React from 'react'

import { Route, Routes } from 'react-router-dom'
import LightDarkPage from './pages/LightDarkPage'
import SpinningAnimation from './pages/SpinningAnimation'
import TransformYAnimation from './pages/TransformYAnimation'


const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<LightDarkPage />} />
        <Route path='/spinning' element={<SpinningAnimation />} />
        <Route path='/transform-y' element={<TransformYAnimation />} />
      </Routes>

    </div>
  )
}

export default App
