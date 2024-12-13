import React from 'react'
import Image from 'next/image'
import {ourservices} from "../Data/data"
const OurServices = () => {
  return (
    <>
     <h1 className='flex items-center justify-center text-2xl text-blue-600 mt-20' id='Services'><span className='bg-blue-600 text-white font-bold p-1 mr-1'>Edu</span> Hi School Services</h1> 
     <div className='flex flex-wrap justify-center items-center gap-10 mt-16' data-aos="zoom-in" data-aos-duration="2000" >
      {ourservices.map((services,index) => (
        <div key={index}>
        <Image src={services.img} alt='' width={370} height={370}   />
        <h1 className='text-white text-lg mt-2 bg-blue-800 p-1'><span className=' text-xl font-semibold bg-white text-blue-500 mr-1 '>Edu</span>{services.title}</h1>
        </div>
      ))
      }
     </div>
    </>
  )
}

export default OurServices
