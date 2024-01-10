import React from 'react'
import { bill, apple, google } from '../assets'
import styles, { layout } from '../styles'

const Billing = () => {
  return (
    <section id='billing' className={`${layout.section} relative max-sm:mt-10 gap-10  items-center w-full `}>
      <div className='w-1/2 max-md:w-full flex justify-center '>
        <img src={bill} alt="billing" className='w-full max-md:w-[70%] max-sm:w-full' />
      </div>

      <div className='w-1/2 max-md:w-full gap-7 justify-between flex flex-col max-md:items-center max-md:text-center'>

        <h1 className={`text-[4vw] max-ss:text-[6vw] max-md:text-[5vw] font-poppins text-white font-semibold`}>
          Easily control your
          billing & invoicing.
        </h1>
        <p className={`${styles.paragraph2} w-[90%]`}>
          We consider the payment methods you'll offer your customers when you start your business. 
          This is an important part of managing your business cash flow and meeting your customer's needs.
        </p>

        <div className='flex gap-3  w-auto'>
          <img src={apple} alt="" className='size-28 cursor-pointer'/>
          <img src={google} alt="" className='size-28 cursor-pointer'/>
        </div>
      </div>

      <div className="absolute w-[40%] h-[30%] left-0 top-10 blue__gradient z-0 right-20"></div>

    </section>
  )
}

export default Billing