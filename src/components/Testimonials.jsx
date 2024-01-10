import React from 'react'
import styles, { layout } from '../styles'

const Testimonials = () => {
  return (
    <section className={`${layout.section} relative max-sm:mt-10 gap-10  items-center w-full `}>
      <h1 className={`${styles.heading3} text-center`}>
        What people are saying about us
      </h1>
      <p className={`${styles.paragraph2} text-center`}>
        Everything you need to accept card payments and grow your business anywhere on the planet.
      </p>
    </section>
  )
}

export default Testimonials