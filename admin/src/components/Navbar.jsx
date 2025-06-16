
import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { assets } from '../assets/assets';
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);

  const navigate=useNavigate()

  const handleLogout = () => {
    navigate('/')
    localStorage.removeItem(aToken ? 'aToken' : 'dToken');
    setAToken(null);
    window.location.reload();
  };


  return (
    <div className="flex justify-between items-center px-4 sm:px-10 border-b bg-white">
      <div className="flex items-center gap-2 text-xs">
        <img
          src={assets.admin_logo}
          alt="Admin Logo"
          className="w-25 h-15 cursor-pointer"
        />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {aToken ? 'Admin' : 'Doctor'}
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="px-6 py-3 bg-[#5F6FFF] text-white text-sm font-semibold rounded-lg shadow-lg hover:bg-[#5F6FFF] transition duration-300 cursor-pointer "
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
