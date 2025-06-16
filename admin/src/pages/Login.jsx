import React, { useState } from 'react'

const Login = () => {
     
    const [state,setState]=useState('Admin')


  return (
    <form className=' min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'><span className='text-[#5F6FFF] ml-2'>{state}</span> Login</p>
        <div className='w-full'>
            <p>Email</p>
            <input type="email" required className='border border-[#DADADA] rounded w-full p-2 mt-1' />
        </div>
        <div className='w-full'>
            <p>password</p>
            <input type="password" required className='border border-[#DADADA] rounded w-full p-2 mt-1'/>
        </div>
        <button className='bg-[#5F6FFF] text-white w-full py-2 rounded-md text-base'>Login</button>
      </div>
    </form>
  )
}

export default Login
