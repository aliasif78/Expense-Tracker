import React, { useState } from 'react';
import { IoFolderOutline } from "react-icons/io5";
import { RiCoinsLine } from "react-icons/ri";
import { IoList } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { PiShoppingBag } from "react-icons/pi";
import { VscSettingsGear } from "react-icons/vsc";
import "./Sidebar.css"

const Sidebar = () => {
    const [clickStates, setClickStates] = useState([
        false,
        true,
        false,
        false,
        false,
        false,
    ]);

    const handleClick = (index) => {
        const newClickStates = clickStates.map((state, i) => i === index);

        setClickStates(newClickStates);
    };

    return (
        <div className="sidebar bg-zinc-800 w-16 flex flex-col gap-3 items-center pt-2 h-auto pb-[2.1%] rounded-bl-3xl cursor-pointer">
            <div onClick={() => handleClick(0)} className={`cont flex justify-center items-center transition duration-200 bg-${clickStates[0] ? 'black' : 'zinc-800'} relative hover:bg-black p-4`}>
                <IoFolderOutline className='size-[25px] opacity-40 bg-transparent invert' />
                
                {clickStates[0] && (<div className="bottom-gradient-border"></div>)}
            </div>

            <div onClick={() => handleClick(1)} className={`cont flex justify-center items-center transition duration-200 bg-${clickStates[1] ? 'black' : 'zinc-800'} relative hover:bg-black p-4`}>
                <RiCoinsLine className='size-[25px] opacity-40 bg-transparent invert' />

                {clickStates[1] && (<div className='bottom-gradient-border'></div>)}
            </div>

            <div onClick={() => handleClick(2)} className={`cont flex justify-center items-center transition duration-200 bg-${clickStates[2] ? 'black' : 'zinc-800'} relative hover:bg-black p-4`}>
                <IoList className='size-[25px] opacity-40 bg-transparent invert' />

                {clickStates[2] && (<div className='bottom-gradient-border'></div>)}
            </div>

            <div onClick={() => handleClick(3)} className={`cont flex justify-center items-center transition duration-200 bg-${clickStates[3] ? 'black' : 'zinc-800'} relative hover:bg-black p-4`}>
                <IoPeopleOutline className='size-[25px] opacity-40 bg-transparent invert' />

                {clickStates[3] && (<div className='bottom-gradient-border'></div>)}
            </div>

            <div onClick={() => handleClick(4)} className={`cont flex justify-center items-center transition duration-200 bg-${clickStates[4] ? 'black' : 'zinc-800'} relative hover:bg-black p-4`}>
                <PiShoppingBag className='size-[25px] opacity-40 bg-transparent invert' />

                {clickStates[4] && (<div className='bottom-gradient-border'></div>)}
            </div>

            <div onClick={() => handleClick(5)} className={`cont flex justify-center items-center transition duration-200 bg-${clickStates[5] ? 'black' : 'zinc-800'} relative hover:bg-black p-4`}>
                <VscSettingsGear className='size-[25px] opacity-40 bg-transparent invert' />

                {clickStates[5] && (<div className='bottom-gradient-border'></div>)}
            </div>
        </div>
    );
}

export default Sidebar;
