import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      
      <div className='text-center text-2x1 pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident facere iste quis quisquam ipsum eveniet est ratione repudiandae repellat porro, ab exercitationem voluptatibus dolor nemo perferendis ducimus minima tempore maxime.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, amet quo. Dolores, totam dolore! Libero rem eum doloribus praesentium eveniet tempora corporis earum sequi provident incidunt minima, blanditiis quam explicabo?</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolorem quibusdam enim distinctio nisi quidem. Delectus odit omnis cum dolorem est, atque cumque, reiciendis voluptatibus saepe autem sit expedita libero.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'></span> CHOOSE US</p>
      </div>

        <div className='flex flex-col md:flex-row mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                <b>Efficiency:</b>
                <p>Steamlined appointment scheduling that fits into your busy lefestyle.</p>
            </div>
        </div>
        <div>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                <b>Convenience:</b>
                <p>Access to a network of trusted healthcare professionals in your area.</p>
            </div>
        </div>
        <div>
            <div>
                <b>Personalization:</b>
                <p>Tailored recommendation and reminders to help you stay on top of your health.</p>
            </div>
        </div>

    </div>
  )
}

export default About
