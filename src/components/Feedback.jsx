import React from 'react'
import { feedback } from '../website data'
import { quotes } from '../assets'
import styles from '../styles'

const Feedback = () => {
  return (
    <div
      className='flex flex-wrap gap-9 justify-center h-auto w-full feedback-container relative z-[1]'>

      {feedback.map(eachFeedback => (
        <div
          key={eachFeedback.id}
          className='flex h-auto justify-between flex-col px-7 py-10 rounded-[20px] max-w-[330px] feedback-card'>

          <img src={quotes} alt="" className='size-12' />

          <p className='text-white my-10 max-sm:text-[2.5vw] font-poppins text-[1.5vw]'>{eachFeedback.content}</p>

          <div className='flex items-center gap-2'>
            <div className={`size-12  flex-shrink-0 rounded-full bg-dimBlue ${styles.flexCenter}`}>
              <img className='object-contain' src={eachFeedback.img} alt="" />
            </div>

            <div className=''>
              <h1
                className='font-poppins relative top-2 max-sm:text-[3vw] font-semibold text-white max-md:text-[2vw] text-[1.5vw]'>
                {eachFeedback.name}
              </h1>
              <p
                className={`${styles.paragraph} whitespace-nowrap  max-sm:text-[12px] max-md:text-[14px]`}>
                {eachFeedback.title}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute w-[40%] h-[30%] -right-60 top-20 blue__gradient z-0"></div>
    </div>
  )
}

export default Feedback