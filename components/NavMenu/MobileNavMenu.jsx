import React from "react";

const MobileNavMenu = () => {
  return (
    <div className="">
      <ul className="flex flex-col items-start ml-5 gap-6 text-lg  mt-20">
        <li
          className="cursor-pointer hover:opacity-75 duration-300"
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
          className="cursor-pointer hover:opacity-75 duration-300"
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
          className="cursor-pointer hover:opacity-75 duration-300"
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
          className="cursor-pointer hover:opacity-75 duration-300"
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
          className="cursor-pointer hover:opacity-75 duration-300"
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
          className="cursor-pointer hover:opacity-75 duration-300"
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
    </div>
  );
};

export default MobileNavMenu;
