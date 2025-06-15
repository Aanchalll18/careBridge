import React from 'react'
import { Routes,Route } from 'react-router-dom'
import MyProfile from './pages/MyProfile'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/my-profile' element={<MyProfile/>}/>
      </Routes>
    </div>
  )
}

export default App
