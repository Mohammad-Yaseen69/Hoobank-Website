import React from 'react'
import styles, { layout } from '../styles'
import { logo } from '../assets/index'
import { footerLinks, socialMedia } from '../website data'

const Footer = () => {
  return (
    <section className={`w-full flex flex-col justify-center items-center mt-10`}>

      <div className={`${layout.section} max-md:gap-16 max-md:items-center w-full justify-around`}>
        <div className='flex flex-col gap-4 max-md:items-center flex-shrink-0'>
          <img src={logo} alt="" className='w-48' />
          <p className={`${styles.paragraph2} max-md:text-center`}>
            A new way to make the payments <br /> easy, reliable and secure.
          </p>
        </div>

        <div className='flex w-[50%] flex-wrap gap-14 max-md:w-full justify-around'>
          {footerLinks.map((link) => (
            <div className='flex flex-col max-ss:items-center gap-4 flex-shrink-0'>
              <h1 className='font-poppins text-white  font-semibold'>{link.title}</h1>
              <div className='flex max-ss:items-center flex-col gap-4'>
                {link.links.map((link) => (
                  <h3 className={`text-dimWhite font-normal transition-all  hover:text-secondary hover:font-semibold`}><a className='hover:text-gradient' href={link.link}>{link.name}</a></h3>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>

      <div className='w-full h-[1px] bg-white opacity-40'></div>

      <div className='flex justify-between max-ss:flex-col max-ss:justify-center max-ss:items-center gap-6 w-full my-8'>

        <h1 className='font-poppins text-white font-semibold'>
          2022 HooBank. All Rights Reserved.
        </h1>

        <div className='flex gap-5 flex-wrap'>
          {socialMedia.map(link => (
            <a key={link.id}  target='_blank' href={link.link}><img src={link.icon} alt="" /></a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer