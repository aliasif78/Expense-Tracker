import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { PiChats } from "react-icons/pi";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import logo from "./logo.png"
import logo2 from "./appLogo.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='bg-white flex justify-center items-center w-full relative z-50'>
      <img src={logo2} className='size-[4.95%] mr-24 cursor-pointer' alt="" />

      <CiSearch className='bg-transparent opacity-70 size-[19px] relative z-10 left-9 cursor-pointer' />
      <input
        type="text"
        className='bg-zinc-200 rounded-full p-2 w-1/2 pl-12'
        placeholder='Search...'
      />
      <IoIosArrowDropdownCircle className='bg-zinc-200 size-[30px] relative z-10 right-9 rounded-full cursor-pointer' />

      <div className="logos flex bg-transparent ml-10 gap-4 mt-1.25">
        <GoBell className='bg-transparent size-[35px] opacity-50 cursor-pointer hover:bg-zinc-300 transition-all duration-300 rounded-full p-1.5' />
        <PiChats className='bg-transparent size-[35px] opacity-50 cursor-pointer hover:bg-zinc-300 transition-all duration-300 rounded-full p-1.5' />
        <MdOutlineDateRange className='bg-transparent size-[35px] cursor-pointer opacity-50 hover:bg-zinc-300 transition-all duration-300 rounded-full p-1.5' />
      </div>

      <div className="profile ml-20 mr-5 bg-transparent flex gap-2">
        <img src={logo} className='size-[40px] shadow-2xl shadow-zinc-800 bg-black p-1.5 rounded-full cursor-pointer' alt="" />
        <IoIosArrowDown className='bg-transparent mt-1 size-[30px] cursor-pointer opacity-50 hover:bg-zinc-300 transition-all duration-300 rounded-full p-1.5' />
        <span className='bg-transparent text-zinc-300 text-2xl mr-2 cursor-default'>|</span>

        <div class="gradientCircle w-11 h-10 text-2xl flex items-center justify-center bg-black text-white rounded-full cursor-pointer">+</div>
      </div>
    </nav>
  )
}

export default Navbar
