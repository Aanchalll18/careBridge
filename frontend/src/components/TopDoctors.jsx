import React from 'react'
import { doctors } from '../assets/assets'

const TopDoctors = () => {
  return (
    <div className='flex flex-col item-centre gap-4 my-16 texr-gray-900 md:mx-10'>
      <h1 className='text-3x1 font-media'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-centre text-sm'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 '>
        {doctors.slice(0,10).map((item,index)=>(
            <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] translation-all duration-500' key={index}>
                <img src={item.image} alt='' />
                <div>
                    <div>
                        <p></p><p>Available</p>
                    </div>
                    <p>{item.name}</p>
                    <p>{item.speciality}</p>
                </div>
            </div>
        ))}
      </div>
      <button>more</button>
    </div>
  )
}

export default TopDoctors
