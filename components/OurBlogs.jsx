import React from 'react'
import {ourblogs} from "../Data/data"
import Image from 'next/image'
const OurBlogs = () => {
  return (
    <>
    <h1 className='flex items-center justify-center mt-32 text-2xl  text-blue-600' id='Blogs'><span className='bg-blue-600 text-white font-bold p-1 mr-1 '>Edu</span> Helping Blogs</h1>
    <div className='flex flex-wrap justify-center gap-7 mt-20' data-aos="zoom-out" data-aos-duration="1000">
      
      {ourblogs.map((blogs,index) => (
        <div key={index}>
          
        <Image src={blogs.img} alt='' width={370} height={370} className='rounded-md cursor-pointer' />
       <h1 className='mt-3 w-[350px] text-lg text-blue-600'>{blogs.title}</h1>
        </div>
      ))
      }
    </div>
    </>
  )
}

export default OurBlogs
