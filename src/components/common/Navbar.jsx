import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../assets/images/logo.png";
import { Link } from "react-scroll";
import { Header_details } from "../../data/header";

const Navbar = () => {
  const [navOverlay, setNav] = useState(false);
  const handleClick = () => {
    setNav(!navOverlay);
  };

  return (
    <div   className="fixed w-full text-white h-[80px] flex justify-between items-center px-4 bg-primary z-50">
      <div>
        <img src={logo} alt="logo" style={{ width: "150px" }} />
      </div>

      <ul  className="hidden md:flex">
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

      <div onClick={handleClick} className="md:hidden z-10">
        {!navOverlay ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      <ul
        className={
          !navOverlay
            ? "hidden"
            : "z-50 fixed top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center "
        }
      >
        {Header_details.map((item, index) => {
          return (
            <li key={index} className="py-6 text-4xl">
              <Link to={item.link} smooth={true} duration={500}>
                {item.title}
              </Link>
            </li>
          );
        })}
        <div
          onClick={handleClick}
          className="absolute top-3 right-3 flex items-center justify-center rounded-full border-2 border-sky-500 w-10 h-10 md:hidden z-10 mt-5"
        >
          {!navOverlay ? <FaBars /> : <FaTimes />}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
