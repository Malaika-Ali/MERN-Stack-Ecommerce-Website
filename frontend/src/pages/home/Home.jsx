import React, { useEffect } from 'react'
import LandinPageHero from './LandinPageHero'
import CategorySection from './categories section/CategorySection'
import PromotionalBanner from './PromotionalBanner'
import CustomerReviews from './CustomerReviews'
import ProductsSection from './ProductsSection'

const Home = () => {

  useEffect(() => {
    document.title = "M."
  }, [])

  return (
    <>
      <LandinPageHero />
      <CategorySection />
      <ProductsSection />
      <CustomerReviews />
      <PromotionalBanner />
    </>
  )
}

export default Home
