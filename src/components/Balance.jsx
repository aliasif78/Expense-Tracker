import React from 'react'
import { useState, useEffect } from 'react';
import { MdEdit } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import { MdArrowUpward } from 'react-icons/md';
import "./Balance.css"

const Balance = () => {

    const [availableBalance, setAvailableBalance] = useState(localStorage.getItem("availableBalance"))
    const [isEditing, setIsEditing] = useState(false)
    const [isDollar, setIsDollar] = useState(true)
    const [exchangeRate, setExchangeRate] = useState(null);

    const saveToLocalStorage = () => {
        localStorage.setItem("availableBalance", availableBalance)
    }

    // Get current Exchange Rate
    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await fetch('https://v6.exchangerate-api.com/v6/0bcb3adaf74e139f8b9274e6/latest/USD');
                const data = await response.json();
                const exchangeRate = await data.conversion_rates.PKR;
                setExchangeRate(exchangeRate)
                // setAvailableBalance((parseFloat(availableBalance) / exchangeRate).toFixed(2).toString());
            } catch (error) {
                console.error('Error fetching exchange rate:', error);
            }
        };

        fetchExchangeRate();
    }, []);

    // Get Balance in Rs
    const toggleEditBalance = () => {
        setIsEditing(!isEditing)
    }

    const editBalance = (e) => {
        setAvailableBalance(e.target.value)
        saveToLocalStorage()
    }

    const isEnter = (e) => {
        if (e.key == 'Enter')
            setIsEditing(false)
    }

    const handlePlus = () => {
        setAvailableBalance((parseFloat(availableBalance) + 1.0).toFixed(2).toString())
        saveToLocalStorage()
    }

    const handleMinus = () => {
        setAvailableBalance((parseFloat(availableBalance) - 1.0).toFixed(2).toString())
        saveToLocalStorage()
    }

    const handleCurrency = () => {
        if (isDollar) {
            setAvailableBalance((parseFloat(availableBalance) * exchangeRate).toFixed(2).toString())
            setIsDollar(false)
        }

        else {
            setAvailableBalance((parseFloat(availableBalance) / exchangeRate).toFixed(2).toString())
            setIsDollar(true)
        }
    }

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
        <div className="balance shadow-2xl flex flex-col h-4/5 w-full pb-5 rounded-t-xl bg-white">
            <div className="heads flex justify-between">
                <h1 className='text-md font-semibold text-neutral-600 pl-3 pt-2'>Balance</h1>

                <div className="editDiv w-6 h-6 m-2 flex items-center justify-center bg-black rounded-full cursor-pointer">
                    <MdEdit className='invert size-3' onClick={toggleEditBalance} onChange={editBalance} />
                </div>
            </div>

            <div className="money flex flex-col gap-1 ml-3">
                <div className="mainMoney flex flex-row justify-center gap-2 mr-9 items-center">
                    <div onClick={handleCurrency} className="w-7 h-7 flex items-center justify-center border border-black rounded-full cursor-pointer">
                        {isDollar && <FaDollarSign />}
                        {!isDollar && <div className='text-sm'>Rs</div>}
                    </div>

                    {isEditing ? (<input onKeyDown={(e) => { isEnter(e) }} type='text' value={availableBalance} onChange={editBalance} className='text-4xl text-neutral-500 w-28 text-center border-none'></input>) : (<h1 className='text-4xl w-auto'>{availableBalance}</h1>)}
                </div>

                <div className="dollarVSrs flex flex-row justify-center gap-1 mr-5">
                    <MdArrowUpward className='text-green-600 text-sm mt-[0.25%]' />
                    {exchangeRate && <p className='text-xs opacity-50'>$1 = Rs. {exchangeRate.toFixed(2)}</p>}
                </div>

                <div className="btns opacity-90 relative z-50 flex flex-row justify-center mt-1">
                    <button onClick={handlePlus} className='bg-black hover:bg-none text-white rounded-l-3xl w-[12%] border-r-white border-r-2'>+</button>
                    <button onClick={handleMinus} className='bg-black hover:bg-none text-white rounded-r-3xl w-[12%] -ml-[0.3%]'>-</button>
                </div>
            </div>
        </div>
    )
}

export default Balance
