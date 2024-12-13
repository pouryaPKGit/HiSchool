"use client";
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import NavMenu from './NavMenu/NavMenu'
import Banner from './Banner'
import OurServices from './OurServices'
import OurBlogs from './OurBlogs'
import ContactUs from './ContactUs'
import ReviewsSlider from './Reviews/ReviewsSlider'
import Footer from './Footer'
import AboutUS from './AboutUS'
import Aos from "aos"
import "aos/dist/aos.css";

const Home = () => {
  useEffect(()=> {
    const initAOS = async () => {
      await import("aos");
      Aos.init({
        duration:1000,
        easing: "ease",
        once:true,
        anchorPlacement:"top-bottom",
      });
    };

    initAOS();
  },[]);
  
  return (
    <div>
      <div className='md:block hidden'>
      <Navbar/>
      </div>
      <NavMenu/>
      <Banner/>
      <AboutUS/>
      <OurServices/>
      <OurBlogs/>
      <ReviewsSlider/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home
