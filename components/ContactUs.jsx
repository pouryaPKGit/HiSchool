import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';
const ContactUs = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center mt-20'>
     <h1 className=' text-md font-semibold text-blue-800 uppercase' id='Contact'>Contact Us</h1> 
     <h2 className='text-3xl font-bold mt-1'>Get in Touch</h2>
     </div>
     <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-between  xl:gap-0 gap-10 w-[80%] mx-auto mt-10' data-aos="fade-up"
     data-aos-duration="2000">
        <div className=''>
            <div className='flex items-center gap-2'>
            <h1 className='text-2xl font-semibold'>Send message to us</h1>
            <Image src="/images/Untitled-1.png213.png" alt='' width={35} height={35} />
            </div>
            <p className='w-[350px] sm:w-[420px] text-md mt-5 text-gray-500 font-semibold'>Contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our hi school community.</p>
            <div className='flex flex-col items-start gap-4 mt-5'>
            <p className='flex items-center gap-2'><FaEnvelope className='text-3xl text-blue-800' />Contact@uiverse.com</p>
            <p className='flex items-center gap-2'><BiSolidPhoneCall className='text-4xl text-blue-800' />+115-348-5620</p>
            <p className='flex items-center gap-2'><FaLocationDot  className='text-4xl text-blue-800'/>United State texas marshall street.</p>
        </div>
        </div>
        <div>
            <div>
                <p className='text-gray-500'>Your Name</p>
                <input type="text" className='bg-blue-100 mt-1 pl-3 outline-none placeholder:text-sm w-[350px] sm:w-[450px] xl:w-[500px] h-[50px]' placeholder='Enter your name' />
            </div>
            <div className='mt-5'>
                <p className='text-gray-500'>Phone Number</p>
                <input type="text" className='bg-blue-100 pl-3 mt-1 outline-none placeholder:text-sm w-[350px] sm:w-[450px] xl:w-[500px] h-[50px]' placeholder='Enter your mobile number' />
            </div>
            <div className='mt-5'>
                <p className='text-gray-500'>Your Email</p>
                <input type="text" className='bg-blue-100 pl-3 mt-1 outline-none placeholder:text-sm w-[350px] sm:w-[450px] xl:w-[500px] h-[50px]' placeholder='Enter your email address' />
            </div>
            <div className='mt-5'>
                <p className='text-gray-500'>Write your messages here</p>
                <input type="text" className='bg-blue-100 pl-3 mt-1 outline-none placeholder:text-sm w-[350px] sm:w-[450px] xl:w-[500px] h-[150px] pb-28' placeholder='Enter your message' />
            </div>
            <button className='flex items-center gap-2 bg-blue-800 text-white px-4 py-2 mt-5 rounded-full  hover:gap-6 duration-500'>Send now <IoIosArrowRoundForward className='text-3xl' /></button>
        </div>
     </div>
    </>
  )
}

export default ContactUs
