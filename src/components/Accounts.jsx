import React from 'react'
import { MdEdit } from "react-icons/md";
import "./Accounts.css"

const Accounts = () => {
    return (
        <div>
            <div className="accounts shadow-2xl flex flex-col h-full w-32 rounded-xl bg-white">
                <div className="heading flex flex-row justify-between">
                    <div className='h-1/4 text-md font-semibold text-neutral-600 pl-3 pt-2'>Accounts</div>

                    <div className="editDiv size-5 mt-2.5 mr-2 flex items-center justify-center bg-black rounded-full cursor-pointer">
                        <MdEdit className='invert size-3' />
                    </div>
                </div>

                <div className="myaccounts mt-3 mx-4 pb-3 flex flex-row overflow-x-auto overflow-y-hidden gap-3">
                    <div className="account flex flex-col cursor-pointer items-center flex-shrink-0 gap-1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8m82KpS9DjABRPZzdZ0FFduYCo8CqKlAThF20EqRI1A&s" alt="img" className='size-10 rounded-full' />
                        <span className='text-red-600 text-xs'>$0</span>
                    </div>

                    <div className="account flex flex-col cursor-pointer items-center flex-shrink-0 gap-1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswpQZq30ND3oQ650bn_yK_ItEoXBTLa7e05AiY28K2Q&s" alt="img" className='size-10 rounded-full' />
                        <span className='text-green-700 text-xs'>$4</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accounts
