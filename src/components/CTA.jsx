import React from 'react'
import GetStartedBtn from './GetStartedBtn'
import styles from '../styles'

const CTA = () => {
  return (
    <section className='max-md:flex-col max-md:items-center max-ss:px-0 w-full items-center rounded-xl bg-black-gradient-2 flex justify-between p-10'>

      <div>
        <h1 className={`${styles.heading3}`}>Come try our service now!</h1>
        <p
          className={`${styles.paragraph2} max-xs:text-[12px] max-ss:leading-5 max-md:text-center max-md:pb-4 max-ss:text-[14px] pt-4`}>
          Everything you need to accept card payments and
          <br />grow your business anywhere on the planet.</p>
      </div>
      <GetStartedBtn />

    </section>
  )
}

export default CTA