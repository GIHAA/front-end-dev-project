import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../assets/images/logo.png";
import { Link } from "react-scroll";
import { Header_details } from "../../data/header";

const Navbar = () => {


  return (
    <div   className="fixed w-full text-white h-[80px] flex justify-between items-center px-4 bg-[#6B3CC9] z-50">
      <div>
        <img src={logo} alt="logo" style={{ width: "150px" }} />
      </div>

      <ul data-aos="fade-left" className="hidden md:flex">
        {Header_details.map((item, index) => {
          return (
            <li key={index} className="px-4">
              <Link to={item.link} smooth={true} duration={500}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>


    </div>
  );
};

export default Navbar;
