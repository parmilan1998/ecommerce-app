import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeroSection from '../../components/HeroSection'
import { Outlet } from 'react-router-dom'
import CarouselSection from '../../components/CarouselSection'
import Service from '../../components/Service'
import Reviews from '../../components/Reviews'

const HomeScreen = () => {
  return (
    <>
      <CarouselSection />
      <Service />
      <Reviews/>
      {/* <HeroSection /> */}
    </>
  )
}

export default HomeScreen
