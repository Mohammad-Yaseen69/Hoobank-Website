import React from 'react'
import { arrowUp } from '../assets'



const GetStarted = () => {
    return (
        <div
            className='text-white flex flex-col items-center justify-center border-2 border-[#8DE8ED]  rounded-full cursor-pointer
               text-sm font-bold text-center w-[140px] h-[140px] -translate-x-1/2 
             -translate-y-1/2  right-1/2 max-xs:-translate-y-7 max-xs:w-[120px] max-xs:h-[120px] absolute left-1/2 max-md:left-[80%] max-md:translate-y-0 '
        >
            <h1 className='text-gradient text-[20px]'>
                Get <img src={arrowUp} alt="" className='inline' />
                <br />Started</h1>
        </div>
    )
}

export default GetStarted