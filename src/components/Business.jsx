import React from 'react'
import styles, { layout } from '../styles'
import { features } from '../website data'
import GetStartedBtn from './GetStartedBtn'

const Business = () => {
  return (
    <section id='business' className={` relative mt-24 w-full items-center justify-between max-md:gap-11 ${layout.section} `}>

      <div className='w-[50%] max-md:w-full flex max-md:items-center  flex-col gap-10 justify-start items-start'>

        <h1 className={`font-poppins font-bold text-white text-[3.5vw] max-md:text-center max-md:text-[5vw]`}>
          You do the business,
          we'll handle the money.
        </h1>
        <p className={`${styles.paragraph} max-md:text-[15px] max-ss:w-full max-md:text-center max-md:w-[90%]`}>
          With the right credit card, you can improve your financial life
          by building credit, earning rewards and saving money.
          But with hundreds of credit cards on the market.
        </p>

        <GetStartedBtn />
      </div>

      <div className='w-[45%] max-md:w-full  flex flex-col items-start justify-center gap-8'>
        {features.map(feature => (
          <div className='flex items-center gap-5 rounded-lg feature-card px-2 py-2'>
            <div className={`w-14 h-14 flex-shrink-0 rounded-full bg-dimBlue ${styles.flexCenter}`}>
              <img className='w-[50%] h-[50%] object-contain' src={feature.icon} alt="" />
            </div>
            <div>
              <h1
                className='font-poppins max-sm:text-[3vw] font-semibold text-white max-md:text-[2vw] text-[1.5vw]'>
                {feature.title}
              </h1>
              <p
                className={`${styles.paragraph} max-ss:leading-5 max-sm:text-[12px] max-md:text-[14px]`}>
                {feature.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute w-[50%] h-[40%] bottom-20 white__gradient z-0 right-50"></div>
    </section>
  )
}

export default Business