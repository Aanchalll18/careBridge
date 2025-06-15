import React from 'react'
import { Routes,Route } from 'react-router-dom'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appointment' element={<MyAppointment/>}/>
        <Route path='/appointment/:socId' element={<MyAppointment/>}/>
      </Routes>
    </div>
  )
}

export default App
