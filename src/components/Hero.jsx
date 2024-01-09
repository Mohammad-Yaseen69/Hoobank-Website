import styles, { layout } from "../styles"
import { discount, robot } from "../assets"
import GetStarted from "./GetStarted"


const Hero = () => {
  return (
    <section className={`${layout.section} w-full`}>
      <div className="flex flex-col gap-7 w-3/4 max-md:w-full">

        <div className={`max-xs:text-sm  w-fit px-3 h-12 flex items-center bg-discount-gradient rounded-lg justify-center whitespace-nowrap`}>
          <img
            src={discount}
            alt=""
            className="w-[3vw] max-ss:w-[4vw]" />
          <p className={`${styles.paragraph} max-xs:text-[13px] px-3 text-white`}>
            20% <span className="text-[#bebdbf]">Discount For</span> 1 Month <span className="text-[#bebdbf]">Account</span>
          </p>
        </div>

        <div className="flex items-center ">
          <h1 className={` ${styles.heading2} max-xs:text-[30px] leading-[100px] max-md:leading-[50px] relative`}>
            The Next <br />
            <span className="text-gradient">Generation </span>
            <br />
            Payment Method
          </h1>
          <GetStarted />
        </div>
        <p className={`${styles.paragraph}  max-ss:text-[15px] max-w-[470px]`}>
          Our team of experts use a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
        </p>

      </div>

      <div className={` w-2/5 max-md:my-28 max-md:w-full flex-col`}>
        <img src={robot} alt="" className="object-cover" />
      </div>



    </section >
  )
}

export default Hero