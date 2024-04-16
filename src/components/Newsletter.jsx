import React from 'react'
import { LuMessagesSquare } from 'react-icons/lu'

const Newsletter = () => {
  return (
    <div className='py-4 bg-processCyan'>
      <div className='grid lg:grid-cols-2 gird-cols-1 justify-center font-poppins mx-auto max-w-screen-xl px-4 py-6 sm:px-10 lg:px-8'>
        <dir className='flex md:flex-row flex-col justify-center items-center gap-5'>
          <div>
            <LuMessagesSquare size={130} className=' text-gray-300'/>
          </div>
          <div className=' space-y-4'>
            <h1 className='text-2xl text-white font-medium'>
              Sign Up for Newsletter
            </h1>
            <p className='text-base leading-7 text-neutral-200'>
              Stay updated with our latest news and updates! Subscribe to our
              newsletter for exclusive content and special offers.
            </p>
          </div>
        </dir>
        <div className='flex justify-center items-center'>
          <div className='join'>
            <input
              type='text'
              placeholder='Enter your email here'
              className='input input-bordered join-item focus:outline-none'
            />
            <button className='bg-neutral-500 join-item px-2 text-white hover:bg-neutral-600 tracking-wide uppercase'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
