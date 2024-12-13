"use client";
import { clientReviews } from '@/Data/data';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewsCard from './ReviewsCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 3, // تعداد آیتم‌ها برای دسکتاپ
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const Slider = () => {
  return (
    <div className='w-[80%] mx-auto mt-32' data-aos="flip-up" id='Reviews'>
        <div className='flex flex-col items-center'>
        <h1 className='text-xl text-blue-800 font-semibold flex items-center justify-center uppercase'>Reviews</h1>
        <h2 className='mb-10 mt-1 text-3xl font-bold'>Students opinions</h2>
        </div>
   <Carousel arrows={true} autoPlaySpeed={5000} infinite responsive={responsive}  >
    {clientReviews.map((review) => {
        return (
            <div key={review.image}>
                <ReviewsCard review={review}/>
            </div>
        );
    })}
   </Carousel>
   </div>
  );
}

export default Slider;
