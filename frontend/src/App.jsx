import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from '../../admin/src/pages/Login'
import Abou

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
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
        <Route path='/appointment/:docId' element={<MyAppointment/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
