import React, { useState } from 'react'
import { RiMenuUnfoldFill } from 'react-icons/ri'
import { CgLogIn } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Announcement from './Announcement'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Announcement />
      <div className='flex justify-between items-center font-poppins mx-auto max-w-screen-xl px-4 py-4 sm:px-10 lg:px-4'>
        <div>
          <Link to='/'>
            <h1 className='text-3xl font-semibold'>
              <span className=' text-jungleGreen'>Alexa</span>
              <span className=' text-processCyan'>Mobile</span>
            </h1>
          </Link>
        </div>
        <div className='md:block hidden'>
          <ul className='flex flex-row gap-6'>
            <li className='text-base font-medium hover:text-processCyan duration-200 ease-in text-gray-500'>
              <Link to='/shop'>Shop</Link>
            </li>
            <li className='text-base font-medium hover:text-processCyan duration-200 ease-in text-gray-500'>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li className='text-base font-medium hover:text-processCyan duration-200 ease-in text-gray-500'>
              <Link to='/about'>About Us</Link>
            </li>
            <li className='text-base font-medium hover:text-processCyan duration-200 ease-in text-gray-500'>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li className='text-base font-medium hover:text-processCyan duration-200 ease-in text-gray-500'>
              <Link to='/cart'>Cart</Link>
            </li>
          </ul>
        </div>
        <div className='md:block hidden'>
          <Link to='/login'>
            <button className='text-lg font-medium font-tilt flex justify-center items-center gap-2 px-4 py-1 text-white bg-indigo-600 rounded-md'>
              Login
              <CgLogIn />
            </button>
          </Link>
        </div>
        <div className='md:hidden block'>
          <button>
            {!isOpen ? (
              <RiMenuUnfoldFill size={32} onClick={toggleMenu} />
            ) : null}
          </button>
        </div>
        {isOpen && (
          <div className='md:hidden w-[90%] absolute top-0 z-40 left-0 right-0 px-4 bg-white h-[812px]'>
            <ul>
              <li className='px-2 py-4 text-xl font-medium text-neutral-500'>
                <div className='flex justify-between'>
                  <Link to='/shop'>Shop</Link>
                  {isOpen ? (
                    <IoClose size={32} onClick={toggleMenu} className='' />
                  ) : null}
                </div>
              </li>
              <li className='px-2 py-4 text-xl font-medium text-neutral-500'>
                <Link to='/faq'>FAQ</Link>
              </li>
              <li className='px-2 py-4 text-xl font-medium text-neutral-500'>
                <Link to='/about'>About Us</Link>
              </li>
              <li className='px-2 py-4 text-xl font-medium text-neutral-500'>
                <Link to='/contact'>Contact Us</Link>
              </li>
              <li className='px-2 py-4 text-xl font-medium text-neutral-500'>
                <Link to='cart'>Cart</Link>
              </li>
              <li className='px-2 py-4 text-xl font-medium text-neutral-500'>
                <button>Login</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
