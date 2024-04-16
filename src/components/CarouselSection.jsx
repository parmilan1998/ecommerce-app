import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarouselSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
  }
  return (
    <div className='font-poppins mx-auto max-w-screen-xl px-4 py-6 sm:px-10 lg:px-8'>
      <Slider {...settings}>
        <div>
          <img
            src='/mobile3.jpg'
            alt='Mobile'
            className='lg:h-[500px] md:h-96 w-full object-cover sm:h-36'
          />
        </div>
        <div>
          <img
            src='/mobile2.jpg'
            alt='Mobile'
            className='lg:h-[500px] w-full object-cover sm:h-36'
          />
        </div>
        <div>
          <img
            src='/mobile1.jpg'
            alt='Mobile'
            className='lg:h-[500px] w-full object-cover sm:h-36'
          />
        </div>
        <div>
          <img
            src='/mobile4.jpg'
            alt='Mobile'
            className='lg:h-[500px] w-full object-cover sm:h-36'
          />
        </div>
        <div>
          <img
            src='/mobile5.jpg'
            alt='Mobile'
            className='lg:h-[500px] w-full object-cover sm:h-36'
          />
        </div>
        <div>
          <img
            src='/mobile3.jpg'
            alt='Mobile'
            className='lg:h-[500px] w-full object-cover sm:h-36'
          />
        </div>
      </Slider>
    </div>
  )
}

export default CarouselSection
