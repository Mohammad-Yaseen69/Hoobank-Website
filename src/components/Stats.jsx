import React from 'react'
import { stats } from '../website data'
import styles from '../styles'

const Stats = () => {
  return (
    <div className='flex md:my-10 w-full justify-between flex-wrap'>
      {stats.map((stat) => (
        <div key={stat.id} className='flex flex-1 justify-center gap-4 max items-center'>

          <h1 className={`text-white font-poppins font-bold text-[3vw] max-sm:text-[4vw]`}>
            {stat.value}
          </h1>
          <p className={`${styles.paragraph} text-gradient text-[1.5vw] max-sm:text-[2vw] whitespace-nowrap`}>
            {stat.title.toUpperCase()}
          </p>

        </div>
      ))}
    </div>
  )
}

export default Stats