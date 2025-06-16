import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/**----------- left Section ----------- */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt='' />
            <p className='w-full md:w-23 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia magni, maxime a neque atque provident eos distinctio beatae quam eaque omnis quas sint. Ipsam repellendus sequi nobis vel ut autem?</p>
        </div>

        {/**----------- left Section ----------- */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/**----------- left Section ----------- */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+1-434-234-5645</li>
                <li>careconnect403@gmail.com</li>
            </ul>
        </div>
      </div>

      {/**-------------copyright Text------------- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-centre'>copyright 2025@ careconnect - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
