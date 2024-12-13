"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaRegUser } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const closeForm = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  return (
    <div className='relative'>
      {/* Navbar */}
      <div className='flex items-center justify-between pt-7 px-5 xl:px-32'>
        <div className='flex items-center gap-3'>
          <div className='flex flex-col items-start text-gray-400 font-semibold gap-1 text-sm'>
            <button
              onClick={() => setShowLoginForm(true)}
              className='hover:text-black duration-300'>
              Log In
            </button>
            <button
              onClick={() => setShowRegisterForm(true)}
              className='hover:text-black duration-300'>
              Register
            </button>
          </div>
          <FaRegUser className='text-4xl text-blue-600' />
        </div>
        <div className='flex flex-col items-center'>
          <Image src="/images/Untitled-2.pngloggo.png" alt='' width={60} height={60} />
          <h1 className='font-bold text-xl text-[#2a4aa3]'>Edu Hi School</h1>
        </div>
        <div className='flex items-center gap-3'>
          <div className='flex flex-col items-end gap-1 text-sm'>
            <span className='cursor-pointer'>+115-348-5620</span>
            <span className='text-gray-400 hover:text-black duration-300 cursor-pointer'>uiverse@gmail.com</span>
          </div>
          <FiPhone className='text-4xl text-blue-600' />
        </div>
      </div>

      {/* Overlay */}
      {(showLoginForm || showRegisterForm) && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-10'
          onClick={closeForm}
        ></div>
      )}

      {/* Login Form */}
      {showLoginForm && (
        <div className='fixed inset-0 flex items-center justify-center z-20'>
          <div className='bg-white p-8 rounded-lg shadow-lg w-96 relative'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Log In</h2>
            <form>
              <div className='mb-4'>
                <label className='block text-gray-700'>Email</label>
                <input
                  type='email'
                  className='w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your email'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700'>Password</label>
                <input
                  type='password'
                  className='w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your password'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'>
                Log In
              </button>
            </form>
            <button
              onClick={closeForm}
              className='absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl font-bold'>
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Register Form */}
      {showRegisterForm && (
        <div className='fixed inset-0 flex items-center justify-center z-20'>
          <div className='bg-white p-8 rounded-lg shadow-lg w-96 relative'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Register</h2>
            <form>
              <div className='mb-4'>
                <label className='block text-gray-700'>Name</label>
                <input
                  type='text'
                  className='w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your name'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700'>Email</label>
                <input
                  type='email'
                  className='w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your email'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700'>Password</label>
                <input
                  type='password'
                  className='w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your password'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'>
                Register
              </button>
            </form>
            <button
              onClick={closeForm}
              className='absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl font-bold'>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
