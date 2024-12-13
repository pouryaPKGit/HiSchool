import React from 'react'
import Image from 'next/image'
const AboutUS = () => {
  return (
    <div className='flex flex-wrap justify-center gap-16 mt-20 mx-5' id='About Us'>

      <Image src="/images/Kevin-Clark_Students.jpg" alt='' width={500} height={500} className='rounded-xl' data-aos="fade-right" />
      <div>
        <h2 className='uppercase text-blue-800 font-bold text-2xl mb-5' data-aos="fade-down">ABOUT Hi School</h2>
        <h1></h1>
        <div className='flex flex-col gap-4 items-start' data-aos="zoom-in">
            <p className='md:w-[600px] sm:w-[500px] w-[330px] text-gray-600'>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <p className='md:w-[600px] sm:w-[500px] w-[330px] text-gray-600'>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
            <p className='md:w-[600px] sm:w-[500px] w-[330px] text-gray-600'>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        </div>
        </div>

    </div>
  )
}

export default AboutUS
