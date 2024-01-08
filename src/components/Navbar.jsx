import React from 'react'
import styles from '../styles'
import { close, logo, menu } from '../assets'
import { navLinks } from '../website data'



const Navbar = () => {
  const [menuToggle, setMenuToggle] = React.useState(true)
  return (
    <nav
      className={`text-white flex items-center justify-between h-[15vh]  my-4 navbar`}
    >
      <div >
        <img
          src={logo}
          alt=""
          className="sm:w-[10vw] w-[25vw]"
        />

      </div>
      <div className='hidden items-center sm:flex gap-[3vw]'>
        {navLinks.map(link => (
          <a href={`#${link.id}`} key={link.id} className='text-white font-poppins'>
            {link.title}
          </a>
        ))}
      </div>

      <div className='flex sm:hidden'>
        <img src={menuToggle ? menu : close}
          alt=""
          className='w-[9vw] cursor-pointer xs:w-[5vw]'
          onClick={() => setMenuToggle(prev => !prev)} />

        <div className={`${!menuToggle ? 'flex' : 'hidden'} flex-col min-w-[120px] bg-black-gradient absolute top-20 items-center gap-9 p-11 right-2 rounded-xl sidebar`}>
          {navLinks.map(link => (
            <a href={`#${link.id}`} key={link.id} className='text-white font-poppins'>
              {link.title}
            </a>
          ))}
        </div>

      </div>
    </nav>
  )
}

export default Navbar