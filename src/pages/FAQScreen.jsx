/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const FAQScreen = () => {
  return (
    <div className='font-poppins mx-auto max-w-screen-lg px-4 md:my-20 my-6 py-4 sm:px-10 lg:px-8'>
      <div className='space-y-4'>
        <details
          className='group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden'
          open
        >
          <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
            <h2 className='font-medium'>
              Do you offer a warranty on your mobile devices?
            </h2>

            <span className='relative size-5 shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 size-5 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 size-5 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>

          <p className='mt-4 leading-relaxed text-gray-700'>
            Yes, all our mobile devices come with a standard manufacturer's
            warranty, and we also offer extended warranty options for extra
            peace of mind.
          </p>
        </details>
        <details className='group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden'>
          <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
            <h2 className='font-medium'>
              Do you have a variety of brands and models available?
            </h2>

            <span className='relative size-5 shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>

          <p className='mt-4 leading-relaxed text-gray-700'>
            Absolutely! We carry a wide range of top brands and the latest
            models to suit every preference and budget.
          </p>
        </details>
        <details className='group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden'>
          <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
            <h2 className='font-medium'>
              Can I trade in my old device for a discount on a new one?
            </h2>

            <span className='relative size-5 shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>

          <p className='mt-4 leading-relaxed text-gray-700'>
            Certainly! We offer competitive trade-in options for your old
            devices to help you save on your new purchase.
          </p>
        </details>
        <details className='group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden'>
          <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
            <h2 className='font-medium'>
              Do you provide assistance with setting up new devices?
            </h2>

            <span className='relative size-5 shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>

          <p className='mt-4 leading-relaxed text-gray-700'>
            Of course! Our knowledgeable staff is here to assist you with
            setting up your new device and transferring data from your old one.
          </p>
        </details>
        <details className='group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden'>
          <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
            <h2 className='font-medium'>
              Are your prices competitive compared to other stores?
            </h2>

            <span className='relative size-5 shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>

          <p className='mt-4 leading-relaxed text-gray-700'>
            We strive to offer the best value for our customers, with
            competitive pricing and special promotions to ensure you get the
            best deal.
          </p>
        </details>
        <details className='group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden'>
          <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
            <h2 className='font-medium'>
              Do you offer financing options for expensive devices?
            </h2>

            <span className='relative size-5 shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>

          <p className='mt-4 leading-relaxed text-gray-700'>
            Yes, we have flexible financing options available to help you afford
            the device you want with convenient payment plans.
          </p>
        </details>
      </div>
    </div>
  )
}

export default FAQScreen
