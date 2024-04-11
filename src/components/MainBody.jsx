import React from 'react'
import { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import "./MainBody.css"
import Balance from './Balance.jsx';
import BalanceVsTime from './BalanceVsTime.jsx';
import ToBuy from "./ToBuy.jsx"
import Loans from "./Loans.jsx"
import Accounts from './Accounts.jsx';
import Transactions from "./Transactions.jsx"

const MainBody = () => {

    // Get Date
    const todaysDate = new Date()
    const day = todaysDate.getDate()
    let month = '';

    if (todaysDate.getMonth() == '0')
        month = 'January'

    if (todaysDate.getMonth() == '1')
        month = 'February'

    if (todaysDate.getMonth() == '2')
        month = 'March'

    if (todaysDate.getMonth() == '3')
        month = 'April'

    if (todaysDate.getMonth() == '4')
        month = 'May'

    if (todaysDate.getMonth() == '5')
        month = 'June'

    if (todaysDate.getMonth() == '6')
        month = 'July'

    if (todaysDate.getMonth() == '7')
        month = 'August'

    if (todaysDate.getMonth() == '8')
        month = 'September'

    if (todaysDate.getMonth() == '9')
        month = 'October'

    if (todaysDate.getMonth() == '10')
        month = 'November'

    if (todaysDate.getMonth() == '11')
        month = 'December'

    return (
        <div className='mainBody h-inherit w-[100%] bg-zinc-200 rounded-br-3xl'>
            <div className="headings flex justify-between w-[100%] mt-5 mx-5 mb-3">
                <div className='text-4xl ml-8 mt-5'>Wallet</div>

                <div className="right flex flex-col justify-end mr-16">
                    <div className="text-right text-xs font-medium opacity-45">Today, {day} {month}</div>

                    <div className="filter flex flex-row justify-center items-center -mr-2 gap-1">
                        <div className="text-right text-2xl">Filter by</div>
                        <IoIosArrowDown className='bg-transparent size-[30px] cursor-pointer hover:bg-zinc-300 transition-all duration-300 rounded-full mt-1 p-1.5' />
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-6 ml-6 mr-6 h-auto">
                <div className="col1 flex flex-col w-1/4 gap-0">
                    <Balance />
                    <BalanceVsTime />
                </div>

                <div className="col2 flex flex-col gap-2 w-2/5">
                    <div className="flex flex-row h-2/5 gap-2">
                        <Accounts />
                        <Loans />
                    </div>

                    <ToBuy />
                </div>

                <div className='w-1/3 w-fixed'>
                    <Transactions />
                </div>
            </div>
        </div>
    )
}

export default MainBody