import React from 'react'
import Feedback from './Feedback'
import { layout } from '../styles'
import { clients } from '../website data'

const Clients = () => {
  return (
    <section id='clients' className={`flex  flex-col gap-32 justify-center items-center`}>
      <Feedback />

      <div className='flex flex-wrap items-center w-full justify-center gap-16 max-ss:gap-6'>

        {clients.map(eachClient => (
          <div key={eachClient.id} className='size-[15vw] max-ss:size-[18vw]'>
            <img src={eachClient.logo} className='object-cover' alt="" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients