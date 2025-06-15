import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex item-centre justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img src={assets.logo} alt="" />
      <ul>
        <NavLink>
            <li>HOME</li>
            <hr>
            </hr>
        </NavLink>
        <NavLink>
            <li>ALL DOCTORS</li>
            <hr>
            </hr>
        </NavLink><NavLink>
            <li>ABOUT</li>
            <hr>
            </hr>
        </NavLink><NavLink>
            <li>CONTACT</li>
            <hr>
            </hr>
        </NavLink>
      </ul>
      <div>
        <buttom>Create Account</buttom>
      </div>
    </div>
  )
}

export default Navbar
