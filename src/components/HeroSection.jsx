import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <section className='relative opacity-85 bg-[url(https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat'>
        {/* <div className='absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div> */}

        <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'></div>
      </section>
      <div
        className='text-center opacity-80 lg:absolute lg:w-[630px] lg:h-[306px] sm:w-full bg-darkColor pl-5 py-10 pr-8 gap-10 top-80 left-20'
        style={{
          background:
            'linear-gradient(256.73deg, #1CBDDD 27.86%, #4DCA79 100%)',
        }}
      >
        <h1 className='md:text-5xl sm:text-4xl font-bold text-white lg:leading-[48px] sm:leading-[36px] font-inter capitalize text-start'>
          Empowering Your Tech Dreams, One Device at a Time - No Nonsense, Just
          Results.
        </h1>
        <button className='text-white text-sm font-inter px-4 py-2.5 mt-4 rounded-[4px] flex justify-start uppercase leading-4 bg-secondaryColor'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default HeroSection
