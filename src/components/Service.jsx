import React from 'react'
import { MdOutlinePayment } from 'react-icons/md'
import { BiSolidMessageRoundedDetail } from 'react-icons/bi'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaStar } from 'react-icons/fa'

const Service = () => {
  return (
    <div className='font-poppins mx-auto max-w-screen-xl px-4 lg:pt-16 py-8 sm:px-10 lg:px-8'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:gap-8'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col relative w-64 text-center px-12 py-6 space-y-1 border border-neutral-200 rounded-2xl'>
            <FaStar
              size={32}
              className='absolute -top-5 left-[110px] text-indigo-400'
            />
            <h2 className='text-lg font-medium'>Best Quality</h2>
            <p className='text-sm text-neutral-400'>Brand</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col relative w-64 text-center px-12 py-6 space-y-1 border border-neutral-200 rounded-2xl'>
            <TbTruckDelivery
              size={32}
              className='absolute -top-5 left-[110px] text-indigo-400'
            />
            <h2 className='text-lg font-medium'>Free Delivery</h2>
            <p className='text-sm text-neutral-400'>from $40</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col relative w-64 text-center px-12 py-6 space-y-1 border border-neutral-200 rounded-2xl'>
            <MdOutlinePayment
              size={32}
              className='absolute -top-5 left-[110px] text-indigo-400'
            />
            <h2 className='text-lg font-medium'>Payment</h2>
            <p className='text-sm text-neutral-400'>Secure</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col relative w-64 text-center px-12 py-6 space-y-1 border border-neutral-200 rounded-2xl'>
            <BiSolidMessageRoundedDetail
              size={32}
              className='absolute -top-5 left-[110px] text-indigo-400'
            />
            <h2 className='text-lg font-medium'>Feedback</h2>
            <p className='text-sm text-neutral-400'>Real Data</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
