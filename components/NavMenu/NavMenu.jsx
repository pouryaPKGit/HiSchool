"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import MobileNavMenu from "./MobileNavMenu";

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
      <div className="flex items-center justify-between md:justify-center bg-blue-600 text-white md:px-0 px-5 text-sm md:h-[60px] h-[80px] font-semibold md:mt-6 relative">
     
        <div className="md:hidden block">
          <div className="flex items-center font-bold">
            <Image src="/images/2112.png" alt="" width={50} height={50} />
            <h1>Edu hi school</h1>
          </div>
        </div>

    
        <div>
         
          <ul className="hidden md:flex items-center gap-8">
            <li
              className="cursor-pointer hover:opacity-55 duration-300"
              onClick={() => {
                const target = document.getElementById("Home");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:opacity-55 duration-300"
              onClick={() => {
                const target = document.getElementById("Services");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Services
            </li>
            <li
              className="cursor-pointer hover:opacity-55 duration-300"
              onClick={() => {
                const target = document.getElementById("Contact");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact
            </li>
            <li
              className="cursor-pointer hover:opacity-55 duration-300"
              onClick={() => {
                const target = document.getElementById("About Us");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              About Us
            </li>
            <li
              className="cursor-pointer hover:opacity-55 duration-300"
              onClick={() => {
                const target = document.getElementById("Reviews");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Reviews
            </li>
            <li
              className="cursor-pointer hover:opacity-55 duration-300"
              onClick={() => {
                const target = document.getElementById("Blogs");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Blogs
            </li>
          </ul>

         
          <IoMdMenu
            className="md:hidden block text-4xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>

     
        <div
          className={`absolute top-0 bg-blue-600 h-[880px] w-[200px] bg-opacity-90 right-0  z-50 flex flex-col gap-8 md:hidden transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <AiOutlineClose
            className="text-4xl absolute top-5 right-5 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
          <MobileNavMenu />
        </div>
      </div>

  );
};

export default NavMenu;
