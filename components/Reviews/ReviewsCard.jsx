import Image from 'next/image';
import React from 'react'




const ReviewsCard = ({ review }) => {
  const { image, name, profession, rating, text } = review; // استخراج مقادیر از شیء review

  return (
    <div className='rounded-md overflow-hidden shadow-md m-4'>
      
      <div className=''>
        <div className='p-6 flex items-center space-x-6'>
          <div>
            <Image src={image} alt={name} width={80} height={80} className='rounded-full border-2 border-blue-700' />
          </div>
          <div>
            <h1 className='text-lg font-semibold text-blue-900'>{name}</h1>
            <p className='text-sm text-gray-700'>{profession}</p>
          </div>
        </div>
      </div>
      <div className='p-6'>
        <Image src="/images/q.png" alt="quote-icon" width={50} height={50} />
        <p className='text-gray-800 text-opacity-70 mt-4'>{text}</p>
        <Image src="/images/q.png" alt="quote-icon" width={50} height={50} className='ml-auto' />
      </div>
    
    </div>
  );
};
export default ReviewsCard
