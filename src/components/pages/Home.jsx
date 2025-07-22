import React from 'react'
import Header from '../layouts/Header'
import RootLayout from '../layouts/RootLayout'
import Banner from '../layouts/Banner'
import Information from '../layouts/Information'
import ProductsPart from '../layouts/ProductsPart'
import BestSelling from '../layouts/BestSelling'
import Phone from '../layouts/Phone'
import SpecialOffers from '../layouts/SpecialOffers'

const Home = () => {
  return (
    <>
    <Banner/>
    <Information/>
    <ProductsPart/>
    <BestSelling/>
    <Phone/>
    <SpecialOffers/>
    </>
  )
}

export default Home
