import { card } from '../assets'
import styles, { layout } from '../styles'
import GetStartedBtn from './GetStartedBtn'

const CardDeal = () => {
  return (
    <section id='card-deal' className={`${layout.section} relative max-sm:mt-10 gap-10  items-center w-full `}>

      <div className='w-1/2 max-md:w-full gap-7 items-start justify-between flex flex-col max-md:items-center max-md:text-center'>
        <h1 className={`${styles.heading3}`}>
          Find a better card deal
          in few easy steps
        </h1>
        <p className={`${styles.paragraph2} w-[90%]`}>
          We've been researching and comparing credit cards for over 15 years. You can easily compare more than 270 Australian credit
          cards using our free tools. When you find one that suits, we'll take you securely to the bank's website.
        </p>

        <GetStartedBtn />
      </div>
      <div className='w-1/2 max-md:w-full flex justify-center '>
        <img src={card} alt="billing" className='w-full max-md:w-[70%] max-sm:w-full' />
      </div>
    </section>
  )
}

export default CardDeal