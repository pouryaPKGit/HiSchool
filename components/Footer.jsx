import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='flex flex-wrap gap-5 items-center justify-between border-t w-[80%] mx-auto border-black pt-4 mt-20 mb-5 font-semibold '>
      <h1 className=''>© 2024 Establishment. All rights reserved.</h1>
      <div className='flex items-center gap-7'>
        <p className='cursor-pointer hover:opacity-40 duration-200'>Privacy Policy</p>
        <p className='cursor-pointer hover:opacity-40 duration-200'>Terms of Services</p>
      </div>
    </div>
  )
}

export default Footer
