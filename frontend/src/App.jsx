import React from 'react'
import { Routes,Route } from 'react-router-dom'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appointment' element={<MyAppointment/>}/>
      </Routes>
    </div>
  )
}

export default App
