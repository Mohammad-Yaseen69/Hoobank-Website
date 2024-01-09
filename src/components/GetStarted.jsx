import React from 'react'
import { arrowUp } from '../assets'



const GetStarted = () => {
    return (
        <div
            className='text-white flex flex-col items-center justify-center border-2 border-[#8DE8ED]  rounded-full cursor-pointer hover:bg-opacity-80 transition-all duration-300 ease-in-out text-sm font-bold text-center w-[140px] h-[140px] -translate-x-1/2 -translate-y-1/2  right-1/2  absolute left-1/2'
        >
            <h1 className='text-gradient text-[20px]'>
                Get <img src={arrowUp} alt="" className='inline' />
                <br />Started</h1>
        </div>
    )
}

export default GetStarted