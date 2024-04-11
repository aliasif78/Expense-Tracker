import React from 'react'
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Chart from "react-apexcharts";
import "./Transactions.css"

const Transactions = () => {
  const generateReport = () => {

  }

  return (
    <div className="transactions shadow-2xl flex flex-col h-full w-full rounded-xl bg-white">
      <div className="box1 flex flex-col gap-0">
        <div className="heading flex flex-row justify-between">
          <div className='h-1/8 text-lg font-semibold text-neutral-600 pl-3 pt-2'>Transactions</div>
          <div className="plus bg-black text-white text-center rounded-full size-7 text-xl m-3 cursor-pointer">+</div>
        </div>

        <div className="currency w-fit flex flex-row ml-3 -mt-3 text-xs gap-2 font-semibold text-neutral-400">
          <div className="pkr cursor-pointer">PK RUPEE</div>

          <div className="usd flex flex-col cursor-pointer text-neutral-500">
            <div className="selection flex flex-row gap-0.5">
              <div className='curr font-semibold'>US DOLLAR</div>
              <IoIosArrowDown className='bg-transparent size-5 cursor-pointer hover:text-black transition-all duration-300 rounded-full -mt-0.5 p-1' />
            </div>

            <div className="line bg-neutral-400 h-[1px] mt-0.5 w-full"></div>
          </div>
        </div>
      </div>

      <div className="box2 flex flex-col bg-[#ECECEC] h-[60%] mt-3 -mr-2 w-full overflow-auto cursor-pointer">
        <div className="transaction hover:bg-neutral-300 flex flex-col w-[100%] -mr-20 border-b-[1.5px] border-b-neutral-300">
          <div className='flex flex-row items-center justify-start ml-10 my-2'>
            <img src="https://static-01.daraz.pk/p/75e307f0a4455a284eba5d87cc5ca46d.jpg" alt="" className='size-8 rounded-full' />
            <div className="itemType text-sm text-black font-semibold overflow-clip min-w-[30%] w-fixed ml-8">Dumbbells</div>
            <div className="price text-sm text-red-600 font-semibold ml-10">$34</div>
            <IoIosArrowDown className='bg-transparent size-5 cursor-pointer ml-8 hover:text-black hover:bg-neutral-300 transition-all duration-300 rounded-full p-1' />
          </div>

          {/* <div className="line bg-neutral-400 h-[1px] w-[60%] ml-24"></div> */}
        </div>

        <div className="transaction hover:bg-neutral-300 flex flex-col w-[100%] -mr-20 border-b-[1.5px] border-b-neutral-300">
          <div className='flex flex-row items-center justify-start ml-10 my-2'>
            <img src="https://jafferjees.com/pub/media/catalog/product/cache/a48c8929b81a0e4b26febc3fa3511cd7/1/9/1947_green_115.jpg" alt="" className='size-8 rounded-full' />
            <div className="itemType text-sm text-black font-semibold overflow-clip min-w-[30%] w-fixed ml-8">Perfume</div>
            <div className="price text-sm text-red-600 font-semibold ml-10">$40</div>
            <IoIosArrowDown className='bg-transparent size-5 cursor-pointer ml-8 hover:text-black hover:bg-neutral-300 transition-all duration-300 rounded-full p-1' />
          </div>

          {/* <div className="line bg-neutral-400 h-[1px] w-[60%] ml-24"></div> */}
        </div>

        <div className="transaction hover:bg-neutral-300 flex flex-col w-[100%] -mr-20 border-b-[1.5px] border-b-neutral-300">
          <div className='flex flex-row items-center justify-start ml-10 my-2'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0k4Xi1nahQbe6dOMvv4j4NpYxiZZGC7Ba85dKpUAFFA&s" alt="" className='size-8 rounded-full' />
            <div className="itemType text-sm text-black font-semibold overflow-clip min-w-[30%] w-fixed ml-8">Headset</div>
            <div className="price text-sm text-red-600 font-semibold ml-10">$27</div>
            <IoIosArrowDown className='bg-transparent size-5 cursor-pointer ml-8 hover:text-black hover:bg-neutral-300 transition-all duration-300 rounded-full p-1' />
          </div>

          {/* <div className="line bg-neutral-400 h-[1px] w-[60%] ml-24"></div> */}
        </div>
      </div>

      <div className='flex flex-row align-middle justify-center items-center'>
        <button className='rounded-xl w-[40%] mt-4 text-white bg-black' onClick={generateReport}>Generate Report</button>
      </div>
    </div>
  )
}

export default Transactions
